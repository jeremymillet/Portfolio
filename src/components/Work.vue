<template>
    <div :class="['work', { 'work-paire': props.workData.Id % 2 !== 0 }]">
        <div class="work-image-container">
            <img :class="['work-image', { 'work-image-paire': props.workData.Id % 2 !== 0 }]" crossorigin="anonymous" :src="props.workData.img" alt="">
        </div>
        <div class="text-part">
            <div class="work-name-container">
                <p> {{ props.workData.name }} </p>
            </div>
            <div class="work-text-container">
                <p><strong class="text-blue-work">problème:</strong> {{ props.workData.problème }}</p><br>
                <p><strong class="text-blue-work">solution:</strong> {{ props.workData.solution }}</p><br>
                <p><strong class="text-blue-work">description:</strong> {{ props.workData.description }}</p><br>
            </div>
            <div class="work-button-container">
                <ButtonAnime :link=props.workData.link type="work" name="Voir"/>
            </div>
        </div>
    </div>
</template>
<script setup>
import ButtonAnime from './ButtonAnime.vue'
const props = defineProps(["workData"]);
</script>

<style>
.work,.work-paire {
    align-items: center;
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    margin: 100px 0px;
    width: 100%;
}
.work-paire{
    flex-direction: row;
}
.text-part {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 398px;
    color: white;
}
.work-image-container{
    align-items: center;
    display: flex;
    justify-content: center;
    width: 50%;
}

.work-name-container p{
    width: 200px;
    border: 3px solid #759BFD;
    box-shadow: 6px 6px 0 0 #759BFD;
    color: #759BFD;
    font-size:18px;
    font-weight: 900;
    padding: 15px 20px;
    text-transform: uppercase;
    text-align: center;
}
.work-text-container {
    margin:50px 40px 40px 40px ;
    display: flex;
    text-align: center;
    flex-direction: column;
}
.work-text-container p {
   font-size: 18px;
}
.text-blue-work {
    color: #759BFD;
    font-family: Exospace;
}
.work-image {
    border-radius: 15px;
    box-shadow: 0 60px 123px -25px hsla(225, 2%, 62%, .42), 0 35px 75px -35px hsla(225, 2%, 62%, .08);
    filter: blur(0);
    height: 398px;;
    max-height: 550px;
    opacity: 1;
    transition: all .6s ease;
    width: 100%;
    max-width: 800px;
    transform: perspective(800px) rotateY(-25deg) scale(.8) rotateX(10deg);
}
.work-image-paire{
    border-radius: 15px;
    box-shadow: 0 60px 123px -25px hsla(225, 2%, 62%, .42), 0 35px 75px -35px hsla(225, 2%, 62%, .08);
    -webkit-filter: blur(0);
    filter: blur(0);
    opacity: 1;
    transform: perspective(800px) rotateY(25deg) scale(.8) rotateX(10deg);
    transition: all .6s ease;
    width: 100%;
    height: 398px;;
    max-height: 500px;
    max-width: 800px;
}
.work-image:hover {
    box-shadow: 0 19px 67px -38px hsla(225,2%,62%,.8);
    filter: blur(0.2px);
    transform: perspective(800px) rotateY(15deg) translateY(-50px) rotateX(10deg) scale(0.9);
}
.work-image-paire:hover {
    box-shadow: 0 19px 67px -38px hsla(225,2%,62%,.8);
    filter: blur(0.2px);
    transform: perspective(800px) rotateY(-15deg) translateY(-50px) rotateX(10deg) scale(0.9);
}
@media (min-width: 1921px) {
   .work-image {
    height: 500px;
    max-width: 1000px;
    }
    .work-image-paire{
    height: 500px;
    max-width: 1000px;
    }
    .work-name-container p{
    width: 300px;
    font-size:30px;
    padding: 20px 25px;
    }
    .work-text-container p {
    font-size: 20px;
    }
}
@media (max-width: 1350px) {
   .text-part {
        width: 40%;
        height: auto;
    }
    .work{
        margin: 50px 0;
    }
    .work-image-container{
        width: 60%;
    }
    .work-name-container {
        margin: 0px 0px 0px 0px;
    }
    .work-text-container  {
        margin: 30px 0px 0px 0px;
    }
    .work-image,.work-image-paire {
        height: 350px;
        max-width: 600px;
    }
}
@media (max-width: 1025px) {
    .work{
        flex-direction: column;
    }
   .text-part {
        width: 100%;
        height: auto;
    }
    .work-image-container{
        width: 100%;
    }
    .work-name-container {
        margin: 50px 0px 0px 0px;
    }
    .work-text-container  {
        margin: 50px 0px 20px 0px;
    }
    .work-image,.work-image-paire {
        height: 450px;
        max-width: 900px;
    }
    .work-image{
        transform: perspective(800px) rotateY(-20deg) scale(.8) rotateX(10deg);
    }
    .work-image-paire{
        transform: perspective(800px) rotateY(20deg) scale(.8) rotateX(10deg);
    }
    .work-image:hover {
    transform: perspective(800px) rotateY(10deg) translateY(-50px) rotateX(10deg) scale(0.9);
    }
    .work-image-paire:hover {
        transform: perspective(800px) rotateY(-10deg) translateY(-50px) rotateX(10deg) scale(0.9);
    }
    .work-image,.work-image-paire img {
        height: 398px;
        width: 700px;
    }
}
@media (max-width: 650px) {
    .work{
        flex-direction: column;
        margin: 10px 0px 10px 0px;
    }
    .work-name-container p  {
        font-size: 15px;
        padding: 10px 15px;
    }
    .work-text-container p  {
        font-size: 16px;
    }
    .work-image,.work-image-paire {
        height: auto;
        max-height: 350px;
        max-width: 900px;
    }
    .work-image,.work-image-paire img {
        height: 280px;
        width: 500px;
    }
}
@media (max-width: 425px) {
    .work-image,.work-image-paire img {
        height: 199px;
        width: 350px;
    }
}
</style>