import { nodeResolve } from '@rollup/plugin-node-resolve';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
// import commonjs from '@rollup/plugin-commonjs';
import esbuild from 'rollup-plugin-esbuild';
import tsconfigPaths from 'rollup-plugin-tsconfig-paths';
import dts from 'rollup-plugin-dts'
const extensions = [ 'ts', 'tsx' ];

import pkg from './package.json' assert { type: 'json' };

const config = [
    {
        external: [ /node_modules/ ],
        input: './src/index.ts',
        output: [
            {
                name: pkg.name,
                dir: './dist/cjs',
                format: 'cjs',
                preserveModules: true,
                preserveModulesRoot: 'src'
            },
            {
                name: pkg.name,
                dir: './dist/es',
                format: 'es',
            },
        ],
        plugins: [
            tsconfigPaths(),
            nodeResolve({ extensions }),
            peerDepsExternal(),
            esbuild(),
            dts()
            // typescript(),
        ]
    }
];
export default config;
