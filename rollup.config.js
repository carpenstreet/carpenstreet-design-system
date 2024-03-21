import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

// import preserveDirectives from 'rollup-preserve-directives';
import commonjs from '@rollup/plugin-commonjs';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
// import tsConfigPaths from 'rollup-plugin-tsconfig-paths';

const config = [
  {
    external: [/node_modules/],
    input: 'src/index.ts',
    output: [
      {
        dir: './dist/',
        format: 'esm',
        preserveModules: true,
        preserveModulesRoot: 'src',
      },
    ],
    plugins: [
      peerDepsExternal(),
      nodeResolve(),
      commonjs(),
      typescript({
        compilerOptions: {
          declaration: false,
        },
      }),
    ],
  },
];
export default config;
