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
  --main: #160214;
  --main2: #1b0118;

  /*--hover: #a51c45c2;*/
  /*--hover: #d61586ed;*/
  --hover: #d61586ed;

  --main-transparent: #e3160214;
  --transparent: #0000008e;
  --transparent2: rgba(0, 0, 0, 0.5);

  --white: #fff;
  --black: #252525;

  --link: #145353;

  --border: grey;
  /*--border-main: #2a1628;*/
  --border-main: 2px solid #2a1628;
  --border-main2: #160f15;

  --dark-purple: #290826;
  --light-purple: #2a1628;
  --pretty-dark-blue: #16021400;
  --pretty-blue: #3f729b;
  --pretty-purple: #5c1e5c;

  --table-of-content-bg: #e4dada;
  --table-of-content-bg2: #2a1628d7;

  --another-green: #089000;

  --warning: #ac1010;

  --pretty-yellow: #ffff5f;
  --gallery-bg: #f1f1f1;

  --linear-gradient: linear-gradient(43deg, #50c7c7 0%, #3f729b 46%, #1b0112 100%);
  --linear-gradient-hover: linear-gradient(43deg, #1b0112 0%, #3f729b 46%, #50c7c7 100%);

  /*========================== THEMES =============================*/
  --sky: #053b50;
  --emerald: #3de712;
  --forest-green: #1f690d;
  --wood: brown;

  /*#4b1946*/

  --title: Lato-Bold-Italic;
  /*--body: Lato-Italic;*/

  --transition: 2s ease;
  --transform: translateY(-5px);

  --hover-padding-1: 10px;
  --hover-padding-2: 20px;

  /*Animations*/

  --slider: translate(300px);

  --header-height: 3rem;

  /*===================== colors ================================*/
  --hue-color: 250;
  /*purple 250 - Green 145 - Blue 230 - Pink 340 - Green yellow 67 */

  /* HSL color mode */
  --first-color: hsl(var(--hue-color), 69%, 61%);
  --first-color-second: hsl(var(--hue-color), 69%, 61%);
  --first-color-alt: hsl(var(--hue-color), 57%, 53%);
  --first-color-lighter: hsl(var(--hue-color), 92%, 85%);
  --title-color: hsl(var(--hue-color), 8%, 15%);
  --text-color: hsl(var(--hue-color), 8%, 45%);
  --text-color-light: hsl(var(--hue-color), 8%, 65%);
  --input-color: hsl(var(--hue-color), 70%, 96%);
  --body-color: hsl(var(--hue-color), 60%, 99%);
  --container-color: #fff;

  /*=================== Font and typography ======================*/
  --body-font: "Poppins", sans-serif;

  /* .5rem = 8px, 1rem = 16px, 1.5rem = 24px ... */
  --big-font-size: 2rem;
  --h1-font-size: 1.5rem;
  --h2-font-size: 1.25rem;
  --h3-font-size: 1.125rem;
  --normal-font-size: .938rem;
  --small-font-size: .813rem;
  --smaller-font-size: .75rem;

  /*========================= Font weight ==========================*/
  --font-medium: 500;
  --font-semi-bold: 600;

  /*========================= Margenes bottom ======================*/
  /* .25rem = 4px, .5rem = 8px, .75rem = 12px ...... */
  --mb-0-25: .25rem;
  --mb-0-5: .5rem;
  --mb-0-75: .75rem;
  --mb-1: 1rem;
  --mb-1-5: 1.5rem;
  --mb-2: 2rem;
  --mb-2-5: 2.5rem;
  --mb-3: 3rem;

  /*=================== z-index ===============================*/
  --z-tooltip: 10;
  --z-fixed: 100;
  --z-modal: 1000;
}

/*-------------------------- Font size for large devices ---------------------------*/
@media screen and (min-width:968px) {
  :root {
    /*=================== Font and typography ======================*/
    --big-font-size: 3rem;
    --h1-font-size: 2.25rem;
    --h2-font-size: 1.5rem;
    --h3-font-size: 1.25rem;
    --normal-font-size: 1rem;
    --small-font-size: .875rem;
    --smaller-font-size: .813rem;
  }
}

* {
  margin: 0;
  padding: 0;
  top: 0;
  box-sizing: border-box;
  text-decoration: none;
}

body {
  outline: none;
  overflow-x: hidden;
}

html {
  scroll-behavior: smooth;
  overflow-x: hidden;
}

/*========================== TARGET =============================*/
:target {
  color: rgb(183, 0, 255);
}

/*========================== GLOBAL VARIABLES =============================*/
button,
input,
optgroup,
select,
textarea {
  margin: 0;

  font-family: inherit;
  font-size: inherit;

  line-height: inherit;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin-top: 0;
  margin-bottom: .5rem;
  font-weight: 500;
  line-height: 1.2;
  text-align: center;
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

p {
  margin-top: 0;
  margin-bottom: 1rem
}

abbr[data-bs-original-title],
abbr[title] {
  -webkit-text-decoration: underline dotted;
  text-decoration: underline dotted;
  cursor: help;
  -webkit-text-decoration-skip-ink: none;
  text-decoration-skip-ink: none
}

address {
  margin-bottom: 1rem;
  font-style: normal;
  line-height: inherit
}

ol,
ul {
  padding-right: 2rem
}

dl,
ol,
ul {
  margin-top: 0;
  margin-bottom: 1rem
}

ol ol,
ol ul,
ul ol,
ul ul {
  margin-bottom: 0
}

dt {
  font-weight: 700
}

dd {
  margin-bottom: .5rem;
  margin-right: 0
}

blockquote {
  margin: 0 0 1rem
}

b,
strong {
  font-weight: bolder
}

small {
  font-size: .875em
}

mark {
  padding: .2em;
  background-color: #fcf8e3
}

sub,
sup {
  position: relative;
  font-size: .75em;
  line-height: 0;
  vertical-align: baseline
}

sub {
  bottom: -.25em
}

sup {
  top: -.5em
}

a {
  color: #0d6efd;
  text-decoration: underline
}

a:hover {
  color: #0a58ca
}

a:not([href]):not([class]),
a:not([href]):not([class]):hover {
  color: inherit;
  text-decoration: none
}

code,
kbd,
pre,
samp {
  font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  font-size: 1em;
  direction: ltr;
  unicode-bidi: bidi-override
}

pre {
  display: block;
  margin-top: 0;
  margin-bottom: 1rem;
  overflow: auto;
  font-size: .875em
}

pre code {
  font-size: inherit;
  color: inherit;
  word-break: normal
}

code {
  font-size: .875em;
  color: #d63384;
  word-wrap: break-word
}

a>code {
  color: inherit
}

kbd {
  padding: .2rem .4rem;
  font-size: .875em;
  color: #fff;
  background-color: #212529;
  border-radius: .2rem
}

kbd kbd {
  padding: 0;
  font-size: 1em;
  font-weight: 700
}

figure {
  margin: 0 0 1rem
}

img,
svg {
  vertical-align: middle
}

table {
  caption-side: bottom;
  border-collapse: collapse
}

caption {
  padding-top: .5rem;
  padding-bottom: .5rem;
  color: #6c757d;
  text-align: right
}

th {
  text-align: inherit;
  text-align: -webkit-match-parent
}

tbody,
td,
tfoot,
th,
thead,
tr {
  border-color: inherit;
  border-style: solid;
  border-width: 0
}

label {
  display: inline-block
}

button {
  border-radius: 0
}

button:focus:not(:focus-visible) {
  outline: 0
}

button,
input,
optgroup,
select,
textarea {
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit
}

button,
select {
  text-transform: none
}

[role=button] {
  cursor: pointer
}

select {
  word-wrap: normal
}

select:disabled {
  opacity: 1
}

[list]::-webkit-calendar-picker-indicator {
  display: none
}

[type=button],
[type=reset],
[type=submit],
button {
  -webkit-appearance: button
}

[type=button]:not(:disabled),
[type=reset]:not(:disabled),
[type=submit]:not(:disabled),
button:not(:disabled) {
  cursor: pointer
}

::-moz-focus-inner {
  padding: 0;
  border-style: none
}

textarea {
  resize: vertical
}

fieldset {
  min-width: 0;
  padding: 0;
  margin: 0;
  border: 0
}

legend {
  float: right;
  width: 100%;
  padding: 0;
  margin-bottom: .5rem;
  font-size: calc(1.275rem + .3vw);
  line-height: inherit
}

@media (min-width:1200px) {
  legend {
    font-size: 1.5rem
  }
}

legend+* {
  clear: right
}

::-webkit-datetime-edit-day-field,
::-webkit-datetime-edit-fields-wrapper,
::-webkit-datetime-edit-hour-field,
::-webkit-datetime-edit-minute,
::-webkit-datetime-edit-month-field,
::-webkit-datetime-edit-text,
::-webkit-datetime-edit-year-field {
  padding: 0
}

::-webkit-inner-spin-button {
  height: auto
}

[type=search] {
  outline-offset: -2px;
  -webkit-appearance: textfield
}

[type=email],
[type=number],
[type=tel],
[type=url] {
  direction: ltr
}

::-webkit-search-decoration {
  -webkit-appearance: none
}

::-webkit-color-swatch-wrapper {
  padding: 0
}

::file-selector-button {
  font: inherit
}

::-webkit-file-upload-button {
  font: inherit;
  -webkit-appearance: button
}

output {
  display: inline-block
}

iframe {
  border: 0
}

summary {
  display: list-item;
  cursor: pointer
}

progress {
  vertical-align: baseline
}

[hidden] {
  display: none !important
}

a,
.link {
  color: var(--link);
  text-decoration: none !important;
}

a,
.link:hover {
  color: var(--hover);
}

a p,
a button {
  text-decoration: none;
}

button {
  border: none;
  outline: none;
}

input {
  accent-color: var(--link);
  display: table;

  width: 100%;
  height: 40px;
  margin: 1.5% 0;

  border: var(--border-main);
  border-radius: 25px;
}

ul li a {
  text-decoration: none;
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
  text-align: center;
  font-family: var(--title);
}

a div {
  text-decoration: none !important;
}

/*section{
    margin-top: 2%;
    padding: 2rem 0 4rem;
}*/

table {
  width: 100%;
  margin: 1%;
}

select {
  width: 25%;
  margin: 3%;

  color: var(--white);
  background: #2a1628;

  border-radius: 25px;
  border: var(--border-main);

  cursor: pointer;
}

option {
  font-size: 25px;
}

#space {
  margin-left: 5% !important;
}

.line {
  display: inline-block;
}

.line2 {
  display: inline-block;
}

.line-hor {
  display: block;
}

.horizontal {
  overflow-x: scroll;
  overflow-y: hidden;

  white-space: nowrap;
}

.slide-hor {
  display: flex;

  overflow-x: scroll;
  overflow-y: hidden;

  white-space: nowrap;
}

.slide-ver {
  display: table;

  overflow-x: hidden;
  overflow-y: scroll;

  white-space: nowrap;
}

.ml-5-per {
  margin-left: 5%;
  margin-right: 5%;
}

.button {
  color: var(--white);
  background: var(--dark-purple);

  width: 190px;
  height: 40px;

  border-radius: 20px;
  border: var(--border-main);
}

.button:hover {
  color: var(--dark-purple);
  background: none;

  outline: none;
  transition: var(--transition);
  /*border-radius: 10px;*/
}

.primary-button {
  color: var(--white);
  background: var(--border-main);

  width: 190px;
  height: 40px;

  border-radius: 10px;
}

.secondary-button {
  color: var(--white);
  background: var(--dark-purple);

  border: var(--border-main);

  width: 200px;
  height: 40px;

  border-radius: 10px;
}

.secondary-button:hover {
  color: var(--dark-purple);
  background: var(--white);

  width: 190px;
  height: 40px;

  border: var(--border-main);
  border-radius: 10px;

  outline: none;
}

.tertiary-button {
  color: var(--dark-purple);
  background: var(--white);

  border: var(--border-main);

  width: 190px;
  height: 40px;

  border-radius: 10px;
}

.tertiary-button:hover {
  color: var(--white);
  background: var(--dark-purple);

  border: none;
  outline: none;
}

.title {
  text-align: center;
  font-size: 40px;
  font-family: var(--title);

  color: var(--light-purple);

  margin-top: 20px;
  margin-bottom: 20px;
}

.sub-title {
  color: var(--light-purple);

  text-align: center;
  font-size: 30px;
  font-family: var(--title);

  margin-top: 15px;
  margin-bottom: 15px;
}

.gray {
  color: var(--border);
}

.back-and-topic {
  border-bottom: 2px solid var(--light-purple);
}

.back-to-menu {
  font-size: 35px;

  color: var(--light-purple);

  cursor: pointer;
}

.back-to-menu:hover {
  color: var(--hover);
}

.back-to-topic-go-back {
  font-size: 35px;

  text-decoration: none;

  color: var(--light-purple);
}

.back-to-topic-go-back-title {
  color: var(--dark-purple);

  /*margin-left: 25px;
    margin-left: 10px;*/

  font-family: var(--title);
  font-size: 35px;

  text-align: center;
  text-decoration: none;
}

.left {
  float: left;
  width: 50%;
}

.right {
  float: right;
  width: 50%;
}

.mid-left {
  width: 33%;
}

.mid-mid {
  width: 33%;
}

.mid-right {
  width: 33%;
}

.aic {
  display: flex;
  justify-content: center;
  align-items: center;
}

.air {
  display: flex;
  align-items: flex-end;
  align-items: flex-end;
}

.flex-end {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
}

.space-between {
  display: flex;
  justify-content: space-between;
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
  color: var(--white);
  background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);

  border-radius: 50%;

  /*color: #f09433;
    background: -moz-linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
    background: -webkit-linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888', GradientType=1);*/
}

.instagram-text {
  color: var(--white);
  background-image: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);

  background-clip: text;
  --webkit-background-clip: text;
  --webkit-text-fill-color: transparent;
}

.fa-twitter {
  color: #00acee;
}

.fa-snapchat {
  color: #000;
  background: var(--white)c00;
}

.fa-github {
  color: var(--white);
  background: #000;

  border-radius: 25px;
}

.fa-pinterest {
  color: #c8232c;
  background: var(--white);

  border-radius: 50%;
}

.fa-linkedin,
.fa-linkedin-in {
  color: var(--white);
  background: #0072b1;
  /*#86888a #caccce*/
}

.fa-whatsapp {
  color: var(--white);
  background: #25d366;
  /*#075e54 #128c7e*/

  border-radius: 25px;
}

.fa-facebook {
  color: var(--white);
  background: #4267b2;

  border-radius: 25px;
}

.fa-youtube {
  color: #c4302b;
}

/*
.fa-tiktok{
    color: #111111;
    filter: drop-shadow(-5px -5px 0 #24f6f0) contrast(150%) brightness(100%);
    z-index: -1;
}

.fa-tiktok{
    color: #111111;
    filter: drop-shadow(2px 0 0 #fd3e3e) drop-shadow(-2px -2px 0 #4de8f4);
}*/

.fa-tiktok {
  color: #111111;
  filter: drop-shadow(2px 0 0 #fd3e3e) drop-shadow(-2px -2px 0 #4de8f4);
}

/*.tiktok-logo{
    font-size: 100px;
    position: relative;
    color: #00fff8;
}

.tiktok-logo i:last-child{
    mix-blend-mode: multiply;
    color: #ff0010;
    position: absolute;
    left: 5px;
    top: 7px;
}*/

.fa-spotify {
  /*color: linear-gradient(120deg, #1db954,#191414);*/
  color: #1db954;
  background: #000;

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
  color: #ff4500;
  background: var(--white);
  border-radius: 50%;
}

.fa-quora {
  color: #a82400;
}

.fa-podcast {
  color: var(--white);
}


/*========================== RESPONSIVE MEDIA QUERIES 500 690 947 999 1104 1330 =============================*/
@media screen and (min-width: 1330px) {
  .appear-phone-tablet {
    display: none;
  }
}

@media screen and (max-width: 1300px) {

  .left,
  .right {
    width: 45%;
  }
}

@media screen and (min-width: 1024px) {
  .appear-phone-tablet {
    display: none !important;
  }
}

@media screen and (max-width: 1024px) {
  #space {
    margin-left: 0 !important;
  }
}

@media screen and (max-width: 940px) {

  .left,
  .right {
    width: 40%;
  }
}

@media screen and (max-width: 900px) {

  /*========================== SCROLL BAR =============================*/
  ::-webkit-scrollbar {
    width: 5px;
    height: 8px;

    /*========================== GLOBAL VARIABLES =============================*/
    #space {
      overflow-x: hidden;
    }
  }
}

@media screen and (max-width: 830px) {

  .left,
  .right {
    width: 100%;
  }
}

@media screen and (max-width: 768px) {
  .appear-phone-tablet {
    display: none;
  }
}

@media screen and (max-width: 690px) {
  .appear-laptop {
    display: none;
  }
}

@media screen and (min-width: 200px) and (max-width: 500px) {
  .appear-laptop {
    display: none;
  }

  .appear-phone-tablet {
    display: block;
  }
}

@media screen and (max-width: 469px) {
  .display-tablet {
    display: none;
  }
}
</style>