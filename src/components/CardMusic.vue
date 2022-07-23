<script setup>
defineProps({
  thumbnail: {
    type: String,
    default: '',
  },
  artist: {
    type: String,
    default: '',
  },
  title: {
    type: String,
    default: '',
  },
  genre: {
    type: String,
    default: '',
  },
  price: {
    type: Number,
    default: 0,
  },
});
</script>

<template>
  <div class="flex p-2.5 shadow rounded-md bg-white first:hidden">
    <div class="w-25 h-25 shrink-0 grow-0 rounded-lg overflow-hidden relative">
      <img class="w-full h-full object-cover" :src="thumbnail" :alt="title" />
      <img
        class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        src="@/assets/play.svg"
        alt="Play Icon"
      />
    </div>
    <div class="ml-3 w-full flex flex-col">
      <small class="text-xs font-medium mb-1">{{ artist }}</small>
      <h3 class="text-sm font-bold mb-2">{{ title }}</h3>
      <div class="flex w-full mb-0 mt-auto justify-between items-center">
        <span
          class="text-xs px-2 py-0.5 bg-[#10b981] text-white rounded-full"
          >{{ genre }}</span
        >
        <div class="text-xs inline-flex text-orange-300 font-bold">
          <span
            class="w-4 h-4 rounded-full text-[10px] leading-3 mr-1 border-2 border-orange-300 text-center"
          >
            $
          </span>
          {{ price }}
        </div>
      </div>
    </div>
  </div>
</template>
