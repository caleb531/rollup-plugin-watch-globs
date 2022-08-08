# rollup-plugin-watch-globs

*Copyright 2022, Caleb Evans*  
*Released under the MIT License*

By default, the `rollup -w` command in Rollup only watches for changes to files
in the module graph of your input file (namely, JS/TS files). However, you may
have other static assets (like stylesheets or static HTML files) in your
project that should recompile your input when changed.

This plugin solves that problem by allowing you to watch any arbitrary file
globs that should trigger Rollup's watch mechanism to recompile.

## Setup

First, install it in your project like so:

```sh
npm install --save-dev rollup-plugin-watch-globs
```

Then, you can import it in your `rollup.config.js` and specify it in your
`plugins` array. The `watchGlobs` function accepts an array of glob patterns to
watch.

```js
import watchGlobs from 'rollup-plugin-watch-globs';

export default {
  ...
  plugins: [
    watchGlobs([
      'public/**/*.*',
      'src/styles/*.scss'
    ]),
    // all your other plugins here...
  ]
}
```

This can be useful in conjunction with plugins like
[rollup-plugin-copy][copy-plugin] to watch for changes the same static files
that you might copy to your build directory.

[copy-plugin]: https://www.npmjs.com/package/rollup-plugin-copy

## Attribution

This project was inspired by [code written by @thekip][original-code] for
watching arbitrary file globs in Rollup.

[original-code]: https://github.com/rollup/rollup/issues/3414#issuecomment-751699335
