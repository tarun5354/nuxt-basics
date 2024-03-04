<template>
    <div>
      <div v-for="item in cart" :key="item.id" class="border p-4 mb-4">
        <span class="text-lg font-bold block">{{ item.id }}</span>
        <span class="text-base block">{{ item.title }}</span>
        <span class="text-xl font-semibold block">{{ item.price }}</span>
        <img :src="item.image" alt="Product Image" class="h-16 w-auto object-cover" />
      </div>
    </div>
  </template>
<script setup>
definePageMeta({
    layout:'products'
})
const cart = useCart([])
console.log(cart.value)
</script>

<style scoped>

</style>