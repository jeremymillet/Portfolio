<template>
    <div class="hero">
        <div class="texte-container">
            <div class="name-container">
                <p class="name">Bonjour! je suis jérémy👋</p>
            </div>
            <h1>Un <strong class="text-blue">Développeur Web</strong>.Là Pour Aidez Les Entreprises à <strong class="text-blue">Lancer</strong> Ou <strong class="text-blue">Amélioré</strong> Leurs Produit</h1>
        </div>
        <div class="hero-img-container">
            <img class="hero-img" src="../assets/hero-img.png" alt="">
        </div>
    </div>
</template>

<script setup>

</script>

<style>
.hero{
    display: flex;
    align-items: center;
    background-image:linear-gradient(to right bottom, rgba(5, 8, 16, .6), rgba(5, 8, 16, .6)), url(../assets/background-hero.png);
    background-size: cover;
    background-position: top;
    height: 74vh;
    min-height: 700px;
    margin-bottom: 5vh;
    padding: 150px 100px 0;
}
.hero.show{
    opacity: 1;
}
.texte-container{
    width: 55%;
}
.hero.show .texte-container{
    animation: fadeInLeft 2s ease forwards;
}
.name-container{
    width: 220px;
    text-align: center;
    background-color:rgb(90 196 243 / 16%);
    color: #759BFD;
    padding: 5px 10px;
    font-size: 20px;
    font-weight: 900;
    border-radius: 15px;
}
.texte-container h1{
    color: white;
    font-family: Exospace;
    font-size: 55px;
    margin-top: 40px;
    margin-bottom: 20px;
    font-weight: 900;
    text-shadow: 3px 3px 0 #1f2127, -1px -1px 0 #1f2127, 1px -1px 0 #1f2127, -1px 1px 0 #1f2127, 1px 1px 0 #1f2127;
}
.texte-container h2{
    font-size: 18px;
    font-family: Exospace;
    font-weight: 700;
    letter-spacing: .04em;
    line-height: 30px;
    margin: 0;
    opacity: .8;
    text-transform: lowercase;
    color:#f5f5f5;
    text-shadow: 3px 3px 0 #1f2127, -1px -1px 0 #1f2127, 1px -1px 0 #1f2127, -1px 1px 0 #1f2127, 1px 1px 0 #1f2127;
}
.hero-img-container{
    width: 45%;
    display: flex;
    justify-content: center;
}
.hero.show .hero-img-container{
    animation: fadeInRight 2s ease forwards;
}
.hero-img{
width: 80%;
max-width: 800px;
}
.text-blue {
    color: #759BFD;
    font-family: Cyborg;
}
@media (max-width: 1350px) {
    .texte-container h1 {
        font-size: 40px;
    }
}
@media (max-width: 1020px) {
    .hero{
        flex-direction: column;
    }
    .texte-container,.hero-img-container{
        width: 100%;
    }
    .hero-img{
        width: auto;

    }
}
@media (max-width: 680px) {
    .hero{
        flex-direction: column;
        padding: 50px 50px 0;    
        min-height: 600px;
    }
    .texte-container h1 {
        font-size: 30px;
    }
    .hero-img{
        width: 325px;
    }
}
@media (max-width: 420px) {
    .hero{
        padding: 50px 25px 0;
    }
    .texte-container h1 {
        font-size: 28px;
    }
    .hero-img{
        width: 250px;
    }
   
}
@keyframes fadeInLeft {
    0% {
    opacity: 0;
    transform: translate3d(-100%,0,0);
}
100% {
    opacity: 1;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
}
}
@keyframes fadeInRight {
    0% {
    opacity: 0;
    transform: translate3d(+100%,0,0);
}
100% {
    opacity: 1;
    transform: translateZ(0);
}
}

</style>