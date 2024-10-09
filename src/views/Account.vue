<template>
  <div class="bg-neutral-100 py-16">
    <div
      class="mx-auto flex min-h-screen max-w-screen-xl overflow-hidden rounded bg-white shadow-2xl md:flex-col"
    >
      <div
        class="w-72 bg-gradient-to-br from-emerald-400 to-green-600 py-16 text-white sm:w-full"
      >
        <ul class="sm:flex sm:justify-center">
          <li class="mt-4 border-l-0 transition-all hover:border-l-4">
            <RouterLink
              to="/me/settings"
              class="px-16 py-4 text-2xl font-light uppercase"
              >Settings</RouterLink
            >
          </li>
          <li class="mt-4 border-l-0 transition-all hover:border-l-4">
            <RouterLink
              to="/me/bookings"
              class="px-16 py-4 text-2xl font-light uppercase"
              >My Bookings</RouterLink
            >
          </li>
          <li class="mt-4 border-l-0 transition-all hover:border-l-4">
            <RouterLink to="/" class="px-16 py-4 text-2xl font-light uppercase"
              >My Reviews</RouterLink
            >
          </li>
          <li class="mt-4 border-l-0 transition-all hover:border-l-4">
            <RouterLink to="/" class="px-16 py-4 text-2xl font-light uppercase"
              >Billing</RouterLink
            >
          </li>
        </ul>
      </div>

      <RouterView />
    </div>
  </div>
</template>

<script setup lang="ts"></script>
