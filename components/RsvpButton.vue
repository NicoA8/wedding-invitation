<template>
    <button
        :class="$style.button"
        @click="$emit('handleClick', $event)"
        type="button"
    >
        {{ label }}
    </button>
</template>

<script setup lang="ts">
defineProps<{
    label: string;
}>();
</script>

<style module lang="scss">
.button {
    width: 8rem;
    font-size: 1rem;
    color: var(--text-color);
    background-color: transparent;
    padding: 0.5rem;
    position: relative;
    border: none;
    white-space: nowrap;

    &::before {
        content: "";
        position: absolute;
        inset: 0;
        transition: all 0.5s;
    }

    &::before {
        border-top: 1px solid var(--gold);
        border-bottom: 1px solid var(--gold);
        transform: scale(1, 1);
    }

    &:hover::before,
    &:focus::before,
    &:focus-within::before {
        transform: scale(1.2, 1);
    }

    @media (min-width: 560px) {
        font-size: 1.15rem;
    }
}
</style>
