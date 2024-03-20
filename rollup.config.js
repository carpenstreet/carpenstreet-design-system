import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import preserveDirectives from 'rollup-preserve-directives';
import commonjs from '@rollup/plugin-commonjs';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

const config = [
  {
    input: 'src/index.ts',
    output: [
      {
        dir: './dist/',
        format: 'cjs',
        preserveModules: true,
        preserveModulesRoot: 'src',
      },
      {
        dir: './dist/',
        format: 'esm',
        preserveModules: true,
        preserveModulesRoot: 'src',
      },
    ],
    plugins: [peerDepsExternal(), typescript({ compilerOptions: { declaration: true, declarationDir: './dist/types' } }), nodeResolve(), preserveDirectives(), commonjs()],
  },
];
export default config;
