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
#info-container.show #info{
    -webkit-animation: flipInY 2s ease forwards;
    animation: flipInY 2s ease forwards;
}
#info-container{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 5vh;
}
#info-container.show{
    opacity: 1;
}
@media (max-width: 425px) {
    #info{
        width: 250px;
        font-size: 20px;
    }
}
@keyframes flipInY {
    0% {
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
    opacity: 0;
    -webkit-transform: perspective(400px) rotateY(90deg);
    transform: perspective(400px) rotateY(90deg);
    }
    40% {
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in;
        -webkit-transform: perspective(400px) rotateY(-20deg);
        transform: perspective(400px) rotateY(-20deg);
    }
    60% {
        opacity: 1;
        -webkit-transform: perspective(400px) rotateY(10deg);
        transform: perspective(400px) rotateY(10deg);
    }
    80% {
        -webkit-transform: perspective(400px) rotateY(-5deg);
        transform: perspective(400px) rotateY(-5deg);
    }
    100% {
        -webkit-transform: perspective(400px);
        transform: perspective(400px);
    }
}

</style>