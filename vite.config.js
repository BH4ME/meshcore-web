import path from "path";
import vue from '@vitejs/plugin-vue';

export default {

    // vite app is loaded from /src
    root: path.join(__dirname, "src"),
    // use relative asset paths so both GitHub Pages project path and custom domains work
    base: './',

    // build to /dist instead of /src/dist
    build: {
        outDir: '../dist',
        emptyOutDir: true,
    },

    // add plugins
    plugins: [
        vue(),
    ],

}
