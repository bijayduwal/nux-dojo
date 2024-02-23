<template>
  <div>
    <header class="shadow-sm bg-white">
      <nav class="container mx-auto p-4">
        <NuxtLink to="/products" class="font-bold">Nuxt Dojo Product</NuxtLink>
      </nav>
    </header>

    <!-- outout the page content -->
    <div class="container mx-auto p-4">
      <slot />
    </div>
  </div>

  <footer class="container mx-auto p-4 flex justify-between border-t-2">
    <ul class="flex gap-4">
      <li><NuxtLink to="/">Home</NuxtLink></li>
      <li><NuxtLink to="/About">About</NuxtLink></li>
      <li><NuxtLink to="/Products">Products</NuxtLink></li>
    </ul>
  </footer>
</template>

<script setup lang="ts"></script>

<style scoped>
.router-link-exact-avtive {
  color: brown;
}
h2 {
  margin-bottom: 20px;
  font-size: 36px;
}
p {
  border: 1px solid rgb(28, 68, 197);
  margin: 20px 0;
}
</style>
