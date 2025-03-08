import stylistic from '@stylistic/eslint-plugin'

export default [
    {
    plugins: {
        '@stylistic': stylistic
    },
    rules: {
        '@stylistic/indent': ['error', 2],
    },
    root: true,
    env: { browser: true, es2020: true },
    }
]