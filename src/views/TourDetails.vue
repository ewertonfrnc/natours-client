<template>
  <template v-if="!loading && tour">
    <!-- HEADER -->
    <div class="flex h-96 items-center justify-center">
      <h1
        class="-rotate-3 bg-gradient-to-br from-emerald-400 to-green-600 p-6 text-center text-6xl text-white opacity-70"
      >
        {{ tour.name }}
      </h1>
    </div>

    <!-- ABOUT -->
    <div class="flex justify-between">
      <div class="flex-1 bg-neutral-100 px-16 pb-48 pt-20">
        <h3
          class="mb-4 inline-block bg-gradient-to-r from-emerald-400 to-green-600 bg-clip-text text-2xl font-bold uppercase text-transparent"
        >
          Quick Facts
        </h3>

        <div class="grid gap-2">
          <p class="flex gap-1">
            <span class="font-semibold">Next Date</span>
            <span>April 2021</span>
          </p>
          <p class="flex gap-1">
            <span class="font-semibold">Difficulty</span>
            <span>{{ tour.difficulty }}</span>
          </p>
          <p class="flex gap-1">
            <span class="font-semibold">Participants</span>
            <span>{{ tour.maxGroupSize }}</span>
          </p>

          <p class="flex gap-1">
            <span class="font-semibold">Rating</span>
            <span>{{ tour.ratingsAverage.toFixed(1) }} / 5</span>
          </p>
        </div>
      </div>

      <div class="flex-1 px-16 pb-48 pt-20">
        <h3
          class="mb-4 inline-block bg-gradient-to-r from-emerald-400 to-green-600 bg-clip-text text-2xl font-bold uppercase text-transparent"
        >
          About {{ tour.name }} tour
        </h3>

        <p class="mb-2" v-for="paragraph in paragraphs" :key="paragraph">
          {{ paragraph }}
        </p>
      </div>
    </div>

    <!-- REVIEWS -->
    <div
      class="-mt-14 flex h-96 -rotate-6 -skew-x-6 items-center overflow-hidden bg-green-500 bg-gradient-to-br from-emerald-400 to-green-600 px-28 py-72"
    >
      <div class="flex rotate-6 skew-x-6 gap-12 overflow-x-auto">
        <div
          v-for="review in tour.reviews"
          class="h-80 w-80 flex-shrink-0 rounded bg-white"
        >
          <h4>{{ review.User.name }}</h4>
          <p>{{ review.review }}</p>
        </div>
      </div>
    </div>
  </template>

  <div v-else>carregando...</div>
  <pre> {{ tour }}</pre>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { onMounted, ref } from "vue";
import { useToursStore } from "../stores/tours.ts";
import { ITour } from "../interfaces/tour.interfaces.ts";

const router = useRouter();
const route = useRoute();
const store = useToursStore();

const loading = ref(false);
const tour = ref<ITour | null>(null);
const paragraphs = ref([]);

function fetchTour(tourId: string) {
  loading.value = true;

  store
    .getTour(tourId)
    .then((res) => {
      tour.value = res.tour;
      paragraphs.value = res.tour.description.split("\n");
    })
    .catch((e) => {
      router.push({ name: "error" });
    });

  loading.value = false;
}

onMounted(() => {
  fetchTour(route.params.tourId as string);
});
</script>

<style scoped></style>
