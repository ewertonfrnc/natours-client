<template>
  <div class="mx-auto max-w-screen-sm">
    <h1
      class="mb-4 bg-gradient-to-r from-emerald-400 to-green-600 bg-clip-text text-2xl font-bold uppercase text-transparent"
    >
      Your account settings
    </h1>

    <form @submit.prevent="handleSubmit" class="flex flex-col gap-6">
      <div class="flex flex-col gap-3">
        <label for="name" class="font-bold">Nome</label>
        <input
          v-model="formValues.name"
          type="name"
          name="name"
          id="name"
          required
          class="w-full rounded border-b-2 border-transparent bg-neutral-100 px-7 py-5 transition focus:border-b-2 focus:border-green-300 focus:outline-none focus:invalid:border-b-2 focus:invalid:border-b-red-400"
        />
      </div>

      <div class="flex flex-col gap-3">
        <label for="email" class="font-bold">Email</label>
        <input
          type="email"
          v-model="formValues.email"
          name="email"
          id="email"
          required
          autocomplete="off"
          class="w-full rounded border-b-2 border-transparent bg-neutral-100 px-7 py-5 transition focus:border-b-2 focus:border-green-300 focus:outline-none focus:invalid:border-b-2 focus:invalid:border-b-red-400"
        />
      </div>

      <div class="flex justify-end">
        <button
          type="submit"
          class="w-min rounded-3xl bg-emerald-400 p-3 px-12 uppercase text-white transition hover:bg-emerald-600"
        >
          Salvar
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useAuthStore } from "../stores/auth.ts";
import { useUserStore } from "../stores/user.ts";
import { useToast } from "vue-toastification";

const toast = useToast();
const store = useUserStore();
const { user } = useAuthStore();

const formValues = ref({
  name: user.name,
  email: user.email,
});

function handleSubmit() {
  store
    .updateUser(user.id, formValues.value)
    .then(({ user }) => {
      localStorage.setItem("user", JSON.stringify(user));
      toast.success("Usuário atualizado com sucesso.");
    })
    .catch((err) => {
      toast.error(err.response.data.message);
    });
}
</script>
