import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
    app: {
        head: {
            title: "Nunta Adelina și Alexandru",
            meta: [
                { charset: "utf-8" },
                {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1",
                },
                {
                    name: "description",
                    content: "Invitație nuntă Adelina și Alexandru.",
                },
            ],
            htmlAttrs: {
                lang: "en",
            },
            link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
        },
    },
    modules: ["@nuxtjs/supabase", "nuxt-icons"],
    ssr: false,
});
