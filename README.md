# 大興建材行

## Installation

```bash
npm install
```

## Running Dev Server

```bash
npm run dev
```

### Using Redux DevTools

[Redux Devtools](https://github.com/gaearon/redux-devtools) are enabled by default in development.

- <kbd>CTRL</kbd>+<kbd>H</kbd> Toggle DevTools Dock
- <kbd>CTRL</kbd>+<kbd>Q</kbd> Move DevTools Dock Position
- see [redux-devtools-dock-monitor](https://github.com/gaearon/redux-devtools-dock-monitor) for more detailed information.

## Test

```bash
npm run test:watch
```

Use Airbnb's testing utility called [Enzyme](http://airbnb.io/enzyme/).

## CDN URL

在 package.json 可設定 CDN_URL 環境變數

在 src/utils 中，有輸出 getCDNUrl 方法來使用
```bash
getCDNUrl(<path>);
```

## Responsive Web Design SCSS

在各別元件專用的 style 檔案中，
載入 src/style/util.scss ( 注意檔案位置 )
```bash
@import "../../styles/util";
```

然後使用 @include 語法
```bash
@include rwd('md') {
  position: static;
};
```
