/** @type {import("stylelint").Config} */
export default {
  extends: ["stylelint-config-standard", "stylelint-config-recess-order"],
  ignoreFiles: ["dist/**/*.css", "node_modules/**/*.css"],
  rules: {
    "color-hex-length": null,
  },
};
