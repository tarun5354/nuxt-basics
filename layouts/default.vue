<template>
    <div>
        <header class="shadow-sm bg-white">
            <nav class="container mx-auto p-4 flex justify-between">
               <NuxtLink to="/" class="font-bold">nuxt Doji</NuxtLink>
                <ul class="flex gap-4">
                    <li><NuxtLink to="/">Home</NuxtLink></li>
                    <li><NuxtLink to="/about">about</NuxtLink></li>
                    
                    <li class="flex gap-1"  v-if=" auth.isAuthenticated">
                        <NuxtLink  to="/products" class="btn" >Products</NuxtLink>
                        
                    </li>
                       
                    <li   v-else><NuxtLink to="/signinpage" >signin</NuxtLink></li>
                    <li   ><NuxtLink to="/loginpage">error page</NuxtLink></li>

                    <!--<li><NuxtLink to="/signuppage" >signup</NuxtLink></li>-->

                     
                   
                    <p>{{ auth.isAuthenticated }}</p>
                    


                </ul>
            </nav>
        </header>
        <div class="container mx-auto p-4">
            <slot />
        </div>

    </div>
   
</template>

<script setup>
const cart=useCart();
const auth=useAuth();
function logout(){
    auth.value.isAuthenticated=false;
}

</script>
<style> 
.router-link-exact-active{
    color: blueviolet;
}

</style>