import { describe, expect, it } from "vitest";
import {
    filterToursByType,
    findTourBySlug,
    getOpenBatchesCount,
    getTotalSeatsAvailable,
} from "../src/utils/tours";
import type { TourPackage } from "../src/types/tour";

const mockTours: TourPackage[] = [
    {
        id: "1",
        slug: "yunnan-classic-group",
        title: "Yunnan Classic Group 8D7N",
        subtitle: "Small group departure",
        tourType: "scheduled",
        durationDays: 8,
        durationNights: 7,
        destinations: ["Kunming", "Dali", "Lijiang"],
        heroImage: "https://example.com/hero1.jpg",
        galleryImages: [],
        inclusions: ["100% Halal Meals", "Domestic Transport"],
        exclusions: ["International Flights"],
        batches: [
            {
                id: "b1",
                startDate: "2026-10-01",
                endDate: "2026-10-08",
                displayDates: "Oct 1 - Oct 8",
                status: "open",
                availableSeats: 6,
            },
            {
                id: "b2",
                startDate: "2026-11-01",
                endDate: "2026-11-08",
                displayDates: "Nov 1 - Nov 8",
                status: "limited",
                availableSeats: 2,
            },
            {
                id: "b3",
                startDate: "2026-12-01",
                endDate: "2026-12-08",
                displayDates: "Dec 1 - Dec 8",
                status: "sold_out",
                availableSeats: 0,
            },
        ],
        itinerary: [],
        priceIndication: { amount: 1650, currency: "USD", note: "per person" },
    },
    {
        id: "2",
        slug: "bespoke-family-silk-road",
        title: "Bespoke Family Silk Road",
        subtitle: "Private curated expedition",
        tourType: "private",
        durationDays: 10,
        durationNights: 9,
        destinations: ["Xi’an", "Dunhuang", "Turpan"],
        heroImage: "https://example.com/hero2.jpg",
        galleryImages: [],
        inclusions: ["Private Van", "Halal Dining"],
        exclusions: ["International Flights"],
        batches: [],
        itinerary: [],
        priceIndication: {
            amount: 2400,
            currency: "USD",
            note: "per person based on 4 pax",
        },
    },
];

describe("Tour Switcher & Query Seam", () => {
    it("filters scheduled tours accurately", () => {
        const scheduled = filterToursByType(mockTours, "scheduled");
        expect(scheduled.length).toBe(1);
        expect(scheduled[0].slug).toBe("yunnan-classic-group");
        expect(scheduled[0].tourType).toBe("scheduled");
    });

    it("filters private bespoke tours accurately", () => {
        const privateTours = filterToursByType(mockTours, "private");
        expect(privateTours.length).toBe(1);
        expect(privateTours[0].slug).toBe("bespoke-family-silk-road");
        expect(privateTours[0].tourType).toBe("private");
    });

    it("finds tour package by exact slug", () => {
        const found = findTourBySlug(mockTours, "yunnan-classic-group");
        expect(found).toBeDefined();
        expect(found?.title).toBe("Yunnan Classic Group 8D7N");
    });

    it("returns undefined for non-existent slug for deep-link fallback handling", () => {
        const notFound = findTourBySlug(mockTours, "non-existent-trip");
        expect(notFound).toBeUndefined();
    });

    it("calculates open and limited batches accurately", () => {
        const count = getOpenBatchesCount(mockTours[0]);
        // b1 (open) + b2 (limited) = 2 bookable batches; b3 (sold_out) is excluded
        expect(count).toBe(2);
    });

    it("calculates total available seats across open batches", () => {
        const totalSeats = getTotalSeatsAvailable(mockTours[0]);
        // 6 (b1) + 2 (b2) + 0 (b3) = 8 seats
        expect(totalSeats).toBe(8);
    });
});
