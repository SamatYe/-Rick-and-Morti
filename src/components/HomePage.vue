 <script setup>
  import { ref, onMounted } from 'vue'
  import axios from 'axios'
  import CardList from '../components/CardList.vue'
  import Header from '../components/Header.vue'
  import HeaderText from '../components/HeaderText.vue'
  import Footer from '../components/Footer.vue'
  const items = ref([])
  
  onMounted(async () => {
    try {
      const { data } = await axios.get('https://rickandmortyapi.com/api/character/?page=1')
      items.value = data.results
    } catch (err) {
      console.log(err)
    }
  })
  
  </script>

<template>
  <Header />
  <HeaderText />
  <CardList :items="items" />
  <Footer />
</template> 
 

