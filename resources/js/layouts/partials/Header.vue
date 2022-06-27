<template>
    <div class="header">
        <b-navbar toggleable="lg" type="dark" variant="info">
            <b-navbar-brand to="/home"
                ><img width="30px" src="/images/logo.svg"
            /></b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item
                        to="/home"
                        :class="{ active: $route.path === '/home' }"
                    >
                        Home</b-nav-item
                    >
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
    name: "Header",
};
</script>
