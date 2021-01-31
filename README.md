

# react js offline


## steps

### 1. search for unpkg.com for react file / pwede din cdn, di nga lang available kapag offline
```json
<script src="./scripts/react.production.min.js"></script>
<script src="./scripts/react-dom.production.min.js"></script>
<script src="./scripts/index.js"></script>
```

### 2. setup npm and babel
```json
npm init

npm install @babel/cli @babel/core @babel/preset-env @babel/preset-react --save-dev
```

at .babelrc:
```json
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```

setting at package.json:
```json
"scripts": {
    "build": "babel src/app.js --out-file public/scripts/index.js --watch"
  },
```

