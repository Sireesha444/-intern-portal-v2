import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { configDefaults } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // 👈 enables expect, describe, etc.
    environment: 'jsdom', // 👈 simulates browser environment
    setupFiles: './src/setupTests.ts', // 👈 optional, for custom setup
    exclude: [...configDefaults.exclude, 'e2e/*'], // optional
  },
});
