import glob from 'glob';
import path from 'path';
import type { Plugin } from 'rollup';

// Watch any arbitrary project files for changes, such as static assets
// (source:
// <https://github.com/rollup/rollup/issues/3414#issuecomment-751699335>)
function watchGlobs(globs: string | readonly string[]): Plugin {
  return {
    name: 'rollup-plugin-watch-globs',
    buildStart() {
      const items = Array.isArray(globs) ? globs : [globs];
      items.forEach((item) => {
        glob.sync(path.resolve(item)).forEach((filename) => {
          this.addWatchFile(filename);
        });
      });
    },
  };
}

export default watchGlobs;
