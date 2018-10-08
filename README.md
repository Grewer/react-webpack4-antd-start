# react-webpack4-antd-start


## doing


## dependencies

+ webpack@4.20.2
+ webpack-dev-server@3.1.4
+ fork-ts-checker-webpack-plugin@0.4.9
+ html-webpack-plugin@4.0.0-beta.1
+ react-dev-utils@6.0.4
+ ts-loader@4.4.2
+ mini-css-extract-plugin@0.4.3
+ awesome-typescript-loader@5.2.1
+ less-loader@4.1.0
+ babel-plugin-import@1.9.1
+ typings-for-css-modules-loader@1.7.0
+ less@3.8.1
+ antd@3.10.0



## 流程

### 创建项目
```
create-react-app antd-demo-ts --scripts-version=react-scripts-ts
```

### eject
添加 git 后 使用 eject 命令


### 一键安装新依赖

```bash
npm i -S webpack@4.20.2 webpack-dev-server@3.1.4 fork-ts-checker-webpack-plugin@0.4.9 html-webpack-plugin@4.0.0-beta.1 react-dev-utils@6.0.4 ts-loader@4.4.2 mini-css-extract-plugin@0.4.3 awesome-typescript-loader@5.2.1 less-loader@4.1.0 babel-plugin-import@1.9.1 typings-for-css-modules-loader@1.7.0 less@3.8.1 antd@3.10.0
```

将此项目的如下文件复制到项目中即可启动
- config/webpack.config.dev.js
- config/webpack.config.prod.js
- config/theme.js
- src/icons.ts
- package.json
- tsconfig.json
- tslint.json