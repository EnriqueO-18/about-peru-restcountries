<template>
  <section class="about-peru-view" aria-labelledby="about-peru-heading">
    <h2 id="about-peru-heading" class="sr-only">Peru Information</h2>
    <div v-if="loading" class="loading-message" role="status">Loading...</div>
    <div v-else-if="error" class="error-message" role="alert">{{ error }}</div>
    <country-card v-else :country="country"></country-card>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import CountryCard from '../components/country-card.component.vue'
import countryService from '../services/country.service'

const country = ref(null)
const loading = ref(true)
const error = ref(null)

async function fetchPeruData() {
  try {
    const { data } = await countryService.getCountryByName('peru')
    const peru = data[0]
    country.value = {
      name: peru.name.common,
      officialName: peru.name.official,
      currency: Object.values(peru.currencies)[0].name,
      capital: peru.capital[0],
      region: peru.region,
      subregion: peru.subregion,
      languages: Object.values(peru.languages).join(', '),
      area: peru.area.toLocaleString(),
      population: peru.population.toLocaleString(),
      flag: peru.flags.png,
      coatOfArms: peru.coatOfArms.png
    }
  } catch (e) {
    error.value = 'Could not load country data.'
  } finally {
    loading.value = false
  }
}

onMounted(fetchPeruData)
</script>

<style scoped>
.loading-message, .error-message {
  text-align: center;
  padding: 40px;
}
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0,0,0,0);
  white-space: nowrap;
  border: 0;
}
</style>
