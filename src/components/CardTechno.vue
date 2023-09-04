<template>
    <div id="card-techno">
        <img :src='props.logo' alt="">
        <p id="card-techno-text">{{ props.name }}</p>
    </div>
</template>

<script setup>
const props = defineProps(["name","logo"])

</script>
<style>
#card-techno{
    width: 150px;
    height: 7vh;
    background-color: #12141D;
    border-radius: 5px;
    display:flex;
    align-items: center;
    justify-content: space-evenly;
    color: white;
}
#card-techno img  {
   width: 20%;
}
#card-techno-text{
    font-size: 18px;
}

</style>