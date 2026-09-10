<script setup lang="ts">
import { ref, computed } from 'vue';
import { TOURS_DATA } from '../data/tours';
import type { TourPackage, TourType } from '../types/tour';
import { filterToursByType } from '../utils/tours';

import HeroSection from '../components/HeroSection.vue';
import HalalIntegrityBar from '../components/HalalIntegrityBar.vue';
import TourSwitcher from '../components/TourSwitcher.vue';
import TourCard from '../components/TourCard.vue';
import HostsStorySection from '../components/HostsStorySection.vue';
import BentoTravelScrapbook from '../components/BentoTravelScrapbook.vue';
import EditorialTravelogue from '../components/EditorialTravelogue.vue';
import FlightAdvisorySection from '../components/FlightAdvisorySection.vue';
import MicroIntakeModal from '../components/MicroIntakeModal.vue';

const selectedTourType = ref<TourType>('scheduled');
const selectedTourForModal = ref<TourPackage | null>(null);
const isModalOpen = ref(false);

const scheduledTours = computed(() => filterToursByType(TOURS_DATA, 'scheduled'));
const privateTours = computed(() => filterToursByType(TOURS_DATA, 'private'));

const displayedTours = computed(() => {
  return selectedTourType.value === 'scheduled' ? scheduledTours.value : privateTours.value;
});

function handleInquire(tour: TourPackage) {
  selectedTourForModal.value = tour;
  isModalOpen.value = true;
}

function closeModal() {
  isModalOpen.value = false;
  selectedTourForModal.value = null;
}
</script>

<template>
  <div class="space-y-0">
    <!-- Hero Section -->
    <HeroSection />

    <!-- Halal Integrity Operational Pillars -->
    <HalalIntegrityBar />

    <!-- Expeditions Showcase Section -->
    <section id="expeditions" class="py-16 sm:py-24 bg-paper">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <!-- Section Title & Switcher -->
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-paper-border pb-8">
          <div>
            <div class="seal-stamp mb-2">
              CURATED ROUTES • 行程选择
            </div>
            <h2 class="font-editorial text-3xl sm:text-4xl text-stone-title font-semibold tracking-tight">
              Handcrafted Expedition Packages
            </h2>
            <p class="text-xs sm:text-sm text-stone-caption mt-2 max-w-xl">
              Choose between joining a scheduled small-group departure on fixed dates or requesting a custom private itinerary tailored to your family's pace.
            </p>
          </div>

          <!-- Interactive Tour Switcher -->
          <div>
            <TourSwitcher 
              v-model="selectedTourType" 
              :scheduled-count="scheduledTours.length"
              :private-count="privateTours.length"
            />
          </div>
        </div>

        <!-- Tours Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TourCard 
            v-for="tour in displayedTours" 
            :key="tour.id" 
            :tour="tour" 
            @inquire="handleInquire"
          />
        </div>

        <div v-if="displayedTours.length === 0" class="text-center py-16 bg-paper-card border border-paper-border rounded-sharp p-8">
          <p class="text-stone-caption text-sm">No expeditions found matching this category.</p>
        </div>

      </div>
    </section>

    <!-- Hosts Narrative & Hui Roots -->
    <HostsStorySection />

    <!-- Bento Field Scrapbook & Proof Mosaic -->
    <BentoTravelScrapbook />

    <!-- Traveler Voices & Editorial Travelogue -->
    <EditorialTravelogue />

    <!-- Flight & Transit Advisory -->
    <FlightAdvisorySection />

    <!-- 3-Step Micro Intake Handshake Modal -->
    <MicroIntakeModal 
      :is-open="isModalOpen" 
      :tour="selectedTourForModal" 
      @close="closeModal" 
    />
  </div>
</template>
