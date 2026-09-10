<script setup lang="ts">
import type { TourPackage } from '../types/tour';
import TripEssentialsBox from './TripEssentialsBox.vue';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { 
  PhMapPin, 
  PhArrowRight, 
  PhChatCircleDots 
} from '@phosphor-icons/vue';

defineProps<{
  tour: TourPackage;
}>();

defineEmits<{
  (e: 'inquire', tour: TourPackage): void;
}>();
</script>

<template>
  <div class="bg-paper-card border border-paper-border rounded-sharp overflow-hidden shadow-editorial hover:shadow-elevated transition-shadow duration-300 flex flex-col h-full group">
    <!-- Image Header -->
    <div class="relative h-56 sm:h-64 overflow-hidden hairline-b bg-paper-border/30">
      <img 
        :src="tour.heroImage" 
        :alt="tour.title" 
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
      />
      <!-- Gentle gradient overlay for high contrast and readability -->
      <div class="absolute inset-0 bg-gradient-to-t from-stone-title/80 via-transparent to-black/20 pointer-events-none"></div>

      <!-- Tour Type & Duration Badges -->
      <div class="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
        <Badge 
          :variant="tour.tourType === 'scheduled' ? 'default' : 'outline'"
          class="rounded-sharp uppercase tracking-wider text-xs shadow-sm font-semibold"
        >
          {{ tour.tourType === 'scheduled' ? 'Scheduled Group' : 'Private Bespoke' }}
        </Badge>
        <span class="bg-paper-card/95 backdrop-blur-md text-stone-title text-xs font-semibold px-2 py-0.5 rounded-sharp border border-paper-border/60 shadow-sm">
          {{ tour.durationDays }}D / {{ tour.durationNights }}N
        </span>
      </div>

      <!-- Destinations Chips Over Scrim -->
      <div class="absolute bottom-3 left-3 right-3 flex flex-wrap gap-1.5 z-10">
        <span 
          v-for="dest in tour.destinations.slice(0, 3)" 
          :key="dest"
          class="inline-flex items-center gap-1 bg-paper-card/95 backdrop-blur-md text-stone-title text-xs font-medium px-2.5 py-1 rounded-sharp border border-paper-border/80 shadow-sm"
        >
          <PhMapPin :size="13" weight="regular" class="text-celadon shrink-0" />
          <span>{{ dest }}</span>
        </span>
      </div>
    </div>

    <!-- Content Body -->
    <div class="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
      <div>
        <h3 class="font-editorial text-xl sm:text-2xl font-semibold text-stone-title group-hover:text-celadon transition-colors leading-snug">
          {{ tour.title }}
        </h3>
        <p class="text-xs sm:text-sm text-stone-caption mt-2 leading-relaxed line-clamp-2">
          {{ tour.subtitle }}
        </p>
      </div>

      <!-- Trip Essentials Highlight Box -->
      <TripEssentialsBox :tour="tour" />

      <!-- Price & Actions Footer -->
      <div class="pt-4 border-t border-paper-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <div class="text-xs text-stone-caption uppercase font-semibold tracking-wider">Estimated Pricing</div>
          <div class="font-editorial text-xl font-bold text-stone-title flex items-baseline gap-1 mt-0.5">
            <span class="text-celadon font-bold">¥{{ tour.priceIndication.amount.toLocaleString() }}</span>
            <span class="text-xs font-sans font-normal text-stone-caption">{{ tour.priceIndication.currency }} / {{ tour.priceIndication.note }}</span>
          </div>
        </div>

        <div class="flex items-center gap-2 w-full sm:w-auto">
          <router-link :to="`/tours/${tour.slug}`" class="flex-1 sm:flex-initial">
            <Button variant="outline" size="sm" class="w-full sm:w-auto text-xs sm:text-sm">
              <span>Itinerary</span>
              <PhArrowRight :size="14" weight="regular" />
            </Button>
          </router-link>

          <Button 
            type="button"
            variant="default"
            size="sm"
            class="flex-1 sm:flex-initial text-xs sm:text-sm"
            @click="$emit('inquire', tour)"
          >
            <PhChatCircleDots :size="15" weight="regular" />
            <span>Inquire</span>
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>
