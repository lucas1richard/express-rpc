import resolve from '@rollup/plugin-node-resolve';
import pkg from './package.json';

export default {
  external: Object.keys(pkg.dependencies),
  input: 'src/index.js',
  output: {
    dir: 'lib',
    format: 'cjs',
    preserveModules: true,
    preserveModulesRoot: 'src',
  },
  plugins: [resolve()],
};