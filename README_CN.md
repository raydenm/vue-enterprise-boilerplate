# vue-enterprise-boilerplate

### 项目介绍

`vue-enterprise-boilerplate` 是一个 Vue 企业级脚手架项目，集成了现代化的前端开发工具和最佳实践。该脚手架旨在提供高效、可维护的开发环境，使团队能够快速构建、测试和发布高质量的 Vue 应用程序。

### 项目功能介绍

| 功能                  | 功能描述                                                                        |
| --------------------- | ------------------------------------------------------------------------------- |
| **Tailwind CSS**      | 集成 Tailwind CSS，为快速构建和定制化的响应式设计提供支持。                     |
| **ESLint & Prettier** | 使用 ESLint 进行代码规范检查，Prettier 自动格式化代码，确保团队统一的代码风格。 |
| **TypeScript**        | 支持 TypeScript，增强代码的类型安全性和可维护性。                               |
| **Shadcn-vue**        | 使用 Shadcn-vue 组件库，快速构建现代化的 UI 界面。                              |
| **Storybook**         | 集成 Storybook，便于独立开发和调试组件，提高组件复用性和可维护性。              |
| **Vite**              | 采用 Vite 作为构建工具，支持极速开发环境和模块热更新。                          |
| **Vitest**            | 使用 Vitest 进行单元测试，提供快速、轻量的测试框架。                            |
| **Commitlint**        | 使用 Commitlint 检查提交信息格式，保持项目提交记录清晰有序。                    |
| **Lint-staged**       | 在代码提交前运行代码检查和格式化，提高代码质量。                                |
| **VueDevTools**       | 集成 VueDevTools，便于调试和分析应用状态。                                      |
| **AutoImport**        | 自动导入依赖和组件，减少手动引入操作，提升开发效率。                            |
| **Pinia**             | 集成 Pinia 状态管理库，便于管理应用的全局状态。                                 |

### 安装与运行

请按照以下步骤克隆并运行该项目：

1. 克隆项目代码：

   ```bash
   git clone https://github.com/raydenm/vue-enterprise-boilerplate.git
   ```

2. 进入项目目录：

   ```bash
   cd vue-enterprise-boilerplate
   ```

3. 安装项目依赖：

   ```bash
   pnpm i
   ```

4. 启动开发服务器：

   ```bash
   pnpm dev
   ```

项目启动后，您可以在浏览器中访问 `http://localhost:5173` 查看应用。

### 使用 Storybook

本项目支持 [Storybook](https://storybook.js.org/) ，用于独立开发和调试组件。使用以下命令启动 Storybook：

```bash
pnpm storybook
```

### 运行测试

使用 [Vitest](https://vitest.dev/) 进行单元测试，运行以下命令执行测试：

```bash
pnpm test
```

### 贡献

欢迎对 `vue-enterprise-boilerplate` 项目的改进和贡献！如果您发现了问题或有改进建议，欢迎提交 Issue 或 PR。在提交 PR 之前，请确保所有测试通过并遵循代码规范。

### 许可证

本项目基于 [MIT 许可证](LICENSE) 开源。

### 联系方式

如果您有任何问题或建议，请通过网站联系我：[https://raydenm.pages.dev](https://raydenm.pages.dev)
