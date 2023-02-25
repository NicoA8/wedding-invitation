<template>
    <Layout title="noi">
        <div :class="$style.content">
            <p :class="$style.text">Împreună cu nașii</p>
            <div :class="$style.names_box">
                <Name
                    v-for="pair in godfathers"
                    :key="pair.name"
                    :name="pair.name"
                    :name-one="pair.nameOne"
                    :name-two="pair.nameTwo"
                />
            </div>
            <p :class="$style.text">și părinții noștrii</p>
            <div :class="$style.names_box">
                <Name
                    v-for="pair in parents"
                    :key="pair.name"
                    :name="pair.name"
                    :name-one="pair.nameOne"
                    :name-two="pair.nameTwo"
                    :parents="pair.parents"
                />
            </div>
            <p :class="$style.text">
                vă invităm să ne fiți alături la celebrarea căsătoriei noastre
                în data de
            </p>
            <nuxt-icon name="data" filled :class="$style.date" />
            <Countdown :countdown="countdown" />
        </div>
    </Layout>
</template>

<script setup lang="ts">
import CountdownInt from "~~/types/CountdownInt";

defineProps<{
    countdown: CountdownInt;
}>();
</script>

<style lang="scss" module>
.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    max-width: 23rem;

    .text {
        text-align: center;
        font-size: 1rem;

        @media (min-width: 560px) {
            font-size: 1.15rem;
        }
    }
}

.names_box {
    display: flex;
    gap: 1rem;

    @media (min-width: 560px) {
        gap: 4rem;
    }
}

.date {
    display: flex;
    position: relative;

    svg {
        margin: 0;
        width: auto;
        height: 3rem;

        @media (min-width: 400px) {
            height: 4rem;
        }

        @media (min-width: 560px) {
            height: 5rem;
        }

        @media (min-width: 1100px) {
            height: 6rem;
        }
    }
}
</style>
