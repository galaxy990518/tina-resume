<template>
  <div class="section flex items-center justify-center min-h-screen py-8">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-8 max-w-3xl w-full px-4">
      <div class="col-span-12">
        <div
          class="hidden md:block font-pacifico text-center text-primary text-3xl sm:text-4xl mb-4 md:mb-0 font-bold"
        >
          It's Me
        </div>
      </div>

      <div class="col-span-12 md:col-span-4 flex justify-center items-center">
        <img
          :src="myPhoto"
          class="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-primary"
        />
      </div>

      <div class="col-span-12 md:col-span-8 flex justify-center items-center order-3">
        <div class="w-full max-w-sm h-full bg-secondary rounded-lg p-6 shadow-lg relative">
          <div
            class="hidden md:block absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-secondary transform rotate-45"
          ></div>
          <div
            class="md:hidden absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-secondary transform rotate-45"
          ></div>
          <vue-typer-next
            v-if="isThisPage"
            :data="personalIntroduction"
            cursor-char="|"
            class="vue-typer text-text w-full"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { vueTyperNext } from 'vue-typer-next';
import 'vue-typer-next/dist/style.css';

const myPhoto = new URL('@/assets/images/common/profile.png', import.meta.url).href;

const personalIntroduction = ref([
  '我是劉庭瑋，畢業於真理大學應用日文學系。',
  '過去擔任後端採購專員期間，經常需要預測訂單需求、庫存和運輸時間管理，以確保交貨準確性及生產計劃順利進行。',
  '面對複雜數據和流程時，我發現傳統手動處理的效率不佳，當時我透過 GPT 編寫 Python 程式，在過程中發現程式設計充滿挑戰和成就感，決定離職專心學習程式。',
  '在待業期間，我花了三個月深入學習 JavaScript 和 Vue 3 生態系統，這段經歷提升了我的技術水平，也使我確定自己喜歡程式，想發揮自己所長成為一名前端工程師。'
]);

const isThisPage = ref(false);

const checkHash = () => {
  isThisPage.value = window.location.hash === '#about-me';
};

onMounted(() => {
  checkHash();
  window.addEventListener('hashchange', checkHash);
});

onBeforeUnmount(() => {
  window.removeEventListener('hashchange', checkHash);
});
</script>

<style lang="css" scoped>
::v-deep .vue-typer .result {
  font-family: 'Noto Sans JP' !important;
}
</style>
