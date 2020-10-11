provider "google" {
  project = var.project_id
  region  = var.region
  zone    = var.zone

  credentials = var.gcp_credentials
}

provider "google-beta" {
  project = var.project_id
  region  = var.region
  zone    = var.zone

  credentials = var.gcp_credentials
}

module "networking_service_connection" {
  source     = "../modules/networking_service_connection"
  project_id = var.project_id
}

module "egress_routing" {
  source = "../modules/egress_routing"
}

module "postgres" {
  source        = "../modules/postgres"
  zone          = var.zone
  region        = var.region
  project_id    = var.project_id
}

module "container_registry" {
  source     = "../modules/container_registry"
  admin_user = "nick@neonlaw.com"
  project_id = var.project_id
}

module "kubernetes_cluster" {
  source     = "../modules/google_container_cluster"
  region     = var.region
  project_id = var.project_id
}

# THIS DOES NOT WORK FOR GLOBAL ADDRESSES YET
# module "static_ip" {
#   source    = "../modules/static_ip"
#   name   = "neon-law"
# }

module "neon-law-ssl-certificate" {
  source           = "../modules/ssl_certificate"
  certificate_name = "neon-law"
  domain_name      = "www.neonlaw.com"
}

module "law-job-resources-ssl-certificate" {
  source = "../modules/ssl_certificate"
  certificate_name = "law-job-resources"
  domain_name      = "www.lawjobresources.com"
}

module "delete-your-data-ssl-certificate" {
  source = "../modules/ssl_certificate"
  certificate_name = "delete-your-data"
  domain_name      = "www.deleteyourdata.com"
}

module "justice-for-rickie-slaughter-ssl-certificate" {
  source = "../modules/ssl_certificate"
  certificate_name = "justice-for-rickie-slaughter"
  domain_name      = "www.justiceforrickieslaughter.com"
}

module "public-bucket" {
  source = "../modules/public_bucket"
  bucket_name = "${var.project_id}-public-assets"
  allowed_origins = [
    "www.deleteyourdata.com",
    "www.lawjobresources.com",
    "www.neonlaw.com",
    "www.justiceforrickieslaughter.com"
  ]
}

module "upload-bucket" {
  source = "../modules/write_only_bucket"
  bucket_name = "${var.project_id}-uploads"
  allowed_origins = [
    "www.deleteyourdata.com",
    "www.lawjobresources.com",
    "www.neonlaw.com",
    "www.justiceforrickieslaughter.com"
  ]
}

module "user-bucket" {
  source = "../modules/private_bucket"
  bucket_name = "${var.project_id}-user-assets"
  allowed_origins = [
    "www.deleteyourdata.com",
    "www.lawjobresources.com",
    "www.neonlaw.com",
    "www.justiceforrickieslaughter.com"
  ]
}
