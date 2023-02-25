<template>
    <button
        :class="{
            [$style.scroll_to_top]: true,
            [$style.scrolled]: y > SCROLL_BTN_BUFFER,
        }"
        @click="scrollToTop"
    ></button>
</template>

<script setup lang="ts">
import { useWindowScroll } from "@vueuse/core";
import { useRouter } from "#imports";

const router = useRouter();
const { y } = useWindowScroll();
const SCROLL_BTN_BUFFER = 200;

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
    router.push("");
};
</script>

<style lang="scss" module>
.scroll_to_top {
    --distance: 1rem;

    background-color: transparent;
    z-index: 2;
    opacity: 0;
    position: fixed;
    inset-block-end: -5rem;
    inset-inline-end: var(--distance);
    transition: all 0.2s;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 1.25rem 1.5rem 1.25rem;
    border-color: transparent transparent var(--gold);
    cursor: pointer;

    &.scrolled {
        opacity: 1;
        inset-block-end: var(--distance);
    }

    &:hover,
    &:focus-visible,
    &:focus-within {
        transform: scale(1.1);
    }
}
</style>
