<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { footerLinks } from '@/types/footer.data'
</script>
<template>
  <div class="flex items-center justify-around">
    <p class="">© 2024 Санкт Петербург.</p>

    <div class="flex items-center gap-4 py-8">
      <i
        v-for="link in footerLinks"
        class="cursor-pointer"
        :key="link.title"
        :style="{ color: link.color }"
        :class="link.class"
        :title="link.title"
      ></i>
    </div>
  </div>
</template>
<style scoped>
.fa-brands {
  transition: scale 0.3s ease;

  &:hover {
    scale: 1.2;
  }
}
</style>
