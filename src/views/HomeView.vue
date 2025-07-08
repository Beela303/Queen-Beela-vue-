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
                <router-link to="/work">Check out my work</router-link>
            </div>
        </div>
    </section>

    <!--===========================WHAT I DO================================================-->
    <section id="what-i-do" class="hidden-">
        <h1>WHAT I DO</h1>
        <TypedText :strings="['Hello', 'Hi']" :options="{ typeSpeed: 100, backSpeed: 50, loop: true }" />
        <!--===========================IMAGE ACCORDION================================================-->
        <!--<div class="support-note">let's check browser support with modernizr -->
        <!--span class="no-cssanimations">CSS animations are not supported in your browser</span-->
        <!--span class="no-csstransforms">CSS transforms are not supported in your browser</span-->
        <!--span class="no-csstransforms3d">CSS 3D transforms are not supported in your browser</span-->
        <!--<span class="no-csstransitions">CSS transitions are not supported in your browser</span>
				<span class="note-ie">Sorry, only modern browsers.</span>
			</div>		
			</div>-->
        <div class="img-gallery-body">
            <div class="col">
                <h2>WEB DEVELOPMENT</h2>
                <div class="caption">
                    <p>PYTHON | JAVASCRIPT | HTML | CSS | BOOTSTRAP | SASS | JQUERY | BOOTSTRAP | SASS | VUE |
                        DJANGO</p>
                    <a href="https://beela303-dev.vercel.app/" target="_blank" rel="noopener noreferrer"><button
                            type="button">MY PROJECTS</button></a>
                </div>
                <img src="../assets/website assets/blog website - blog list.jpeg" alt="Picture showing a blog website">
            </div>
            <div class="col">
                <h2>ART</h2>
                <P>EXPLORE THE UNIQUE PRESPECTIVE OF AN ARTIST AND ENVISION YOUR DREAMS COME TRUE.</P>
                <div class="caption">
                    <router-link to="/work/art"><button type="button">MY ARTWORKS</button></router-link>
                </div>
                <img src="../assets/My Art/Artwork - copyright/galactic ocean of dreams.jpg"
                    alt="Galactic ocean of dreams">
            </div>
            <div class="col">
                <h2>PODCAST</h2>
                <div class="caption">
                    <p>LISTEN TO UNDISCUSSED WITH NABILA, A PODCAST THAT DIVES INTO CULTURE, HIDDEN ISSUES AND THE
                        BANE
                        OF SOCIETY AT LARGE.</p>
                    <router-link to="/podcast"><button type="button">PODCAST</button></router-link>
                </div>
                <img src="../assets/Undiscussed With Nabila/undiscussed with nabila.jpg" alt="Undiscussed With Nabila">
            </div>
        </div>

        <div class="img-gallery-body-phone">
            <div class="col">
                <h2>WEB DEVELOPMENT</h2>
                <div class="caption">
                    <p>PYTHON | JAVASCRIPT | HTML | CSS | BOOTSTRAP | SASS | JQUERY | BOOTSTRAP | SASS | VUE |
                        DJANGO</p>
                    <a href="https://beela303-dev.vercel.app/" target="_blank" rel="noopener noreferrer"><button
                            type="button">MY PROJECTS</button></a>
                </div>
                <img src="../assets/website assets/blog website - blog list.jpeg">

            </div>
            <div class="col">
                <h2>ART</h2>
                <P>EXPLORE THE UNIQUE PRESPECTIVE OF AN ARTIST AND ENVISION YOUR DREAMS COME TRUE.</P>
                <div class="caption">
                    <router-link to="/work/art"><button type="button">MY ARTWORKS</button></router-link>
                </div>
                <img src="../assets/My Art/Artwork - copyright/galactic ocean of dreams.jpg"
                    alt="Galactic ocean of dreams">
            </div>
            <div class="col">
                <h2>PODCAST</h2>
                <div class="caption">
                    <p>UNDISCUSSED WITH NABILA, A PODCAST THAT DIVES INTO CULTURE, HIDDEN ISSUES AND THE BANE OF
                        SOCIETY.</p>
                    <router-link to="/podcast"><button type="button">PODCAST</button></router-link>
                </div>
                <img src="../assets/Undiscussed With Nabila/undiscussed with nabila.jpg" alt="Undiscussed With Nabila">
            </div>
        </div>
    </section>

    <!--================================= SERVICES ================================================-->
    <section id="service">
        <h2 id="services-title">SERVICES</h2>
        <div id="services">
            <div class="service-box">
                <i class="fas fa-palette"></i>
                <p>DIGITAL ART</p>
            </div>
            <div class="service-box">
                <i class="fas fa-code"></i>
                <p>FRONT-END WEB DEVELOPMENT</p>
            </div>
            <div class="service-box">
                <i class="fas fa-tablet"></i>
                <p>HTML & CSS RESPONSIVE WEBSITE</p>
            </div>
            <div class="service-box">
                <i class="fas fa-images"></i>
                <p>PSD to WEBSITE</p>
            </div>
            <div class="service-box">
                <i class="fas fa-globe"></i>
                <p>STATIC WEBSITE</p>
            </div>
        </div>
    </section>

    <!--=========================== SKILLS ================================================-->
    <h2 id="skills">SKILLS</h2>
    <section class="main">
        <div class="ia-container">
            <figure>
                <img src="../assets/Tech Stack/python.jpg" alt="PYTHON" />
                <input type="radio" name="radio-set" />
                <figcaption><span>PYTHON</span></figcaption>

                <figure>
                    <img src="../assets/Tech Stack/html.jpg" alt="HTML" />
                    <input type="radio" name="radio-set" checked="checked" />
                    <figcaption><span>HTML</span></figcaption>

                    <figure>
                        <img src="../assets/Tech Stack/css.jpg" alt="CSS" />
                        <input type="radio" name="radio-set" />
                        <figcaption><span>CSS</span></figcaption>

                        <figure>
                            <img src="../assets/Tech Stack/bootstrap.jpg" alt="BOOTSTRAP" />
                            <input type="radio" name="radio-set" />
                            <figcaption><span>BOOTSTRAP</span></figcaption>

                            <figure>
                                <img src="../assets/Tech Stack/sass.jpg" alt="SASS" />
                                <input type="radio" name="radio-set" />
                                <figcaption><span>SASS</span></figcaption>

                                <figure>
                                    <img src="../assets/Tech Stack/javascript.jpg" alt="JAVASCRIPT" />
                                    <input type="radio" name="radio-set" />
                                    <figcaption><span>JAVASCRIPT</span></figcaption>

                                    <figure>
                                        <img src="../assets/Tech Stack/jquery.jpg" alt="JQUERY" />
                                        <input type="radio" name="radio-set" />
                                        <figcaption><span>JQUERY</span></figcaption>

                                        <figure>
                                            <img src="../assets/Tech Stack/vuejs.jpg" alt="JQUERY" />
                                            <input type="radio" name="radio-set" />
                                            <figcaption><span>VUE</span></figcaption>

                                        </figure>

                                    </figure>

                                </figure>

                            </figure>
                        </figure>

                    </figure>

                </figure>
            </figure>
        </div><!-- ia-container -->
    </section>

    <!--=========================== WORK ================================================-->
    <section id="work">
        <h1>MY WORK</h1>
        <div id="work-div">
            <a href="https://beela303-dev.vercel.app/" target="_blank" rel="noopener noreferrer" class="work-divs">
                <p>WEB <br> DEVELOPMENT</p>
            </a>
            <router-link to="/work/art" class="work-divs">
                <p>DIGITAL ART</p>
            </router-link>
        </div>
    </section>

    <!--================================= CONTACT ================================================-->
    <section id="contact-email">
        <h1 class="title">GET IN TOUCH</h1>
        <div id="contact-div">
            <div>
                <div id="contact-text">
                    <p>You have a new project that you would like to see sparkle✨! <br> Send an E-mail!</p>
                    <a href="mailto:nabilaabubakar333@gmail.com"><button>OVER HERE</button></a>
                </div>
            </div>
            <img id="contact-img-right" src="../assets/My pictures/5.jpg" alt="Nabila's picture">
        </div>
    </section>
</template>

<style lang="scss">
.max-width {
    max-width: 1300px;
    margin: auto;
    padding: 0 80px;
}

#home-page {
    background: url("../assets/My Art/Artworks/below\ the\ ocean.jpg") no-repeat center;
    background-size: cover;
    background-attachment: fixed;

    height: 100vh;
    min-height: 500px;

    padding: 100px 0;

    /*color: var(--dark-purple);*/
    color: var(--white);

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
                color: var(--dark-purple);
                font-weight: 500;
            }
        }


        a {
            color: var(--white);
            background: #551150;

            font-size: 25px;
            text-decoration: none;

            padding: 12px 36px;

            margin-top: 20px;

            border: 2px solid #551150;
            border-radius: 6px;

            display: inline-block;

            transition: var(--transition);

            &:hover {
                color: var(--dark-purple);
                background: none;

                /*transition: all .3s ease;*/
                transition: var(--transition);
            }
        }
    }
}


/*IMAGE GALLERY*/
.img-gallery-body {
    /*background: #ccc;*/
    background: var(--main);

    width: 100%;
    height: 400px;

    margin: 120px auto;

    border-radius: 20px;

    display: flex;
}

.col {
    position: relative;

    color: #fff;

    height: 100%;
    padding: 25px;

    flex: 1;

    box-sizing: border-box;

    transition: .6s;
}

.col:nth-child(1) {
    background: #283491;
    border-radius: 20px;
}

.col:nth-child(2) {
    background: #f18684;
    border-radius: 20px;
    border-bottom-left-radius: 0;
}

.col:nth-child(3) {
    background: #6ee2f1;
    border-radius: 20px;
    border-bottom-left-radius: 0;
}

.img-gallery-body h2 {
    font-size: 22px;
    font-weight: 600;

    text-align: center;
}

.caption {
    width: 45%;

    font-size: 22px;

    margin: 28px 0;
    max-width: 230px;

    display: none;
}

.caption button {
    color: #fff;
    background: transparent;

    font-size: 25px;

    margin-top: 20px;

    padding: 8px 18px;

    border: 1px solid #fff;
    border-radius: 30px;

    outline: none;

    cursor: pointer;
}

.col img {
    position: absolute;

    /*width: 200px;*/
    width: 50%;
    height: 80%;

    top: 20%;

    right: 0;
    bottom: 0;

    border-radius: 30px;
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;

    object-fit: cover;
}

.col:hover {
    flex-grow: 2.5;
}

.col:hover .caption {
    display: block;
}

.img-gallery-body .col:hover h2 {
    text-align: left;
}


/*IMAGE GALLERY PHONE*/
.img-gallery-body-phone {
    /*background: #ccc;*/
    background: var(--main);

    width: 100%;
    height: 100px;


    border-radius: 20px;
}

.img-gallery-body-phone h2 {
    text-align: left;
}

.img-gallery-body-phone .col:hover {
    height: 400px;
}

.img-gallery-body-phone .col:nth-child(1) {
    border-radius: 0;
}

.img-gallery-body-phone .col:nth-child(2) {
    border-radius: 0;
}

.img-gallery-body-phone .col:nth-child(3) {
    border-radius: 0;
}

/*========================== ABOUT =============================*/
#about {
    width: 100%;
    padding: 30px;
    margin-top: 20px;

    color: #fafafa;
    background: var(--border-main2);

    border: var(--border-main);
    border-radius: 30px;

    display: none;

    #about-div {
        display: flex;
    }

    #about-text {
        font-size: 2.7rem;

        small {
            margin-left: 5%;
        }

        #about-img-right {
            width: 50%;
            height: 400px;

            object-fit: cover;

            border-radius: 25px !important;
        }
    }
}

/*========================== WHAT I DO =============================*/
.img-gallery-body,
.img-gallery-body-phone {
    width: 95%;
    margin-top: 0;
}

.img-gallery-body-phone {
    margin-left: 2.5%;
    border-radius: 20px !important;
}

/*========================== SERVICE =============================*/
#service {
    color: #fafafa;
    background: var(--border-main2);

    width: 95%;
    padding: 30px;

    margin-top: 20px;
    margin-bottom: 2%;
    margin-left: 2.5%;

    border: var(--border-main);
    border-radius: 30px;

    #services {
        display: flex;

        .service-box {
            width: 24%;
            margin: 1%;

            padding: 30px;
            border-radius: 20px;

            background: var(--dark-purple);

            text-align: center;
        }
    }
}

/*========================== SKILLS =============================*/
.ia-container {
    border-radius: 25px;
}

/*========================== WORK =============================*/
#work-div {
    color: #fafafa;
    background: var(--border-main2);

    width: 95%;
    padding: 30px;

    margin-top: 20px;
    margin-bottom: 2%;
    margin-left: 2.5%;

    border-radius: 30px;
    border: var(--border-main);

    display: flex;

    .work-divs {
        color: #fafafa;
        background: var(--dark-purple);

        width: 45%;
        margin: 2.5%;

        padding: 30px;
        border-radius: 20px;

        text-align: center;

        cursor: pointer;

        transition: var(--transition);
        transform: var(--transform);

        &:hover {
            color: var(--hover);

            transform: var(--transform);
            transition: var(--transition);
        }
    }
}

/*========================== CONTACT =============================*/
#contact-email {
    width: 95%;
    padding: 30px;

    margin-top: 20px;
    margin-bottom: 2.5%;
    margin-left: 2.5%;

    color: #fafafa;
    background: var(--dark-purple);

    border: var(--border-main);
    border-radius: 30px;

    #contact-div {
        display: flex;

        #contact-text {
            padding: 30px;
            font-size: 2rem;

            button {
                color: #fafafa;
                background: var(--light-purple);

                width: 100%;
                height: 12vh;

                margin-top: 5% !important;

                margin: 2.5%;
                padding: 20px;

                font-size: 1.5rem;

                border-radius: 25px;

                transition: var(--transition);
                transform: var(--transform);

                &:hover {
                    background: var(--main2);
                    transition: var(--transition);
                    transform: var(--transform);
                }
            }

            #contact-text small {
                margin-left: 5%;
            }
        }

        #contact-img-right {
            width: 50%;
            height: 400px;

            object-fit: cover;

            border-radius: 25px !important;
        }
    }
}

/*========================== RESPONSIVE MEDIA QUERIES 500 690 947 999 1104 1330 =============================*/
@media screen and (max-width: 1330px) {
    #home-page .max-width {
        margin-left: 0;
    }
}

@media screen and (min-width:501px) and (max-width:1023px) {
    #home-page #home-page-content {
        .text-2 {
            font-size: 50px;
        }

        .text-3 {
            font-size: 27px;
        }
    }

    /*========================== HOME-PAGE =============================*/
    #home-page-page #home-page-page-content .text-2 {
        font-size: 50px;
    }

    #home-page-page #home-page-page-content .text-3 {
        font-size: 27px;
        /*font-size: 27px;*/
    }

    /*========================== ABOUT =============================*/
    .about-text {
        width: 100%;
    }

    .img-right {
        width: 100%;
        height: 400px;
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

@media screen and (min-width: 600px) {
    .img-gallery-body-phone {
        display: none;
    }
}

@media screen and (max-width: 600px) {
    .img-gallery-body {
        display: none;
    }

    .img-gallery-body-phone {
        display: block;
    }

    /*========================== CONTACT =============================*/
    #contact-text {
        padding: 20px;
        font-size: 1.5rem;
    }

    #contact-text button {
        margin: 1%;
    }

    #gallery-picture-prev,
    #gallery-picture-next {
        font-size: 30px;
    }

    /*========================== SERVICE =============================*/
    #service {
        margin-top: 50%;
    }
}

@media screen and (max-width: 350px) {
    #service {
        margin-top: 70%;
    }

    #work-div {
        font-size: .6rem !important;
    }
}

@media screen and (max-width: 300px) {
    #service {
        margin-top: 80%;
    }
}

@media screen and (min-width:300px) and (max-width:500px) {

    /*========================== HOME-PAGE =============================*/
    #home-page #home-page-content .text-2 {
        font-size: 50px;
    }

    #home-page #home-page-content .text-3 {
        font-size: 27px;
        /*font-size: 27px;*/
    }

    /*========================== HOME-PAGE =============================*/
    #home-page-page #home-page-page-content .text-2 {
        font-size: 50px;
    }

    #home-page-page #home-page-page-content .text-3 {
        font-size: 27px;
        /*font-size: 27px;*/
    }

    /*========================== ABOUT =============================*/
    .about-text {
        width: 100%;
    }

    .img-right {
        width: 100%;
        height: 400px;
    }

}

@media screen and (max-width: 768px) {
    #contact-text {
        font-size: 1rem;
        padding: 15px;
    }

    #contact-img-right {
        height: 250px !important;
    }

    #about-text {
        font-size: 2rem;
    }

    #services {
        display: block !important;
    }

    .service-box {
        width: 100% !important;
        margin-bottom: 3% !important;
    }
}

@media screen and (max-width: 400px) {
    #contact-div {
        display: block !important;
    }

    #contact-img-right {
        width: 100% !important;
        height: 100%;
    }
}
</style>