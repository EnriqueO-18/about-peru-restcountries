<template>
  <div class="pv-card country-card" role="region" :aria-label="`Information about ${country.name}`">
    <div class="flags">
      <img :src="country.flag" :alt="`Flag of ${country.name}`" class="flag-img" />
    </div>
    <h2 class="card-title">{{ country.name }}</h2>
    <p class="card-subtitle">{{ country.officialName }}</p>
    <div class="country-details">
      <img :src="country.coatOfArms" :alt="`Coat of arms of ${country.name}`" class="coat-img" />
      <ul>
        <li><strong>Capital:</strong> {{ country.capital }}</li>
        <li><strong>Region:</strong> {{ country.region }}</li>
        <li><strong>Subregion:</strong> {{ country.subregion }}</li>
        <li><strong>Currency:</strong> {{ country.currency }}</li>
        <li><strong>Languages:</strong> {{ country.languages }}</li>
        <li><strong>Area:</strong> {{ country.area }} km²</li>
        <li><strong>Population:</strong> {{ country.population }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
defineProps({
  country: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.pv-card {
  background: white;
  color: #1a1a1a;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  padding: 1.5rem;
  box-sizing: border-box;
}
.country-card {
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
}
.card-title {
  margin: 0.5rem 0 0;
  text-align: center;
}
.card-subtitle {
  margin: 0 0 1rem;
  text-align: center;
  color: #666;
}
.flags {
  display: flex;
  justify-content: center;
  padding: 16px;
}
.flag-img {
  max-width: 200px;
  width: 100%;
  height: auto;
  border: 1px solid #ddd;
}
.country-details {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  width: 100%;
}
.coat-img {
  max-width: 100px;
  width: 100%;
  height: auto;
}
ul {
  list-style: none;
  padding: 0;
  width: 100%;
  box-sizing: border-box;
}
li {
  padding: 6px 0;
  border-bottom: 1px solid #eee;
  word-wrap: break-word;
}
</style>