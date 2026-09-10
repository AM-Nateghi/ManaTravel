<script setup lang="ts">
import { 
  PhAirplaneTakeoff, 
  PhQuotes, 
  PhSparkle, 
  PhCheckCircle 
} from '@phosphor-icons/vue';
</script>

<template>
  <section id="field-journal" class="py-16 sm:py-24 bg-paper-subtle/50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="text-center max-w-3xl mx-auto mb-12">
        <div class="seal-stamp mb-2">
          EXPEDITION ARCHIVE • 旅途记忆
        </div>
        <h2 class="font-editorial text-2xl sm:text-3xl lg:text-4xl text-stone-title font-semibold tracking-tight">
          The Bento Field Scrapbook
        </h2>
        <p class="text-xs sm:text-sm text-stone-caption mt-2 leading-relaxed">
          Unfiltered moments from the tea-horse trail: communal banquets, historic courtyard reflections, and genuine traveler brotherhood.
        </p>
      </div>

      <!-- Bento Grid (4 Cells) -->
      <div class="grid grid-cols-1 md:grid-cols-12 gap-5">
        
        <!-- Cell 1: Large Visual Feature (7 cols) -->
        <div class="md:col-span-7 bg-paper-card border border-paper-border rounded-sharp p-4 sm:p-5 shadow-editorial flex flex-col justify-between group">
          <div class="relative overflow-hidden rounded-sharp h-64 sm:h-80 border border-paper-border">
            <img 
              src="https://manatravel.cn/wp-content/uploads/2026/09/IMG_4968-297x300.jpg" 
              alt="Muslim travelers sharing Yunnan Halal banquet" 
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div class="absolute top-3 left-3 bg-paper-card/90 backdrop-blur-sm text-stone-title border border-paper-border text-[11px] font-semibold px-2.5 py-1 rounded-sharp">
              FIELD PHOTOGRAPH • WEISHAN BANQUET
            </div>
          </div>
          <div class="pt-4 flex items-center justify-between">
            <div>
              <div class="font-editorial text-base font-semibold text-stone-title">Hui Village Traditional Banquet</div>
              <div class="text-xs text-stone-caption">Shared table with 12 dishes, Yunnan beef brisket, and freshly baked Hui pita</div>
            </div>
            <span class="seal-stamp text-[10px]">100% HALAL</span>
          </div>
        </div>

        <!-- Cell 2: Guest Voice & Reflection (5 cols) -->
        <div class="md:col-span-5 bg-paper-card border border-paper-border rounded-sharp p-6 shadow-editorial flex flex-col justify-between space-y-4">
          <div class="space-y-3">
            <div class="flex items-center justify-between">
              <span class="text-[11px] font-semibold tracking-wider text-celadon uppercase flex items-center gap-1">
                <PhQuotes :size="16" weight="light" />
                <span>Traveler Reflection</span>
              </span>
              <span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-celadon-surface text-celadon border border-celadon-border">
                SINGAPORE (SIN)
              </span>
            </div>
            
            <p class="font-editorial text-lg text-stone-title italic leading-relaxed">
              "We shared lots of laughter, exchanged views, and learned together. That is priceless. May Allah bless brother Ma and sister Viona for taking such personal care of our prayer times and meals."
            </p>
          </div>

          <div class="pt-4 border-t border-paper-border flex items-center justify-between text-xs">
            <div>
              <div class="font-semibold text-stone-title">Brother Zam & Family</div>
              <div class="text-stone-caption text-[11px]">Yunnan 8D7N Cultural Route</div>
            </div>
            <div class="flex items-center gap-1 text-celadon text-xs">
              <PhCheckCircle :size="16" weight="fill" />
              <span class="font-medium">Verified Guest</span>
            </div>
          </div>
        </div>

        <!-- Cell 3: Passport Entry Stamp & Transit Artifact (5 cols) -->
        <div class="md:col-span-5 bg-paper-card border border-dashed border-terracotta-border/80 rounded-sharp p-6 shadow-editorial flex flex-col justify-between relative overflow-hidden bg-terracotta-surface/20">
          <div class="space-y-2">
            <div class="text-[11px] font-semibold text-terracotta tracking-wider uppercase flex items-center gap-1.5">
              <PhAirplaneTakeoff :size="16" weight="light" />
              <span>Gateway Entry</span>
            </div>
            <div class="font-editorial text-2xl font-bold text-stone-title tracking-tight">
              Kunming Changshui (KMG)
            </div>
            <p class="text-xs text-stone-caption leading-relaxed">
              Direct arrivals via Kuala Lumpur, Bangkok, Singapore, and Guangzhou. Brother Ma personally meets arriving guests at KMG terminal.
            </p>
          </div>

          <!-- Stylized Chop Seal Stamp Graphic -->
          <div class="mt-6 border-2 border-terracotta/70 p-3 rounded-sharp text-terracotta inline-block max-w-[240px] text-center rotate-[-2deg]">
            <div class="text-[10px] tracking-widest font-mono font-bold uppercase">ENTRY PASSPORT VERIFIED</div>
            <div class="text-xs font-editorial font-bold my-0.5">MANA CULTURAL EXPEDITION</div>
            <div class="text-[9px] font-mono">YUNNAN • P.R. CHINA</div>
          </div>
        </div>

        <!-- Cell 4: Host Commitment Letter (7 cols) -->
        <div class="md:col-span-7 bg-paper-card border border-paper-border rounded-sharp p-6 shadow-editorial flex flex-col justify-between space-y-4">
          <div class="space-y-2">
            <div class="flex items-center gap-1.5 text-xs font-semibold text-celadon uppercase tracking-wide">
              <PhSparkle :size="16" weight="light" />
              <span>Our Sacred Trust</span>
            </div>
            <h3 class="font-editorial text-xl font-semibold text-stone-title">
              "You come as our guests; you leave as our lifelong family."
            </h3>
            <p class="text-xs sm:text-sm text-stone-caption leading-relaxed">
              Every restaurant we enter has been vetted in person. We never take kickbacks from tourist shopping stores or rush you through sacred prayer times. We preserve the dignity and beauty of Islamic hospitality.
            </p>
          </div>

          <div class="pt-4 border-t border-paper-border flex items-center justify-between text-xs">
            <div class="flex items-center gap-3">
              <div class="w-8 h-8 rounded-full border border-celadon bg-celadon-surface flex items-center justify-center text-celadon font-bold text-xs">
                马
              </div>
              <div>
                <div class="font-semibold text-stone-title">Yusuf Ma & Ayesha Viona</div>
                <div class="text-[11px] text-stone-caption">Mana Travel Founders • Kunming, China</div>
              </div>
            </div>
            <span class="seal-stamp text-[10px]">VERIFIED HOST</span>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>
