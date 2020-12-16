module.exports = {
    ignorePatterns: ['node_modules', 'dist'],
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
    ],
    env: {
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    rules: {
        'semi': 'off',
        'quotes': 'off',
        'object-curly-spacing': [2, 'never'],

        // @typescript-eslint
        '@typescript-eslint/no-empty-interface': 0,
        '@typescript-eslint/semi': [2],
        '@typescript-eslint/quotes': [2, 'single']
    }
};
