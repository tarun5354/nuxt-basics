<template>
    <div class="card text-center border p-4 rounded-lg bg-white shadow-md">
      <img :src="product.image" alt="no-product" class="thumb w-full rounded-md">
      <p class="font-bold text-blue-500 m-5 truncate">{{ product.title }}</p>
      <NuxtLink :to="`/products/${product.id}`">
        <p class="btn my-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none">
          More info
        </p>
      </NuxtLink>
    </div>
  </template>

<script setup>
    const{product}=defineProps(['product'])

</script>

<style lang="scss" scoped>

</style>