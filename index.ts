import glob from 'glob';
import path from 'path';
import { PluginHooks } from 'rollup';

// Watch any arbitrary project files for changes, such as static assets
// (source:
// <https://github.com/rollup/rollup/issues/3414#issuecomment-751699335>)
function watchGlobs(globs: string[]): Partial<PluginHooks> {
  return {
    buildStart() {
      for (const item of globs) {
        glob.sync(path.resolve(item)).forEach((filename) => {
          this.addWatchFile(filename);
        });
      }
    }
  }
}

export default watchGlobs;
