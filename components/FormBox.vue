<template>
    <div :class="$style.form_box">
        <span :class="$style.decorator"></span>
        <p v-if="title">{{ title }}</p>
        <label v-else :class="$style.form_part">
            {{ label }}
            <slot name="input" />
        </label>
        <slot name="simple" />
    </div>
</template>

<script setup lang="ts">
defineProps<{
    title?: string;
    label?: string;
}>();
</script>

<style lang="scss" module>
.form_box {
    display: grid;
    justify-items: center;
    gap: 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    text-align: center;

    @media (min-width: 560px) {
        font-size: 1.15rem;
    }
}

.decorator {
    --size: 0.25rem;

    display: block;
    width: var(--size);
    height: var(--size);
    background-color: var(--gold);
    transform: rotate(45deg);
}

.form_part {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;

    input {
        color: var(--text-color);
        width: 13rem;
        border: none;
        border-block-end: 1px solid var(--text-color);
        border-radius: unset;
        font-size: 1rem;

        &:focus-visible,
        &:focus {
            outline: none;
            box-shadow: 0 2px var(--gold);
        }

        @media (min-width: 560px) {
            font-size: 1.125rem;
        }
    }

    textarea {
        color: var(--text-color);
        scrollbar-color: var(--gold) transparent;
        overflow: auto;
        width: 13rem;
        height: 8rem;
        padding-block-end: 0rem;
        padding: 0.5rem;
        resize: none;
        border: none;
        border-inline-start: 1px solid var(--text-color);
        border-radius: unset;
        font-size: 1rem;

        &::-webkit-scrollbar {
            width: 0.25rem;
        }
        &::-webkit-scrollbar-track {
            background: transparent;
        }
        &::-webkit-scrollbar-thumb {
            background-color: var(--gold);
        }

        &:focus-visible,
        &:focus {
            outline: none;
            box-shadow: -2px 0 var(--gold);
        }

        @media (min-width: 560px) {
            font-size: 1.125rem;
        }
    }
}
</style>
