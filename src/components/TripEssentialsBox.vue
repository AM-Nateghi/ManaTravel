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
        <PhShieldCheck :size="18" weight="light" class="text-celadon" />
        <span>100% Halal Dining & Muslim-Led</span>
      </div>
      <Badge variant="terracotta" class="text-xs font-medium">
        <PhAirplaneTilt :size="14" weight="light" />
        <span>Ground Tour • Flights Self-Arranged</span>
      </Badge>
    </div>

    <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1">
      <div class="flex items-start gap-2">
        <PhClock :size="16" weight="light" class="text-stone-caption mt-0.5 shrink-0" />
        <div>
          <div class="text-[11px] text-stone-caption uppercase font-medium">Duration</div>
          <div class="font-medium text-stone-title">{{ tour.durationDays }} Days / {{ tour.durationNights }} Nights</div>
        </div>
      </div>

      <div class="flex items-start gap-2">
        <PhUsers :size="16" weight="light" class="text-stone-caption mt-0.5 shrink-0" />
        <div>
          <div class="text-[11px] text-stone-caption uppercase font-medium">Group Format</div>
          <div class="font-medium text-stone-title capitalize">
            {{ tour.tourType === 'scheduled' ? 'Small Group (8-14 max)' : 'Private Family / Party' }}
          </div>
        </div>
      </div>

      <div class="flex items-start gap-2 col-span-2 sm:col-span-1">
        <PhTranslate :size="16" weight="light" class="text-stone-caption mt-0.5 shrink-0" />
        <div>
          <div class="text-[11px] text-stone-caption uppercase font-medium">Host Language</div>
          <div class="font-medium text-stone-title">English & Chinese Fluent</div>
        </div>
      </div>
    </div>

    <div v-if="primaryBatch && tour.tourType === 'scheduled'" class="pt-2 border-t border-paper-border flex flex-wrap items-center justify-between gap-2 text-xs">
      <span class="text-stone-caption font-medium">Next Departure:</span>
      <div class="flex items-center gap-2">
        <span class="font-medium text-stone-title">{{ primaryBatch.displayDates }}</span>
        <Badge 
          v-if="primaryBatch.status === 'limited'" 
          variant="terracotta"
        >
          {{ primaryBatch.availableSeats }} seats left
        </Badge>
        <Badge 
          v-else-if="primaryBatch.status === 'open'" 
          variant="secondary"
        >
          Open for booking
        </Badge>
        <span 
          v-else 
          class="bg-stone-subtle text-stone-caption text-[11px] px-2 py-0.5 rounded-full font-medium"
        >
          Sold Out
        </span>
      </div>
    </div>

    <div v-else-if="tour.tourType === 'private'" class="pt-2 border-t border-paper-border flex items-center justify-between text-xs">
      <span class="text-stone-caption font-medium">Scheduling:</span>
      <span class="text-celadon font-medium">Custom Dates & Pacing On Demand</span>
    </div>
  </div>
</template>
