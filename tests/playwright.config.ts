import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config(); // Loading environment variables from .env

export default defineConfig({
  timeout: 30_000, // Таймаут для тестов (30 сек)
  reporter: "html", // HTML-отчеты
  use: {
    headless: false,
    viewport: { width: 1280, height: 720 },
    baseURL: process.env.BASE_URL || 'https://animated-gingersnap-8cf7f2.netlify.app/', // Using .env
    video: 'retain-on-failure', // The video is saved only when the test fails.
    screenshot: 'only-on-failure', // Screenshots only when fail
    trace: 'on-first-retry', // Enable tracing on first fail
  },
});
