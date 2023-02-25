<template>
    <main class="main">
        <PageHero />
        <PageUs :countdown="countdown" />
        <PageDetails />
        <PageConfirmation :date-passed="countdown.datePassed" />
        <ScrollToTop />
    </main>
    <Particles />
</template>

<script setup lang="ts">
const countDownDate = new Date("July 29, 2023 15:00:00").getTime();

const countdown = reactive({
    days: 0,
    hours: 0,
    minutes: 0,
    datePassed: false,
});

setInterval(() => {
    const present = new Date().getTime();

    const distance = countDownDate - present;
    countdown.days = Math.floor(distance / (1000 * 60 * 60 * 24));
    countdown.hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    countdown.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    if (distance <= 0) {
        countdown.datePassed = true;
    }
}, 1000);
</script>

<style scoped lang="scss">
.main {
    --xs-box: 20rem;
    --s-box: 25rem;
    --m-box: 33rem;
    --l-box: 45rem;

    position: relative;
    width: var(--xs-box);
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    overflow-y: clip;
    background: rgba(#ffffff, 0.7);

    &::before,
    &::after {
        content: "";
        width: 2.8rem;
        height: calc(400vh + 30rem);
        position: absolute;
        z-index: 1;
        inset-block-start: -1rem;
        background-color: var(--gold);
        mask-size: 100%;
        mask-repeat: no-repeat;
    }

    &::before {
        inset-inline-start: 0;
        mask-image: url("https://riowxqprdeqaxhkjcsax.supabase.co/storage/v1/object/public/photos/full-line.svg");
    }

    &::after {
        inset-inline-end: 0;
        mask-image: url("https://riowxqprdeqaxhkjcsax.supabase.co/storage/v1/object/public/photos/part-line.svg");
    }
}

.main :deep(> *) {
    scroll-snap-align: start end;
    scroll-snap-stop: always;
}

@media (min-width: 400px) {
    .main {
        width: var(--s-box);

        &::before,
        &::after {
            width: 4rem;
        }
    }
}

@media (min-width: 560px) {
    .main {
        width: var(--m-box);

        &::before,
        &::after {
            width: 4.5rem;
        }
    }
}

@media (min-width: 800px) {
    .main {
        width: var(--l-box);

        &::before,
        &::after {
            width: 5rem;
        }
    }
}
</style>
