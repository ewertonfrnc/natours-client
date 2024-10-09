<template>
  <nav class="flex justify-between bg-neutral-600 p-7 text-white">
    <span>Pacotes</span>

    <div class="flex gap-4">
      <template v-if="!isLoggedIn">
        <RouterLink to="/login">Entrar</RouterLink>
        <RouterLink to="/register">Cadastrar</RouterLink>
      </template>

      <template v-else>
        <button @click="signOut">Sair</button>
        <button @click="router.push({ name: 'settings' })">
          {{ user.name.split(" ")[0] }}
        </button>
      </template>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useAuthStore } from "../stores/auth.ts";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const store = useAuthStore();

const isLoggedIn = ref(!!store.user);
const user = store.user;

function signOut() {
  store.logout();
}
</script>
