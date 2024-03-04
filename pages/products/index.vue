<template>
    
    <div class="container ">
        <h2>welcome to <span>ELECTRIFY PRODUCTS</span></h2>
        

        <div class="grid grid-cols-4 gap-5">
            <div v-for="product in products">
                <Productcart :product="product"/>
            </div>
        </div>


       
           
            
            
        </div>
    

  
    </template>
    <script setup>
              
    definePageMeta({
         layout:'products',
        
     })
   //fectch the products
    const {data: products}= await useFetch('https://fakestoreapi.com/products')
          console.log('https://fakestoreapi.com/products') 


    
</script>

<style scoped>
span{
    color: blueviolet;
    
}


</style>