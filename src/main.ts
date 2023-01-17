/// <reference path="multi-range-slider-vue.d.ts" />
import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";
import icons from "./UI/icons";
import "./assets/main.scss";

const app = createApp(App);
icons.forEach((component) => {
  app.component(component.name, component);
});

app.use(router).mount("#app");
