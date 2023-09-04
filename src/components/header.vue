<template>
    <div id="header">
        <div id="logo">
            <a href="/"> <img src="../assets/logo.png"  alt=""></a>
        </div>
        <div class="menu-toggle">
            <input @click="toggleCollapse" type="checkbox" class="nav-checkbox" id="nav-toggle">
            <label for="nav-toggle" class="nav-button">
                <span class="nav-icon"></span>
            </label>
            <div v-if="isCollapsed" class="collapse">
                <Navigation/>
            </div>
        </div>
    </div>
</template>


<script>
import Navigation from "./navigation.vue"; // Chemin vers le composant de navigation

export default {
    components: {
        Navigation // Enregistrement du composant Navigation
    },
    data() {
        return {
            isCollapsed: false
        };
    },
    methods: {
        toggleCollapse() {
            this.isCollapsed = !this.isCollapsed;
        }
    }
};
</script>

<style>
    #header{
        width: 100%;
        height: 10vh;
        background-color: #759BFD;
        display:flex;
        justify-content: space-between;
        position:sticky;
        top: 0;
        z-index: 100;
        min-height: 84px;
    }
    .menu-toogle{
      transform: none!important;  
    }
    .nav-checkbox{
        display: none;
    }
    .nav-button{
        align-items: center;
        animation: wobble 1s ease 10s forwards;
        animation-iteration-count: 3;
        border-radius: 5px;
        cursor: pointer;
        display: flex;
        height: 45px;
        justify-content: center;
        position: fixed;
        right: 5rem;
        top: 25px;
        width: 60px;
        z-index: 2000;
    }
    .nav-icon{
        background-color: #1e2128;
        border-radius: 4px;
        display: inline-block;
        height: 8px;
        margin-right: -0.8rem;
        position: relative;
        transform: rotate(.5turn);
        width: 2.7rem; 
    }
    .nav-icon:before {
        top: -0.8rem;
    }
    .nav-icon:after {
        top: 0.8rem;
    }
    .nav-icon:before,.nav-icon:after {
        content: "";
        left: 0;
        position: absolute;
        transition: all .2s;
        background-color: #1e2128;
        border-radius: 4px;
        display: inline-block;
        height: 8px;
        width: 2rem;
    }
    .nav-icon:after {
        height: 8px;
        width: 3.5rem;
    }
    .nav-checkbox:checked+.nav-button .nav-icon {
        background-color: transparent;
    }
    .nav-checkbox:checked+.nav-button .nav-icon:before,.nav-checkbox:checked+.nav-button .nav-icon:after {
        top: 0;
        transform: rotate(135deg);
        width: 3.5rem;
    }
    .nav-checkbox:checked+.nav-button .nav-icon:after {
        transform: rotate(-135deg);
    }
    .nav-button:hover .nav-icon:before {
        top: -1rem;
    }
    .nav-button:hover .nav-icon:after {
        top: 1rem;
    }
    #logo{
        margin-left: 4vw;
        display: flex;
        align-items: center;
    }
    @media (max-width: 650px) {
        .nav-checkbox:checked+.nav-button .nav-icon:before,.nav-checkbox:checked+.nav-button .nav-icon:after {
            background-color: #759BFD;
        }
        .nav-button{
            right: 2rem;
            top: 25px;
            z-index: 2000;
        }
    }
    @media (max-width: 425px) {
        .nav-checkbox:checked+.nav-button .nav-icon:before,.nav-checkbox:checked+.nav-button .nav-icon:after {
            background-color: #759BFD;
        }
        .nav-icon{
        height: 6px;
        width: 2.2rem; 
        }
        .nav-icon:before {
            top: -0.6rem;
        }
        .nav-icon:after {
            top: 0.6rem;
        }
        .nav-icon:before,.nav-icon:after {
            height: 6px;
            width: 1.5rem;
        }
        .nav-icon:after {
            height: 6px;
            width: 3rem;
        }
        .nav-checkbox:checked+.nav-button .nav-icon:before,.nav-checkbox:checked+.nav-button .nav-icon:after {
            width: 2.5rem;
        }
        .nav-button:hover .nav-icon:before {
            top: -0.6rem;
        }
        .nav-button:hover .nav-icon:after {
            top: 0.6rem;
        }
        #logo img{
            width: 70%;
        }
    }
</style>
