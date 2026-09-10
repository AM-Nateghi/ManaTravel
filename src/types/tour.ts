export type TourType = "scheduled" | "private";
export type BatchStatus = "open" | "limited" | "sold_out";

export interface DepartureBatch {
  id: string;
  startDate: string;
  endDate: string;
  displayDates: string;
  status: BatchStatus;
  availableSeats?: number;
}

export interface MealPlan {
  breakfast: boolean;
  lunch: boolean;
  dinner: boolean;
  notes?: string;
}

export interface DailySchedule {
  dayNumber: number;
  title: string;
  routeOverview: string;
  accommodation: string;
  mealsIncluded: MealPlan;
  highlights: string[];
  galleryImages: string[];
}

export interface PriceIndication {
  amount: number;
  currency: string;
  note: string;
}

export interface TourPackage {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  tourType: TourType;
  durationDays: number;
  durationNights: number;
  destinations: string[];
  heroImage: string;
  galleryImages: string[];
  inclusions: string[];
  exclusions: string[];
  batches: DepartureBatch[];
  itinerary: DailySchedule[];
  priceIndication: PriceIndication;
}

export interface GuestStory {
  id: string;
  guestName: string;
  originCountry: string;
  countryCode: string;
  travelDate: string;
  partyComposition: string;
  quote: string;
  fullNarrative: string;
  featuredPhotoUrl: string;
  tourReferenceSlug?: string;
  isHalalVerified: boolean;
  rating?: number;
}

export interface MicroIntakeForm {
  tourId: string;
  tourTitle: string;
  batchId?: string;
  batchDates?: string;
  customTravelMonth?: string;
  adultsCount: number;
  childrenCount: number;
  originLocation: string;
  flightAcknowledged: boolean;
}

export interface CompiledHandshake {
  rawText: string;
  encodedUrl: string;
}
