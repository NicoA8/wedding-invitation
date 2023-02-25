<template>
    <ParticlesComponent
        id="tsparticles"
        :class="$style.particles"
        :particlesInit="particlesInit"
        :options="options"
    />
</template>

<script setup lang="ts">
import { ParticlesComponent } from "vue3-particles";
import { loadFull } from "tsparticles";
import type { Engine } from "tsparticles-engine";

const particlesInit = async (engine: Engine) => {
    await loadFull(engine);
};

const options = {
    background: {
        color: {
            value: "transparent",
        },
    },
    fpsLimit: 120,
    interactivity: {
        events: {
            onClick: {
                enable: false,
            },
            onHover: {
                enable: false,
            },
            resize: true,
        },
    },
    particles: {
        color: {
            value: "#c99908",
        },
        links: {
            enable: false,
        },
        collisions: {
            enable: false,
        },
        move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 0.5,
            straight: false,
        },
        number: {
            density: {
                enable: true,
                area: 1000,
            },
            value: 200,
        },
        opacity: {
            value: 0.5,
        },
        shape: {
            type: "square",
        },
        size: {
            random: true,
            value: 5,
        },
    },
    detectRetina: true,
};
</script>

<style module>
.particles {
    position: absolute;
    z-index: -10;
}
</style>
