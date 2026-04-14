import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/app/react-core-package/src/index.ts'],
  outDir: 'src/app/react-core-package/dist',
  format: ['cjs', 'esm'],
  dts: {
    resolve: true,
  },
  clean: true,
  external: ['react', 'react-dom', 'clsx'],
  esbuildOptions(options) {
    options.jsx = 'automatic';
  },
  treeshake: true,
  sourcemap: false,
  tsconfig: 'src/app/react-core-package/tsconfig.json',
});
