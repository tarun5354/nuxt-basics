<!-- SignIn.vue -->
<template>
    <div class="min-h-screen flex items-center justify-center">
      <div class="bg-white p-8 shadow-md rounded-md w-96">
        <h2 class="text-2xl font-semibold mb-6">Sign In</h2>
        <div v-if="_error">
        <p class="bg-red-700 text-red-300 text-small">{{ _error}}</p></div>
        <form @submit.prevent="onSubmit">
          <div class="mb-4">
            
            <label for="email" class="block text-gray-700 text-sm font-medium">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              class="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
              required
              v-model="form.email"
            />
          </div>
  
          <div class="mb-4">
            <label for="password" class="block text-gray-700 text-sm font-medium">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              class="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
              required

              v-model="form.password"
            />
          </div>
  
          <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none">
            <span v-if="isLoading">loading...</span>
            <span v-else>sign in</span>
          </button>
       
        </form>
        <p class="mt-4 text-sm text-gray-600">
          Don't have an account? <a href="/signup" class="text-blue-500 hover:underline">Sign Up</a>
        </p>
      </div>
    </div>
  </template>
   
   <script setup>
const url="https://reqres.in/api/login";
 const isLoading=ref(false);
 const _error=ref(null);

const form=reactive({
    email:"eve.holt@reqres.in",
    password:"cityslicka",

})
 async function onSubmit(){

  if(isLoading.value) return;
        
  isLoading.value=true;

    const {data,error}= await useFetch(url,{
        method:"post",
        body:form,
    });



    isLoading.value=false;


    if(error.value){
      _error.value=error.value.data.error;
      return;

    }
    console.log(data.value,error.value);
    const auth=useAuth()
    auth.value.isAuthenticated=true;
    navigateTo("/")

}


</script>
  