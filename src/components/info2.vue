<template>
    <main>
        <section class="content-container">
            <div class="media-primary">
                <img alt="Generated image of some people working at a computer"
                    src="https://assets.codepen.io/140/learning-grid-and-clip-path.png" />
            </div>
            <div class="media-secondary">
                <figure class="animated-icon">
                    <img alt="illustration of a laptop" src="https://assets.codepen.io/140/laptop.webp" />
                </figure>
                <figure class="animated-icon">
                    <img alt="illustration of a grid" src="https://assets.codepen.io/140/grid.webp" />
                </figure>
                <figure class="animated-icon">
                    <img alt="illustration respresenting a clip-path"
                        src="https://assets.codepen.io/140/clip-path.webp" />
                </figure>
            </div>
            <div class="text-content">
                <div>
                    <h1 class="text-heading">
                        <span class="text-heading-aligned">
                            <span class="span-1" id="first-line">Gaining knowledge</span>
                            <span class="span-2">by building <svg class="pseudo-corner"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 12"
                                    aria-hidden="true" role="presentation">
                                    <path fill="currentColor" d="M12 12C12 5.373 6.627 0 0 0h12v12Z" />
                                </svg><svg class="pseudo-corner" xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 12 12" aria-hidden="true" role="presentation">
                                    <path fill="currentColor" d="M12 12C12 5.373 6.627 0 0 0h12v12Z" />
                                </svg></span>
                        </span>
                        <span class="span-3">web things <svg class="pseudo-corner" xmlns="http://www.w3.org/2000/svg"
                                fill="none" viewBox="0 0 12 12" aria-hidden="true" role="presentation">
                                <path fill="currentColor" d="M12 12C12 5.373 6.627 0 0 0h12v12Z" />
                            </svg></span>
                    </h1>
                </div>
                <div class="text-body">
                    <div class="text-body-container">
                        <p>
                            We're building an example that shares code created while learning from others, showing how
                            collaboration and
                            exploration can lead to enhanced outcomes.
                        </p>
                        <div class="ctas">
                            <a class="cta cta-primary" href="https://mode.com">Mode.com</a>
                            <a class="cta cta-secondary" href="https://codepen.io/collection/KwKNaN">
                                CodePen
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <svg width="0" height="0">
            <defs>
                <clipPath id="clip-heading" clipPathUnits="objectBoundingBox">
                    <path
                        d="
        M0.044,0 H0.852 A0.037,0.05 0,0,1 0.889,0.05 V0.25 A0.037,0.05 0,0,0 0.926,0.30 H0.963 A0.037,0.05 0,0,1 1.000,0.35 V0.70 A0.037,0.05 0,0,1 0.963,0.75 H0.926 A0.037,0.05 0,0,0 0.889,0.80 V0.95 A0.037,0.05 0,0,1 0.852,1 H0.044 A0.044,0.06 0,0,1 0,0.94 V0.06 A0.044,0.06 0,0,1 0.044,0 Z" />
                </clipPath>
            </defs>
        </svg>
        <svg width="0" height="0">
            <defs>
                <clipPath id="media-clip-path-default" clipPathUnits="objectBoundingBox">
                    <path
                        d=" M0.035,0 H0.555 A0.035,0.035 0,0,1 0.59,0.04 V0.423 A0.035,0.035 0,0,0 0.625,0.463 H0.965 A0.035,0.035 0,0,1 1.000,0.503 V0.96 A0.035,0.035 0,0,1 0.965,1 H0.035 A0.035,0.035 0,0,1 0,0.96 V0.04 A0.035,0.035 0,0,1 0.035,0 Z" />
                </clipPath>
            </defs>
        </svg>
        <svg width="0" height="0">
            <defs>
                <clipPath id="media-clip-path-full" clipPathUnits="objectBoundingBox">
                    <path
                        d="M0.0188,0 H0.5203 A0.0188,0.0308 0,0,1 0.5391,0.0308 V0.2769 A0.0188,0.0308 0,0,0 0.5578,0.3077 H0.9813 A0.0188,0.0308 0,0,1 1,0.3385 V0.9692 A0.0188,0.0308 0,0,1 0.9813,1 H0.0188 A0.0188,0.0308 0,0,1 0,0.9692 V0.0308 A0.0188,0.0308 0,0,1 0.0188,0 Z" />
                </clipPath>
            </defs>
        </svg>
    </main>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

main {
    background-color: #15272a;
    padding: 1rem;
}

.media-primary,
.media-secondary {
    grid-area: 1 / 1 / 2 / 2;
}

.media-primary {
    aspect-ratio: 346 / 300;
    clip-path: url(#media-clip-path-default);
    position: relative;
}

.media-primary img {
    object-fit: cover;
    width: 100%;
    height: 100%;
}

.media-secondary {
    aspect-ratio: 122 / 119;
    background-color: #465e5f;
    border-radius: 12px;
    justify-self: end;
    width: 35%;
}

.media-secondary svg {
    object-fit: cover;
    width: 100%;
    height: 100%;
}

.text-heading {
    background-color: #b6d2d3;
    border-radius: 0.75rem;
    clip-path: url(#clip-heading);
    font-size: 2.5rem;
    font-weight: bold;
    line-height: 1.15;
    margin-block-start: 1.5rem;
    padding: 1rem 3rem 1rem 1rem;
    position: relative;
}

.text-body {
    color: #fff;
    margin-block-start: 1.5rem;
}

.ctas {
    display: flex;
    gap: 1rem;
    margin-block-start: 1.5rem;
}

.cta {
    border: 1px solid #fff;
    border-radius: 4px;
    font-size: 0.75rem;
    padding: 0.5rem 1rem;
    text-align: center;
}

.cta-primary {
    background-color: #fff;
    color: #15272a;
}

.cta-secondary {
    color: #ffffff;
}

.content-container {
    container-name: content-container;
    container-type: inline-size;
    display: grid;
    margin-inline: auto;
    max-inline-size: 30rem;
}

.pseudo-corner {
    display: none;
}

@container content-container (min-width: 343px) {
    .text-heading {
        max-inline-size: 85%;
    }
}

@media screen and (min-width: 768px) {
    .content-container {
        max-inline-size: 75rem;
    }
}

@container content-container (min-width: 736px) {
    .media-primary {
        align-self: end;
        clip-path: url(#media-clip-path-full);
        width: 50%;
    }

    .media-secondary {
        aspect-ratio: 240 / 220;
        width: 20%;
    }

    .text-content {
        grid-area: 1 / 1 / 2 / 2;
        position: relative;
        z-index: 2;
        display: grid;
        grid-template-rows: 1fr auto;
    }

    .text-heading {
        align-items: start;
        background-color: unset;
        display: grid;
        clip-path: unset;
        font-optical-sizing: auto;
        font-size: 7.125cqw;
        font-weight: 700;
        font-style: normal;
        justify-items: start;
        margin-block-start: 0;
        max-inline-size: 100%;
        padding: 0;
    }

    .pseudo-corner {
        color: #b6d2d3;
        height: 24px;
        pointer-events: none;
        position: absolute;
        width: 24px;
    }

    .text-heading-aligned {
        align-items: flex-start;
        display: flex;
        flex-direction: column;
    }

    .span-1 {
        border-radius: 0.75rem 0.75rem 0 0.75rem;
    }

    .span-2 {
        align-self: end;
        border-radius: 0 0 0 0.75rem;
    }

    .pseudo-corner {
        display: block;
    }

    .span-2 .pseudo-corner:first-child,
    .span-3 .pseudo-corner {
        left: -24px;
        top: 0;
    }

    .span-2 .pseudo-corner:last-child {
        bottom: 0;
        right: -24px;
        transform: rotate(180deg);
    }

    .span-3 {
        border-radius: 0 0.75rem 0.75rem 0.75rem;
        justify-self: end;
    }

    .span-1,
    .span-2,
    .span-3 {
        background-color: #b6d2d3;
        padding: 0.25rem 1rem 0.75rem;
        position: relative;
    }

    .text-body {
        display: flex;
        justify-content: flex-end;
    }

    .text-body-container {
        padding-inline-start: 1.5rem;
        width: 50%;
    }
}

@container content-container (min-width: 736px) {
    .text-body-container {
        font-size: 1.9cqw;
        padding-inline-start: 1.5rem;
        min-height: 160px;
        width: 48%;
    }

    .media-primary {
        width: 51%;
    }

    .media-secondary {
        aspect-ratio: 260 / 240;
        width: 20%;
    }
}

@container content-container (min-width: 980px) {
    .text-body-container {
        padding-inline-start: 1.5rem;
        width: 46%;
    }
}

@container content-container (min-width: 1088px) {
    .text-body-container {
        font-size: 1.5cqw;
        padding-inline-start: 1.5rem;
        min-height: unset;
        width: 45%;
    }

    .media-primary {
        aspect-ratio: 320 / 195;
        width: 53%;
    }

    .media-secondary {
        aspect-ratio: 270 / 215;
        width: 22%;
    }
}

@container content-container (min-width: 1200px) {
    .media-primary {
        clip-path: url(#media-clip-path-full);
        width: 45%;
    }

    .media-primary {
        aspect-ratio: 320 / 195;
        width: 53%;
    }

    .media-secondary {
        aspect-ratio: 250 / 195;
        width: 22%;
    }

    .text-body-container {
        padding-block-start: 0;
        padding-inline-start: 1.5rem;
        width: 46%;
    }
}

/* Animation */

.media-secondary {
    display: grid;
    position: relative;
    overflow: hidden;
}

.animated-icon {
    align-items: center;
    display: flex;
    justify-content: center;
    grid-area: 1 / 1 / 2 / 2;
}

.animated-icon img {
    height: auto;
    opacity: 0;
    width: 80%;
    animation: rotateImages 9s infinite cubic-bezier(0.4, 0, 0.2, 1);
    transform-origin: center center;
}

.animated-icon:nth-child(1) img {
    animation-delay: 0s;
}

.animated-icon:nth-child(2) img {
    animation-delay: 3s;
    animation-name: rotateImagesReverse;
}

.animated-icon:nth-child(3) img {
    animation-delay: 6s;
}

@keyframes rotateImages {
    0% {
        opacity: 0;
        transform: scale(0.8) rotate(-15deg);
    }

    5% {
        opacity: 1;
        transform: scale(1.1) rotate(5deg);
    }

    10% {
        transform: scale(1) rotate(0deg);
    }

    30% {
        opacity: 1;
        transform: scale(1) rotate(0deg);
    }

    33% {
        opacity: 0;
        transform: scale(0.8) rotate(15deg);
    }

    100% {
        opacity: 0;
        transform: scale(0.8) rotate(15deg);
    }
}

@keyframes rotateImagesReverse {
    0% {
        opacity: 0;
        transform: scale(0.8) rotate(15deg);
    }

    5% {
        opacity: 1;
        transform: scale(1.1) rotate(-5deg);
    }

    10% {
        transform: scale(1) rotate(0deg);
    }

    30% {
        opacity: 1;
        transform: scale(1) rotate(0deg);
    }

    33% {
        opacity: 0;
        transform: scale(0.8) rotate(-15deg);
    }

    100% {
        opacity: 0;
        transform: scale(0.8) rotate(-15deg);
    }
}

* {
    box-sizing: border-box;
}

/* Base styles */

body {
    background-color: #15272a;
    font-family: "Montserrat", sans-serif;
    font-optical-sizing: auto;
    font-style: normal;
    line-height: 1.75;
    margin: 0;
}

h1 {
    font-weight: 700;
    line-height: 1.25;
    margin: 0;
}

p {
    margin: 0;
}

a {
    text-decoration: none;
}

img {
    display: block;
    height: auto;
    max-width: 100%;
}
</style>