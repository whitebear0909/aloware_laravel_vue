<template>
    <div class="layout">
        <Header />
        <!-- Main Container -->
        <div id="main-container">
            <router-view></router-view>
        </div>
        <!-- END Main Container -->
        <Footer />
    </div>
</template>

<script>
import Header from "./partials/Header";
import Footer from "./partials/Footer";

export default {
    name: "Layout",
    components: {
        Header,
        Footer,
    },
};
</script>
