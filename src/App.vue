<script setup>
import { RouterLink, RouterView } from 'vue-router'

import Menu from './components/Menu.vue';
import Footer from './components/Footer.vue';
import ScrollToTop from './components/ScrollToTop.vue';

</script>

<template>
  <Menu />
  <ScrollToTop />
  <RouterView />
  <Footer />
</template>

<style lang="scss">
:root {
  --text-color: #fff7f3;
  --dark-color: #1A1A1D;
  --dark-color-2: #1e1e1e;

  --main: #801375;
  --main2: #3f0938;

  --main-color: #6A1E55;
  --pastel-color: #A64D79;
  --pastel-color-1: #9d7f84;
  --pastel-color-2: #FAD0C4;

  --background-color: #000; // #160214;

  --main-transparent: #e3160214;
  --transparent: #0000008e;
  --transparent2: #00000080;

  --white: #fafafa;
  --black: #000;

  --link: #f4d8d0; //#50c7c7
  --hover: #c388a3;

  --border: grey;
  --border-main: 2px solid #FAD0C4; //#64055b

  --pretty-blue: #3f729b;
  --light-purple: #e48fdb;

  --transition: 2s ease;
  --transform: translateY(-5px);
}

* {
  margin: 0;
  padding: 0;
  top: 0;

  box-sizing: border-box;

  text-decoration: none;
}

body {
  color: var(--text-color) !important;
  background-color: var(--dark-color-2) !important;

  font-family: "Bitcount Prop Single", system-ui;
  font-optical-sizing: auto;
  font-style: normal;
  font-variation-settings:
    "slnt" 0,
    "CRSV" 0.5,
    "ELSH" 0,
    "ELXP" 0;

  outline: none;
  overflow-x: hidden;
}

html {
  scroll-behavior: smooth;
  overflow-x: hidden;
}

a {
  color: var(--link);
  text-decoration: none !important;

  &:hover {
    color: var(--hover);
  }
}


li {
  list-style: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin-top: 0;
  margin-bottom: .5rem;

  text-align: center;

  line-height: 1.2;

  font-weight: 500;
  //font-family: var(--title);
}

h1 {
  font-size: calc(1.375rem + 1.5vw)
}

@media (min-width:1200px) {
  h1 {
    font-size: 2.5rem
  }
}

h2 {
  font-size: calc(1.325rem + .9vw)
}

@media (min-width:1200px) {
  h2 {
    font-size: 2rem
  }
}

h3 {
  font-size: calc(1.3rem + .6vw)
}

@media (min-width:1200px) {
  h3 {
    font-size: 1.75rem
  }
}

h4 {
  font-size: calc(1.275rem + .3vw)
}

@media (min-width:1200px) {
  h4 {
    font-size: 1.5rem
  }
}

h5 {
  font-size: 1.25rem
}

h6 {
  font-size: 1rem
}

:target {
  color: rgb(183, 0, 255);
}

button {
  font-family: "Bitcount Prop Single", system-ui;
  font-optical-sizing: auto;
  font-style: normal;
  font-variation-settings:
    "slnt" 0,
    "CRSV" 0.5,
    "ELSH" 0,
    "ELXP" 0;

  border: none;
  outline: none;
}

/*========================== SCROLL BAR =============================*/
/*
/*width*
::-webkit-scrollbar{
    width: 10px;
}

/*track*
::-webkit-scrollbar-track{
    background: #f1f1f1;

    border-radius: 25px;
}

/*handle*
::-webkit-scrollbar-thumb{
    background: #888;
}
*/
/*width*/
::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

/*track*/
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
}

/*handle*/
::-webkit-scrollbar-thumb {
  /*background: var(--linear-gradient);*/
  background: rgba(255, 255, 255, .2);
  backdrop-filter: blur(10px);
  --webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, .3);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  /*background: var(--linear-gradient-hover);*/
  background: rgba(255, 255, 255, .2);
  backdrop-filter: blur(10px);
  --webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, .3);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/*========================== ICONS =============================*/
.fa-instagram {
  //color: var(--white);
  //background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);

  border-radius: 50%;
}

.instagram-text {
  //color: var(--white);
  //background-image: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);

  background-clip: text;
  --webkit-background-clip: text;
  --webkit-text-fill-color: transparent;
}

/*.fa-twitter {
  color: #00acee;
}*/

.fa-snapchat {
  //color: #000;
  background: var(--white);
}

.fa-github {
  //color: var(--white);
  //background: #000;

  border-radius: 25px;
}

.fa-pinterest {
  //color: #c8232c;
  //background: var(--white);

  border-radius: 50%;
}

/*.fa-linkedin,
.fa-linkedin-in {
  color: var(--white);
  background: #0072b1;
}*/

.fa-whatsapp {
  //color: var(--white);
  //background: #25d366;

  border-radius: 25px;
}

.fa-facebook {
  //color: var(--white);
  //background: #4267b2;

  border-radius: 25px;
}

/*.fa-youtube {
  color: #c4302b;
}*/

.fa-tiktok {
  //color: #111111;
  filter: drop-shadow(2px 0 0 #fd3e3e) drop-shadow(-2px -2px 0 #4de8f4);
}

.fa-spotify {
  //color: #1db954;
  //background: #000;

  border-radius: 50%;
}

.g-blue {
  color: #4285f4;
}

.o-red {
  color: #db4437;
}

.o-yellow {
  color: #f4b400;
}

.l-green {
  color: #0f9d58;
}

.e-red {
  color: #db4437;

  display: inline-block;

  transform: rotate(-20deg);
}

.fa-reddit {
  //color: #ff4500;
  //background: var(--white);
  border-radius: 50%;
}

/*.fa-quora {
  color: #a82400;
}

.fa-podcast {
  color: var(--white);
}

.fa-imdb {
  color: #f5c518;
}

.fa-hashnode {
  color: #2962ff;
}

.fa-deviantart {
  color: #05cc47;
}

.fa-artstation {
  color: #1caad9;
}

.fa-x-twitter {
  color: #1da1f2;
}*/

/*========================== RESPONSIVE MEDIA QUERIES 500 690 947 999 1104 1330 =============================*/
@media screen and (max-width: 900px) {

  /*========================== SCROLL BAR =============================*/
  ::-webkit-scrollbar {
    width: 5px;
    height: 8px;
  }
}

//IA CONTAINER

.ia-container {
  width: 95%;
  height: 300px;
  margin: 20px auto;
  overflow: hidden;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.08);
  border: 7px solid rgba(255, 255, 255, 0.6);
}

.ia-container figure {
  position: absolute;
  top: 0;
  left: 50px;
  /* width of visible piece */
  width: 335px;
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.6);
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

.ia-container>figure {
  position: relative;
  left: 0 !important;
}

.ia-container img {
  display: block;
  width: 200%;
  height: 300px;
}

.ia-container input {
  position: absolute;
  top: 0;
  left: 0;
  width: 50px;
  /* just cover visible part */
  height: 100%;
  cursor: pointer;
  border: 0;
  padding: 0;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
  filter: alpha(opacity=0);
  opacity: 0;
  z-index: 100;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

.ia-container input:checked {
  width: 5px;
  left: auto;
  right: 0px;
}

.ia-container input:checked~figure {
  -webkit-transition: all 0.7s ease-in-out;
  -moz-transition: all 0.7s ease-in-out;
  -o-transition: all 0.7s ease-in-out;
  -ms-transition: all 0.7s ease-in-out;
  transition: all 0.7s ease-in-out;
  left: 335px;
}

.ia-container figcaption {
  width: 100%;
  height: 100%;
  background: rgba(87, 73, 81, 0.1);
  position: absolute;
  top: 0px;
  -webkit-transition: all 0.2s linear;
  -moz-transition: all 0.2s linear;
  -o-transition: all 0.2s linear;
  -ms-transition: all 0.2s linear;
  transition: all 0.2s linear;
}

.ia-container figcaption span {
  position: absolute;
  top: 40%;
  margin-top: -30px;
  right: 20px;
  left: 20px;
  overflow: hidden;
  text-align: center;
  background: rgba(87, 73, 81, 0.3);
  line-height: 20px;
  font-size: 18px;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
  filter: alpha(opacity=0);
  opacity: 0;
  text-transform: uppercase;
  letter-spacing: 4px;
  font-weight: 700;
  padding: 20px;
  color: #fff;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
}

.ia-container input:checked+figcaption,
.ia-container input:checked:hover+figcaption {
  background: rgba(87, 73, 81, 0);
}

.ia-container input:checked+figcaption span {
  -webkit-transition: all 0.4s ease-in-out 0.5s;
  -moz-transition: all 0.4s ease-in-out 0.5s;
  -o-transition: all 0.4s ease-in-out 0.5s;
  -ms-transition: all 0.4s ease-in-out 0.5s;
  transition: all 0.4s ease-in-out 0.5s;

  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=99)";
  filter: alpha(opacity=99);
  opacity: 1;

  top: 50%;
}

.ia-container #ia-selector-last:checked+figcaption span {
  -webkit-transition-delay: 0.3s;
  -moz-transition-delay: 0.3s;
  -o-transition-delay: 0.3s;
  -ms-transition-delay: 0.3s;
  transition-delay: 0.3s;
}

.ia-container input:hover+figcaption {
  background: rgba(87, 73, 81, 0.03);
}

.ia-container input:checked~figure input {
  z-index: 1;
}

@media screen and (max-width: 720px) {
  .ia-container {
    width: 540px;
  }

  .ia-container figure {
    left: 40px;
    width: 260px;
  }

  .ia-container input {
    width: 40px;
  }

  .ia-container input:checked~figure {
    left: 260px;
  }

  .ia-container figcaption span {
    font-size: 16px;
  }
}

@media screen and (max-width: 520px) {
  .ia-container {
    width: 320px;
  }

  .ia-container figure {
    left: 20px;
    width: 180px;
  }

  .ia-container input {
    width: 20px;
  }

  .ia-container input:checked~figure {
    left: 180px;
  }

  .ia-container figcaption span {
    font-size: 12px;
    letter-spacing: 2px;
    padding: 10px;
    margin-top: -20px;
  }

}


/// DARK THEME ////
.title,
.small-title,
h1,
h2,
h3,
h4,
h5,
h6,
#contact-me-title,
#social-media-title,
#art-portfolio-title h2,
#web-dev-portfolio-title h2,
.project-box p,
.title,
.sub-title {
  color: var(--white);
}

.project-box a p {
  color: #fafafa;
}
</style>