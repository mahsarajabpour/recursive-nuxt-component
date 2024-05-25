const prettierConfig = require("./.prettierrc.json");

module.exports = {
  env: {
    node: true,
  },
  extends: ["eslint:recommended", "plugin:vue/vue3-recommended", "prettier"],
  rules: {
    "vue/no-unused-vars": "error",
    "vue/comment-directive": "error",
    "vue/no-v-html": 0,
    "vue/no-v-for-template-key-on-child": 0,
    "vue/multi-word-component-names": "warn",
    "vue/valid-v-slot": 0,
    "vue/no-deprecated-slot-attribute": 0,
    "prettier-vue/prettier": ["error", prettierConfig],
    "vue/no-deprecated-v-bind-sync": 0,
    "vue/no-deprecated-destroyed-lifecycle": 0,
    "vue/component-definition-name-casing": 0,
    "vue/no-template-shadow": 0,
    "vuetify/no-deprecated-components": 0,
    "vue/attribute-hyphenation": [
      "error",
      "always",

      {
        ignore: ["autoComplete"],
      },
    ],
    "vue/valid-v-for": 0,
  },
};
