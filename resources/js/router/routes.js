const Layout = () => import("@/layouts/Layout.vue");

const Home = () => import("@/views/pages/Home.vue");

export default [
    {
        path: "/",
        component: Layout,
        children: [
            {
                path: "home",
                name: "Home",
                component: Home,
                meta: {
                    activeOnly: true,
                },
            },
            {
                path: "/:catchAll(.*)", // Unrecognized path automatically matches home
                redirect: "/home",
            },
        ],
    },
];
