<template>
  <div class="rounded bg-white drop-shadow-xl overflow-hidden">
    <div class="relative">
      <div class="relative h-24">
        <div
          class="w-full h-16 opacity-70 bg-gradient-to-br from-emerald-500 to-green-500"
        />
        <img src="" :alt="tour.name" class="object-cover w-full h-full" />
      </div>

      <h3
        class="text-2xl absolute z-10 bottom-0 right-0 font-thin w-8/12 bg-gradient-to-br from-emerald-400 to-green-600 text-white"
      >
        <span class="p-2">{{ tour.name }}</span>
      </h3>
    </div>

    <div class="py-6 px-8 grid grid-cols-3 gap-3">
      <h4 class="col-span-3 font-bold text-xs">
        {{ `${tour.difficulty} ${tour.duration}-day tour`.toUpperCase() }}
      </h4>

      <p class="col-span-3 italic text-sm">{{ tour.summary }}</p>
    </div>

    <div
      class="grid grid-cols-2 grid-rows-1 items-center gap-2 bg-neutral-100 py-6 px-8 overflow-hidden"
    >
      <p class="flex gap-1 row-start-1">
        <span class="font-semibold">${{ tour.price }}</span>
        <span>per person</span>
      </p>

      <p class="flex gap-1 col-start-1 row-start-2">
        <span class="font-semibold">{{ tour.ratingsAverage.toFixed(1) }}</span>
        <span>rating ({{ tour.ratingsQuantity }})</span>
      </p>

      <RouterLink
        :to="`/tour/${tour.uId}`"
        class="h-12 bg-green-500 text-white font-light rounded-3xl row-span-2 flex items-center justify-center"
      >
        Details
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ITour } from "../interfaces/tour.interfaces.ts";

type Props = { tour: ITour };
const { tour } = defineProps<Props>();
</script>
<style scoped></style>
