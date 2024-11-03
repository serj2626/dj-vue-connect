<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <main class="home">
    <!-- <div class="grid grid-cols-3 gap-12">
      <div class="card">Сообщества</div>
      <div class="card">Музыка</div>
      <div class="card">Фотографии</div>
      <div class="card">Сообщества</div>
      <div class="card">Сообщества</div>
      <div class="card">Сообщества</div>
    </div> -->
  </main>
</template>
<style scoped>
.card {
  @apply p-4 bg-white border border-gray-200 rounded-lg;
  height: 200px;
}

.home{
  height: 80vh;
  background-image: url("@/assets/iStock.jpg");
  background-size: cover;
  background-position: center;
}
</style>
