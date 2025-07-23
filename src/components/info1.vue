<template>
    <article>
        <section>
            <h2>Software Developer</h2>
            <p>Versatile Fullstack Developer with a passion for crafting innovative solutions that drive impact with
                years
                of experience in developing and deploying. I excel at turning complex problems into elegant,
                user-centric solutions.</p>
            <p>My expertise span both front-end and back-end development which includes Python, JavaScript, Vue, Sass,
                Django, Django Rest Framework, MySQL and Git.</p>
            <p>I craft robust, scalable, and user-friendly applications that drive real results. I'm excited to
                collaborate with like-minded professionals to build beautiful software that makes a difference.</p><a
                href="http://beela303-dev.vercel.app/" target="_blank" rel="noopener noreferrer">Projects</a>
        </section>
        <!--
        <aside>
            <div class="item"><span>200+</span>marzipan log</div>
            <div class="item"><span>5.3m</span>marzipan log</div>
            <div class="item"><span>70%</span>marzipan log</div>
        </aside> -->
    </article>
    <article>
        <section>
            <h2>digital marketing</h2>
            <p>Tiramisu jelly-o bear claw pie dessert. Tootsie roll chupa chups tootsie roll sugar plum lemon drops
                tootsie roll brownie bonbon tart. Cookie candy canes dragée ice cream chocolate cake.</p>
            <p>Icing liquorice gingerbread bear claw halvah liquorice tootsie roll dragée. Wafer jujubes bonbon
                liquorice chocolate bar donut apple pie croissant. Macaroon muffin gingerbread cake jujubes cotton
                candy.</p>
            <p>Croissant chupa chups cake chocolate bar cake muffin candy tootsie roll. Gingerbread cheesecake wafer
                sweet roll powder lemon drops marzipan dessert. Lemon drops candy cake chupa chups candy canes wafer
                powder.</p><a href="#">our marketing services</a>
        </section>
        <aside>
            <div class="item"><span>200+</span>marzipan log</div>
            <div class="item"><span>5.3m</span>marzipan log</div>
            <div class="item"><span>70%</span>marzipan log</div>
        </aside>
    </article>
    <article>
        <section>
            <h2>digital marketing</h2>
            <p>Tiramisu jelly-o bear claw pie dessert. Tootsie roll chupa chups tootsie roll sugar plum lemon drops
                tootsie roll brownie bonbon tart. Cookie candy canes dragée ice cream chocolate cake.</p>
            <p>Icing liquorice gingerbread bear claw halvah liquorice tootsie roll dragée. Wafer jujubes bonbon
                liquorice chocolate bar donut apple pie croissant. Macaroon muffin gingerbread cake jujubes cotton
                candy.</p>
            <p>Croissant chupa chups cake chocolate bar cake muffin candy tootsie roll. Gingerbread cheesecake wafer
                sweet roll powder lemon drops marzipan dessert. Lemon drops candy cake chupa chups candy canes wafer
                powder.</p><a href="#">our marketing services</a>
        </section>
        <aside>
            <div class="item"><span>200+</span>marzipan log</div>
            <div class="item"><span>5.3m</span>marzipan log</div>
            <div class="item"><span>70%</span>marzipan log</div>
        </aside>
    </article>
</template>

<style lang="scss" scoped>
@use 'sass:math';

article {
    --img: url(https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?w=2072);
}

$a: 2em; // wave amplitude

// round number $n to $p precision
@function round-to($n, $p: 3) {
    @return round($n*math.pow(10, $p))*math.pow(10, -$p)
}

// create wave of amplitude $a out of $n segments
@function wave($a, $n: 20) {
    $u: 360deg/$n;
    $l: (
    );

@for $i from 0 through $n {
    $l: $l, $i*100%/$n round-to((1 + math.sin($i*$u))*$a)
}

@return $l;
}

article {
    margin: 100px !important;
    padding: 20px !important;

    &:nth-of-type(n + 2) {
        padding-top: 2*$a;
        clip-path: polygon(wave($a), 100% 100%, 0 100%)
    }

    &:nth-last-of-type(n + 2) {
        margin-bottom: -2*$a;
        padding-bottom: 2*$a;
    }
}

/* non-essential prettifying and layout */
* {
    margin: 0
}

html {
    background: #212121
}

body {
    display: grid
}

article {
    --p: 0;
    --perc-p: calc(var(--p)*100%);
    justify-self: center;
    display: flex;
    width: clamp(320px, 100%, 75em);
    background: color-mix(in srgb, #023047 var(--perc-p), #ededed);
    color: color-mix(in srgb, #ededed var(--perc-p), #023047);
    font: 300 clamp(.625em, 2vw, 1.25em) oswald, sans-serif;

    &:nth-of-type(2n) {
        --p: 1
    }

    &::after {
        flex: 1 2 35%;
        order: calc(2*(1 - var(--p)) + 1);
        margin: -2*$a 0;
        margin-bottom: inherit;
        background: var(--img) 50%/ cover;
        content: ''
    }
}

section,
aside {
    display: grid;
    grid-gap: .5em;
    margin: calc(var(--p)*#{-.5*$a}) 0 0;
    padding: .5em;

    :not(:last-of-type)>& {
        margin-bottom: calc((var(--p) - 1)*#{$a})
    }
}

section {
    flex: 1 1 50%;
    order: 2
}

h2 {
    text-shadow: 1px 1px 2px;
    text-transform: uppercase
}

a {
    justify-self: start;
    border: solid 2px;
    padding: 0 .5em .25em;
    background: color-mix(in srgb, #126782 var(--perc-p), #8ecae6);
    color: inherit;
    text-decoration: none;
    transition: box-shadow .3s;

    &:focus {
        outline: none
    }

    &:is(:hover, :focus) {
        box-shadow: 2px 2px
    }
}

aside {
    order: calc(2*var(--p) + 1);
    place-content: center;
    color: color-mix(in srgb, #fd9e02 var(--perc-p), #7d4600);
    font-family: exo
}

.item {
    display: grid;
    place-items: center;

    span {
        font-size: 2.5em
    }
}
</style>