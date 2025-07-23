<template>
    <section>
        <div>
            <h2>Software Developer</h2>
            <h3>Versatile Fullstack Developer with a passion for crafting innovative solutions that drive impact.
            </h3>
            <p>My expertise spans both front-end and back-end development which includes Python, JavaScript, Vue, Sass,
                Django, Django Rest Framework, MySQL and Git.</p>
            <p>I craft robust, scalable, and user-friendly applications that drive real results. I'm excited to
                collaborate with like-minded professionals to build beautiful software that makes a difference.</p>

            <a href="http://beela303-dev.vercel.app/" target="_blank"
                rel="noopener noreferrer"><button>Projects</button></a>
        </div>
        <div>

            <img src="https://assets.codepen.io/140/laptop.webp" alt="">
        </div>
    </section>

    <section>
        <div>
            <img src="../assets/My Art/Artwork - copyright/brown aesthetic.jpg" alt="">
        </div>
        <div>
            <h2>Artist</h2>
            <h3>Creative artist with a passion for bringing imagination to life through art</h3>
            <p>I love pushing boundaries and exploring new ways to express the human experience.</p>

            <a href="http://art-sphere-vue-.vercel.app/" target="_blank"
                rel="noopener noreferrer"><button>Artworks</button></a>
        </div>
    </section>
</template>

<style lang="scss" scoped>
section {
    margin: 50px;

    border-radius: 20px;
    border: 2px solid var(--light-purple);

    display: flex;

    div {
        width: 50%;
        padding: 30px;
    }

    img {
        width: 100%;
        height: 50vh;
        border-radius: 25px;

        object-fit: cover;
    }

    h2 {
        font-size: 4rem;
    }

    h3 {
        font-size: 1.2rem;
    }

    p {
        margin-top: 20px;
        font-size: 1.5rem;
    }

    button {
        width: 50%;
        height: 50px;

        margin-top: 20px;
        margin-left: 25%;

        border-radius: 20px;

        justify-self: center;
        justify-content: center;
        text-align: center;
    }
}

@media screen and (max-width: 768px) {
    section {
        margin: 20px;
        display: block;

        div {
            width: 100%;
            padding: 25px;
        }

        h2 {
            font-size: 3rem;
        }

        h3 {
            font-size: 1.2rem;
        }

        p {
            margin-top: 20px;
            font-size: 1.5rem;
        }
    }
}
</style>