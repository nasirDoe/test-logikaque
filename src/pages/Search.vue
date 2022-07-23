<script setup>
import { ref, watch, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import CardMusic from '@components/CardMusic.vue';

const router = useRouter();
const route = useRoute();
const results = ref([]);
const isLoading = ref(false);

const loadSearch = async (limit = 4) => {
  isLoading.value = true;
  const response = await fetch(
    `https://itunes.apple.com/search?term=${route.query.q}&limit=${limit}&entity=musicVideo`
  );
  const data = await response.json();
  if (data.results.length === 0) {
    results.value = data.results;
  } else {
    results.value = [results.value, ...data.results];
  }
  isLoading.value = false;
};

watch(route, (newVal, oldVal) => {
  if (newVal.query.q) {
    loadSearch();
  }
});

onMounted(() => {
  if (!route.query?.q) {
    router.push('/');
  }
  loadSearch();
});
</script>
<template>
  <div class="flex-1 break-words py-10">
    <p class="text-sm mb-5 text-center text-neutral-600">
      Search result for :
      <strong class="text-site text-lg">{{ route.query.q }}</strong>
    </p>
    <div v-if="results.length" class="px-4 space-y-4">
      <template v-for="list in results" :key="list.artistId">
        <CardMusic
          :thumbnail="list.artworkUrl100"
          :artist="list.artistName"
          :title="list.trackName"
          :genre="list.primaryGenreName"
          :price="list.collectionPrice"
        />
      </template>
      <div class="w-full text-center">
        <button
          class="bg-gray-100 text-gray-400 px-8 py-2.5 rounded-full text-sm font-medium"
          @click="loadSearch(results.length + 4)"
        >
          {{ isLoading ? 'Loading...' : 'Load More' }}
        </button>
      </div>
    </div>
  </div>
</template>
