<script setup>
import './main.css'
import { RouterView } from "vue-router"
</script>

<template>
  <div>
    <RouterView />
  </div>
</template>

<style>

#technologies-container{
    display: flex;
    justify-content: center;
    align-items: center;
    width:100%;
    margin-bottom: 5vh;
}
#card-container{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #759BFD;
    width: 70%;
    padding: 30px 0px;
    border-radius: 10px;
    flex-wrap: wrap;
    row-gap: 20px;
    column-gap: 20px;
    
}

</style>