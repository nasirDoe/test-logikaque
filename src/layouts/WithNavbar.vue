<script setup>
import Navbar from '@components/partials/Navbar.vue';
</script>

<template>
  <div class="w-full max-w-lg min-h-screen flex flex-col">
    <navbar />
    <main class="flex-1">
      <slot />
    </main>
  </div>
</template>
