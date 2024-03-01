<template>


    <div>
       <!-- <p>{{ product.title }}</p> -->
       <!-- <p>{{ product.price }}</p> -->
       <!-- <p>{{ product.id }}</p> -->
       <button class="btn my-7" @click="handleErrorss">Back to products...</button>
         
          
    </div>
    <div>
          
        <ProductDetails :product="product"/>
        </div>
</template>

<script setup>
const  {id}= useRoute().params
const handleErrorss=() =>clearError({redirect: '/products'})


const uri='https://fakestoreapi.com/products/'+id

//fetch the product
const {data:product}=await useFetch(uri,{key:id})

if(!product.value){
    throw createError({statusCode:404, statusMessage:'product not found'})
}

definePageMeta({
    layout:'products'
})
</script>

<style  scoped>

</style>