import { ParticlesComponent } from "vue3-particles";

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(ParticlesComponent);
});
