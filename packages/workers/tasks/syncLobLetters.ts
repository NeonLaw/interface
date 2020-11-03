const syncLobLetters = async (payload, helpers) => {

  const Lob = require('lob')(process.env.LOB_API_KEY);

  // const oneDayAgo = new Date().toISOString();
  // await Lob.letters.list({ date_created: oneDayAgo });

  const letters = await Lob.letters.list();

  for (const letter of letters) {
    await helpers.query(
      `SELECT find_or_create_letter_by_lob_identifier(${letter.id});`
    );
  }

  helpers.logger.info(`Hi ${name}`);
};

export default syncLobLetters;