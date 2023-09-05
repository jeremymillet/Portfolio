<template>
    <div>
        <Hero />
        <Info name="Outils" />
        <div id="technologies-container">
            <div id="card-container">
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
        <Info name="Projets" />
        <Carousel :data="Data"/>
        <ButtonAnime link="/Projets" type="home" name="Tous les projets"/>
    </div>
</template>

<script setup>

import { ref } from 'vue';
import Data from '../data/data.json'
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

</script>
<style>
body{
    margin: 0px;
    background-color: #050810;
    font-family:Exospace;
}

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
    width: 50%;
    padding: 30px 0px;
    border-radius: 10px;
    flex-wrap: wrap;
    row-gap: 20px;
    column-gap: 20px;
}
@media (max-width: 420px) {
   #card-container{
        width: 60%;
    }
}
</style>