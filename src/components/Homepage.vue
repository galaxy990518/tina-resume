<template>
  <div class="section flex items-center justify-center h-screen">
    <div>
      <div class="font-pacifico text-center text-primary text-4xl mb-4 font-bold">Resume</div>

      <img :src="picture" class="w-full md:w-[550px] object-cover rounded-lg shadow-lg" />

      <div class="pl-4 pt-2">
        <p class="text-primary text-lg font-semibold">Liu Ting Wei</p>
        <div class="w-12 h-0.5 bg-accent mt-2"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
const picture = new URL('@/assets/images/homepage/homepage.png', import.meta.url).href;
</script>

<style scoped></style>
