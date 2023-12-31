module.exports = {
    root: true, // 指定了root为true，eslint只检查当前项目目录
    env: {
      // 提供预设的全局变量，避免eslint检查报错，例如window
      browser: true,
      node: true,
      es6: true,
    },
    extends: [
      // 共享推荐的配置风格
      "airbnb",
      "airbnb-typescript",
      "airbnb/hooks",
      "plugin:@typescript-eslint/recommended",
      "plugin:prettier/recommended",
    ],
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint", "react", "react-hooks", "prettier"],
    parserOptions: {
      ecmaVersion: "6", //TODO 设为6
      sourceType: "module", // 指定代码为 ECMAScript 模块
      ecmaFeatures: {
        impliedStrict: true, //严格模式开启
        jsx: true, // 启用jsx
      },
      project: "./tsconfig.json",
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "prettier/prettier": [
        "error",
        {
          singleAttributePerLine: false,
          endOfLine: "auto",
        },
      ],
    },
  };
  