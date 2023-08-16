module.exports = {
  root: true,
  // env 定义环境，每个环境都定义了一组预定义的全局变量
  env: {
    node: true,
    jest: true,
  },
  parser: '@typescript-eslint/parser',
  // 指定你想要支持的 JavaScript 语言选项
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  // ESLint 支持使用第三方插件。在使用插件之前，你必须使用 npm 安装它。
  // 在配置文件里配置插件时，可以使用 plugins 关键字来存放插件名字的列表。插件名称可以省略 eslint-plugin- 前缀。
  plugins: ['@typescript-eslint/eslint-plugin', 'prettier'],
  // 配置文件可以被基础配置中的已启用的规则继承
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended', 'prettier'],

  ignorePatterns: ['.eslintrc.js'],

  // 具体校验的规则
  rules: {
    /**
     * !规则的配置方法
     *     "off" 或 0 - 关闭规则
     *     "warn" 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出)
     *     "error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
     *
     * !如果你不想强制遵守规则, 但仍希望 ESLint 报告违反规则的情况，请将严重性设置为 "warn"
     */
    // TypeScript 相关规则
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',

    // ESLint 规则
    eqeqeq: 'off', // 关闭 === 校验
    quotes: ['error', 'double'], // 引号使用
  },
};
