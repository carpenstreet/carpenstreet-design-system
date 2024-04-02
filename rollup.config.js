import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import preserveDirectives from 'rollup-preserve-directives';
import commonjs from '@rollup/plugin-commonjs';
import { dts } from 'rollup-plugin-dts';

const config = [
  {
    external: ['react', 'react-dom'], // 외부 의존성을 설정해준다.
    input: 'src/index.ts',
    output: [
      {
        dir: './dist/',
        format: 'esm',
      },
    ],
    plugins: [
      nodeResolve(), // node_modules에서 모듈을 불러오는데 필요한 plugin
      commonjs(), // CommonJS 모듈을 ES로 변환해주는 plugin
      typescript(), // typescript를 컴파일해주는 plugin
      preserveDirectives(), // 'use client' 등의 지시문을 유지해주는 plugin
    ],
  },
  {
    input: './dist/src/index.d.ts', // 위 config에서 생성된 ./dist/src/index.d.ts 파일을 input으로 설정
    output: [{ file: 'dist/index.d.ts', format: 'esm' }], // ./dist/index.d.ts를 생성
    plugins: [dts()],
  },
  {
    input: './dist/src/shared/settings/theme.d.ts',
    output: [{ file: 'dist/designSystemTheme.d.ts', format: 'esm' }],
    plugins: [dts()],
  },
];
export default config;
