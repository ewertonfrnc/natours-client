<template>
  <div class="flex-1 bg-white py-20">
    <AccountPersonalSettings />
    <hr class="my-24 bg-neutral-100" />
    <AccountPasswordSettings />
  </div>
</template>

<script setup lang="ts">
import AccountPasswordSettings from "./AccountPasswordSettings.vue";
import AccountPersonalSettings from "./AccountPersonalSettings.vue";
</script>
