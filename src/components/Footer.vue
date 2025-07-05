<script>
export default {

}
</script>

<template>
    <footer>
        <ul id="footer-socials">
            <li><a href="https://www.linkedin.com/in/nabilaabubakar" target="_blank" rel="noopener noreferrer"
                    title="Linked-In"><i class="fa-brands fa-linkedin-in"></i></a></li>
            <li><a href="https://www.instagram.com/beela303" target="_blank" rel="noopener noreferrer"
                    title="Instagram"><i class="fa-brands fa-instagram"></i></a></li>
            <li><a href="https://www.twitter.com/beela303" target="_blank" rel="noopener noreferrer" title="Twitter"><i
                        class="fa-brands fa-twitter"></i></a></li>
            <li><router-link to="/podcast" title="Podcast"><i class="fas fa-podcast"></i></router-link></li>
            <li><a href="https://www.youtube.com/@beela303" target="_blank" rel="noopener noreferrer" title="YouTube"><i
                        class="fa-brands fa-youtube"></i></a></li>
            <li><a href="https://www.tiktok/beela303" target="_blank" rel="noopener noreferrer" title="TikTok"><i
                        class="fa-brands fa-tiktok"></i></a></li>
            <li><a href="https://www.pinterest.com/beela303" target="_blank" rel="noopener noreferrer"
                    title="Pinterest"><i class="fa-brands fa-pinterest"></i></a></li>
            <li><a href="https://www.github.com/beela303" target="_blank" rel="noopener noreferrer" title="Github"><i
                        class="fa-brands fa-github"></i></a></li>
        </ul>

        <hr class="gray">

        <p id="copyright">&copy;2025 Nabila Abubakar</p>
    </footer>
</template>

<style lang="scss" scoped>
footer {
    /*background: var(--linear-gradient-hover);*/
    background: rgba(255, 255, 255, .2);

    padding: 20px;

    border: 1px solid rgba(255, 255, 255, .3);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    backdrop-filter: blur(10px);
    --webkit-backdrop-filter: blur(10px);

    ul {
        display: flex;
        justify-content: space-evenly;

        li {
            color: var(--white);
            font-size: 2rem;

            transition: var(--transition);

            &:hover {
                color: var(--hover);
                transform: var(--transform);

            }

            a {
                color: var(--white);

                &:hover {
                    color: var(--hover);
                }
            }
        }

        p {
            color: #fafafa;

            padding-top: 20px;

            font-size: 20px;
            text-align: center;
        }

    }
}

@media screen and (max-width: 900px) {
    footer hr {
        clear: both;
    }
}

@media screen and (min-width: 200px) and (max-width: 500px) {
    footer p {
        font-size: 20px;
    }
}

@media screen and (max-width: 425px) {
    footer p {
        font-size: 23px;
        margin-left: 20%;
        margin-right: 20%;
    }
}

@media screen and (max-width: 400px) {
    footer ul {
        font-size: 25px;
    }
}
</style>