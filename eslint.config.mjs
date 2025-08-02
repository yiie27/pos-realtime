import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];

eslintConfig.push({
  'react-hooks/exhaustive-deps': 'off', // Disable exhaustive-deps rule for React hooks
  'react/jsx-key': 'off', // Disable jsx-key rule for React
  '@typescript-eslint/no-explicit-any': 'off', // Disable explicit-any rule for TypeScript
  '@typescript-eslint/no-unused-vars': 'off', // Disable unused-vars rule for TypeScript
})

export default eslintConfig;
