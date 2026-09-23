<template>
  <div class="app-layout">
    <app-toolbar></app-toolbar>
    <main class="app-content" role="main">
      <about-peru></about-peru>
    </main>
    <app-footer></app-footer>
  </div>
</template>

<script setup>
import AppToolbar from './public/components/app-toolbar.component.vue'
import AppFooter from './public/components/app-footer.component.vue'
import AboutPeru from './countries/views/about-peru.view.vue'
</script>

<style scoped>
.app-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.app-content {
  flex: 1;
  padding: 24px;
}
</style>