<script>
export default {

}
</script>

<template>
    <div id="work-body">
        <h1 id="work-title">WORK</h1>

        <a href="https://beela303-dev.vercel.app/" target="_blank" rel="noopener noreferrer">
            <div class="work">
                <img src="../assets/website assets/blog website - blog list.jpeg" alt="Calm ambience">
                <h2 class="sub-title">Software development</h2>
            </div>
        </a>

        <a href="https://art-sphere-vue.vercel.app/" target="_blank" rel="noopener noreferrer">
            <div class="work">
                <img src="../assets/My Art/Artwork - copyright/calm ambience.jpg" alt="Calm ambience">
                <h2 class="sub-title">Art</h2>
            </div>
        </a>

        <a href="https://hellopoetry.com/beela303/" target="_blank" rel="noopener noreferrer">
            <div class="work">
                <img src="../assets/My Art/Artwork - copyright/below the ocean (2).jpg" alt="Calm ambience">
                <h2 class="sub-title">Poetry</h2>
            </div>
        </a>
    </div>
</template>

<style lang="scss">
#work-body {
    margin-top: 10vh;
    margin-bottom: 20vh;

    display: grid;
    grid-template-columns: 1fr 1fr;
    place-items: center;

    justify-content: center;
    align-items: center;

    .work {
        width: 40vw; //30vh 350px
        height: 40vh; //300px 350px

        margin: 2.5%;
        padding: 2%;

        border: var(--border-main);
        border-radius: 25px;

        transition: var(--transition);

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
            color: var(--pastel-color-2);

            //font-size: 40px;
            /*60*/
            text-decoration: none !important;

            &:hover {
                color: var(--hover);
            }
        }
    }
}

@media screen and (max-width: 500px) {
    #work-body {
        .work {
            width: 45vw;
            height: 45vh;

            h2 {
                font-size: 1.5rem;
            }
        }
    }
}
</style>