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
        <li><span class="label">Capital</span><span class="value">{{ country.capital }}</span></li>
        <li><span class="label">Region</span><span class="value">{{ country.region }}</span></li>
        <li><span class="label">Subregion</span><span class="value">{{ country.subregion }}</span></li>
        <li><span class="label">Currency</span><span class="value">{{ country.currency }}</span></li>
        <li><span class="label">Languages</span><span class="value">{{ country.languages }}</span></li>
        <li><span class="label">Area</span><span class="value">{{ country.area }} km²</span></li>
        <li><span class="label">Population</span><span class="value">{{ country.population }}</span></li>
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
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.12);
  padding: 2rem;
  box-sizing: border-box;
  transition: box-shadow 0.3s ease;
}
.pv-card:hover {
  box-shadow: 0 12px 32px rgba(0,0,0,0.18);
}
.country-card {
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
}
.card-title {
  margin: 0.75rem 0 0;
  text-align: center;
  font-size: 1.6rem;
  font-weight: 700;
  color: #1e293b;
}
.card-subtitle {
  margin: 0 0 1.25rem;
  text-align: center;
  color: #64748b;
  font-style: italic;
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
  border-radius: 6px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 2px 6px rgba(0,0,0,0.08);
}
.country-details {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
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
  margin: 0;
  width: 100%;
  box-sizing: border-box;
}
li {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  padding: 10px 4px;
  border-bottom: 1px solid #f1f5f9;
  word-wrap: break-word;
}
li:last-child {
  border-bottom: none;
}
.label {
  font-weight: 600;
  color: #475569;
}
.value {
  color: #1e293b;
  text-align: right;
}
</style>