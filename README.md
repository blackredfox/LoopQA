LoopQA Playwright Test Suite

Project Overview
This project is a Playwright-based test suite designed to validate tasks and their statuses in a demo web application. The test suite follows a data-driven approach, dynamically loading test scenarios from a JSON file to minimize code duplication and improve scalability.

Demo App Details:
- URL: [Animated Gingersnap](https://animated-gingersnap-8cf7f2.netlify.app/)
- Admin Credentials:
  - Email: `admin`
  - Password: `password123`

Features
- Automated login for the admin role.
- Navigation to specific application sections (Web & Mobile Application tabs).
- Verification of tasks within predefined columns and tags.
- Data-driven testing using `testCases.json`.
- Playwright Fixtures for modular and reusable tests.

---

Setup & Installation
Prerequisites
- Install [Node.js](https://nodejs.org/) (LTS recommended)
- Install [Git](https://git-scm.com/)
- Clone the repository:
  ```sh
  git clone https://github.com/blackredfox/LoopQA.git
  cd LoopQA
  ```

Install dependencies
```sh
npm install
```

---

Running Tests
Run all tests
```sh
npx playwright test
```

Run tests in headless mode
```sh
npx playwright test --headless
```

Run a specific test file
```sh
npx playwright test tests/task.spec.ts
```

Generate HTML report
```sh
npx playwright show-report
```

---

Project Structure
```
LoopQA/
│── data/
│   ├── testCases.json      # Test scenarios
│   ├── users.json          # User credentials
│
│── tests/
│   ├── helpers/
│   │   ├── commands.ts     # Common test commands
│   │   ├── fixtures.ts     # Playwright fixtures
│   │   ├── selectors.ts    # Locators for UI elements
│   │   ├── types.ts        # Type definitions
│   ├── login.spec.ts       # Admin login test
│   ├── task.spec.ts        # Task verification tests
│   ├── playwright.config.ts # Playwright configuration
│
│── tsconfig.json           # TypeScript configuration
│── package.json            # Dependencies and scripts
│── README.md               # Project documentation
```

---

Test Cases Implemented
| Test Case | Section    | Task                          | Column                 | Tags                   |
|-----------|----------  |-------------------------------|------------------------|------------------------|
| 1         | Web App    | Implement user authentication | To Do                  | Feature, High Priority |
| 2         | Web App    | Fix navigation bug            | To Do                  | ug                    |
| 3         | Web App    | Design system updates         | In Progress            | Design                 |
| 4         | Mobile App | Push notification system      | To Do                  | Feature                |      
| 5         | Mobile App | Offline mode | In Progress    | In Progress            | Feature, High Priority |
| 6         | Mobile App | App icon design               | Done                   | Design                 |

---

Additional Information
- This project only supports Admin login. Other roles are not included.
- Playwright runs tests in parallel by default for efficiency.
- The test suite can be extended by adding more cases to `testCases.json`.

Author
Nataliia Solodkova - QA Automation Engineer
LinkedIn - https://www.linkedin.com/in/nataliia-solodkova/

---

License
This project is open-source and free to use.

