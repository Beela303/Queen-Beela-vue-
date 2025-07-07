<script>
export default {

}
</script>

<template>
    <div id="space">
        <div id="blogs">
            <h1>BLOGS</h1>
            <a href="https://beela303.hashnode.dev" target="_blank" rel="noopener noreferrer">
                <div class="blog-div" id="blog-div-1">
                    <p>Coding</p>
                </div>
            </a>

            <a href="https://beela303.blogspot.com" target="_blank" rel="noopener noreferrer">
                <div class="blog-div" id="blog-div-2">
                    <p>Blog</p>
                </div>
            </a>
        </div>
    </div>
</template>

<style lang="scss" scoped>
#blogs {
    width: 50%;

    margin-top: 10%;
    margin-left: 25%;
    margin-right: 25%;

    align-items: center;
    justify-content: center;
}

a .blog-div {
    color: #fffafa;
    text-decoration: none !important;
}

.blog-div {
    height: 200px;
    margin-bottom: 2.5%;

    border: var(--border-main);
    border-radius: 30px;

    display: flex;
    justify-content: space-evenly;
    align-items: center;
}

#blog-div-1 {
    background-image: url('../assets/My Art/Artworks/underneath the interspace of stars and clouds.png');
}

#blog-div-2 {
    background-image: url('../assets/My Art/Artworks/below\ the\ ocean.jpg');
}

.blog-div p {
    font-size: 2rem;
}
</style>