<template>
  <div class="flex h-screen justify-center bg-gray-100">
    <div class="mt-12 h-min w-1/2 rounded bg-white p-12 drop-shadow-2xl">
      <h1
        class="mb-4 inline-block bg-gradient-to-r from-emerald-400 to-green-600 bg-clip-text text-2xl font-bold uppercase text-transparent"
      >
        Log into your account
      </h1>

      <form @submit.prevent="handleSubmit" class="flex flex-col gap-6">
        <div class="flex flex-col gap-3">
          <label for="email">Email</label>
          <input
            v-model="formValues.email"
            type="email"
            name="email"
            id="email"
            placeholder="you@example.com"
            required
            class="w-full rounded border-b-2 border-transparent bg-neutral-100 px-7 py-5 transition focus:border-b-2 focus:border-green-300 focus:outline-none focus:invalid:border-b-2 focus:invalid:border-b-red-400"
          />
        </div>

        <div class="flex flex-col gap-3">
          <label for="password">Password</label>
          <input
            type="password"
            v-model="formValues.password"
            name="password"
            id="password"
            placeholder="********"
            minlength="8"
            required
            autocomplete="off"
            class="w-full rounded border-b-2 border-transparent bg-neutral-100 px-7 py-5 transition focus:border-b-2 focus:border-green-300 focus:outline-none focus:invalid:border-b-2 focus:invalid:border-b-red-400"
          />
        </div>

        <button
          type="submit"
          class="w-min rounded-3xl bg-emerald-400 p-3 px-12 uppercase text-white transition hover:bg-emerald-600"
        >
          Login
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const toast = useToast();
import { useAuthStore } from "../stores/auth.ts";
import { useRouter } from "vue-router";
import { useToast } from "vue-toastification";

const router = useRouter();
const store = useAuthStore();

const formValues = ref({
  email: "",
  password: "",
});

function handleSubmit() {
  store
    .login(formValues.value)
    .then((res) => {
      router.push("/");
    })
    .catch((err) => {
      const message = err.response.data.error;
      toast.error(message);
    });
}
</script>
