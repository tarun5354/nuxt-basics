<template>
    <div>
          <p>the product details {{id }}</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, optio vel mollitia velit possimus impedit nostrum rerum sit cumque, explicabo dicta voluptate a enim cum corporis perferendis earum aperiam ducimus.</p>
    </div>
</template>

<script setup>
const  {id}= useRoute().params

</script>

<style  scoped>

</style>