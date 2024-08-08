<script setup>
import Card from './Card.vue';

const props = defineProps({
  items: Array
});
</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
    <Card 
      v-for="item in items"
      :key="item.id"
      :url="item.image"
      :type="item.type"
      :name="item.name"
      :status="item.status"
      :species="item.species"
      :gender="item.gender"
      :location="item.location"
      :origin="item.origin"
      :created="new Date(item.created).getTime()"
      :id="item.id"
    />
  </div>
</template>

