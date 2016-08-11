# init-project-web

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

## CDN URL

在 package.json 可設定 CDN_URL 環境變數

在 src/utils 中，有輸出 getCDNUrl 方法來使用
```bash
getCDNUrl(<path>);
```

Use Airbnb's testing utility called [Enzyme](http://airbnb.io/enzyme/).
