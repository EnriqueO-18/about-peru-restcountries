<template>
  <header class="pv-toolbar" role="banner" aria-label="Application toolbar">
    <h1 class="toolbar-title">About Peru</h1>
  </header>
</template>

<script setup>
</script>

<style scoped>
.pv-toolbar {
  display: flex;
  align-items: center;
  padding: 1.25rem 2rem;
  background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
  color: white;
  box-shadow: 0 4px 12px rgba(0,0,0,0.25);
}
.toolbar-title {
  margin: 0;
  font-size: 1.4rem;
  font-weight: 600;
  letter-spacing: 0.5px;
}
</style>