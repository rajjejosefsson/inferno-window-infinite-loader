import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import pkg from './package.json';

const input = './src/index.js';

export default [
  {
    input,
    output: {
      file: pkg.main,
      format: 'cjs',
    },
    plugins: [
      peerDepsExternal(),
      babel({ exclude: 'node_modules/**' }),
      nodeResolve(),
      commonjs(),
    ],
  },

  {
    input,
    output: {
      file: pkg.module,
      format: 'esm',
    },
    plugins: [
      peerDepsExternal(),
      babel({ exclude: 'node_modules/**' }),
      nodeResolve(),
      commonjs(),
    ],
  },
];
