<template>
    <div class="card">
        <div class="grid grid-cols-2 gap-10">
            <div class="p-7">

                <img :src="product.image" alt="product image here" class="max-auto my-7">

            </div>
            <div class="p-7">
                <h2 class="text-4x1 my-7">{{ product.title }}</h2>
                <p class="text-x1 my-7">price-${{ product.price }} </p>
                <h3 class="font-bold border-b-2 mb-4 pb-2"> product description: </h3>
                <p class="mb-7">{{ product.description }}</p>
                <button class="btn" @click="buyTheProduct"> cart item</button><br><br>
                <button class="btn1" @click="buyin"> Buy now</button>
            
            </div>

        </div>

    

    </div>
</template>

<script setup>
const {product} =defineProps(['product'])
const cart = useCart([]);

const buyTheProduct = () => {
    console.log(product.id)
    cart.value.push({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
    })
    navigateTo({ path: '/products/cart' })
    // clearError({redirect:'/products/cart'})
}
console.log(cart.value)
const buyin=()=>clearError({redirect:'/products/buynow'})

</script>

<style lang="scss" scoped>


</style>
