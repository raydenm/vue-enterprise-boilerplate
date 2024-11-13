# vue-enterprise-boilerplate

[中文文档](./README_CN.md)

### Project Introduction

`vue-enterprise-boilerplate` is a Vue enterprise-grade boilerplate that integrates modern front-end development tools and best practices. This template is designed to provide an efficient and maintainable development environment, allowing teams to quickly build, test, and deploy high-quality Vue applications.

### Features

| Feature               | Description                                                                                                                  |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| **Tailwind CSS**      | Integrates Tailwind CSS to support fast and customizable responsive design.                                                  |
| **ESLint & Prettier** | Uses ESLint for code linting and Prettier for auto-formatting to maintain consistent coding style across the team.           |
| **TypeScript**        | Supports TypeScript, enhancing code type safety and maintainability.                                                         |
| **Shadcn-vue**        | Utilizes Shadcn-vue UI library for quickly building modern UI components.                                                    |
| **Storybook**         | Integrated with Storybook for isolated component development and debugging, enhancing reusability and maintainability.       |
| **Vite**              | Uses Vite as the build tool, providing a fast development environment and hot module replacement.                            |
| **Vitest**            | Includes Vitest for unit testing, offering a fast and lightweight testing framework.                                         |
| **Commitlint**        | Ensures commit messages follow a standardized format for organized commit history.                                           |
| **Lint-staged**       | Runs code linting and formatting before commits to improve code quality.                                                     |
| **VueDevTools**       | Integrated VueDevTools for easy debugging and application state analysis.                                                    |
| **AutoImport**        | Automatically imports dependencies and components, reducing the need for manual imports and boosting development efficiency. |
| **Pinia**             | Integrated Pinia for state management, making it easy to handle global application state.                                    |

### Installation & Running

Follow these steps to clone and run this project:

1. Clone the project repository:

   ```bash
   git clone https://github.com/raydenm/vue-enterprise-boilerplate.git
   ```

2. Navigate into the project directory:

   ```bash
   cd vue-enterprise-boilerplate
   ```

3. Install the dependencies:

   ```bash
   pnpm i
   ```

4. Start the development server:

   ```bash
   pnpm dev
   ```

After starting the project, you can view the application in your browser at `http://localhost:5173`.

### Using Storybook

This project supports [Storybook](https://storybook.js.org/) for isolated component development and debugging. Start Storybook with the following command:

```bash
pnpm storybook
```

### Running Tests

Use [Vitest](https://vitest.dev/) for unit testing. Run the following command to execute tests:

```bash
pnpm test
```

### Contributing

We welcome contributions to `vue-enterprise-boilerplate`! If you find any issues or have suggestions for improvement, feel free to submit an Issue or a PR. Before submitting a PR, please ensure all tests pass and follow the code standards.

### License

This project is open-sourced under the [MIT License](LICENSE).

### Contact

If you have any questions or suggestions, feel free to reach out through my website: [https://raydenm.pages.dev](https://raydenm.pages.dev)
