module.exports = {
  '**/*.+(js|ts|tsx|graphql|yml|yaml|vue)': [
    'eslint --fix --max-warnings=0 --no-ignore',
    'prettier --write',
  ],
  '**/*.+(css|sass|less|scss)': [
    'stylelint --fix --max-warnings=0',
    'prettier --write',
  ],
  '**/*.+(md|json)': 'prettier --write',
  '**/(*test).ts?(x)': 'jest',
};
