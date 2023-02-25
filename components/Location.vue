<template>
    <article :class="$style.details_box">
        <img
            v-if="img === 'church'"
            src="https://riowxqprdeqaxhkjcsax.supabase.co/storage/v1/object/public/photos/church.webp"
            alt="Biserica Domnească Sf. Ioan"
            :class="$style.img"
        />
        <img
            src="https://riowxqprdeqaxhkjcsax.supabase.co/storage/v1/object/public/photos/central.webp"
            v-else
            alt="Central Plaza"
            :class="$style.img"
        />
        <div :class="$style.details">
            <h2 :class="$style.title">{{ title }}</h2>
            <span :class="$style.separator"></span>
            <p :class="$style.location">{{ location }}</p>
            <p :class="$style.location">Piatra Neamț</p>
            <p :class="$style.time">{{ time }}</p>
        </div>
    </article>
</template>

<script setup lang="ts">
defineProps<{
    title: string;
    location: string;
    time: string;
    img: string;
}>();
</script>

<style lang="scss" module>
.details_box {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;

    p,
    h2 {
        text-align: center;
        font-size: 1rem;

        @media (min-width: 800px) {
            font-size: 1.15rem;
        }
    }
}

.details {
    display: grid;
    justify-items: center;
    gap: 0.25rem;
}

.img {
    width: 10rem;
    height: auto;

    @media (min-width: 800px) {
        width: 12rem;
    }
}

.title {
    text-transform: uppercase;
    font-weight: 500;
}

.separator {
    width: 100%;
    height: 1px;
    z-index: 1;
    background-color: var(--gold);
}
</style>
