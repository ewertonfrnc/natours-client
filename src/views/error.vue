<template>
  <div class="grid h-screen place-content-center bg-neutral-100">
    <h1 class="text-6xl font-bold">ERROR</h1>
    <button
      class="rounded-3xl bg-green-400 px-6 py-2 text-white"
      @click="router.push({ name: 'home' })"
    >
      Back to home page
    </button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();
</script>
<style scoped></style>
