<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { TOURS_DATA } from '../data/tours';
import { findTourBySlug } from '../utils/tours';
import type { TourPackage } from '../types/tour';

import TripEssentialsBox from '../components/TripEssentialsBox.vue';
import MicroIntakeModal from '../components/MicroIntakeModal.vue';
import ContextualFloatingActionDock from '../components/ContextualFloatingActionDock.vue';

import { 
  PhArrowLeft, 
  PhMapPin, 
  PhCalendarCheck, 
  PhCheck, 
  PhX, 
  PhForkKnife, 
  PhBed, 
  PhChatCircleDots,
  PhWarningCircle,
  PhAirplaneTilt
} from '@phosphor-icons/vue';

const route = useRoute();
const router = useRouter();
const slug = computed(() => route.params.slug as string);

const tour = computed<TourPackage | undefined>(() => {
  return findTourBySlug(TOURS_DATA, slug.value);
});

const isModalOpen = ref(false);
const selectedBatchId = ref<string | undefined>(undefined);

function openModal(batchId?: string) {
  selectedBatchId.value = batchId;
  isModalOpen.value = true;
}

function closeModal() {
  isModalOpen.value = false;
  selectedBatchId.value = undefined;
}
</script>

<template>
  <div class="min-h-screen pt-20 sm:pt-24 pb-20 bg-paper max-w-full overflow-x-hidden">
    
    <!-- IF TOUR FOUND -->
    <div v-if="tour" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      
      <!-- Back Navigation Breadcrumb -->
      <div class="pt-4 flex items-center justify-between">
        <button 
          @click="router.push('/')"
          class="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-caption hover:text-celadon transition-colors"
        >
          <PhArrowLeft :size="16" weight="regular" />
          <span>Back to All Expeditions</span>
        </button>

        <div class="flex items-center gap-2">
          <span class="seal-stamp">VERIFIED GROUND ROUTE</span>
        </div>
      </div>

      <!-- Hero Header Banner -->
      <div class="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-start">
        
        <!-- Left Title & Meta (8 cols) -->
        <div class="md:col-span-7 lg:col-span-8 space-y-4">
          <div class="flex flex-wrap items-center gap-2">
            <span 
              class="text-xs font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-sharp border"
              :class="tour.tourType === 'scheduled' 
                ? 'bg-celadon-surface text-celadon border-celadon-border' 
                : 'bg-stone-subtle text-stone-title border-paper-border'"
            >
              {{ tour.tourType === 'scheduled' ? 'Scheduled Small Group' : 'Private Bespoke Journey' }}
            </span>

            <span class="text-xs text-stone-caption font-medium flex items-center gap-1">
              <PhMapPin :size="15" weight="regular" class="text-celadon" />
              <span>{{ tour.destinations.join(' → ') }}</span>
            </span>
          </div>

          <h1 class="font-editorial text-3xl sm:text-4xl md:text-3xl lg:text-5xl font-semibold text-stone-title tracking-tight leading-tight">
            {{ tour.title }}
          </h1>

          <p class="text-stone-body text-sm sm:text-base leading-relaxed">
            {{ tour.subtitle }}
          </p>

          <!-- Hero Image -->
          <div class="border border-paper-border rounded-sharp overflow-hidden shadow-editorial bg-paper-card">
            <img 
              :src="tour.heroImage" 
              :alt="tour.title" 
              class="w-full h-56 sm:h-72 md:h-64 lg:h-96 object-cover filter contrast-[1.02]"
            />
          </div>
        </div>

        <!-- Right Sticky Booking Card (4-5 cols) -->
        <div class="md:col-span-5 lg:col-span-4 sticky top-28 space-y-6">
          <div class="bg-paper-card border border-paper-border p-6 rounded-sharp shadow-elevated space-y-5">
            <div>
              <div class="text-xs text-stone-caption uppercase font-semibold tracking-wider">Estimated Pricing</div>
              <div class="font-editorial text-2xl sm:text-3xl font-bold text-stone-title flex items-baseline gap-1 mt-0.5">
                <span class="text-celadon font-bold">¥{{ tour.priceIndication.amount.toLocaleString() }}</span>
                <span class="text-xs sm:text-sm font-sans font-normal text-stone-caption">{{ tour.priceIndication.currency }} / {{ tour.priceIndication.note }}</span>
              </div>
            </div>

            <!-- Trip Essentials Component -->
            <TripEssentialsBox :tour="tour" />

            <!-- Direct Booking / Inquiry CTA -->
            <div class="space-y-3 pt-2">
              <button 
                type="button"
                @click="openModal()"
                class="w-full py-3 bg-celadon text-white rounded-sharp text-sm font-semibold hover:bg-celadon-deep transition-colors shadow-sm inline-flex items-center justify-center gap-2"
              >
                <PhChatCircleDots :size="18" weight="regular" />
                <span>Initiate WhatsApp Handshake</span>
              </button>

              <div class="text-xs text-center text-stone-caption flex items-center justify-center gap-1.5">
                <PhAirplaneTilt :size="15" weight="regular" class="text-terracotta" />
                <span>Ground tour package. Flights self-arranged.</span>
              </div>
            </div>

            <!-- Available Batches Quick List (For Scheduled) -->
            <div v-if="tour.tourType === 'scheduled' && tour.batches.length > 0" class="border-t border-paper-border pt-4 space-y-2.5">
              <div class="text-xs font-semibold text-stone-title uppercase tracking-wider">
                Select Departure Batch:
              </div>
              <div 
                v-for="batch in tour.batches" 
                :key="batch.id"
                @click="openModal(batch.id)"
                class="border border-paper-border p-3 rounded-sharp hover:border-celadon cursor-pointer transition-colors flex items-center justify-between text-xs bg-paper/50"
              >
                <div>
                  <div class="font-medium text-stone-title text-xs sm:text-sm">{{ batch.displayDates }}</div>
                  <div class="text-xs text-stone-caption">{{ tour.durationDays }} Days</div>
                </div>
                <div>
                  <span 
                    v-if="batch.status === 'limited'" 
                    class="text-xs font-medium text-terracotta bg-terracotta-surface border border-terracotta-border px-2.5 py-0.5 rounded-full"
                  >
                    {{ batch.availableSeats }} seats left
                  </span>
                  <span 
                    v-else-if="batch.status === 'open'" 
                    class="text-xs font-medium text-celadon bg-celadon-surface border border-celadon-border px-2.5 py-0.5 rounded-full"
                  >
                    Available
                  </span>
                  <span 
                    v-else 
                    class="text-xs font-medium text-stone-caption bg-paper-border px-2.5 py-0.5 rounded-full"
                  >
                    Sold Out
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

      <!-- Inclusions & Exclusions Matrix -->
      <div class="border border-paper-border bg-paper-card rounded-sharp p-6 sm:p-8 shadow-editorial space-y-6">
        <h2 class="font-editorial text-2xl font-semibold text-stone-title">
          Inclusions & Exclusions Overview
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Inclusions -->
          <div class="space-y-3">
            <div class="text-xs font-semibold text-celadon uppercase tracking-wider flex items-center gap-1.5">
              <PhCheck :size="16" weight="bold" />
              <span>What Is Included in Ground Package</span>
            </div>
            <ul class="space-y-2 text-xs sm:text-sm text-stone-body">
              <li v-for="inc in tour.inclusions" :key="inc" class="flex items-start gap-2">
                <PhCheck :size="16" weight="regular" class="text-celadon shrink-0 mt-0.5" />
                <span>{{ inc }}</span>
              </li>
            </ul>
          </div>

          <!-- Exclusions -->
          <div class="space-y-3">
            <div class="text-xs font-semibold text-terracotta uppercase tracking-wider flex items-center gap-1.5">
              <PhX :size="16" weight="bold" />
              <span>What Is Excluded (Self-Arranged)</span>
            </div>
            <ul class="space-y-2 text-xs sm:text-sm text-stone-body">
              <li v-for="exc in tour.exclusions" :key="exc" class="flex items-start gap-2">
                <PhX :size="16" weight="regular" class="text-terracotta shrink-0 mt-0.5" />
                <span>{{ exc }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Day-by-Day Chronological Itinerary -->
      <div class="space-y-8 pt-4">
        <div>
          <div class="seal-stamp mb-2">
            DETAILED TIMELINE • 每日行程
          </div>
          <h2 class="font-editorial text-2xl sm:text-3xl font-semibold text-stone-title">
            Chronological Daily Itinerary
          </h2>
          <p class="text-xs sm:text-sm text-stone-caption mt-1">
            Every day is paced respectfully for prayer times, authentic meals, and cultural reflection.
          </p>
        </div>

        <!-- Timeline Items -->
        <div class="space-y-6">
          <div 
            v-for="day in tour.itinerary" 
            :key="day.dayNumber"
            class="bg-paper-card border border-paper-border rounded-sharp p-6 shadow-editorial space-y-4"
          >
            <!-- Day Header -->
            <div class="flex flex-wrap items-center justify-between gap-2 border-b border-paper-border pb-3">
              <div class="flex items-center gap-3">
                <span class="w-8 h-8 rounded-sharp bg-celadon text-white font-bold text-xs flex items-center justify-center">
                  D{{ day.dayNumber }}
                </span>
                <h3 class="font-editorial text-lg sm:text-xl font-semibold text-stone-title">
                  {{ day.title }}
                </h3>
              </div>
              <div class="text-xs text-stone-caption font-medium">
                {{ day.routeOverview }}
              </div>
            </div>

            <!-- Accommodation & Meals Indicators -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs bg-paper-subtle/50 p-3 rounded-sharp border border-paper-border">
              <div class="flex items-center gap-2">
                <PhForkKnife :size="18" weight="regular" class="text-celadon shrink-0" />
                <span>
                  <strong>Halal Meals:</strong> 
                  {{ day.mealsIncluded.breakfast ? 'Breakfast (Included)' : 'Breakfast (Self)' }}, 
                  {{ day.mealsIncluded.lunch ? 'Lunch (100% Halal)' : 'Lunch (Self)' }}, 
                  {{ day.mealsIncluded.dinner ? 'Dinner (Halal Banquet)' : 'Dinner (Self)' }}
                </span>
              </div>

              <div class="flex items-center gap-2">
                <PhBed :size="18" weight="regular" class="text-stone-caption shrink-0" />
                <span>
                  <strong>Lodging:</strong> {{ day.accommodation }}
                </span>
              </div>
            </div>

            <!-- Daily Highlights -->
            <div v-if="day.highlights && day.highlights.length > 0" class="space-y-2">
              <div class="text-xs font-semibold uppercase text-stone-caption tracking-wider">
                Key Cultural Highlights:
              </div>
              <ul class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-body">
                <li v-for="h in day.highlights" :key="h" class="flex items-start gap-2">
                  <span class="w-1.5 h-1.5 rounded-full bg-celadon mt-1.5 shrink-0"></span>
                  <span>{{ h }}</span>
                </li>
              </ul>
            </div>

            <!-- Daily Gallery Images -->
            <div v-if="day.galleryImages && day.galleryImages.length > 0" class="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div 
                v-for="(img, idx) in day.galleryImages.slice(0, 4)" 
                :key="idx" 
                class="rounded-sharp overflow-hidden border border-paper-border h-28 bg-paper-border/20"
              >
                <img 
                  :src="img" 
                  :alt="`${day.title} image ${idx + 1}`"
                  class="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
                  loading="lazy"
                />
              </div>
            </div>

          </div>
        </div>

      </div>

      <!-- Mobile Floating Dock -->
      <ContextualFloatingActionDock 
        :tour="tour" 
        @inquire="openModal()" 
      />

      <!-- Micro Intake Handshake Modal -->
      <MicroIntakeModal 
        :is-open="isModalOpen" 
        :tour="tour" 
        :initial-batch-id="selectedBatchId"
        @close="closeModal" 
      />

    </div>

    <!-- IF TOUR NOT FOUND -->
    <div v-else class="max-w-2xl mx-auto px-4 text-center py-20 space-y-6">
      <div class="w-16 h-16 rounded-full bg-terracotta-surface text-terracotta mx-auto flex items-center justify-center border border-terracotta-border">
        <PhWarningCircle :size="32" weight="regular" />
      </div>
      <h1 class="font-editorial text-2xl font-bold text-stone-title">
        Expedition Package Not Found
      </h1>
      <p class="text-stone-caption text-sm leading-relaxed">
        The requested itinerary (<code>{{ slug }}</code>) may have concluded or been updated. You can browse our active scheduled group departures below.
      </p>
      <div>
        <router-link 
          to="/"
          class="px-6 py-2.5 bg-celadon text-white text-xs font-semibold rounded-sharp hover:bg-celadon-deep transition-colors inline-flex items-center gap-2"
        >
          <PhArrowLeft :size="16" weight="regular" />
          <span>Return to All Expeditions</span>
        </router-link>
      </div>
    </div>

  </div>
</template>
