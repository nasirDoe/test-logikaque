<script setup>
import SearchForm from '@components/SearchForm.vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(['close']);

const close = () => {
  emit('close', props.show);
};
const onSearch = (query) => {
  router.push({
    name: 'search',
    query: {
      q: query,
    },
  });
  close();
};
</script>

<template>
  <teleport to="body">
    <transition mode="out-in">
      <div v-if="show" class="search-modal">
        <button class="absolute top-4 right-4 outline-none z-10" @click="close">
          <img src="@/assets/x.svg" alt="Close Icon" />
        </button>
        <div class="w-full">
          <SearchForm @search="onSearch" is-gradient-button />
        </div>
      </div>
    </transition>
  </teleport>
</template>

<style scoped>
.search-modal {
  background-color: rgba(28, 28, 45, 0.9);
  @apply z-50 fixed top-0 left-0 w-full h-full flex items-center;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
