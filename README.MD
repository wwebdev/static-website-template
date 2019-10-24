# Static Website Template

This is a template for creating simple static websites without JS frameworks.

It uses:
- SCSS with linting and autoprefixer
- babel to minify and compile Javascript
- minifying images
- html partials and minify with post-html
- browser-sync

The compiled files will go to the directory "/dist"

- from `src/scss` to `dist/css/style.css`
- from `src/js` to `dist/js/main.min.js`
- from `src/views` to `dist/`
- from `src/images` to `dist/images`

## Getting Started

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

## Demo

Integrates smoothly with netlify:

[https://static-website-template.netlify.com/](https://static-website-template.netlify.com/)