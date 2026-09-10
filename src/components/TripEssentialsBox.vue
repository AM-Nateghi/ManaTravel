<script setup lang="ts">
import { computed } from 'vue';
import type { TourPackage } from '../types/tour';
import { Badge } from './ui/badge';
import { 
  PhAirplaneTilt, 
  PhShieldCheck, 
  PhClock, 
  PhUsers, 
  PhTranslate 
} from '@phosphor-icons/vue';

const props = defineProps<{
  tour: TourPackage;
  variant?: 'compact' | 'expanded';
}>();

const primaryBatch = computed(() => {
  if (!props.tour.batches || props.tour.batches.length === 0) return null;
  return props.tour.batches.find((b) => b.status === 'open' || b.status === 'limited') || props.tour.batches[0];
});
</script>

<template>
  <div 
    class="border border-paper-border bg-paper-subtle/70 p-4 sm:p-5 rounded-sharp text-stone-body font-sans text-xs sm:text-sm shadow-sm space-y-3"
    data-testid="trip-essentials-box"
  >
    <div class="flex flex-wrap items-center justify-between gap-2 border-b border-paper-border pb-2.5">
      <div class="inline-flex items-center gap-1.5 font-semibold text-celadon tracking-wide uppercase text-xs">
        <PhShieldCheck :size="18" weight="light" class="text-celadon shrink-0" />
        <span>100% Halal Dining & Muslim-Led</span>
      </div>
      <Badge variant="terracotta" class="text-xs font-medium py-0.5 px-2">
        <PhAirplaneTilt :size="14" weight="light" class="shrink-0" />
        <span>Ground Tour • Flights Self-Arranged</span>
      </Badge>
    </div>

    <div class="grid grid-cols-2 gap-3 pt-1">
      <div class="flex items-start gap-2">
        <PhClock :size="18" weight="light" class="text-stone-caption mt-0.5 shrink-0" />
        <div>
          <div class="text-xs text-stone-caption uppercase font-semibold tracking-wider">Duration</div>
          <div class="text-xs sm:text-sm font-medium text-stone-title">{{ tour.durationDays }} Days / {{ tour.durationNights }} Nights</div>
        </div>
      </div>

      <div class="flex items-start gap-2">
        <PhUsers :size="18" weight="light" class="text-stone-caption mt-0.5 shrink-0" />
        <div>
          <div class="text-xs text-stone-caption uppercase font-semibold tracking-wider">Group Format</div>
          <div class="text-xs sm:text-sm font-medium text-stone-title">
            {{ tour.tourType === 'scheduled' ? 'Small Group (8–14)' : 'Private Bespoke' }}
          </div>
        </div>
      </div>

      <div class="flex items-start gap-2 col-span-2 pt-1 border-t border-paper-border/60">
        <PhTranslate :size="18" weight="light" class="text-stone-caption mt-0.5 shrink-0" />
        <div class="flex items-center justify-between w-full">
          <span class="text-xs text-stone-caption uppercase font-semibold tracking-wider">Host Guidance:</span>
          <span class="text-xs sm:text-sm font-medium text-stone-title">English & Chinese Fluent</span>
        </div>
      </div>
    </div>

    <div v-if="primaryBatch && tour.tourType === 'scheduled'" class="pt-2 border-t border-paper-border flex flex-wrap items-center justify-between gap-2 text-xs">
      <span class="text-stone-caption font-semibold uppercase tracking-wider text-xs">Next Departure:</span>
      <div class="flex items-center gap-2">
        <span class="font-medium text-stone-title text-xs sm:text-sm">{{ primaryBatch.displayDates }}</span>
        <Badge 
          v-if="primaryBatch.status === 'limited'" 
          variant="terracotta"
          class="text-xs"
        >
          {{ primaryBatch.availableSeats }} seats left
        </Badge>
        <Badge 
          v-else-if="primaryBatch.status === 'open'" 
          variant="secondary"
          class="text-xs"
        >
          Open for booking
        </Badge>
        <span 
          v-else 
          class="bg-stone-subtle text-stone-caption text-xs px-2.5 py-0.5 rounded-full font-medium"
        >
          Sold Out
        </span>
      </div>
    </div>

    <div v-else-if="tour.tourType === 'private'" class="pt-2 border-t border-paper-border flex items-center justify-between text-xs">
      <span class="text-stone-caption font-semibold uppercase tracking-wider text-xs">Scheduling:</span>
      <span class="text-celadon font-medium text-xs sm:text-sm">Custom Dates & Pacing On Demand</span>
    </div>
  </div>
</template>
