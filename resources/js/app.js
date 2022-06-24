/*
 * Main file
 */

// import vue
import Vue from "vue";

// import Vue Router, App, Vuex store and Axios service
import App from "./App.vue";

// Disable tip shown in dev console when in development mode
Vue.config.productionTip = false;

// Craft new application
new Vue({
    render: (h) => h(App),
}).$mount("#app");
