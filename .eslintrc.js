module.exports = {
  env: {
    es2021: true,
    node: true
  },
  extends: 'standard-with-typescript',
  overrides: [
    {
      env: {
        node: true
      },
      files: [
        '.eslintrc.{js,cjs}'
      ],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json'
  },
  rules: {
    semi: ['error', 'always'], // Enforces semicolons at the end of statements
    '@typescript-eslint/semi': ['error', 'always'], // Ensures compatibility with TypeScript rules
    '@typescript-eslint/member-delimiter-style': ['error', {
      multiline: {
        delimiter: 'semi', // Enforce semicolons for multiline
        requireLast: true
      },
      singleline: {
        delimiter: 'semi', // Enforce semicolons for singleline
        requireLast: true
      }
    }]
  },
  ignorePatterns: ['dist/**'] // Add this line to ignore the dist directory
};
