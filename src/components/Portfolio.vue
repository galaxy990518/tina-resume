<template>
  <div class="section">
    <div class="slide" v-for="(portfolio, index) in portfolios" :key="index">
      <div class="flex items-center justify-center h-screen">
        <div class="w-full p-3 md:w-[650px]">
          <div class="flex justify-center items-center gap-2 mb-4">
            <p class="text-center text-primary md:text-3xl text-xl font-NotoJP font-bold">
              {{ portfolio.title }}
            </p>
            <div class="flex gap-2">
              <div class="relative group" v-if="portfolio.vercelLink">
                <a
                  :href="portfolio.vercelLink"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center justify-center w-8 h-8 bg-accent rounded-full transition-transform duration-200 hover:scale-105 hover:shadow-md"
                >
                  <img :src="vercelIcon" alt="Vercel" class="w-4 h-4" />
                </a>
                <span
                  class="absolute hidden group-hover:block bg-primary text-secondary text-xs rounded py-1 px-2 -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap"
                >
                  Vercel Demo
                </span>
              </div>

              <div class="relative group" v-if="portfolio.githubLink">
                <a
                  :href="portfolio.githubLink"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center justify-center w-8 h-8 bg-accent rounded-full transition-transform duration-200 hover:scale-105 hover:shadow-md"
                >
                  <img :src="githubIcon" alt="GitHub" class="w-4 h-4" />
                </a>
                <span
                  class="absolute hidden group-hover:block bg-primary text-secondary text-xs rounded py-1 px-2 -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap"
                >
                  GitHub Repo
                </span>
              </div>
            </div>
          </div>
          <div class="mt-4 mb-8 overflow-hidden rounded-lg shadow-lg">
            <img class="w-full object-cover" :src="portfolio.imageSrc" :alt="portfolio.title" />
          </div>
          <div class="flex justify-center">
            <p class="text-left text-text text-lg font-medium font-NotoJP max-w-[95%]">
              {{ portfolio.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import vercelIcon from '@/assets/images/portfolio/vercel-icon.svg';
import githubIcon from '@/assets/images/portfolio/github-icon.svg';

const portfolios = ref([
  {
    title: 'Vue3 Youtube App',
    description:
      '此專案是由 Vue3 + Vite 建立，透過此專案練習了 Vue3 的語法、如何使用 Tailwind 切版、也學會了如何透過 axios 進行串接 API，以及如何使用 Vue Router 建立頁面路由。',
    imageSrc: new URL('@/assets/images/portfolio/vue3-youtube-app.png', import.meta.url).href,
    vercelLink: 'https://vue3-video-website-portfolio.vercel.app/',
    githubLink: 'https://github.com/galaxy990518/vue3-youtube-app.git'
  },
  {
    title: 'Vue3 Excel Master',
    description:
      '此專案使用 Vue3、Vite 及 Tailwind CSS 進行頁面開發，結合 ECharts 來進行資料視覺化，並利用 xlsx 處理 Excel 檔案的讀取功能。',
    imageSrc: new URL('@/assets/images/portfolio/vue3-excel-master.png', import.meta.url).href,
    vercelLink: 'https://vue3-excel-master.vercel.app/',
    githubLink: 'https://github.com/galaxy990518/vue3-excel-master'
  },
  {
    title: 'Vue 3 Exercise Collection',
    description:
      '此專案由 Vue3 + Vite 建立，使用 Vue3 與 Tailwind CSS 進行切版，練習內容為 Infinite Scroll 自動加載內容提升使用者體驗，以及使用 JSZip 庫實現選定圖像的 ZIP 壓縮下載。後續相關練習也會更新在此專案中。',
    imageSrc: new URL('@/assets/images/portfolio/vue3-exercise-collection.png', import.meta.url)
      .href,
    vercelLink: 'https://vue3-lab.vercel.app/',
    githubLink: 'https://github.com/galaxy990518/vue3-lab'
  }
]);
</script>

<style scoped></style>
