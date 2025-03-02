import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config(); // Загружаем переменные окружения из .env

export default defineConfig({
  timeout: 30_000, // Таймаут для тестов (30 сек)
  reporter: "html", // HTML-отчеты
  use: {
    headless: false,
    viewport: { width: 1280, height: 720 },
    baseURL: process.env.BASE_URL || 'https://animated-gingersnap-8cf7f2.netlify.app/', // Используем .env
    video: 'retain-on-failure', // Видео сохраняется только при падении теста
    screenshot: 'only-on-failure', // Скриншоты только при падении
    trace: 'on-first-retry', // Включить трассировку при первом падении
  },
});
