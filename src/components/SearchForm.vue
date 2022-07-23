<script setup>
import { ref } from 'vue';
const search = ref('');
defineProps({
  isGradientButton: {
    type: Boolean,
  },
});
const emit = defineEmits(['search']);

const onSearch = (e) => {
  emit('search', search.value);
};
</script>
<template>
  <form @submit.prevent="onSearch" class="px-6 flex flex-col space-y-4">
    <input
      v-model="search"
      type="search"
      name="search"
      class="px-4 py-2.5 rounded-full bg-white font-medium text-center text-sm outline-none placeholder:text-gray-500"
      placeholder="Artist / Album / Title"
      autocomplete="off"
    />
    <button
      :class="{ 'bg-gradient': isGradientButton }"
      class="px-4 py-2.5 rounded-full text-sm text-center bg-white bg-opacity-20 text-white font-medium outline-none"
    >
      Search
    </button>
  </form>
</template>
