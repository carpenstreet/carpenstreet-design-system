import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import preserveDirectives from 'rollup-preserve-directives';
import commonjs from '@rollup/plugin-commonjs';

const config = [
  {
    // external: [ /node_modules/ ],
    input: 'src/index.ts',
    output: [
      {
        dir: './dist/',
        format: 'esm',
        preserveModules: true,
        preserveModulesRoot: 'src',
      },
    ],
    plugins: [typescript({ compilerOptions: { declaration: true, declarationDir: './dist/types' } }), nodeResolve({}), preserveDirectives(), commonjs()],
  },
];
export default config;
