<script setup lang="ts">
import { 
  PhAirplaneTilt, 
  PhCompass, 
  PhIdentificationCard, 
  PhTrain 
} from '@phosphor-icons/vue';
</script>

<template>
  <section id="flight-advisory" class="py-16 sm:py-24 bg-paper-subtle/80 hairline-t hairline-b">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="text-center max-w-3xl mx-auto mb-12">
        <div class="seal-stamp mb-2">
          LOGISTICS & TRANSIT • 国际航班指南
        </div>
        <h2 class="font-editorial text-2xl sm:text-3xl lg:text-4xl text-stone-title font-semibold tracking-tight">
          Flight & Transit Advisory
        </h2>
        <p class="text-xs sm:text-sm text-stone-caption mt-2 leading-relaxed">
          How to effortlessly plan your flights into Yunnan. We provide seamless ground coordination from the moment you step out of the terminal.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        <!-- Step 1: Destination Airport -->
        <div class="bg-paper-card border border-paper-border p-5 rounded-sharp space-y-3 shadow-editorial">
          <div class="w-10 h-10 rounded-sharp bg-celadon-surface flex items-center justify-center text-celadon border border-celadon-border">
            <PhAirplaneTilt :size="20" weight="light" />
          </div>
          <div class="text-xs font-semibold text-terracotta uppercase tracking-wider">Gateway 01</div>
          <h3 class="font-editorial text-base font-semibold text-stone-title">
            Fly Direct to Kunming (KMG)
          </h3>
          <p class="text-xs sm:text-sm text-stone-caption leading-relaxed">
            Your destination airport is <strong>Kunming Changshui International Airport (KMG)</strong>. Most expeditions start and conclude right in Kunming.
          </p>
        </div>

        <!-- Step 2: Transit Hubs -->
        <div class="bg-paper-card border border-paper-border p-5 rounded-sharp space-y-3 shadow-editorial">
          <div class="w-10 h-10 rounded-sharp bg-celadon-surface flex items-center justify-center text-celadon border border-celadon-border">
            <PhCompass :size="20" weight="light" />
          </div>
          <div class="text-xs font-semibold text-terracotta uppercase tracking-wider">Gateway 02</div>
          <h3 class="font-editorial text-base font-semibold text-stone-title">
            Popular Connecting Hubs
          </h3>
          <p class="text-xs sm:text-sm text-stone-caption leading-relaxed">
            Direct 3-4 hr flights run daily from <strong>Kuala Lumpur (KUL)</strong>, <strong>Bangkok (BKK/DMK)</strong>, <strong>Singapore (SIN)</strong>, and <strong>Guangzhou (CAN)</strong>.
          </p>
        </div>

        <!-- Step 3: Visa Policies -->
        <div class="bg-paper-card border border-paper-border p-5 rounded-sharp space-y-3 shadow-editorial">
          <div class="w-10 h-10 rounded-sharp bg-celadon-surface flex items-center justify-center text-celadon border border-celadon-border">
            <PhIdentificationCard :size="20" weight="light" />
          </div>
          <div class="text-xs font-semibold text-terracotta uppercase tracking-wider">Gateway 03</div>
          <h3 class="font-editorial text-base font-semibold text-stone-title">
            Visa-Free Policies
          </h3>
          <p class="text-xs sm:text-sm text-stone-caption leading-relaxed">
            Passport holders from Malaysia, Singapore, and many European nations now enjoy <strong>15 to 30 days visa-free entry</strong>. For other passports, we issue official invitation letters.
          </p>
        </div>

        <!-- Step 4: Ground Connection -->
        <div class="bg-paper-card border border-paper-border p-5 rounded-sharp space-y-3 shadow-editorial">
          <div class="w-10 h-10 rounded-sharp bg-celadon-surface flex items-center justify-center text-celadon border border-celadon-border">
            <PhTrain :size="20" weight="light" />
          </div>
          <div class="text-xs font-semibold text-terracotta uppercase tracking-wider">Gateway 04</div>
          <h3 class="font-editorial text-base font-semibold text-stone-title">
            Airport Meet & Domestic Rails
          </h3>
          <p class="text-xs sm:text-sm text-stone-caption leading-relaxed">
            Brother Ma meets you directly at KMG arrival gates. All intra-Yunnan bullet trains and luxury private coaches are arranged and covered.
          </p>
        </div>

      </div>

    </div>
  </section>
</template>
