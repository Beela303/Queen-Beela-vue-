<script>
export default {

}
</script>

<template>
    <button title="Scroll to Top" id="scroll-to-top" type="button"><i class="fas fa-arrow-up-long"></i></button>
</template>

<style lang="scss">
#scroll-to-top {
    color: var(--white);
    /*background: var(--main2);*/
    /*background: var(--linear-gradient-hover);*/
    background: rgba(255, 255, 255, .2);
    backdrop-filter: blur(10px);
    --webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, .3);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    font-size: 40px;

    height: 65px;
    width: 65px;

    top: 85%;
    right: 30px;

    border-radius: 50%;
    outline: none;

    display: none;
    position: fixed;

    cursor: pointer;

    transition: var(--transition);

    &:hover {
        border-radius: 20px;
    }
}
</style>