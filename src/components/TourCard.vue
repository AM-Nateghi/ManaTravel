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
      <!-- Destinations Chips -->
      <div class="absolute bottom-3 left-3 right-3 flex flex-wrap gap-1.5 z-10">
        <Badge 
          v-for="dest in tour.destinations.slice(0, 4)" 
          :key="dest"
          variant="outline"
          class="bg-paper-card/90 backdrop-blur-sm text-stone-title shadow-sm font-normal py-0.5"
        >
          <PhMapPin :size="12" weight="light" class="text-celadon" />
          <span>{{ dest }}</span>
        </Badge>
      </div>
      <!-- Tour Type Badge -->
      <div class="absolute top-3 left-3">
        <Badge 
          :variant="tour.tourType === 'scheduled' ? 'default' : 'outline'"
          class="rounded-sharp uppercase tracking-wider text-[11px] shadow-sm"
        >
          {{ tour.tourType === 'scheduled' ? 'Scheduled Group' : 'Private Bespoke' }}
        </Badge>
      </div>
    </div>

    <!-- Content Body -->
    <div class="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
      <div>
        <h3 class="font-editorial text-xl sm:text-2xl font-semibold text-stone-title group-hover:text-celadon transition-colors leading-snug">
          {{ tour.title }}
        </h3>
        <p class="text-xs sm:text-sm text-stone-caption mt-1.5 leading-relaxed line-clamp-2">
          {{ tour.subtitle }}
        </p>
      </div>

      <!-- Trip Essentials Highlight Box -->
      <TripEssentialsBox :tour="tour" />

      <!-- Price & Actions Footer -->
      <div class="pt-3 border-t border-paper-border flex flex-wrap items-center justify-between gap-3">
        <div>
          <div class="text-[11px] text-stone-caption uppercase font-medium">Estimated Pricing</div>
          <div class="font-editorial text-lg font-bold text-stone-title">
            {{ tour.priceIndication.currency }} ${{ tour.priceIndication.amount }}
            <span class="text-xs font-sans font-normal text-stone-caption">/ {{ tour.priceIndication.note }}</span>
          </div>
        </div>

        <div class="flex items-center gap-2">
          <router-link :to="`/tours/${tour.slug}`">
            <Button variant="outline" size="sm">
              <span>Itinerary</span>
              <PhArrowRight :size="13" weight="light" />
            </Button>
          </router-link>

          <Button 
            type="button"
            variant="default"
            size="sm"
            @click="$emit('inquire', tour)"
          >
            <PhChatCircleDots :size="14" weight="light" />
            <span>Inquire</span>
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>
