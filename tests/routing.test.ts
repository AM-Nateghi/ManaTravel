import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import { createMemoryHistory, createRouter } from "vue-router";
import TourDetailView from "../src/views/TourDetailView.vue";
import LandingView from "../src/views/LandingView.vue";

describe("Deep-Link Routing Seam", () => {
    it("renders tour detail view with itinerary for a valid slug", async () => {
        const router = createRouter({
            history: createMemoryHistory(),
            routes: [
                { path: "/", component: LandingView },
                { path: "/tours/:slug", component: TourDetailView },
            ],
        });

        router.push("/tours/8d7n-muslim-village-and-food-trip");
        await router.isReady();

        const wrapper = mount(TourDetailView, {
            global: {
                plugins: [router],
            },
        });

        expect(wrapper.text()).toContain("8D7N Muslim Village and Food Trip");
        expect(wrapper.text()).toContain("Chronological Daily Itinerary");
        expect(wrapper.text()).toContain("Inclusions & Exclusions Overview");
    });

    it("renders graceful fallback when slug is unrecognized", async () => {
        const router = createRouter({
            history: createMemoryHistory(),
            routes: [
                { path: "/", component: LandingView },
                { path: "/tours/:slug", component: TourDetailView },
            ],
        });

        router.push("/tours/non-existent-tour-slug-999");
        await router.isReady();

        const wrapper = mount(TourDetailView, {
            global: {
                plugins: [router],
            },
        });

        expect(wrapper.text()).toContain("Expedition Package Not Found");
        expect(wrapper.text()).toContain("Return to All Expeditions");
    });
});
