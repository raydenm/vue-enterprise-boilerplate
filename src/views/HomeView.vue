<script setup lang="ts">
import { FEATURES_LIST } from '../config/features-list'
import ThemeButton from '@/layouts/ThemeButton.vue'
</script>

<template>
  <section className="bg-white dark:bg-gray-900">
    <div
      className="mx-auto grid max-w-screen-xl px-4 py-8 text-center lg:pt-16"
    >
      <div className="mx-auto place-self-center">
        <h1
          className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl"
        >
          Vue Enterprise Boilerplate
        </h1>
        <p
          className="mt-10 font-light max-w-2xl text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl"
        >
          基于 Vue 和 Vite
          的前端脚手架，旨在提高开发效率和代码规范性，提供了多个集成工具和库，帮助开发者快速搭建现代化前端应用。通过集成的工具链，开发者可以实现自动化的代码格式化、类型检查、组件库展示、自动导入等功能，为前端开发提供了一个一致、高效的开发环境。
        </p>
        <div class="flex items-center justify-center gap-4">
          <Button variant="outline">
            <a href="https://github.com/raydenm/vue-enterprise-boilerplate">
              Github
            </a>
          </Button>
          <Button class="w-20">
            <a
              href="https://vercel.com/new/git/external?repository-url=https://github.com/raydenm/vue-enterprise-boilerplate"
            >
              部署
            </a>
          </Button>
          <ThemeButton></ThemeButton>
        </div>
      </div>
    </div>
  </section>
  <section className="bg-white dark:bg-gray-900">
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
      <div
        className="justify-center space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0 lg:grid-cols-3"
      >
        <div
          v-for="(item, index) in FEATURES_LIST"
          :key="index"
          className="flex flex-col items-center justify-center text-center"
        >
          <div
            className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 p-1.5 text-blue-700 dark:bg-primary-900 lg:h-12 lg:w-12"
          >
            <component class="w-full h-full" :is="item.icon" />
          </div>
          <h3 className="mb-2 text-xl font-bold dark:text-white">
            {{ item.title }}
          </h3>
          <p className="text-gray-500 dark:text-gray-400">
            {{ item.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
