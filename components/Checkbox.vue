<template>
    <label :class="$style.checkbox_label">
        <input
            type="checkbox"
            :value="title"
            :class="checked && $style.checked"
            @click.prevent="$emit('check', $event)"
        />
        {{ title }}
    </label>
</template>

<script setup lang="ts">
defineProps<{
    title: string;
    checked: boolean;
}>();
</script>

<style lang="scss" module>
.checkbox_label {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    font-size: 1rem;

    input[type="checkbox"] {
        color: var(--text-color);
        display: grid;
        place-content: center;
        appearance: none;
        background-color: #fff;
        margin: 0;
        font: var(--font-default);
        color: currentColor;
        width: 1rem;
        height: 1rem;
        border: 1px solid var(--text-color);
        border-radius: unset;
        transform: translateY(-0.075em);

        &::before {
            content: "";
            width: 0.65rem;
            height: 0.65rem;
            transform: scale(0);
            transition: 120ms transform ease-in-out;
            box-shadow: inset 1em 1em var(--gold);
        }

        &.checked::before {
            transform: scale(1);
        }
    }
}

@media (min-width: 560px) {
    .checkbox_label {
        font-size: 1.15rem;
    }
}
</style>
