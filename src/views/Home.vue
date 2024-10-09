<template>
  <div class="bg-gray-100 grid place-content-center gap-5 py-6">
    <div class="tour-listing">
      <TourCard v-for="tour in tours" :key="tour.id" :tour="tour" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useToursStore } from "../stores/tours.ts";
import TourCard from "../components/TourCard.vue";
import { ITour } from "../interfaces/tour.interfaces.ts";

const store = useToursStore();
const tours = ref<ITour[]>([]);

function fetchTours() {
  store.getTours().then((res) => {
    tours.value = res.data;
  });
}

onMounted(() => {
  fetchTours();
});
</script>

<style scoped>
.tour-listing {
  max-width: 1200px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
}
</style>
