import type { TourPackage, TourType } from "../types/tour";

export function filterToursByType(
    tours: TourPackage[],
    type: TourType,
): TourPackage[] {
    return tours.filter((tour) => tour.tourType === type);
}

export function findTourBySlug(
    tours: TourPackage[],
    slug: string,
): TourPackage | undefined {
    return tours.find((tour) => tour.slug === slug);
}

export function getOpenBatchesCount(tour: TourPackage): number {
    if (!tour.batches) return 0;
    return tour.batches.filter((batch) =>
        batch.status === "open" || batch.status === "limited"
    ).length;
}

export function getTotalSeatsAvailable(tour: TourPackage): number {
    if (!tour.batches) return 0;
    return tour.batches.reduce((total, batch) => {
        return total + (batch.availableSeats || 0);
    }, 0);
}
