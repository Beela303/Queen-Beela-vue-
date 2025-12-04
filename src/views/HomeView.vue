<script>
import Typed from 'typed.js'

export default {
    name: '',

    data() {
        return {
            typed: ''
        };
    },

    mounted() {
        this.typed = new Typed('#typing', {
            strings: ["a Full-stack Web Developer", "an Artist", "a Podcaster"],
            typeSpeed: 50,
            backSpeed: 50,
            loop: true
        });
    }
}
</script>

<template>
    <!--===========================HOME-PAGE================================================-->
    <section id="home-page" class="hidden-">
        <div id="max-width">
            <div id="home-page-content">
                <div class="text-1">✨Hello, my name is</div>
                <div class="text-2">Nabila Abubakar</div>
                <div class="text-3">And I'm <span id="typing" class="typed">{{ typed }}</span></div>
                <router-link to="/work"><button>Check out my work</button>
                </router-link>
            </div>
        </div>
    </section>

</template>

<style lang="scss">
/*========================== HOME PAGE =============================*/
.max-width {
    max-width: 1300px;
    margin: auto;
    padding: 0 80px;
}

#home-page {
    background: url("../assets/My\ Art/Artworks/underneath the interspace of stars and clouds.png") no-repeat center;
    background-size: cover;
    background-attachment: fixed;

    height: 100vh;
    min-height: 500px;

    padding: 100px 0;

    /*color: var(--pastel-color);*/
    color: var(--text-color);

    display: flex;

    #max-width {
        margin: auto 0 auto 40px;
    }

    #home-page-content {
        .text-1 {
            font-size: 27px;
        }

        .text-2 {
            font-size: 75px;
            font-weight: 600;
            margin-left: -3px;
        }

        .text-3 {
            font-size: 40px;
            margin: 5px 0;

            span {
                color: var(--pastel-color);
                font-weight: 500;
            }
        }


        a {
            color: var(--text-color);
            background: var(--main-color); //#551050

            text-decoration: none;

            padding: 12px 36px;

            margin-top: 20px;

            border: 2px solid var(--main-color);
            border-radius: 6px;

            display: inline-block;

            transition: var(--transition);

            button {
                color: var(--text-color);
                background: var(--main-color); //#551050

                font-size: 25px;

                &:hover {
                    color: var(--main-color);
                    background: none;

                    transition: var(--transition);
                }
            }

            &:hover {
                color: var(--main-color);
                background: none;

                //transition: all .3s ease;
                transition: var(--transition);
            }
        }

    }
}

/*========================== RESPONSIVE MEDIA QUERIES =============================*/
@media screen and (max-width: 1330px) {
    #home-page .max-width {
        margin-left: 0;
    }
}

@media screen and (min-width:501px) and (max-width:1023px) {

    /*========================== HOME-PAGE =============================*/
    #home-page #home-page-content {
        .text-2 {
            font-size: 50px;
        }

        .text-3 {
            font-size: 27px;
        }
    }
}

@media screen and (max-width: 690px) {

    /*========================== HOME-PAGE =============================*/
    .max-width {
        padding: 0 23px;
    }

    #home-page #home-page-content .text-2 {
        font-size: 60px;
    }

    #home-page #home-page-content .text-3 {
        font-size: 32px;
    }

    #home-page #home-page-content a {
        font-size: 20px;
    }
}

@media screen and (min-width:300px) and (max-width:500px) {

    /*========================== HOME-PAGE =============================*/
    #home-page #home-page-content {
        .text-2 {
            font-size: 50px;

            .text-3 {
                font-size: 27px;
                /*font-size: 27px;*/
            }
        }
    }
}
</style>