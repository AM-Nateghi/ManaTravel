import { createRouter, createWebHistory } from "vue-router";
import LandingView from "../views/LandingView.vue";
import TourDetailView from "../views/TourDetailView.vue";
import NotFoundView from "../views/NotFoundView.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "landing",
            component: LandingView,
        },
        {
            path: "/tours/:slug",
            name: "tour-detail",
            component: TourDetailView,
        },
        {
            path: "/:catchAll(.*)",
            name: "not-found",
            component: NotFoundView,
        },
    ],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        }
        if (to.hash) {
            return {
                el: to.hash,
                behavior: "smooth",
            };
        }
        return { top: 0, behavior: "smooth" };
    },
});

export default router;
