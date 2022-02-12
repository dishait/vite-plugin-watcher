# vite-plugin-watcher

`vite` 的文件监听插件

<br />

## 动机 🐇

在开发过程中，我们可能需要对 `vite` 项目内的进行一些文件监听。但 `vite` 原生用户配置的文件监听无法进行细粒度的文件监听。

<br />

## 使用 🦕

### 安装

```shell
pnpm i vite-plugin-watcher -D

// 或者 npm i vite-plugin-watcher -D
// 或者 yarn add vite-plugin-watcher -D
```

<br />

### 配置

接收一个回调函数，该函数第一个形参  `w` 为 `vite` 内部暴露出来的文件 `watcher`.  

具体 `api` 可见 👉 [chokidar#api](https://github.com/paulmillr/chokidar#api)

```ts
// vite.config.js 或者 vite.config.ts

import { defineConfig } from 'vite'
import Watcher from 'vite-plugin-watcher'

export default defineConfig({
    plugins: [
        Watcher(w => {
           
        })
    ]
})
```

<br />
<br />

## 例子

### 监听目录下的文件添加

假设要监听 `src` 下 `foo` 目录和 `bar` 目录的文件添加。

```ts
import { defineConfig } from 'vite'
import Watcher from 'vite-plugin-watcher'

export default defineConfig({
    plugins: [
        Watcher(w => {
           // 添加文件进入监听器
           w.add(['./src/demo', './src/foo'])
           
           // 监听文件添加
           w.on('add', path => {
               console.log(path) // 此时文件添加时将输出对应路径
           })
        })
    ]
})
```

<br />
<br />

## License

Made with markthree

Published under [MIT License](./LICENSE).

<br />