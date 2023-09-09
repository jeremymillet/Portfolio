<template>
    <Header/>
    <div>
        <h1 class="title-all-work">{ Mes Projets }</h1>
    </div>
    <div class="projects">
        <Work v-for="workItem in data" :key="workItem.id" :workData="workItem"/>
    </div>
    <Footer/>
</template>

<script setup>
import Footer from '../components/Footer.vue'
import Header from '../components/header.vue'
import Work from '../components/Work.vue'
import data from '../data/data.json'
</script>

<style>
.projects {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 3rem 0 7rem;
    padding: 0 5rem;
}
.title-all-work{
    color: #759BFD;
    font-size: 50px;
    margin-top: 150px;
    margin-left: 50px;
}
@media (max-width: 1350px) {
    .projects{
        padding: 0 3rem;
    }
}
@media (max-width: 1025px) {
    .projects{
        padding: 0 2rem;
        margin: 3rem 0 2rem;
    }
    .title-all-work{
        text-align: center;
        margin-top: 100px;
        margin-left: 0px;
    }   
}
@media (max-width: 370px) {
    .title-all-work{
        font-size: 40px;
    }   
}
</style>