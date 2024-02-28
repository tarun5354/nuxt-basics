<template>
    <div class="container ">
        <h2>welcome to <span>ELECTRIFY PRODUCTS</span></h2>


        <div class="grid grid-cols-4 gap-5">
            <div v-for="product in products">
            <NuxtLink :to="`/products/${p.id}`">{{ p.title }}</NuxtLink>
            
            </div>
        </div>
    

    </div>
    </template>
    <script setup>

    definePageMeta({
        layout:'products'
    })

    const {data:products}= await useFetch('https://fakestoreapi.com/products')



    
</script>

<style scoped>
span{
    color: blueviolet;
    
}


</style>