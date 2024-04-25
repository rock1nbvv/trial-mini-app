/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
    root: true,
    env: {
        'node': true
    },
    extends: [
        'plugin:vue/vue3-essential',
        'plugin:vue/vue3-recommended',
        'eslint:recommended',
        '@vue/eslint-config-typescript',
    ],
    parserOptions: {
        ecmaVersion: 'latest'
    },
    rules: {
        'semi': [
            2,
            'always'
        ],
        'quotes': [
            'warn',
            'single'
        ],
        'no-unused-vars': 'warn',
        'no-debugger': 'warn',
        'no-restricted-imports': [
            'error',
            {
                'patterns': [
                    '.*'
                ]
            }
        ],
        'vue/html-quotes': ['error', 'double'],
        'vue/no-multiple-template-root': 'error',
        'vue/no-unused-components': 'off',
        'vue/order-in-components': 'error',
        'vue/html-closing-bracket-newline': 'off',
        'vue/max-attributes-per-line': ['error', {
            'singleline': {
                'max': 1
            },
            'multiline': {
                'max': 1
            }
        }],
        "vue/html-closing-bracket-spacing": ["error", {
            "selfClosingTag": "never"
        }],
        "vue/singleline-html-element-content-newline": "off",
        'indent': [
            'warn',
            4
        ],
        'vue/html-indent': [
            'warn',
            4
        ],
        'vue/script-indent': [
            'warn',
            4
        ],
        'vue/first-attribute-linebreak': 'off'
    },
    overrides: [
        {
            files: ['./*.ts'],
            rules: {
                'no-restricted-imports': 'off',
            },
        }
    ],
};