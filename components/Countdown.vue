<template>
    <div v-if="!countdown.datePassed" :class="$style.countdown_box">
        <div :class="$style.countdown">
            <span :class="$style.decorator"></span>
            <p :class="$style.number">{{ countdown.days }}</p>
            <p>zile</p>
        </div>
        <div :class="$style.countdown">
            <span :class="$style.decorator"></span>
            <p :class="$style.number">{{ countdown.hours }}</p>
            <p>ore</p>
        </div>
        <div :class="$style.countdown">
            <span :class="$style.decorator"></span>
            <p :class="$style.number">{{ countdown.minutes }}</p>
            <p>min</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import CountdownInt from "~~/types/CountdownInt";

defineProps<{
    countdown: CountdownInt;
}>();
</script>

<style lang="scss" module>
.countdown_box {
    display: flex;
    flex-direction: row;
    gap: 3rem;
}

.countdown {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.25rem;
}

.decorator {
    --size: 0.25rem;

    display: block;
    width: var(--size);
    height: var(--size);
    background-color: var(--gold);
    transform: rotate(45deg);

    @media (min-width: 560px) {
        --size: 0.5rem;
    }
}

.number {
    font-size: 1.25rem;

    @media (min-width: 800px) {
        font-size: 1.5rem;
    }
}
</style>
