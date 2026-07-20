<script>
import Typed from 'typed.js'

export default {
    name: 'HomeView',

    data() {
        return {
            typed: '',

            // NAV VAR
            isFixed: false,
            navTopOffset: 0,

            // LANGUAGES
            languages: [
                { name: 'English', percentage: 100 },
                { name: 'Chinese', percentage: 55 },
                { name: 'Korean', percentage: 45 },
                { name: 'Hausa', percentage: 70 },
                { name: 'Igala', percentage: 55 }
            ],

            hobbies: [
                { id: 1, name: 'Dancing', icon: 'fa-music', description: 'Expressing my self through my body movements.' },
                { id: 2, name: 'Singing', icon: 'fa-microphone', description: 'Telling stories through lyrics.' },
                { id: 3, name: 'Photography', icon: 'fa-camera-retro', description: 'Capturing landscapes and street life.' },
                { id: 4, name: 'Art', icon: 'fa-palette', description: 'Exploring the world and documenting it.' },
                { id: 5, name: 'Writing', icon: 'fa-keyboard', description: 'Showcasing the world of imagination through writing.' },
                { id: 6, name: 'Coding', icon: 'fa-code', description: 'Building things I want and like.' },
                { id: 7, name: 'Gaming', icon: 'fa-gamepad', description: 'Having fun in another world.' },
            ],
        };
    },

    mounted() {
        // INITIALIZED TYPED.JS
        this.typed = new Typed('#typing', {
            strings: [
                "a Software Developer",
                "a Nurse",
                "an Artist",
                "a Podcaster",
                "a Poet",
                "a Writer",
                "a Blogger",
                "a Fashion Designer"
            ],
            typeSpeed: 50,
            backSpeed: 50,
            startDelay: 300,
            loop: true
        });

        // INITIALIZED FIXED NAV
        if (this.$refs.navWrapperRef) {
            this.navTopOffset = this.$refs.navWrapperRef.offsetTop
            window.addEventListener('scroll', this.handleScroll)
        }
    },

    unmounted() {
        // Global Window Listeners
        window.removeEventListener('scroll', this.handleScroll)

        // Active Intersection Observer
        if (this.observer) {
            this.observer.disconnect()
        }

        // Typed Instance to prevent heavy RAM leaks
        if (this.typed) {
            this.typed.destroy()
        }
    },

    methods: {
        // NAV
        handleScroll() {
            this.isFixed = window.scrollY >= this.navTopOffset
        },

        // LANGUAGES
        getColorClass(pct) {
            if (pct < 35) return 'range-low'
            if (pct < 75) return 'range-mid'
            return 'range-high'
        }
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
                <div class="text-3">And I'm <span id="typing" class="typed"></span></div>
                <router-link to="/workexp"><button>Check out my work</button></router-link>
            </div>
        </div>
    </section>


    <!--========================== NAV =============================-->
    <div ref="navWrapperRef" id="nav-wrapper">
        <div id="home-nav" ref="navRef" :class="{ 'is-fixed': isFixed }">
            <ul>
                <li><a href="#about-me">About Me</a></li>
                <li><a href="#my-story">My Story</a></li>
                <li><a href="#work">Work</a></li>
                <li><a href="#languages">Languages</a></li>
                <li><a href="#hobbies">Hobbies</a></li>
            </ul>
        </div>
    </div>

    <!--========================== ME =============================-->
    <div class="full">
        <section id="about-me">
            <h2>Multifaceted Artist with a background in Science</h2>

            <p>I believe everything can be ART and everything is ART.</p>
            <p>I use ART to capture memories, experiences, timelines and illusions,
                <br>
                using this art,
                <br>
                I write lines of poetry crafted to express this art,
                <br>
                I still use this art as an inspiration to code lovely websites and apps to tell stories
                <br>
                and also create beautiful and fashionable designs that expresses identities and personas.
                <br>
                My background as a Nurse also teaches me a lot about empathy and how everything can be shown.
            </p>
        </section>
    </div>

    <!--========================== MY STORY =============================-->
    <section id="my-story">
        <h2>My Story</h2>

        <p>Every single thing I do didn't just start from nowhere but has been a testimony
            of perseverance, faith, endurance and passion.
        </p>
        <h3>Singing</h3>
        <p>I started singing before I could even speak and wrote songs and poetry before I could
            even properly write. I found myself always singing and I got bullied by my classmates
            in Junior Secondary School because of this, this led me to slowly sing less and over time,
            I found out I never sang as much as before.
            <br>
            Later in life, I realized this was just giving them what they wanted so I started being me again
            and also found my found my passion in Dance.
        </p>
        <h3>Knitting & Crochet</h3>
        <p>At 6, my mum taught me how to knit and crochet. In Junior Secondary School, I often sold
            Scrunchies to classmates.
        </p>
        <h3>Jewelry Making & Design</h3>
        <p>At 7, I loved how Jewelry were being made and how it looked, so my mum tok me for classes
            during the holiday, after which I started making pieces for myself and my mum.
        </p>
        <h3>Fashion Design</h3>
        <p>I started sewing and designing clothes mainly because of the clothes Sofia from
            Sofia the First wore, especially the one she wore for the flying horse race so I asked
            my mum to get me a purple material and some sewing materials. From there, I traced my
            clothes onto the fabric, cut it and hand sewed it.
            <br>
            I went further to learn properly by watching YouTube videos.
            <br>
            In 2023, my mum enrolled me in a class that lasted about a month and a half
            to learn more about producing clothes, different machines and how to use them.
            <br>
            I later took an online Diploma course that year on Fashion Design and another on Business
            Administration on Alison despite being in Nursing School.
        </p>
        <h3>Design (General)</h3>
        <p>During a holiday at around 10-12, I learnt how to make throw pillows and artistic designs
            using bottles, mirrors, cardboard and some other materials. This fueled my artistic
            passions and how every single item could be used to make beautiful pieces.
        </p>
        <h3>Coding</h3>
        <p>In JSS 3 (9th grade, 2018), we were taught Scratch and how to use it to make stories and
            games, this sparked my love in coding, at the time, I wanted to become a game developer.
            <br>
            After graduating from secondary school, I started learning how to code but got into web
            development and later app development.
        </p>
        <h3>Music</h3>
        <p>At 12, I learnt how to play the acoustic guitar, which also made me learn a lot about
            music and music production.
            <br>
            Around 2021 - 2023 and started learning how to use bandlab to make and produce my
            own songs, fueling my artistic passion.
        </p>
        <h3>Writing</h3>
        <p>I wrote my first book at 13/14 on Wattpad which got over a thousand views and two awards
            but unfortunately I didn't finish it at the time. (I'm currently working on this book)
            <br>
            Although from a young age, I've been into poems and song writing, I never really wrote them
            down or published them so at 19, in 2025, I made my blog
            <a href="http://beela303.blogspot.com" target="_blank" rel="noopener noreferrer">Queen Beela</a>
            where I started posting my works, thoughts generally and what I'm up to.
        </p>
        <h3>Podcasting</h3>
        <p>
            I've always been interested in public speaking and debates that eventually led me to
            create my own podcast.
            <br />
            It's called Undiscussed With Nabila, and it's named that way
            because I use this as an avenue for expression, exploration and literally discussing
            ANYTHING and EVERYTHING.
        </p>
        <h3>Nursing</h3>
        <p>In 2023, I followed another of my passions (since I was 3) to be in the medical field
            which shaped my perception of life.
            <br>
            Despite how stressful Nursing School was, I still continued with my other passions and interests.
            <br>
            I became an ambassador and a frontend and backend intern before graduation.
        </p>
        <h3>2026</h3>
        <p>
            [MAY]
            <br />
            I graduated from Nursing school
            and officially became a Registered Nurse (RN).
            <br />
            [JUNE]
            <br />
            I attended an Art x Tech Workshop by CAVIC that helped me understand more about visuals, sound,
            haptics, immersion and experience.
            <br />
            [JULY]
            <br />
            Currently enrolled in a K-POP dance class by the Korean Cultural Center.
        </p>
    </section>

    <!--========================== WORK =============================-->
    <section id="work">
        <h1>What I do</h1>

        <div class="job">
            <div class="left">
                <h2>Software Development</h2>
                <p>I'm a fullstack web and app developer with experience as a Frontend and Backend Intern at
                    FlexiSAF
                    Edusoft Limited.
                </p>
                <br />
                <p>
                    FRONTEND: Vue.js, React.js, Tailwind, Bootstrap, SASS/SCSS, CSS & JavaScript
                    <br />
                    BACKEND: Django, MySQL, Python
                    <br />
                    APP: Ionic, Electron
                </p>
                <br />
                <p>Check out my dev portfolio at <a href="https://beela303-dev.vercel.app/" target="_blank"
                        rel="noopener noreferrer">https://beela303-dev.vercel.app/</a></p>
            </div>
            <div class="right">
                <img src="../assets/website assets/inventory_dashboard/categories-inventory-dashboard.jpg"
                    alt="My Picture" class="photo">
            </div>
        </div>

        <div class="job">
            <div class="left">
                <h2>Art</h2>
                <p>I'm both a tradional (Pencil) and digital artist.</p>
                <br />
                <p>Art is a way of capturing the soul
                    seeing through mirages,
                    determining your fate
                    and interpreting your dreams.</p>
                <br />
                <p>Art is a way of life, an exquisite and supernatural way of telling
                    lies from the truth
                </p>
                <br />
                <p>Check out my art at <a href="https://art-sphere-vue.vercel.app/" target="_blank"
                        rel="noopener noreferrer">https://art-sphere.vercel.app/</a></p>
            </div>
            <div class="right">
                <img src="../assets/My Art/artwork_copyright/seeking_through_the_abyss.webp" alt="Archer in the forest"
                    class="photo" />
            </div>
        </div>

        <div class="job">
            <div class="left">
                <h2>Writing</h2>
                <p>As a Poet, Writer & Novelist, I see writing as the fundamental instrument in which the human life
                    depends on.
                    <br />
                    <br />
                    Without text, without the form in which to write words in,
                    how can one comprehend the intricacies of one's thought well?
                    <br />
                    And that is why I put my thoughts, my feels and what I do into writing.
                    <br />
                    I regularly post poems and update my blog regularly + I'm currently working on my first fiction
                    novel.
                </p>
                <br />
                <p>Check out all my wrtitings at <router-link to="writingandpodcast">here</router-link>,
                    poems at
                    <a href="https://hellopoetry.com/beela303" target="_blank"
                        rel="noopener noreferrer">hellopoetry.com/beela303</a>
                    and my blog at
                    <a href="https://beela303.blogspot.com" target="_blank"
                        rel="noopener noreferrer">beela303.blogspot.com</a>
                </p>
            </div>

            <div class="right">
                <img src="../assets/My Art/artwork_copyright/calm_ambience.webp" alt="calm ambience" class="photo">
            </div>
        </div>

        <div class="job">
            <div class="left">
                <h2>Podcasting</h2>
                <p>My podcast Undiscussed With Nabila is all about controversial topics,
                    debunking topics, discussing undiscussed topics and issues and elaborating
                    on different situations and opinions that affect our society.
                    <br> It's also your one stop for motivation insight and advice.
                </p>
                <br />
                <p>Check out my podcast <router-link to="writingandpodcast">here</router-link></p>
            </div>

            <div class="right">
                <img src="../assets/Undiscussed With Nabila/undiscussed_with_nabila.webp"
                    alt="Undiscussed With Nabila poster">
            </div>
        </div>

        <div class="job">
            <div class="left">
                <h2>Nursing</h2>
                <p>I'm a Registered Nurse and recently graduated from the College of Nursing Sciences, Gwagwalada,
                    Abuja, Nigeria.</p>
            </div>
            <div class="right">
                <img src="../assets/My pictures/67.webp" alt="My Picture" class="photo">
            </div>
        </div>
    </section>

    <!--========================== LANGUAGES =============================-->
    <section id="languages">
        <h2>Languages</h2>

        <div class="language-container">
            <div v-for="lang in languages" :key="lang.name" class="slider-group"
                :style="{ '--progress': lang.percentage + '%' }">
                <div class="label-row">
                    <span class="lang-name">{{ lang.name }}</span>
                    <span class="lang-pct">{{ lang.percentage }}%</span>
                </div>

                <input type="range" min="0" max="100" :value="lang.percentage" disabled class="gradient-slider"
                    :class="getColorClass(lang.percentage)" />
            </div>
        </div>
    </section>

    <!--========================== HOBBIES =============================-->
    <section id="hobbies">
        <div class="hobbies-container">
            <h2 class="title">My Hobbies</h2>
            <div class="cards-grid">
                <div v-for="hobby in hobbies" :key="hobby.id" class="hobby-card">
                    <div class="icon-wrapper">
                        <i :class="['fas', hobby.icon]" class="icon"></i>
                    </div>
                    <h3 class="hobby-name">{{ hobby.name }}</h3>
                    <p class="hobby-description">{{ hobby.description }}</p>
                </div>
            </div>
        </div>
    </section>

</template>

<style lang="scss">
@use "sass:map";

/*========================== HOME PAGE =============================*/
.max-width {
    max-width: 1300px;
    margin: auto;
    padding: 0 80px;
}

#home-page {
    /*color: var(--pastel-color);*/
    color: var(--text-color);

    height: 100vh;
    min-height: 500px;

    padding: 100px 0;

    display: flex;
    position: relative;

    //pointer-events: none;

    &::before {
        content: "";

        background: url("../assets/My\ Art/artwork_copyright/seeking_through_the_abyss.webp") no-repeat center;
        background-size: cover;
        position: absolute;
        background-attachment: fixed;

        width: 100%;
        height: 100%;

        top: 0;
        left: 0;

        opacity: 0.3;
        z-index: -1;
    }

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
                color: pink; //var(--pastel-color)
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
                    //color: var(--main-color);
                    //background: none;

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

#nav-wrapper {
    height: 5vh;
}

#home-nav {
    justify-self: center;
    opacity: 0;

    width: 100%;
    max-width: max-content;

    transform: translateZ(0);
    will-change: transform, position;

    ul {
        background-color: var(--dark-color);
        //background-color: transparent;

        border-radius: 30px;
        border: 1px solid var(--pastel-color-2);

        display: flex;
        justify-content: flex-start;

        flex-wrap: nowrap;

        overflow-x: auto;
        -webkit-overflow-scrolling: touch;

        scrollbar-width: none;

        padding: 0 10px;
        /* Protects edges when scrolling */

        /* Hides scrollbar track on Chrome/Safari */
        &::-webkit-scrollbar {
            display: none;
        }

        li {
            color: var(--text-color);

            padding: 15px;
            font-size: 1.2rem;

            flex-shrink: 0;

            a {
                color: var(--text-color);
                white-space: nowrap;

                &:hover {
                    color: var(--pastel-color-2);
                }
            }
        }
    }
}

/* Fixed state when scrolled to */
#home-nav.is-fixed {
    top: 10vh;

    opacity: 1;
    z-index: 1000;

    position: fixed;
}

.full {
    height: 100vh;
    overflow-y: scroll;

    justify-content: center;
    align-content: center;
    align-items: center;
    align-self: center;
}

#about-me {
    background-color: var(--dark-color);

    width: 50%;

    padding: 30px;
    border-radius: 30px;
    border: 1px solid var(--pastel-color-2);

    margin: 0 25%;

    text-align: center;

    h2 {
        color: var(--pastel-color-2);
    }

    p {
        font-size: 1.3rem;
    }
}

#my-story {
    background-color: var(--exquisite-purple);
    //background-color: #1A0A1D;

    width: 60%;
    padding: 50px;

    border-radius: 30px;
    border: 1px solid var(--pastel-color-2);

    justify-self: center;

    h3 {
        margin-top: 2%;

        border-bottom: 1px dashed var(--pastel-color-2);
        text-align: left;

        display: list-item;
        list-style-type: "🌟";
        //list-style-type: "⭐🌟";
    }

    p {
        color: var(--text-color) !important;
        font-size: 1.3rem;
    }
}

#work {
    width: 70%;
    margin-top: 2.5%;

    justify-self: center;

    .job {
        margin: 20px;
        padding: 20px;

        border: 1.5px dashed var(--pastel-color-2);
        border-radius: 15px;

        display: flex;
        justify-content: space-between;

        .left {
            color: var(--text-color) !important;

            width: 70%;
            font-size: 1.3rem;

            a {
                color: var(--pastel-color-2);
                transition: var(--transition);

                &:hover {
                    color: var(--pastel-color);
                }
            }
        }

        .right {
            width: 27%;

            img {
                width: 100%;
                height: 40vh;
                border-radius: 30px;

                object-fit: cover;
            }
        }
    }
}

/*========================== LANGUAGES =============================*/
// SCSS Variables for Color Themes
$bg-track: #e0e0e0;
$thumb-color: #ffffff;
$thumb-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

// Gradient Map based on Range Classes
$gradients: (
    'low': linear-gradient(90deg, #ff416c, #ff4b2b),
    // Red/Orange range
    'mid': linear-gradient(90deg, #3f0540, #5c52f4),
    // Blue/Purple
    'high': linear-gradient(90deg, #032825, #38ef7d) // Green range
);

.language-container {
    background: var(--dark-color);
    width: 50vw;
    padding: 20px;
    margin: 5% 0;
    border-radius: 12px;
    border: 1px dashed var(--pastel-color-2);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    justify-self: center;

    .slider-group {
        margin-bottom: 20px;
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    .label-row {
        color: var(--text-color);
        display: flex;
        justify-content: space-between;
    }

    .gradient-slider {
        width: 100%;
        height: 8px;
        border-radius: 4px;
        -webkit-appearance: none;
        appearance: none;
        outline: none;
        cursor: pointer;

        // Mixin to inject the background fill on webkit browsers
        @mixin fill-track($gradient-fill) {
            background: linear-gradient(to right,
                    transparent 0%,
                    transparent var(--progress),
                    $bg-track var(--progress),
                    $bg-track 100%), $gradient-fill;
        }

        // Modern Modern Dynamic Loop Class Mapping
        @each $range, $gradient in $gradients {
            &.range-#{$range} {
                @include fill-track(map.get($gradients, $range));
            }
        }

        // Slider Thumb Styling (Webkit)
        &::-webkit-slider-thumb {
            background: $thumb-color;
            width: 18px;
            height: 18px;
            border-radius: 50%;
            border: 2px solid #ccc;
            box-shadow: $thumb-shadow;
            -webkit-appearance: none;
            appearance: none;
            transition: transform 0.1s ease;

            &:hover {
                transform: scale(1.2);
            }
        }

        // Slider Thumb Styling (Firefox)
        &::-moz-range-thumb {
            background: $thumb-color;
            width: 18px;
            height: 18px;
            box-shadow: $thumb-shadow;
            border: none;
            border-radius: 50%;
            transition: transform 0.1s ease;

            &:hover {
                transform: scale(1.2);
            }
        }
    }
}

/*========================== HOBBIES =============================*/
$primary-color: #bbd3d7;
//$primary-color: #353f4a;
$bg-color: #f4f6f9;
$card-bg: #ffffff;
//$text-color: #333333;
$text-color: #fafafa;

.hobbies-container {
    background-color: var(--exquisite-purple);

    width: 75%;
    //max-width: 1200px;
    margin: 0 auto;
    margin-bottom: 5%;
    padding: 40px 20px;

    border-radius: 30px;
    border: 1px dashed var(--pastel-color-2);

    justify-self: center;

    .title {
        color: var(--text-color);

        margin-bottom: 30px;
        text-align: center;
    }

    .cards-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        gap: 24px;
    }

    .hobby-card {
        //background-color: #a788a7;
        //background-color: #674967;
        //background-color: #c3b5c3;

        padding: 30px 20px;
        border-radius: 12px;
        border: 1px dashed var(--pastel-color-2);

        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);

        transition: transform 0.3s ease, box-shadow 0.3s ease;

        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;

        &:hover {
            transform: translateY(-8px);
            box-shadow: 0 12px 20px rgba(0, 0, 0, 0.15);
        }

        .icon-wrapper {
            background-color: var(--pastel-color-2);
            //background-color: rgba($primary-color, 0.1);

            width: 60px;
            height: 60px;

            margin-bottom: 20px;
            border-radius: 50%;

            display: flex;
            justify-content: center;
            align-items: center;

            .icon {
                color: var(--dark-color);

                font-size: 24px;
            }
        }

        .hobby-name {
            color: var(--text-color);
            //color: var(--dark-color);
            //color: $primary-color;

            font-size: 1.3rem;
            //font-size: 1.25rem;
            margin-bottom: 10px;
        }

        .hobby-description {
            color: var(--text-color);
            //color: lighten($text-color, 20%);
            font-size: 1.15rem;
            //font-size: 0.95rem;
            line-height: 1.5;
        }
    }
}

/*========================== RESPONSIVE MEDIA QUERIES =============================*/
@media screen and (max-width: 1330px) {
    #home-page .max-width {
        margin-left: 0;
    }
}

@media screen and (max-width: 768px) {
    #about-me {
        width: 70%;

        margin: 0 15%;
    }

    #work {
        .job {
            display: block;

            .left,
            .right {
                width: 100%;
            }

            .left {
                margin-bottom: 1.5rem;
            }
        }
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

    #home-page {
        #home-page-content {
            .text-2 {
                font-size: 60px;

            }

            .text-3 {
                font-size: 32px;
            }

            a {
                font-size: 20px;
            }
        }
    }

}

@media screen and (max-width: 600px) {
    #home-nav {
        ul {
            display: flex;
            flex-wrap: nowrap;
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;

            gap: 20px;
            padding: 15px;
            scrollbar-width: none;

            &:-webkit-scrollbar {
                display: none;
            }


            li {
                padding: 5px;

                a {
                    white-space: nowrap;
                }
            }
        }
    }

    #about-me,
    #my-story {
        width: 90%;
        margin: 2.5% 5%;
    }

    #my-story {
        padding: 30px;
    }

    #work {
        width: 95%;

        .job {

            .right {
                img {
                    height: 25vh;
                }
            }
        }
    }

    .language-container {
        width: 70vw;
    }

    .hobbies-container {
        .cards-grid {
            grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
            gap: 20px;
        }
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