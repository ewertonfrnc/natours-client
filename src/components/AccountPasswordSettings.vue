<template>
  <div class="mx-auto max-w-screen-sm">
    <h1
      class="mb-4 bg-gradient-to-r from-emerald-400 to-green-600 bg-clip-text text-2xl font-semibold uppercase text-transparent"
    >
      Your account settings
    </h1>

    <form @submit.prevent="handleSubmit" class="flex flex-col gap-6">
      <div class="flex flex-col gap-3">
        <label for="currentPassword" class="font-semibold"
          >Current Password</label
        >
        <input
          v-model="formValues.currentPassword"
          type="password"
          name="currentPassword"
          id="currentPassword"
          required
          placeholder="*******"
          class="w-full rounded border-b-2 border-transparent bg-neutral-100 px-7 py-5 transition focus:border-b-2 focus:border-green-300 focus:outline-none focus:invalid:border-b-2 focus:invalid:border-b-red-400"
        />
      </div>

      <div class="flex flex-col gap-3">
        <label for="newPassword" class="font-semibold">New Password</label>
        <input
          v-model="formValues.newPassword"
          type="password"
          name="newPassword"
          id="newPassword"
          required
          placeholder="*******"
          class="w-full rounded border-b-2 border-transparent bg-neutral-100 px-7 py-5 transition focus:border-b-2 focus:border-green-300 focus:outline-none focus:invalid:border-b-2 focus:invalid:border-b-red-400"
        />
      </div>

      <div class="flex flex-col gap-3">
        <label for="newPasswordConfirm" class="font-semibold"
          >New Password</label
        >
        <input
          v-model="formValues.newPasswordConfirm"
          type="password"
          name="newPasswordConfirm"
          id="newPasswordConfirm"
          required
          placeholder="*******"
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
import { useToast } from "vue-toastification";

const toast = useToast();
const { updatePassword } = useAuthStore();

const formValues = ref({
  currentPassword: "",
  newPassword: "",
  newPasswordConfirm: "",
});

function handleSubmit() {
  updatePassword(formValues.value)
    .then(() => {
      toast.success("Password updated!");
    })
    .catch((e) => {
      toast.error(e.response.data.message);
    });
}
</script>
