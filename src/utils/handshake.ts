import type { CompiledHandshake, MicroIntakeForm } from "../types/tour";

export const MANA_WHATSAPP_PHONE = "8618487728484";

export interface ValidationResult {
    isValid: boolean;
    errors: string[];
}

export function validateMicroIntake(form: MicroIntakeForm): ValidationResult {
    const errors: string[] = [];

    if (!form.tourTitle || !form.tourTitle.trim()) {
        errors.push("Tour selection is required");
    }

    if (typeof form.adultsCount !== "number" || form.adultsCount < 1) {
        errors.push("At least 1 adult traveler is required");
    }

    if (!form.originLocation || !form.originLocation.trim()) {
        errors.push("Origin city or country is required");
    }

    if (!form.flightAcknowledged) {
        errors.push("Flight self-arrangement must be acknowledged");
    }

    return {
        isValid: errors.length === 0,
        errors,
    };
}

export function compileWhatsAppHandshake(
    form: MicroIntakeForm,
    phoneNumber: string = MANA_WHATSAPP_PHONE,
): CompiledHandshake {
    const batchQualifier = form.batchDates
        ? `(${form.batchDates})`
        : form.customTravelMonth
        ? `(Target: ${form.customTravelMonth})`
        : "";

    const lines = [
        `Salam Ma & Viona! I am interested in joining the ${form.tourTitle.trim()} ${batchQualifier}.`
            .replace(/\s+/g, " ").replace(" .", "."),
        `- Travelers: ${form.adultsCount} Adults, ${form.childrenCount} Children`,
        `- Origin: ${form.originLocation.trim()}`,
        `- Flight Status: Acknowledged Ground Tour (flights self-arranged)`,
        `Could you please confirm availability and next steps?`,
    ];

    const rawText = lines.join("\n");
    const encodedUrl =
        `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${
            encodeURIComponent(rawText)
        }`;

    return {
        rawText,
        encodedUrl,
    };
}
