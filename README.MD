# Static Website Template

An awesome template to create beautiful website. The template does not contains behaviour action handling using JavaScript frameworks.

A blog post explaining the process can be found on [wweb.dev](https://wweb.dev/blog/how-to-create-static-website-npm-scripts)

It uses:
- SCSS with linting and autoprefixer
- JavaScript with webpack using babel and linting
- minifying images
- html partials and minify with post-html
- browser-sync

The compiled files will go to the directory "/dist"

- from `src/scss` to `dist/index.css`
- from `src/js` to `dist/bundle.js`
- from `src/views` to `dist/`
- from `src/images` to `dist/images`

## Getting Started
Please make sure you have nodeJs installed on your system for using the npm command
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


## License
[MIT](https://choosealicense.com/licenses/mit/)


---
Note: You can add your own components based on your project requirement
*created by [Vincent Will](https://wweb.dev/)*
