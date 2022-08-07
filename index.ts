import glob from 'glob';
import path from 'path';
import { PluginHooks } from 'rollup';

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
