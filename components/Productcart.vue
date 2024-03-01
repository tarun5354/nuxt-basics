<template>
    <div class="card text-center">
        <img :src="product.image" alt="no-product" class="thumb">
        <p class="font-bold text-blue-500  m-5 truncate">{{ product.title }}</p>
            <NuxtLink :to="`/products/${product.id}`">
            <p class="btn my-4"> More info</p>
            </NuxtLink>
    </div>
</template>

<script setup>
    const{product}=defineProps(['product'])

</script>

<style lang="scss" scoped>

</style>