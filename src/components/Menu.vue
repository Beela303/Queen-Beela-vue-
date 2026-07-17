<script>
import Typed from 'typed.js';
import VTooltip from 'v-tooltip';

export default {
    data() {
        return {
            typed: '',
        }
    },

    methods: {

    },

    mounted() {
        this.typed = new Typed('#typing-name', {
            strings: ["Queen Beela", "Nabila", "凤星云", "봉성운", "@Beela303", "Q.B", "Queen Beela"],
            typeSpeed: 50,
            backSpeed: 50,
            loop: false,
            showCursor: false
        });
    },

    directives: {
        tooltip: VTooltip,
    },
}
</script>

<template>
    <header>
        <router-link to="/">
            <p id="typing-name"></p>
            <!--<p id="typing-name" class="typed">{{ typed }}</p>-->
        </router-link>

        <a href="mailto:nabilaabubakar333@gmail.com" title="E-mail"><i class="fas fa-envelope"></i></a>
    </header>

    <!--======================================== MENU ==========================================================-->
    <nav>
        <ul>
            <li v-tooltip="Home"><router-link to="/" title="Home" exact-active-class="active-class"><i
                        class="fas fa-home"></i></router-link></li>
            <li v-tooltip="Writing & Podcast"><router-link to="writingandpodcast" title="Writing & Podcast"
                    exact-active-class="active-class"><i class="fas fa-keyboard"></i></router-link></li>
            <!--<li v-tooltip="Blogs"><router-link to="blogs" title="Blogs"><i class="fas fa-blog"></i></router-link></li>
            <li v-tooltip="Podcast"><router-link to="podcast" title="Podcast"><i
                        class="fas fa-podcast"></i></router-link></li>-->
            <li v-tooltip="Work & Experience"><router-link to="workexp" title="Work & Experience"
                    exact-active-class="active-class"><i class="fas fa-stream"></i></router-link></li>
            <li v-tooltip="Gallery"><router-link to="gallery" title="Gallery" exact-active-class="active-class"><i
                        class="fas fa-video"></i></router-link>
            </li>
            <li v-tooltip="Socials"><router-link to="socials" title="Socials" exact-active-class="active-class"><i
                        class="fas fa-user"></i></router-link>
            </li>
        </ul>
    </nav>
</template>

<style lang="scss">
nav {
    /*background: var(--linear-gradient-hover);
    background: rgba(66, 2, 66, 0.6);
    background: rgba(255, 255, 255, .2);*/

    background: rgba(255, 255, 255, .2);

    width: 90%;
    height: 7vh;

    margin-left: 5%;
    margin-top: 92vh;
    //margin-top: 90vh;

    border-radius: 30px;
    border: 1px solid rgba(255, 255, 255, .3);

    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    backdrop-filter: blur(10px);
    --webkit-backdrop-filter: blur(10px);

    position: fixed;
    z-index: 9999;

    h1 {
        cursor: pointer;
    }

    ul {
        color: var(--white);

        display: flex;
        justify-content: space-between;

        transition: .5s;

        li {
            font-size: 23px;

            transition: .5s;
            cursor: pointer;

            a {
                color: var(--white);

                padding: 14px 16px;
                transition: .5s;

                &:hover {
                    color: var(--main-color);
                    //color: var(--hover);
                }
            }
        }
    }
}

.active-class {
    background-color: var(--main-color);

    border-radius: 30px;
}

/*========================== HEADER =============================*/
header {
    width: 90%;
    height: 7%;

    top: 1%;
    margin-left: 5%;

    border-radius: 30px;

    font-size: 2rem;

    /*background: var(--linear-gradient-hover);*/
    background: rgba(255, 255, 255, .2);

    border: 1px solid rgba(255, 255, 255, .3);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    backdrop-filter: blur(10px);
    --webkit-backdrop-filter: blur(10px);

    display: flex;
    justify-content: space-around;

    position: fixed;
    z-index: 9999;

    a {
        color: var(--text-color);

        &:hover {
            color: var(--hover);
        }
    }
}

@media screen and (max-width: 600px) {
    nav {
        margin-top: 92vh !important;
        //margin-top: 85vh;
    }
}

@media screen and (max-width: 350px) {
    header {
        font-size: 1.8rem;
    }
}
</style>