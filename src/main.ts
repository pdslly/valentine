import { createApp } from "vue";
import App from "./App.vue";
import mitt from "mitt";

const app = createApp(App);
app.provide("bus", mitt());
app.mount(document.body);
