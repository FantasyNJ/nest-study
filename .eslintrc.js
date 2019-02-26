module.exports = {
  "env": {
    "node": true,
  },
  "extends": [
    "standard",
    // "eslint:recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "parserOptions": {
    "project": "./tsconfig.json"
  },
  "rules": {
    "indent": [
      "error",
      2,
    ],
    "linebreak-style": [
      "error",
      "unix",
    ],
    "quotes": [
      "error",
      "single",
    ],
    "semi": [
      "error",
      "never",
    ],
    "no-console": 0,
    "no-useless-constructor": 0,
    "@typescript-eslint/indent": ["error", 2]
  },
  "parser": "@typescript-eslint/parser",
  "plugins": ["@typescript-eslint"],
};
