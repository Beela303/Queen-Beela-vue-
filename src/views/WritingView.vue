<template>
    <div id="writing">
        <h1>WRITING</h1>
        <a href="https://beela303.blogspot.com" target="_blank" rel="noopener noreferrer">
            <div class="writing-div" id="writing-div-1">
                <p>Blogger</p>
            </div>
        </a>

        <a href="https://beela303.hashnode.dev" target="_blank" rel="noopener noreferrer">
            <div class="writing-div" id="writing-div-2">
                <p>Hashnode</p>
            </div>
        </a>

        <a href="https://tumblr.com/beela303" target="_blank" rel="noopener noreferrer">
            <div class="writing-div" id="writing-div-3">
                <p>Tumblr</p>
            </div>
        </a>

        <a href="https://wattpad.com/beela303" target="_blank" rel="noopener noreferrer">
            <div class="writing-div" id="writing-div-4">
                <p>Wattpad</p>
            </div>
        </a>

        <a href="https://hellopoetry.com/beela303" target="_blank" rel="noopener noreferrer">
            <div class="writing-div" id="writing-div-5">
                <p>Hello Poetry</p>
            </div>
        </a>
    </div>
</template>

<style lang="scss">
#writing {
    display: grid;
    grid-template-columns: 1fr 1fr;
    place-items: center;
    gap: 20px;
}

a .writing-div {
    color: var(--text-color);
    text-decoration: none !important;
}

.writing-div {
    width: 30vw;
    height: 30vh; //200px

    margin-bottom: 2.5%;

    border: var(--border-main);
    border-radius: 30px;

    display: flex;
    justify-content: space-evenly;
    align-items: center;
    
    transition: var(--transition);

    &:hover {
        transition: var(--transition);
        transform: var(--transform);
    }

    p {
        font-size: 1.5rem;
    }
}

#writing-div-1 {
    color: var(--dark-color);
    background-image: url('../assets/My Art/artwork_copyright/phone_on_a_desk.webp');
}

#writing-div-2 {
    background-image: url('../assets/My Art/Artworks/underneath the interspace of stars and clouds.webp');
}

#writing-div-3 {
    background-image: url('../assets/My Art/artwork_copyright/below_the_ocean_1.webp');
}

#writing-div-4 {
    background-image: url('../assets/My Art/artwork_copyright/hall_of_mirage.webp');
}

#writing-div-5 {
    background-image: url('../assets/My Art/artwork_copyright/archer_in_the_forest.webp');
}

@media screen and (max-width: 500px) {
    #writing {
        grid-template-columns: 1fr;
    }

    .writing-div {
        width: 50vw;
        height: 25vh;
    }
}
</style>