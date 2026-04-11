import { defineConfig } from 'tsup';

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    'authentication/index': 'src/authentication/index.ts',
    'forms/index': 'src/forms/index.ts',
    'submission/index': 'src/submission/index.ts',
    'tracking/index': 'src/tracking/index.ts',
    'payment/index': 'src/payment/index.ts',
  },
  format: ['cjs', 'esm'],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  external: ['react', 'react-dom', '@ux4g/react-core'],
  treeshake: true,
});
