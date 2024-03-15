<template>
  <div class="fixed z-[-1] bg-[#f2f2f2] w-full h-[100vh]" />
  <NuxtPage />
</template>

<script setup>
import { useUserStore } from '~/stores/user';
const userStore = useUserStore();
</script>
