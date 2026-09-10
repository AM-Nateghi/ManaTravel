<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue';
import type { TourPackage } from '../types/tour';
import { PhChatCircleDots, PhSparkle } from '@phosphor-icons/vue';

const props = defineProps<{
  tour: TourPackage;
}>();

defineEmits<{
  (e: 'inquire'): void;
}>();

const isVisible = ref(false);

function handleScroll() {
  // Show dock only after user has scrolled down past initial hero (e.g. 400px)
  isVisible.value = window.scrollY > 380;
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

const nextBatch = computed(() => {
  return props.tour.batches?.find((b) => b.status === 'open' || b.status === 'limited');
});
</script>

<template>
  <!-- Mobile & Tablet Only Dock (hidden on large screens) -->
  <div 
    class="md:hidden fixed bottom-4 left-4 right-4 z-40 transition-all duration-300 transform"
    :class="isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0 pointer-events-none'"
  >
    <div class="bg-paper-card/95 backdrop-blur-md border border-paper-border p-3 rounded-subtle shadow-elevated flex items-center justify-between gap-3">
      <div>
        <div class="flex items-center gap-1 text-[11px] font-semibold text-terracotta">
          <PhSparkle :size="12" weight="light" />
          <span v-if="nextBatch">{{ nextBatch.displayDates }}</span>
          <span v-else>Custom Dates</span>
        </div>
        <div class="font-editorial text-sm font-bold text-stone-title">
          {{ tour.priceIndication.currency }} ${{ tour.priceIndication.amount }}
          <span class="text-[10px] font-sans font-normal text-stone-caption">/ pax</span>
        </div>
      </div>

      <button 
        type="button"
        @click="$emit('inquire')"
        class="px-4 py-2 bg-celadon text-white text-xs font-semibold rounded-sharp hover:bg-celadon-deep transition-colors inline-flex items-center gap-1.5 shadow-sm"
      >
        <PhChatCircleDots :size="15" weight="light" />
        <span>Inquire Now</span>
      </button>
    </div>
  </div>
</template>
