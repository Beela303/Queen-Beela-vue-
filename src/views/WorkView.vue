<script>
export default {

}
</script>

<template>
    <h1 id="work-title">WORK</h1>
    <div id="work-body">
        <a href="https://beela303-dev.vercel.app/" target="_blank" rel="noopener noreferrer">
            <div class="work">
                <img src="../assets/website assets/blog website - blog list.jpeg" alt="Calm ambience">
                <h2 class="sub-title">Web development</h2>
            </div>
        </a>

        <a href="https://art-sphere-vue.vercel.app/" target="_blank" rel="noopener noreferrer">
            <div class="work">
                <img src="../assets/My Art/Artwork - copyright/calm ambience.jpg" alt="Calm ambience">
                <h2 class="sub-title">Art</h2>
            </div>
        </a>
    </div>
</template>

<style lang="scss">
#work-title {
    margin-top: 7%;
}

#work-body {
    display: flex;
    justify-content: space-around;

    .work {
        width: 350px;
        height: 350px;

        margin: 2.5%;
        padding: 2%;

        border: var(--border-main);
        border-radius: 25px;

        transition: var(--transition);

        overflow: hidden;

        &:hover {
            transform: var(--transform);
        }

        img {
            width: 100%;
            height: 60%;

            border-radius: 35px;

            object-fit: cover;
        }


        h2 {
            color: var(--light-purple);

            font-size: 40px;
            /*60*/
            text-decoration: none !important;


            &:hover {
                color: var(--hover);
            }
        }
    }
}

/*=========================== WEBDEV ====================================*/
#web-dev-work {
    margin-left: 5% !important;
}

.project-body ::-webkit-scrollbar-thumb {
    background: var(--pretty-blue);
}

.project-box {
    height: 400px;
    /*height: 450px;*/
    margin: 2.5%;

    border: var(--border-main);
    border-radius: 25px;

    text-decoration: none !important;

    overflow: hidden;
    transition: var(--transition);


    .project-box p {
        color: var(--dark-purple);
        font-size: 1.5rem;

        transition: var(--transition);

        text-align: center;

        &:hover {
            transform: var(--transform);
        }
    }
}

.languages-used {
    display: flex;
    justify-content: space-around;
    align-items: center;

    background: var(--table-of-content-bg);

    p:hover {
        color: var(--hover);
    }

    img {
        width: 50px;
        height: 50px;

        margin-top: 5px;
        margin-bottom: 5px;
    }
}

.project-img-body img {
    width: 100%;
    height: 280px;

    margin: 2%;
    border-radius: 35px;

    object-fit: cover;
}

.project-description {
    margin-left: 2.5%;

    p {
        font-size: 22px;
    }
}

/*=========================== ART PORTFOLIO ====================================*/
#art-portfolio {
    margin-top: 7%;
}

#art-work-title {
    display: flex;
    justify-content: space-around;
    align-items: center;
}

#art-work-title h2,
#web-dev-work-title h2 {
    color: var(--main2);

    margin-top: 20px;

    cursor: pointer;
}

/*=========================== RESPONSIVENESS ====================================*/
@media screen and (max-width: 1200px) {
    .work h2 a {
        font-size: 50px;
    }
}

@media screen and (max-width: 650px) {
    a .work h2 {
        font-size: 35px;
    }
}

@media screen and (min-width: 1028px) {
    #work-body {
        height: 80vh;
    }
}

@media screen and (max-width: 768px) {
    #work-body {
        display: block;

        .work {
            width: 80%;
            margin: 5%;
        }
    }
}

@media screen and (min-width: 768px) {

    .project-box,
    .project-description {
        width: 50%;
    }
}

@media screen and (max-width: 500px) {
    #work-div {
        font-size: .8rem;
    }

    .work {
        width: 95%;
        height: 300px;
    }
}

@media screen and (max-width: 430px) {
    a .work h2 {
        font-size: 40px;
    }
}
</style>