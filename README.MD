# Static Website template

This is a template for static websites using

- SCSS with linting and autoprefixer
- minify and compile Javascript with babel
- minifying images
- browser-sync
- html partials and minify with post-html

The compiled files will go to the directory "/dist"
- from "src/scss" to "dist/css/style.css"
- from "src/js" to "dist/js/main.min.js"
- from "src/views" to "dist/"

## Setup

1. Install dependencies
```
npm install
```

2. Build resources
```
npm run build
```

3. Watch for changes
```
npm run watch
```