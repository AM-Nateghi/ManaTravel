import { describe, expect, it, vi } from "vitest";
import { mount } from "@vue/test-utils";
import MicroIntakeModal from "../src/components/MicroIntakeModal.vue";
import type { TourPackage } from "../src/types/tour";

const mockTour: TourPackage = {
    id: "2520",
    slug: "8d7n-muslim-village-and-food-trip",
    title: "8D7N Muslim Village and Food Trip",
    subtitle: "Historic Hui culture",
    tourType: "scheduled",
    durationDays: 8,
    durationNights: 7,
    destinations: ["Kunming", "Dali", "Weishan"],
    heroImage: "https://example.com/hero.jpg",
    galleryImages: [],
    inclusions: ["100% Halal Dining"],
    exclusions: ["International Flights"],
    batches: [
        {
            id: "b-2520-1",
            startDate: "2026-10-12",
            endDate: "2026-10-19",
            displayDates: "Oct 12 - Oct 19, 2026",
            status: "limited",
            availableSeats: 4,
        },
    ],
    itinerary: [],
    priceIndication: { amount: 1580, currency: "USD", note: "per person" },
};

describe("Micro-Intake Modal Seam", () => {
    it("mounts and renders step 1 with tour details when open", async () => {
        const wrapper = mount(MicroIntakeModal, {
            props: {
                isOpen: true,
                tour: mockTour,
            },
            attachTo: document.body,
        });
        await wrapper.vm.$nextTick();

        expect(document.body.textContent).toContain(
            "8D7N Muslim Village and Food Trip",
        );
        expect(document.body.textContent).toContain("Step 1 of 3");
        expect(document.body.textContent).toContain("Oct 12 - Oct 19, 2026");
        wrapper.unmount();
    });

    it("progresses to step 2 and step 3 with validation", async () => {
        const wrapper = mount(MicroIntakeModal, {
            props: {
                isOpen: true,
                tour: mockTour,
            },
            attachTo: document.body,
        });
        await wrapper.vm.$nextTick();

        // Step 1 -> Step 2
        const continueBtn = document.body.querySelector(
            '[data-testid="continue-step-btn"]',
        ) as HTMLButtonElement;
        expect(continueBtn).toBeTruthy();
        continueBtn.click();
        await wrapper.vm.$nextTick();
        expect(document.body.textContent).toContain("Step 2 of 3");
        expect(document.body.textContent).toContain("Who Is Traveling?");

        // Fill origin
        const originInput = document.body.querySelector(
            'input[type="text"]',
        ) as HTMLInputElement;
        expect(originInput).toBeTruthy();
        originInput.value = "Kuala Lumpur, Malaysia";
        originInput.dispatchEvent(new Event("input"));
        await wrapper.vm.$nextTick();

        // Step 2 -> Step 3
        const step2ContinueBtn = document.body.querySelector(
            '[data-testid="continue-step-btn"]',
        ) as HTMLButtonElement;
        step2ContinueBtn.click();
        await wrapper.vm.$nextTick();
        expect(document.body.textContent).toContain("Step 3 of 3");
        expect(document.body.textContent).toContain("Crucial Flight Notice");

        // In step 3, dispatch button must be disabled until flight acknowledged
        const dispatchBtn = document.body.querySelector(
            '[data-testid="dispatch-whatsapp-btn"]',
        ) as HTMLButtonElement;
        expect(dispatchBtn).toBeTruthy();
        expect(dispatchBtn.disabled).toBe(true);

        // Check flight acknowledgment checkbox
        const checkbox = document.body.querySelector(
            '[data-testid="flight-ack-checkbox"]',
        ) as HTMLInputElement;
        expect(checkbox).toBeTruthy();
        checkbox.checked = true;
        checkbox.dispatchEvent(new Event("change"));
        await wrapper.vm.$nextTick();

        // Dispatch button must now be enabled
        expect(dispatchBtn.disabled).toBe(false);
        wrapper.unmount();
    });
});
