<template>
  <div class="section min-h-screen flex items-center justify-center p-4">
    <div class="container mx-auto">
      <div class="font-pacifico text-center text-primary text-4xl mb-8 font-bold">Skills</div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div
          v-for="(category, index) in skills"
          :key="index"
          class="bg-background p-6 rounded-lg shadow-lg border-2 border-accent"
        >
          <h3 class="text-xl font-semibold mb-4 text-primary">{{ category.category }}</h3>
          <ul class="space-y-3 text-sm md:text-base">
            <li
              v-for="(item, itemIndex) in category.items"
              :key="itemIndex"
              class="text-text flex items-center font-NotoJP"
            >
              <div class="flex items-center">
                <span class="text-accent mr-2 flex-shrink-0">&#9733;</span>
                <span>{{ item }}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const skills = ref([
  {
    category: '前端技能',
    items: [
      '熟悉 Vue3 語法以及 Vue3 生態系',
      '熟悉 Tailwind CSS 框架',
      '使用 Vite 打包及優化網站',
      '熟悉 HTML5 與 CSS3 語言',
      '熟悉 JavaScript 與 ES6 知識',
      '響應式 RWD 應用開發',
      '運用 Axios 串接後端 API'
    ]
  },
  {
    category: '後端與其他工具',
    items: [
      '了解 Node.js 與 Express.js 應用',
      '熟悉 Git 指令並依循 Git Flow 進行版本控管',
      '使用 Vercel 進行專案部署'
    ]
  }
]);
</script>
