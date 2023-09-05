<template>
    <div class="button-container">
        <component :is="props.type === 'home' ? 'router-link' : 'a'" 
                :to="props.type === 'home' ? '/Projets' : null"
                :href="props.type !== 'home' ? props.link : null"
                :class="props.type === 'home' ? 'button' : 'button-project'"
                :target="props.type !== 'home' ? '_blank' : null">
          {{ props.type === 'home' ? 'Tous les projets ' : 'Voir' }}
        </component>
    </div>
</template>

<script setup>
const props = defineProps(["name", "type", "link"])
</script>

<style>
.button-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 5vh;
}
.button,.button-project{
    color: black;
    background-image: linear-gradient(315deg, #759BFD, #a0b3e0);
    text-decoration: none;
    border: none;
    border-radius: 7px;
    box-shadow: 9px 7px 32px -11px #759BFD;
    cursor: pointer;
    font-size: 18px;
    font-weight: 900;
    outline: none;
    padding: 20px 80px;
    position: relative;
    text-transform: uppercase;
    transition: all .3s ease-in-out 0s;
}
.button:before,.button-project:before{
    border: 6px solid #759BFD;
    border-radius: 7px;
    box-shadow: 0 0 60px #759BFD;;
    content: "";
    height: 92px;
    left: 50%;
    opacity: 0;
    position: absolute;
    top: 50%;
    -webkit-transform: translate(-50%,-50%);
    transform: translate(-50%, -50%);
    transition: all .3s ease-in-out 0s;
    width: 400px
}

.button:after,.button-project:after{
    -webkit-animation: ringHome 1.5s infinite;
    animation: ringHome 1.5s infinite;
    border: 6px solid #759BFD;
    border-radius: 7px;
    content: "";
    height: 30px;
    left: 50%;
    position: absolute;
    top: 50%;
    -webkit-transform: translate(-50%,-50%);
    transform: translate(-50%, -50%);
    width: 30px;
    z-index: -1;
}
.button:hover::before,
.button-project:hover::before {
    opacity: 1;
}

.button:hover::after,
.button-project:hover::after {
    border: none;
}
.button-project {
    font-size: 10px;
    font-weight: 900;
    padding: 10px 40px;
}
.button-project:before{
    height: 50px;
    border: 3px solid #759BFD;
    width: 150px;
}
.button-project:after {
    -webkit-animation: ringWorkMini 1.5s infinite;
    animation: ringWorkMini 1.5s infinite;
    height: 30px;
    width: 30px;
}
@media (min-width: 1921px) {
   .button-project {
    font-size: 20px;
    font-weight: 900;
    padding: 15px 80px;
    }
    .button-project:before{
        height: 80px;
        border: 3px solid #759BFD;
        width: 250px;
    }
    .button-project:after {
        -webkit-animation: ringHomeMini 1.5s infinite;
        animation: ringHomeMini 1.5s infinite;
        height: 30px;
        width: 30px;
    }
}
@media (max-width: 500px) {
    .button:after{
        -webkit-animation: ringHomeMini 1.5s infinite;
        animation: ringHomeMini 1.5s infinite;
        border: 6px solid #759BFD;
        border-radius: 7px;
        content: "";
        height: 30px;
        left: 50%;
        position: absolute;
        top: 50%;
        -webkit-transform: translate(-50%,-50%);
        transform: translate(-50%, -50%);
        width: 50px;
        z-index: -1;
    }
    .button:before{
        border: 4px solid #759BFD;
        border-radius: 7px;
        box-shadow: 0 0 60px #759BFD;
        content: "";
        height: 60px;
        left: 50%;
        opacity: 0;
        position: absolute;
        top: 50%;
        -webkit-transform: translate(-50%,-50%);
        transform: translate(-50%, -50%);
        transition: all .3s ease-in-out 0s;
        width: 150px;
    }
    .button{
        font-size: 16px;
        padding: 15px 50px;
    }
   .button-project {
        font-weight: 900;
    }
    .button-project:before{
        border: 3px solid #759BFD;
        width: 150px;
    }
    .button-project:after{
        height: 80px;
        border: 3px solid #759BFD;
        width: 250px;
        -webkit-animation: ringWorkMini 1.5s infinite;
        animation: ringWorkMini 1.5s infinite;
    }
}

@keyframes ringWorkMini {
    0% {
        height: 20px;
        opacity: 1;
        width: 30px
    }

    to {
        height: 60px;
        opacity: 0;
        width: 150px
    }
}


@keyframes ringHomeMini {
    0% {
        height: 30px;
        opacity: 1;
        width: 30px
    }

    to {
        height: 80px;
        opacity: 0;
        width: 280px
    }
}
@keyframes ringHome {
    0% {
        height: 30px;
        opacity: 1;
        width: 30px
    }

    to {
        height: 100px;
        opacity: 0;
        width: 480px
    }
}

@keyframes ringWork {
    0% {
        height: 20px;
        opacity: 1;
        width: 30px
    }

    to {
        height: 50px;
        opacity: 0;
        width: 150px
    }
}
</style>