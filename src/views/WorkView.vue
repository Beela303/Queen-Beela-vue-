<template>
    <div id="work-body">
        <h1 id="work-title">WORK</h1>

        <a href="https://beela303-dev.vercel.app/" target="_blank" rel="noopener noreferrer">
            <div class="work" id="work-div-1">
                <p class="sub-title">Software Dev</p>
            </div>
        </a>

        <a href="https://art-sphere-vue.vercel.app/" target="_blank" rel="noopener noreferrer">
            <div class="work" id="work-div-2">
                <p class="sub-title">Art</p>
            </div>
        </a>

        <a href="https://hellopoetry.com/@Beela303/" target="_blank" rel="noopener noreferrer">
            <div class="work" id="work-div-3">
                <p class="sub-title">Poetry</p>
            </div>
        </a>
    </div>
</template>

<style lang="scss">
#work-body {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;

    justify-content: center;
    place-items: center;
    align-items: center;

    //pointer-events: none;

    .work {
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
            font-size: 2rem;
        }
    }

    #work-div-1 {
        background-image: url('../assets/website assets/inventory_dashboard/categories-inventory-dashboard.jpg');
    }

    #work-div-2 {
        background-image: url('../assets/My Art/artwork_copyright/seeking_through_the_abyss.webp');
    }

    #work-div-3 {
        background-image: url('../assets/My poems/poem_1.webp');
    }
}

@media screen and (max-width: 600px) {
    #work-body {
        grid-template-columns: 1fr 1fr;

        .work {
            width: 30vw;
            height: 20vh;
        }
    }
}

@media screen and (max-width: 500px) {
    #work-body {
        grid-template-columns: 1fr;

        .work {
            width: 50vw;
            height: 25vh;
        }
    }
}
</style>