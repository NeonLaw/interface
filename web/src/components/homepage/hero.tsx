/* eslint-disable */
// @ts-nocheck
/* eslint-enable */
import { Box, Heading, Text } from '@chakra-ui/react';
import { colors, gutters, sizes } from '../../styles/neonLaw';
import { Button } from '../button';
import { Container } from '../container';
import React from 'react';
import { theme } from '@chakra-ui/react';
import { useIntl } from 'react-intl';
import { useRouter } from 'next/router';

export const Hero = () => {
  const intl = useIntl();
  const router = useRouter();

  return (
    <Box
      as="section"
      display="flex"
      alignItems="center"
      maxHeight="1200px"
      minHeight="600px"
      height="100vh"
      color={colors.text.dark}
      backgroundSize="cover"
      backgroundPosition="left"
      backgroundAttachment="fixed"
    >
      <Container>
        <Box maxWidth={['400px', '500px', sizes.textContainerSmall]}>
          <Heading
            as="h1"
            fontSize={[
              theme.fontSizes['xl1'],
              theme.fontSizes['xl0'],
              theme.fontSizes.xl,
            ]}
            fontWeight="400"
          >
            {intl.formatMessage({ id: 'banner.title' })}
          </Heading>
          <Text
            margin={`${gutters.xSmall} 0 ${gutters.small}`}
            color={colors.text.darkLight}
          >
            {intl.formatMessage({ id: 'banner.text' })}
          </Text>
          <Button
            flash={true}
            onClick={() => router.push('/contact')}
            bg={colors.primaryColor900}
            _hover={{ bg: colors.primaryColor800 }}
          >
            {intl.formatMessage({ id: 'auth.sign_up' })}
          </Button>
        </Box>
      </Container>
    </Box>
  );
};
