module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/vue3-essential",
<<<<<<< HEAD
    "eslint:recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    "requireConfigFile": false,
=======
    /*"eslint:recommended",
    "plugin:prettier/recommended",
    */
  ],
  parserOptions: {
    requireConfigFile: false,
>>>>>>> main
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
  },
};
