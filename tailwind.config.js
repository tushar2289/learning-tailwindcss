module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    enabled: false,
    content: ['./src/**/*.html', './src/**/*.jsx', './src/**/*.tsx'],
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
};
