<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'
import Header from './Header.vue'

const locations = ref([])
const page = ref(1)
const loading = ref(false)
const endOfResults = ref(false)

const loadLocations = async () => {
  if (loading.value || endOfResults.value) return
  loading.value = true

  try {
    const { data } = await axios.get(`https://rickandmortyapi.com/api/location?page=${page.value}`)
    if (data.results.length === 0) {
      endOfResults.value = true
    } else {
      locations.value.push(...data.results)
      page.value++
    }
  } catch (err) {
    console.error("Error fetching locations data:", err)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  loadLocations()
})
</script>

<template>
  <div>
    <Header />
    <div class="container mx-auto mt-20 p-8 text-white rounded-3xl" style="background-color: rgb(39, 43, 51)">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div v-for="location in locations" :key="location.id" class="bg-gray-700 rounded-xl p-4">
          <h2 class="text-xl font-bold">{{ location.name }}</h2>
          <p><strong>Тип:</strong> {{ location.type }}</p>
          <p><strong>Размер:</strong> {{ location.dimension }}</p>
          <p><strong>Количество жителей:</strong> {{ location.residents.length }}</p>
        </div>
      </div>
      <div v-if="loading" class="text-center mt-4">
        <p>Загрузка...</p>
      </div>
      <div v-if="!loading && !endOfResults" class="text-center mt-4">
        <button @click="loadLocations" class="bg-blue-500 text-white px-4 py-2 rounded">Загрузить еще</button>
      </div>
      <div v-if="endOfResults" class="text-center mt-4">
        <p>Все локации загружены.</p>
      </div>
    </div>
  </div>
</template>

