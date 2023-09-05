<template>
    <div>
        <Header/>
        <Hero class="hidden" />
        <Info name="Outils" class="hidden" />
        <div class="technologies-container hidden">
            <div class="card-container">
                <CardTechno name="React" :logo="ReactLogo" />
                <CardTechno name="Vue" :logo="VueLogo" />
                <CardTechno name="Sass" :logo="SassLogo" />
                <CardTechno name="Javascript" :logo="JsLogo" />
                <CardTechno name="Github" :logo="GithubLogo" />
                <CardTechno name="Node" :logo="NodeLogo" />
                <CardTechno name="MongoDB" :logo="MongoLogo" />
                <CardTechno name="PHP" :logo="PhpLogo" />
            </div>
        </div>
        <Info name="Projets" class="hidden" />
        <Carousel :data="Data" class="hidden"/>
        <ButtonAnime link="/Projets" type="home" name="Tous les projets"/>
        <Footer/>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Footer from '../components/Footer.vue';
import Header from '../components/header.vue';
import Data from '../data/data.json';
import ButtonAnime from '../components/ButtonAnime.vue';
import Hero from '../components/Hero.vue';
import CardTechno from '../components/CardTechno.vue';
import Info from '../components/Info.vue';
import ReactLogo from '../assets/react.png';
import VueLogo from '../assets/vue.png';
import SassLogo from '../assets/sass.png';
import JsLogo from '../assets/js.png';
import GithubLogo from '../assets/github.png';
import NodeLogo from '../assets/node.png';
import MongoLogo from '../assets/mongo.png';
import PhpLogo from '../assets/php.png';
import Carousel from '../components/carousel.vue';

onMounted(() => {
    const hiddenElements = document.querySelectorAll('.hidden');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    });

    hiddenElements.forEach((el) => observer.observe(el));
});
</script>
<style>
body{
    margin: 0px;
    background-color: #050810;
    font-family:Exospace;
}

.technologies-container{
    display: flex;
    justify-content: center;
    align-items: center;
    width:100%;
    margin-bottom: 5vh;
}
.technologies-container.show{
    opacity: 1;
}
.card-container{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #759BFD;
    width: 50%;
    padding: 30px 0px;
    border-radius: 10px;
    flex-wrap: wrap;
    row-gap: 20px;
    column-gap: 20px;
}
.technologies-container.show .card-container {
    animation: jackInTheBox 2s ease forwards;
}
.show{
    opacity: 1;
}
.hidden{
    opacity: 0;
}
@media (max-width: 420px) {
   #card-container{
        width: 60%;
    }
}
@keyframes jackInTheBox {
    0% {
    opacity: 0;
    -webkit-transform: scale(.1) rotate(30deg);
    transform: scale(.1) rotate(30deg);
    -webkit-transform-origin: center bottom;
    transform-origin: center bottom;
    }
    50% {
        -webkit-transform: rotate(-10deg);
        transform: rotate(-10deg);
    }
    70% {
        -webkit-transform: rotate(3deg);
        transform: rotate(3deg);
    }
    100% {
        opacity: 1;
        -webkit-transform: scale(1);
        transform: scale(1);
    }
}
</style>