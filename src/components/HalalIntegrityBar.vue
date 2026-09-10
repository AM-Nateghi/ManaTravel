<script setup lang="ts">
import { 
  PhForkKnife, 
  PhCompass, 
  PhHouseLine, 
  PhUsersThree 
} from '@phosphor-icons/vue';
</script>

<template>
  <section id="halal-integrity" class="py-12 bg-paper-subtle/80 hairline-t hairline-b">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="text-center max-w-3xl mx-auto mb-10">
        <div class="seal-stamp mb-2">
          HALAL PROTOCOL • 100% PEACE OF MIND
        </div>
        <h2 class="font-editorial text-2xl sm:text-3xl text-stone-title font-semibold tracking-tight">
          Our Four Pillars of Uncompromising Halal Integrity
        </h2>
        <p class="text-xs sm:text-sm text-stone-caption mt-2 leading-relaxed">
          We understand the profound responsibility of hosting Muslim families in China. Here is how brother Ma ensures complete religious peace of mind throughout your entire journey.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        <!-- Pillar 1 -->
        <div class="bg-paper-card border border-paper-border p-5 rounded-sharp space-y-3 shadow-editorial">
          <div class="w-10 h-10 rounded-sharp bg-celadon-surface flex items-center justify-center text-celadon border border-celadon-border">
            <PhForkKnife :size="22" weight="regular" />
          </div>
          <h3 class="font-editorial text-base font-semibold text-stone-title">
            100% Certified Halal Dining
          </h3>
          <p class="text-xs text-stone-caption leading-relaxed">
            Strictly zero pork and zero cooking wine across all meals. All meats sourced from local Hui Muslim butchers with verified halal slaughter.
          </p>
        </div>

        <!-- Pillar 2 -->
        <div class="bg-paper-card border border-paper-border p-5 rounded-sharp space-y-3 shadow-editorial">
          <div class="w-10 h-10 rounded-sharp bg-celadon-surface flex items-center justify-center text-celadon border border-celadon-border">
            <PhCompass :size="22" weight="regular" />
          </div>
          <h3 class="font-editorial text-base font-semibold text-stone-title">
            Daily Prayer Times & Masjids
          </h3>
          <p class="text-xs text-stone-caption leading-relaxed">
            Itineraries are structured around Dhuhr, Asr, and Maghrib. We pray Jama'ah inside centuries-old Chinese-Islamic wooden masjids whenever possible.
          </p>
        </div>

        <!-- Pillar 3 -->
        <div class="bg-paper-card border border-paper-border p-5 rounded-sharp space-y-3 shadow-editorial">
          <div class="w-10 h-10 rounded-sharp bg-celadon-surface flex items-center justify-center text-celadon border border-celadon-border">
            <PhHouseLine :size="22" weight="regular" />
          </div>
          <h3 class="font-editorial text-base font-semibold text-stone-title">
            Modest & Family Lodgings
          </h3>
          <p class="text-xs text-stone-caption leading-relaxed">
            Handpicked 4-star boutique hotels and traditional courtyard inns that honor family privacy, modest standards, and clean amenities.
          </p>
        </div>

        <!-- Pillar 4 -->
        <div class="bg-paper-card border border-paper-border p-5 rounded-sharp space-y-3 shadow-editorial">
          <div class="w-10 h-10 rounded-sharp bg-celadon-surface flex items-center justify-center text-celadon border border-celadon-border">
            <PhUsersThree :size="22" weight="regular" />
          </div>
          <h3 class="font-editorial text-base font-semibold text-stone-title">
            Hui Community Fellowship
          </h3>
          <p class="text-xs text-stone-caption leading-relaxed">
            Eat home-cooked banquets in Hui villages, meet local Muslim elders, and forge spiritual brotherhood with China’s native Muslim communities.
          </p>
        </div>

      </div>

    </div>
  </section>
</template>
