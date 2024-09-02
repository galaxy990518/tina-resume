<template>
  <div class="relative">
    <button @click="toggleMenu" class="fixed top-4 left-4 z-50 text-primary md:hidden">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </button>

    <nav
      id="menu"
      :class="[
        'bg-secondary fixed left-0 top-0 h-full w-64 p-8 flex flex-col justify-between transition-transform duration-300 ease-in-out z-40',
        isMenuOpen ? 'translate-x-0' : '-translate-x-full',
        'md:translate-x-0 lg:w-1/6 md:w-1/5'
      ]"
    >
      <div>
        <div class="text-primary font-semibold mb-8">
          <span class="border border-primary px-2 py-1">Tina Liu</span>
        </div>
        <ul class="space-y-4 text-text">
          <li
            :class="{
              'font-bold bg-primary text-secondary px-2 py-1 rounded': currentSection === 'home'
            }"
          >
            <a href="#home" class="block w-full" @click="closeMenu">首頁</a>
          </li>
          <li
            :class="{
              'font-bold bg-primary text-secondary px-2 py-1 rounded': currentSection === 'about-me'
            }"
          >
            <a href="#about-me" class="block w-full" @click="closeMenu">關於我</a>
          </li>
          <li
            :class="{
              'font-bold bg-primary text-secondary px-2 py-1 rounded': currentSection === 'skills'
            }"
          >
            <a href="#skills" class="block w-full" @click="closeMenu">技能</a>
          </li>
          <li
            :class="{
              'font-bold bg-primary text-secondary px-2 py-1 rounded':
                currentSection === 'portfolio'
            }"
          >
            <a href="#portfolio" class="block w-full" @click="closeMenu">作品</a>
          </li>
          <li
            :class="{
              'font-bold bg-primary text-secondary px-2 py-1 rounded': currentSection === 'contact'
            }"
          >
            <a href="#contact" class="block w-full" @click="closeMenu">聯絡我</a>
          </li>
        </ul>
      </div>
      <div class="text-sm text-text">© {{ new Date().getFullYear() }} Tina Liu</div>
    </nav>

    <div
      @click="closeMenu"
      :class="[
        'fixed inset-0 bg-black bg-opacity-50 z-30',
        isMenuOpen ? 'block' : 'hidden',
        'md:hidden'
      ]"
    ></div>

    <div class="md:flex">
      <div class="hidden md:block lg:w-1/6 md:w-1/5"></div>

      <div class="w-full lg:w-5/6 md:w-4/5">
        <full-page :options="options" id="fullpage" ref="fullpage">
          <Homepage />
          <AboutMe />
          <Skills />
          <Portfolio />
          <Contact />
        </full-page>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Homepage from '@/components/Homepage.vue';
import AboutMe from '@/components/AboutMe.vue';
import Skills from '@/components/Skills.vue';
import Portfolio from '@/components/Portfolio.vue';
import Contact from '@/components/Contact.vue';

const fullpage = ref(null);
const isMenuOpen = ref(false);
const currentSection = ref('home');

const options = {
  scrollOverflow: true,
  scrollBar: false,
  menu: '#menu',
  anchors: ['home', 'about-me', 'skills', 'portfolio', 'contact'],
  sectionsColor: ['#E6F1ED', '#E6F1ED', '#E6F1ED', '#E6F1ED', '#E6F1ED'],

  afterLoad(origin, destination) {
    currentSection.value = destination.anchor;
  }
};

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}

function closeMenu() {
  isMenuOpen.value = false;
}
</script>
