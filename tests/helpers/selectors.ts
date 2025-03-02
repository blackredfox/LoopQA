export const selectors = {
  // Логин
  usernameInput: { role: "textbox", name: "Username" } as const,
  passwordInput: { role: "textbox", name: "Password" } as const,
  signInButton: { role: "button", name: "Sign in" } as const,
  mainHeading: { role: "banner" } as const,

  // Вкладки
  webAppTab: { role: "button", name: "Web Application" } as const,
  mobileAppTab: { role: "button", name: "Mobile Application" } as const,

  // Колонки и задачи
  column: (name: string) => ({ role: "heading", name } as const),
  task: (title: string) => ({ role: "heading", name: title } as const),
  tag: (tag: string) => ({ role: "text", name: tag } as const),
} as const;
