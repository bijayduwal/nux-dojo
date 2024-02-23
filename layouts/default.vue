<template>
  <div>
    <header class="shadow-sm bg-white">
      <nav class="container mx-auto p-4 flex justify-between">
        <NuxtLink to="/" class="font-bold">Nuxt Dojo</NuxtLink>
        <ul class="flex gap-4">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/About">About</NuxtLink></li>
          <li><NuxtLink to="/Products" class="btn">Products</NuxtLink></li>
          <li><NuxtLink to="/Products/abc" >ABC Products</NuxtLink></li>
        </ul>
      </nav>
    </header>

    <!-- outout the page content -->
    <div class="container mx-auto p-4">
      <slot />
    </div>
  </div>
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
