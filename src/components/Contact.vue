<template>
  <div class="section bg-secondary min-h-screen flex items-center justify-center p-4">
    <div class="max-w-3xl w-full">
      <div class="font-pacifico text-center text-primary text-4xl mb-4 font-bold">Contact Me</div>
      <!-- Main content -->
      <div
        class="border-4 border-primary p-8 flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8 shadow-xl bg-background"
      >
        <div
          class="flip-container w-48 h-48 rounded-full overflow-hidden border-4 border-primary flex-shrink-0 cursor-pointer group"
        >
          <div class="flipper w-full h-full relative">
            <div class="front absolute w-full h-full">
              <img
                :src="myPhoto"
                alt="headshot"
                class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div class="back absolute w-full h-full transform rotate-y-180">
              <img :src="chiikawaImage" alt="chiikawa" class="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        <div class="flex-grow">
          <div class="flex items-center space-x-2 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-primary"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clip-rule="evenodd"
              />
            </svg>
            <span class="text-primary text-xl font-bold">劉庭瑋 Tina Liu</span>
          </div>
          <div class="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-primary"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <span class="text-primary font-bold">sun226677@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const chiikawaImage = new URL('@/assets/images/contact/chiikawa.png', import.meta.url).href;
const myPhoto = new URL('@/assets/images/common/profile.png', import.meta.url).href;
</script>

<style scoped>
.flip-container {
  perspective: 1000px;
}
.flipper {
  transition: 0.6s;
  transform-style: preserve-3d;
}
.flip-container:hover .flipper {
  transform: rotateY(180deg);
}
.front,
.back {
  backface-visibility: hidden;
}
.back {
  transform: rotateY(180deg);
}
</style>
