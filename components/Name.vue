<template>
    <div :class="$style.name_box">
        <div :class="[$style.names, parents && $style.parents]">
            <p :class="$style.name">{{ nameOne }}</p>
            <span :class="$style.decorator"></span>
            <p :class="$style.name">{{ nameTwo }}</p>
        </div>
        <p :class="$style.name">{{ name }}</p>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    nameOne: string;
    nameTwo: string;
    name: string;
    parents?: boolean;
}>();
</script>

<style lang="scss" module>
.name_box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;

    .name {
        font-weight: 500;
        font-size: 1rem;

        @media (min-width: 560px) {
            font-size: 1.15rem;
        }

        @media (min-width: 800px) {
            font-size: 1.25rem;
        }
    }
}

.names {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;

    &.parents {
        flex-direction: column;
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
</style>
