import js from "@eslint/js";
import globals from "globals";
import eslintConfigPrettier from "eslint-config-prettier/flat";

export default [
    { ignores: ["node_modules/", "dist/", "coverage/"] },
    js.configs.recommended,
    {
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module", // "commonjs", якщо в домашках require()
            globals: { ...globals.node, ...globals.browser },
        },
        rules: {
            "no-unused-vars": "warn",
            "no-console": "off",
        },
    },
    eslintConfigPrettier,
];