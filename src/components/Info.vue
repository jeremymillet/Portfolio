<template>
    <div id="info-container">
        <div id="info">
            <p>{{ props.name }}</p>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(["name"])
</script>
<style>
#info{
    display: flex;
    background-color:#12141D;
    width: 300px;
    height: 60px;
    color: #759BFD;
    border: solid #759BFD;
    border-radius: 10px;
    text-align: center;
    align-items: center;
    justify-content: center;
    font-size: 24px;
}
#info-container{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 5vh;
}
@media (max-width: 425px) {
    #info{
        width: 250px;
        font-size: 20px;
    }
}
</style>