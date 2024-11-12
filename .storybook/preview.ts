import type { Preview } from '@storybook/vue3'
import '../src/assets/styles/index.css' // 引入 Tailwind 样式

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
