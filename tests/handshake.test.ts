import { describe, expect, it } from "vitest";
import {
  compileWhatsAppHandshake,
  validateMicroIntake,
} from "../src/utils/handshake";
import type { MicroIntakeForm } from "../src/types/tour";

describe("Handshake Dispatch Seam", () => {
  it("compiles the exact expected pre-qualified WhatsApp message and encoded URL", () => {
    const form: MicroIntakeForm = {
      tourId: "8d7n-muslim-village-and-food-trip",
      tourTitle: "8D7N Muslim Village and Food Trip",
      batchId: "b-2520-1",
      batchDates: "Oct 12 - Oct 19, 2026",
      adultsCount: 2,
      childrenCount: 1,
      originLocation: "Kuala Lumpur, Malaysia",
      flightAcknowledged: true,
    };

    const result = compileWhatsAppHandshake(form);

    // Verify raw text template matching SPEC.md
    expect(result.rawText).toContain(
      "Salam Ma & Viona! I am interested in joining the 8D7N Muslim Village and Food Trip (Oct 12 - Oct 19, 2026).",
    );
    expect(result.rawText).toContain("- Travelers: 2 Adults, 1 Children");
    expect(result.rawText).toContain("- Origin: Kuala Lumpur, Malaysia");
    expect(result.rawText).toContain(
      "- Flight Status: Acknowledged Ground Tour (flights self-arranged)",
    );
    expect(result.rawText).toContain(
      "Could you please confirm availability and next steps?",
    );

    // Verify URL structure
    expect(result.encodedUrl).toContain(
      "https://api.whatsapp.com/send?phone=8618487728484&text=",
    );
    expect(result.encodedUrl).toContain(encodeURIComponent(result.rawText));
  });

  it("supports custom travel month for private family tours", () => {
    const form: MicroIntakeForm = {
      tourId: "private-trip",
      tourTitle: "Yunnan Private Family Cultural Tour",
      customTravelMonth: "April 2027",
      adultsCount: 4,
      childrenCount: 2,
      originLocation: "London, UK",
      flightAcknowledged: true,
    };

    const result = compileWhatsAppHandshake(form);
    expect(result.rawText).toContain(
      "Salam Ma & Viona! I am interested in joining the Yunnan Private Family Cultural Tour (Target: April 2027).",
    );
    expect(result.rawText).toContain("- Travelers: 4 Adults, 2 Children");
    expect(result.rawText).toContain("- Origin: London, UK");
  });

  it("validates that flight acknowledgment is required to proceed", () => {
    const validForm: MicroIntakeForm = {
      tourId: "1",
      tourTitle: "Tour",
      batchDates: "Oct 2026",
      adultsCount: 2,
      childrenCount: 0,
      originLocation: "Singapore",
      flightAcknowledged: true,
    };

    expect(validateMicroIntake(validForm).isValid).toBe(true);

    const unacknowledgedForm: MicroIntakeForm = {
      ...validForm,
      flightAcknowledged: false,
    };
    const check = validateMicroIntake(unacknowledgedForm);
    expect(check.isValid).toBe(false);
    expect(check.errors).toContain(
      "Flight self-arrangement must be acknowledged",
    );
  });

  it("validates that at least 1 adult traveler is required", () => {
    const invalidAdultsForm: MicroIntakeForm = {
      tourId: "1",
      tourTitle: "Tour",
      batchDates: "Oct 2026",
      adultsCount: 0,
      childrenCount: 2,
      originLocation: "Singapore",
      flightAcknowledged: true,
    };

    const check = validateMicroIntake(invalidAdultsForm);
    expect(check.isValid).toBe(false);
    expect(check.errors).toContain("At least 1 adult traveler is required");
  });

  it("validates that origin location is required", () => {
    const missingOriginForm: MicroIntakeForm = {
      tourId: "1",
      tourTitle: "Tour",
      batchDates: "Oct 2026",
      adultsCount: 2,
      childrenCount: 0,
      originLocation: "   ",
      flightAcknowledged: true,
    };

    const check = validateMicroIntake(missingOriginForm);
    expect(check.isValid).toBe(false);
    expect(check.errors).toContain("Origin city or country is required");
  });
});
