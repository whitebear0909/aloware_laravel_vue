/*
 * Main file
 */

// import vue
import Vue from "vue";

// import Vue Router, App, Vuex store and Axios service
import App from "./App.vue";
import store from "./store";
import router from "./router";
require("./service/axios.service");

// Bootstrap Vue
import BootstrapVue from "bootstrap-vue";
Vue.use(BootstrapVue);
import "bootstrap/dist/css/bootstrap.min.css";

// Disable tip shown in dev console when in development mode
Vue.config.productionTip = false;

// Craft new application
new Vue({
    store,
    router,
    render: (h) => h(App),
}).$mount("#app");
