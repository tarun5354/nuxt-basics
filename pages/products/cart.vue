<template>
    <div v-for="item in cart" :key="item.id">
        {{ item.id }}
        {{ item.title }}
        {{ item.price }}

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