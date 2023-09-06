<template>
    <section class="carousel-container">
        <div v-for="(item, index) in Data" :key="index" class="carousel"
            :class="{ active: currentDataIndex === index }">
            <img class="carousel-background" :src="item.img" alt="Carousel" />
            <div class="carousel-info">
                <img :src=item.img alt="">
                <div class="carousel-info-text">
                    <h2>{{item.name}}</h2>
                    <p>{{item.description}}</p>
                    <div class="button-technologie-container">
                        <ul>
                            <li class="info-technologie" v-for="(tech, techIndex) in item.technologie" :key="techIndex">{{ tech }}</li>
                        </ul>
                        <button><a :href="item.link" target="_blank">Voir</a></button>
                    </div>
                </div>
            </div>
        </div>
        <div class="carousel-button-container">
            <img class="carousel-previous-btn" @click="goToPreviousImage" src="../assets/previous.svg" alt="Previous" />
            <img class="carousel-next-btn" @click="goToNextImage" src="../assets/next.svg" alt="Next" />
        </div>
    </section>
</template>

<script>
import Data from '../data/data.json';

export default {
    data() {
        return {
            currentDataIndex: 0,
            Data: Data,
        };
    },
    methods: {
        goToNextImage() {
            this.currentDataIndex = (this.currentDataIndex + 1) % this.Data.length;
        },
        goToPreviousImage() {
            this.currentDataIndex = (this.currentDataIndex - 1 + this.Data.length) % this.Data.length;
        },
    },
};
</script>

<style>
    .carousel-container {
        width: 100%;
    }
    .carousel-container.show {
        opacity: 1;
        -webkit-animation: fadeInLeft 2s ease forwards;
        animation: fadeInLeft 2s ease forwards;
    }
    .carousel-button-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
        width: 100%;
        bottom:450px;
        z-index: 2;
    }
    .carousel{
        display: none;
        width: 100%;
        border-radius: 25px;
        max-height: 800px;
        height: 800px;
    } 
    .carousel-background{
        filter: blur(8px);
        object-fit: cover;
        position: absolute;
        height: 100%;
        width: 100%;
        max-height: 850px;
    }
    .none{
        display: none;
    }
    .active{
        display: flex;
        justify-content: center;
        -webkit-animation: imgAnimation 0.5s;
        animation: imgAnimation 0.5s;
    }
    .carousel-next-btn,.carousel-previous-btn {
        margin-right: 20px;
        margin-left: 20px;
        cursor: pointer;
        width: 125px;
    }
    .carousel-info{
        align-items: center;
        background: #fdfdfd;
        border-radius: 10px;
        box-shadow: 0 0 18px 3px rgba(0,0,0,.6);
        color: #1e2128;
        display: flex;
        flex-direction: column;
        height: 70%;
        height: max-content;
        justify-content: center;
        opacity: 1;
        position: relative;
        right: 0%;
        bottom: -20%;
        transition-duration: 1s ease;
        width: 800px;
    }
    .carousel-info img{
        border-radius: 10px;
        height: 400px;
        width: 800px
    }
    .carousel-info-text{
        align-items: flex-start;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        margin: 0;
        padding: 20px;
        width: 90%;
    }
    .carousel-info-text h2{
        font-size: 28px;
        margin-bottom: 10px;
        color: #759BFD;
        font-family: 'Montserrat', sans-serif;
        font-family: 'Roboto', sans-serif;
        text-shadow: 3px 3px 0 #1f2127, -1px -1px 0 #1f2127, 1px -1px 0 #1f2127, -1px 1px 0 #1f2127, 1px 1px 0 #1f2127;
        text-transform: uppercase;
    }
    .carousel-info-text button{
        border-radius: 25px;
        padding: 5px 20px;
    }
    .carousel-info-text button a{
        text-decoration: none;
        color: black;
    }
    .carousel-info-text ul{
        display: flex;
    }
    .info-technologie{
        background: #1e2128;
        border-radius: 25px;
        color: #fffff4;
        font-weight: 700;
        margin-right: 10px;
        padding: 5px 20px;
        text-transform: lowercase;
    }
    .button-technologie-container{
        display: flex;
        margin-top: 15px;
    }
    @keyframes imgAnimation {
    from {
        opacity: 20%;
        transition: 200ms opacity ease-in-out;
        transition-delay: 200ms;
    }

    to {
        opacity: 100%;
        z-index: 1;
        transition-delay: 0ms;
    }
    }
    @keyframes fadeInLeft {
        0% {
        opacity: 0;
        -webkit-transform: translate3d(-100%,0,0);
        transform: translate3d(-100%,0,0);
        }
        100% {
            opacity: 1;
            -webkit-transform: translateZ(0);
            transform: translateZ(0);
        }
    }
    @media (max-width: 1150px) {
        .carousel-info{
            width: 700px;
        }
        .carousel-info img{
            width: 700px;
            height: 350px;
        }
    }
    @media (max-width: 1020px) {
        .carousel-info{
            width: 500px;
            bottom: -15%;

        }
        .carousel-info img{
            width: 500px;
            height: 250px;
        }
        .carousel-background {
            max-height: 650px;
        }
        .carousel-next-btn,.carousel-previous-btn {
            width: 80px;
        }
        .carousel-button-container {
            bottom:520px;
        }
    }
    @media (max-width: 680px) {
        .carousel-container{
            max-height: 600px;
        }
        .carousel-info{
            width: 400px;
            bottom: -10%;
        }
        .carousel-info img{
            width: 400px;
            height: 200px;
        }
        .carousel-background {
            max-height: 550px;
        }
        .carousel-next-btn,.carousel-previous-btn {
            width: 50px;
            margin: 0px 0px;
        }
        .carousel-button-container {
            bottom:550px;
        }
    }
    @media (max-width: 500px) {
        .carousel-container{
            max-height: 600px;
        }
        .carousel-info{
            width: 250px;
            font-size: 14px;
            bottom: -10%;
        }
        .carousel-info h2{
            font-size: 20px;
        }
        .carousel-info img{
            width: 250px;
            height: 150px;
        }
        .carousel-info-text {
            align-items: flex-start;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            margin: 0;
            max-width: 200px;
            padding: 15px;
        }
        .info-technologie{
            height: 20px;
            font-weight: 500;
            margin-right: 5px;
            text-align: center;
            align-items: center;
            margin-bottom: 5px;
        }
        .button-technologie-container{
            flex-wrap: wrap;
            align-items: center;
        }
        .button-technologie-container ul{
            margin-bottom: 5px;
            flex-wrap: wrap;
        }
        .button-technologie-container button{
            padding: 5px 20px;
            margin-bottom: 10px;
        }

        .carousel-background {
            max-height: 550px;
        }
        .carousel-next-btn,.carousel-previous-btn {
            width: 50px;
            margin: 0px 0px;
        }
        .carousel-button-container {
            bottom:550px;
        }
    }
</style>