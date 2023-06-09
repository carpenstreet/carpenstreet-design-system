import tsconfigPaths from 'rollup-plugin-tsconfig-paths';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import esbuild from 'rollup-plugin-esbuild';
import dts from 'rollup-plugin-dts'
import modify from 'rollup-plugin-modify';
import { terser } from 'rollup-plugin-terser';

const extensions = [ 'js', 'jsx', 'ts', 'tsx', 'mjs' ];

const minifierPlugin = terser({
    compress: {
        passes: 10,
        keep_infinity: true,
        pure_getters: true,
    },
    format: {
        wrap_func_args: false,
        preserve_annotations: true,
    },
});

const config = [
    {
        external: [ /node_modules/ ],
        input: './src/index.ts',
        output: [
            {
                dir: './dist/',
                format: 'esm',
                preserveModules: true,
                preserveModulesRoot: 'src'
            },
        ],
        plugins: [
            tsconfigPaths(),
            nodeResolve({ extensions }),
            peerDepsExternal(),
            esbuild(),
            minifierPlugin,
        ]
    },
    {
        external: [ /node_modules/ ],
        input: './src/index.ts',
        output: [
            {
                dir: './dist/',
                format: 'esm',
                // preserveModules: true,
                // preserveModulesRoot: 'src'
            },
        ],
        plugins: [
            tsconfigPaths(),
            nodeResolve({ extensions }),
            peerDepsExternal(),
            esbuild(),
            minifierPlugin,
        ]
    },
    {
        external: [ /node_modules/ ],
        input: './src/index.ts',
        output: [
            {
                dir: './dist',
                entryFileNames: '[name].d.ts',
                format: 'esm',
                preserveModules: true,
                preserveModulesRoot: 'src'
            },
        ],
        plugins: [
            tsconfigPaths(),
            dts({respectExternal: false}),
        ]
    },
    {
        external: [ /node_modules/ ],
        input: './src/index.ts',
        output: [
            {
                dir: './dist',
                entryFileNames: '[name].d.ts',
                format: 'esm',
                // preserveModules: true,
                // preserveModulesRoot: 'src'
            },
        ],
        plugins: [
            tsconfigPaths(),
            dts({respectExternal: false}),
        ]
    },
];
export default config;
