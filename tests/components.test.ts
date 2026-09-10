import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import TripEssentialsBox from "../src/components/TripEssentialsBox.vue";
import type { TourPackage } from "../src/types/tour";

const mockTour: TourPackage = {
    id: "test-1",
    slug: "8d7n-test-trip",
    title: "8D7N Yunnan Muslim Village Trip",
    subtitle: "Expedition through historic Hui villages",
    tourType: "scheduled",
    durationDays: 8,
    durationNights: 7,
    destinations: ["Kunming", "Dali", "Weishan"],
    heroImage: "https://example.com/test.jpg",
    galleryImages: [],
    inclusions: ["100% Halal Banquets", "High-speed trains"],
    exclusions: ["International airfare (self-arranged)"],
    batches: [
        {
            id: "b-1",
            startDate: "2026-10-12",
            endDate: "2026-10-19",
            displayDates: "Oct 12 - Oct 19, 2026",
            status: "limited",
            availableSeats: 4,
        },
    ],
    itinerary: [],
    priceIndication: {
        amount: 1580,
        currency: "USD",
        note: "per person twin-sharing",
    },
};

describe("Trip Essentials Component Seam", () => {
    it("renders ground tour format notice clearly upfront", () => {
        const wrapper = mount(TripEssentialsBox, {
            props: {
                tour: mockTour,
            },
        });

        expect(wrapper.text()).toContain("Ground Tour");
        expect(wrapper.text()).toContain("Flights Self-Arranged");
    });

    it("renders 100% Halal verified badge", () => {
        const wrapper = mount(TripEssentialsBox, {
            props: {
                tour: mockTour,
            },
        });

        expect(wrapper.text()).toContain("100% Halal Dining");
    });

    it("renders duration and next open batch availability", () => {
        const wrapper = mount(TripEssentialsBox, {
            props: {
                tour: mockTour,
            },
        });

        expect(wrapper.text()).toContain("8 Days / 7 Nights");
        expect(wrapper.text()).toContain("Oct 12 - Oct 19, 2026");
        expect(wrapper.text()).toContain("4 seats left");
    });
});
