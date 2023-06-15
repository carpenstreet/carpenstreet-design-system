import tsconfigPaths from 'rollup-plugin-tsconfig-paths';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import esbuild from 'rollup-plugin-esbuild';
import dts from 'rollup-plugin-dts'
import {uglify} from "rollup-plugin-uglify";

const extensions = [ 'js', 'jsx', 'ts', 'tsx', 'mjs' ];

const config = [
    {
        external: [ /node_modules/ ],
        input: './src/index.ts',
        output: [
            {
                dir: './dist',
                format: 'es',
                preserveModules: true,
                preserveModulesRoot: 'src'
            },
        ],
        plugins: [
            tsconfigPaths(),
            nodeResolve({ extensions }),
            peerDepsExternal(),
            esbuild(),
            uglify(),
        ]
    },{
        external: [ /node_modules/ ],
        input: './src/index.ts',
        output: [
            {
                dir: './dist',
                format: 'es',
                preserveModules: true,
                preserveModulesRoot: 'src'
            },
        ],
        plugins: [
            tsconfigPaths(),
            dts({respectExternal: false}),
        ]
    },
];
export default config;
