<template>
    <div>

        <div class="mt-7 max-w-sm mx-auto text-center card">
        <p class="mt-7 text-7x1 font-bold">Thanks for buying </p>
        <p class="mt-7 text-6x1">Hope you enjoy shopping & and enjoy the festival</p>
        <p class="mt-7 "></p>
        <button class="btn my-7" @click="buyin">Go home...</button>
        
    </div>
        
    </div>

    
</template>

<script setup>
const{product}=defineProps(['product'])
const buyin=() =>clearError({redirect: '/products'})

</script>

<style lang= scoped>

</style>