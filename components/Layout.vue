<template>
    <section :id="title" :class="$style.section">
        <header :class="$style.title_box">
            <img
                src="https://riowxqprdeqaxhkjcsax.supabase.co/storage/v1/object/public/photos/square.svg"
                alt="Romanian Embroidery"
                :class="$style.decor"
            />
            <nuxt-icon :name="`${title}`" filled :class="$style.title" />
            <h2 class="heading">{{ title }}</h2>
        </header>
        <slot />
    </section>
</template>

<script setup lang="ts">
defineProps<{
    title: string;
}>();
</script>

<style lang="scss" module>
.section {
    min-height: 100vh;
    width: 12rem;
    padding-block: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    @media (min-width: 400px) {
        width: 15rem;
    }

    @media (min-width: 560px) {
        width: 22rem;
    }

    @media (min-width: 800px) {
        width: 45rem;
    }
}

.title_box {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.decor {
    width: 2rem;
    height: auto;
}

.title {
    display: flex;
    position: relative;

    svg {
        margin: 0;
        width: auto;
        height: 2.5rem;

        @media (min-width: 560px) {
            height: 3.5rem;
        }

        @media (min-width: 1100px) {
            height: 4rem;
        }
    }
}
</style>
