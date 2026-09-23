<template>
  <pv-card class="country-card" role="region" :aria-label="`Information about ${country.name}`">
    <template #header>
      <div class="flags">
        <img :src="country.flag" :alt="`Flag of ${country.name}`" class="flag-img" />
      </div>
    </template>
    <template #title>{{ country.name }}</template>
    <template #subtitle>{{ country.officialName }}</template>
    <template #content>
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
    </template>
  </pv-card>
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
.country-card {
  max-width: 500px;
  margin: 0 auto;
}
.flags {
  display: flex;
  justify-content: center;
  padding: 16px;
}
.flag-img {
  width: 200px;
  border: 1px solid #ddd;
}
.country-details {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}
.coat-img {
  width: 100px;
}
ul {
  list-style: none;
  padding: 0;
  width: 100%;
}
li {
  padding: 6px 0;
  border-bottom: 1px solid #eee;
}
</style>