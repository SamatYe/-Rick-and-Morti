<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'
import Header from '../components/Header.vue'

const episodes = ref([])
const loading = ref(false)
const endOfResults = ref(false)
const page = ref(1)

const loadEpisodes = async () => {
  if (loading.value || endOfResults.value) return

  loading.value = true
  try {
    const { data } = await axios.get(`https://rickandmortyapi.com/api/episode?page=${page.value}`)
    const episodeData = await Promise.all(
      data.results.map(async episode => {
        const charactersData = await Promise.all(
          episode.characters.map(async characterUrl => {
            const { data: characterData } = await axios.get(characterUrl)
            return characterData
          })
        )
        return { ...episode, charactersData }
      })
    )
    if (episodeData.length > 0) {
      episodes.value = [...episodes.value, ...episodeData]
      page.value++
    } else {
      endOfResults.value = true
    }
  } catch (err) {
    console.log(err)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  loadEpisodes()
})
</script>

<template>
  <div>
    <Header />
    <div class="container mx-auto mt-20 p-8 text-white rounded-3xl" style="background-color: rgb(39, 43, 51)">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div v-for="episode in episodes" :key="episode.id" class="bg-gray-700 rounded-xl p-4">
          <h1 class="text-2xl font-bold mb-2">{{ episode.name }}</h1>
          <p><strong>Дата выхода:</strong> {{ episode.air_date }}</p>
          <p><strong>Эпизод:</strong> {{ episode.episode }}</p>
          <p class="mt-4 text-lg font-semibold">Персонажи в эпизоде:</p>
          <div class="grid grid-cols-2 mt-5 gap-4">
            <div v-for="character in episode.charactersData" :key="character.id" class="flex items-center">
              <img :src="character.image" :alt="character.name" class="w-12 h-12 rounded-full mr-4"/>
              <span>{{ character.name }}</span>
            </div>
          </div>
        </div>
      </div>
      <div v-if="loading" class="text-center mt-4">
        <p>Загрузка...</p>
      </div>
      <div v-if="!loading && !endOfResults" class="text-center mt-4">
        <button @click="loadEpisodes" class="bg-blue-500 text-white px-4 py-2 rounded">Загрузить еще</button>
      </div>
      <div v-if="endOfResults" class="text-center mt-4">
        <p>Все эпизоды загружены.</p>
      </div>
    </div>
  </div>
</template>

  