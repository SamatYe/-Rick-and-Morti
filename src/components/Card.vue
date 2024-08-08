 <script setup>
const props = defineProps({
  id: Number,
  url: String,
  type: String,
  name: String,
  status: String,
  species: String,
  gender: String,
  location: Object,
  origin: Object,
  created: Number
});
</script>

<template>
  <div class="p-4 sm:p-8 text-white" style="background-color: rgb(39, 43, 51)">
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 relative rounded-xl bg-gray-700 overflow-hidden">
      <div class="flex justify-center sm:justify-start">
        <img :src="url" alt="avatar" class="w-full sm:w-56 rounded-t-xl sm:rounded-l-xl sm:rounded-t-none h-auto object-cover" />
      </div>

      <div class="flex mt-2 sm:mt-0">
        <section class="mt-4 sm:mt-5 text-center sm:text-left">
          <router-link :to="`/character/${id}`" class="text-white text-xl sm:text-xl font-bold hover:text-orange-500 cursor-pointer  break-words">
            {{ name }}
          </router-link>
         
        </section>
      </div>
    </div>
  </div>
</template>

 
