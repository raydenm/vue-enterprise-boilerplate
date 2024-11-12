import {
  Eclipse,
  Code,
  Type,
  Box,
  BookOpen,
  Navigation2,
  CheckSquare,
  FileText,
  ClipboardList,
  Hammer,
  Zap,
  Database,
} from 'lucide-vue-next'

export const FEATURES_LIST = [
  {
    title: 'Tailwind CSS',
    description:
      '集成了 Tailwind CSS 工具包，支持快速、高度定制化的 CSS 开发，简化样式编写的流程，并且提升开发速度。',
    icon: Eclipse,
  },
  {
    title: 'ESLint & Prettier',
    description:
      'ESLint 用于代码语法检查，Prettier 用于代码格式化，确保代码风格一致性，帮助团队保持高质量的代码标准。',
    icon: Code,
  },
  {
    title: 'TypeScript',
    description:
      '提供了 TypeScript 支持，增强了 JavaScript 的类型安全性，使代码更加稳定、可维护，并提供更好的开发体验。',
    icon: Type,
  },
  {
    title: 'Shadcn-vue',
    description:
      '使用 Shadcn-vue 组件库，以便于开发者快速构建优雅、现代的 Vue 应用 UI，节省组件开发时间。',
    icon: Box,
  },
  {
    title: 'Storybook',
    description:
      '集成了 Storybook，使得组件的独立开发和展示更加方便，同时也便于进行组件的可视化测试和文档编写。',
    icon: BookOpen,
  },
  {
    title: 'Vite',
    description:
      '使用 Vite 作为构建工具，提供极速的开发体验和轻量的打包体积，提升开发效率，支持模块热更新。',
    icon: Navigation2,
  },
  {
    title: 'Vitest',
    description:
      '使用 Vitest 进行单元测试，提供快速、轻量的测试框架，使得开发者可以轻松进行代码测试和质量控制。',
    icon: CheckSquare,
  },
  {
    title: 'Commitlint',
    description:
      '提供 Commitlint 工具，确保提交信息规范化，便于代码管理和版本控制，促进团队协作。',
    icon: FileText,
  },
  {
    title: 'Lint-staged',
    description:
      '集成 Lint-staged 工具，对待提交的代码进行预检查，确保提交的代码符合规范，提升代码质量。',
    icon: ClipboardList,
  },
  {
    title: 'VueDevTools',
    description:
      '集成了 VueDevTools，方便开发者在浏览器中调试 Vue 应用，提高调试效率。',
    icon: Hammer,
  },
  {
    title: 'AutoImport',
    description:
      '自动导入依赖和组件，减少手动导入的重复操作，简化代码，提高开发效率。',
    icon: Zap,
  },
  {
    title: 'Pinia',
    description:
      '集成了 Pinia 状态管理库，为 Vue 提供简单易用的状态管理方案，便于维护和组织全局状态。',
    icon: Database,
  },
]
