<script>
export default {

}
</script>

<template>
    <h1 id="socials-links-title">SOCIALS AND LINKS</h1>

    <div id="socials-links">
        <a href="https://instagram.com/beela303" target="_blank" rel="noopener noreferrer">
            <div>
                <i class="fa-brands fa-instagram"></i>
                <!--<p>Instagram</p>-->
            </div>
        </a>

        <a href="https://x.com/beela303" target="_blank" rel="noopener noreferrer">
            <div>
                <i class="fa-brands fa-twitter"></i>
                <!--<p>X/Twitter</p>-->
            </div>
        </a>

        <a href="https://www.imdb.com/name/nm14593893/" target="_blank" rel="noopener noreferrer">
            <div>
                <i class="fa-brands fa-imdb"></i>
                <!--<p>IMDB</p>-->
            </div>
        </a>

        <a href="https://beela303.blogspot.com" target="_blank" rel="noopener noreferrer">
            <div>
                <i class="fas fa-blog"></i>
                <!--<p>Blog</p>-->
            </div>
        </a>

        <a href="https://beela303.hashnode.dev" target="_blank" rel="noopener noreferrer">
            <div>
                <i class="fa-brands fa-hashnode"></i>
                <!--<p>Hashnode (Dev Blog)</p>-->
            </div>
        </a>

        <a href="https://deviantart.com/beela303" target="_blank" rel="noopener noreferrer">
            <div>
                <i class="fa-brands fa-deviantart"></i>
                <!--<p>DeviantArt</p>-->
            </div>
        </a>

        <a href="https://beela303.artstation.com" target="_blank" rel="noopener noreferrer">
            <div>
                <i class="fa-brands fa-artstation"></i>
                <!--<p>ArtStation</p>-->
            </div>
        </a>

        <router-link to="/podcast">
            <div>
                <i class="fas fa-podcast"></i>
                <!--<p>Podcast</p>-->
            </div>
        </router-link>

        <a href="https://youtube.com/@beela303" target="_blank" rel="noopener noreferrer">
            <div>
                <i class="fa-brands fa-youtube"></i>
                <!--<p>YouTube</p>-->
            </div>
        </a>

        <a href="https://reddit.com/beela303" target="_blank" rel="noopener noreferrer">
            <div>
                <i class="fa-brands fa-reddit"></i>
                <!--<p>Reddit</p>-->
            </div>
        </a>

        <a href="https://quora.com/beela303" target="_blank" rel="noopener noreferrer">
            <div>
                <i class="fa-brands fa-quora"></i>
                <!--<p>Quora</p>-->
            </div>
        </a>

        <a href="https://pinterest.com/beela303" target="_blank" rel="noopener noreferrer">
            <div>
                <i class="fa-brands fa-pinterest"></i>
                <!--<p>Pinterest</p>-->
            </div>
        </a>

        <a href="https://tiktok.com/beela303" target="_blank" rel="noopener noreferrer">
            <div>
                <i class="fa-brands fa-tiktok"></i>
                <!--<p>TikTok</p>-->
            </div>
        </a>

        <a href="https://linkedin.com/in/nabilaabubakar" target="_blank" rel="noopener noreferrer">
            <div>
                <i class="fa-brands fa-linkedin-in"></i>
                <!--<p>Linkedin</p>-->
            </div>
        </a>

        <a href="https://beela303-dev.vercel.app" target="_blank" rel="noopener noreferrer">
            <div>
                <!--<i class="fa-brands fa-linkedin-in"></i>-->
                <p>Dev<br />Portfolio</p>
            </div>
        </a>

        <a href="https://art-sphere-vue.vercel.app" target="_blank" rel="noopener noreferrer">
            <div>
                <!---<i class="fa-brands fa-linkedin-in"></i>-->
                <p>Art<br />Portfolio</p>
            </div>
        </a>
    </div>
</template>

<style lang="scss">
#socials-links-title {
    margin-top: 5%;
    margin-bottom: 2.5%;
}

#socials-links {
    /*align-items: center;
    justify-content: center;*/

    columns: 3;
    column-gap: 200px;

    margin-bottom: 5%;

    div {
        background-color: var(--pastel-color);

        width: 90%;
        height: 70px;

        margin: 5%;

        border-radius: 20px;

        text-align: center;

        /*border: 2px var(--first-color-lighter);
        border-radius: 30px;

        width: 50%;
        padding: 1%;

        margin-left: 25%;
        margin-right: 25%;

        display: flex;
        justify-content: center;*/

        &:hover {
            transform: var(--transform);
            transition: var(--transition);
        }


        .fas,
        .fa-brands {
            font-size: 3rem;
        }

    }

    a div {
        color: #fffafa;
        font-size: 1.3rem;
        text-decoration: none;

        padding: .5%;
        margin-bottom: 2.5%;
    }
}

@media screen and (max-width: 1024px) {
    #socials-links-title {
        margin-top: 15%;
    }
}

@media screen and (max-width: 768px) {
    #socials-links {
        columns: 2;
        column-gap: 100px;

        /*#socials-links div {
            width: 95% !important;

            padding: 1%;
            margin: 2.5% !important;

            display: flex;
            justify-content: center;
        }*/
    }
}
</style>