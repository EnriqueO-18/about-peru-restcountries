<template>
  <div class="app-layout">
    <div class="background-slideshow">
      <div
          v-for="(image, index) in backgroundImages"
          :key="index"
          class="slide"
          :class="{ active: index === currentSlide }"
          :style="{ backgroundImage: `url(${image})` }"
      ></div>
      <div class="overlay"></div>
    </div>

    <app-toolbar></app-toolbar>
    <main class="app-content" role="main">
      <about-peru></about-peru>
    </main>
    <app-footer></app-footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import AppToolbar from './public/components/app-toolbar.component.vue'
import AppFooter from './public/components/app-footer.component.vue'
import AboutPeru from './countries/views/about-peru.view.vue'

const backgroundImages = [
  'https://images.unsplash.com/photo-1623263704614-a3feeeceb9c7?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.1.0',
  'https://images.unsplash.com/photo-1735499104922-a2bf851149de?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.1.0',
  'https://plus.unsplash.com/premium_photo-1733342580487-67a5843a2554?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.1.0',
  'https://images.unsplash.com/photo-1510312305653-8ed496efae75?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.1.0'
]

const currentSlide = ref(0)
let intervalId = null

onMounted(() => {
  intervalId = setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % backgroundImages.length
  }, 6000)
})

onUnmounted(() => {
  if (intervalId) clearInterval(intervalId)
})
</script>

<style scoped>
.app-layout {
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow-x: hidden;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
}

.background-slideshow {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -2;
}

.slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  opacity: 0;
  transition: opacity 2s ease-in-out;
}

.slide.active {
  opacity: 1;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.55);
  z-index: -1;
}

.app-content {
  flex: 1;
  padding: 24px;
  box-sizing: border-box;
  width: 100%;
  position: relative;
  z-index: 1;
}
</style>