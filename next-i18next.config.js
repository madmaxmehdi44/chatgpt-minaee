module.exports = {
  i18n: {
    defaultLocale: "fa",
    locales: [
      "bn",
      "de",
      "en",
      "es",
      "fr",
      "fa",
      "he",
      "id",
      "it",
      "ja",
      "ko",
      "pt",
      "ru",
      "sv",
      "te",
      "vi",
      "zh",
      "ar",
    ],
  },
  localePath:
    typeof window === 'undefined'
      ? require('path').resolve('./public/locales')
      : '/public/locales',
};
