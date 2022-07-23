<script setup>
import { ref } from 'vue';
import SearchModal from '@components/modals/SearchModal.vue';

const show = ref(false);
</script>
<template>
  <nav class="navbar">
    <button class="navbar__menu">
      <img src="@/assets/menu.svg" alt="My Menu" />
    </button>
    <div class="navbar__logo">
      <img src="@/assets/ngmusic.svg" alt="Logo Text" />
    </div>
    <button class="navbar__search" @click="show = true">
      <img src="@/assets/search.svg" alt="Search button" />
    </button>
  </nav>
  <SearchModal :show="show" @close="show = false" />
</template>
<style scoped>
.navbar {
  @apply sticky top-0 h-15 px-4 w-full flex items-center justify-between overflow-x-hidden z-50;
  &__logo,
  &__menu,
  &__search {
    @apply w-auto relative z-10;
  }
  &__menu,
  &__search {
    @apply -top-1.5;
  }
  &::before {
    content: '';
    background-image: linear-gradient(
      100deg,
      var(--bg-site),
      var(--bg-site-light) 100%
    );
    box-shadow: 0 0 10px 0 rgba(var(--bg-site, 0.75));
    border-radius: 50%/50px;
    @apply absolute left-1/2 -translate-x-1/2 bottom-0 w-[150%] h-28;
  }
}
</style>
