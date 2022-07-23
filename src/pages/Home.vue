<script setup>
import { useRouter } from 'vue-router';
import SearchForm from '@components/SearchForm.vue';
const router = useRouter();

const onSearch = (query) => {
  router.push({
    name: 'search',
    query: {
      q: query,
    },
  });
};
</script>

<template>
  <div
    class="flex-1 bg-gradient relative flex flex-wrap justify-center items-center"
  >
    <div class="w-full">
      <img class="mx-auto" src="@/assets/logo.svg" alt="Logo ngmusic" />
    </div>
    <div class="absolute bottom-6 w-full">
      <SearchForm @search="onSearch" />
    </div>
  </div>
</template>
