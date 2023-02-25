<template>
    <Layout title="detalii">
        <div :class="$style.content">
            <Location
                v-for="detail in details"
                :title="detail.title"
                :location="detail.location"
                :time="detail.time"
                :img="detail.img"
            />
        </div>
    </Layout>
</template>

<script setup lang="ts">
const details = [
    {
        title: "Cununia religioasă",
        location: "Biserica „Sfântul loan Domnesc.”",
        time: "ora 15:00",
        img: "church",
    },
    {
        title: "Petrecerea",
        location: "Salon Clasic. Hotel Central Plaza.",
        time: "ora 19:00",
        img: "central",
    },
];
</script>

<style lang="scss" module>
.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    max-width: 23rem;
}
</style>
