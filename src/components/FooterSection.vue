<script setup lang="ts">
import { PhChatCircleDots, PhYoutubeLogo, PhMapPin, PhEnvelope } from '@phosphor-icons/vue';
</script>

<template>
  <footer class="bg-paper hairline-t pt-16 pb-12 text-stone-caption text-xs">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      <div class="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
        <!-- Brand Narrative (5 cols) -->
        <div class="md:col-span-5 space-y-4">
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-sharp border border-celadon bg-celadon-surface flex items-center justify-center text-celadon font-editorial font-bold text-base">
              M
            </div>
            <div>
              <div class="font-editorial text-base font-semibold text-stone-title uppercase tracking-wider">
                Mana Travel
              </div>
              <div class="text-xs tracking-wider uppercase">
                Sino-Islamic Cultural Expeditions
              </div>
            </div>
          </div>

          <p class="text-xs leading-relaxed max-w-sm">
            Handcrafted cultural and culinary expeditions designed for international Muslim travelers visiting Yunnan and ancient Silk Road heritage centers in China. Hosted with love by Yusuf Ma & Ayesha Viona.
          </p>

          <div class="flex items-center gap-2 pt-1">
            <span class="seal-stamp text-xs">VERIFIED SINO-ISLAMIC EXPEDITIONS</span>
          </div>
        </div>

        <!-- Quick Links (3 cols) -->
        <div class="md:col-span-3 space-y-3">
          <div class="font-semibold text-stone-title uppercase text-xs tracking-wider">
            Navigation
          </div>
          <ul class="space-y-2 text-xs">
            <li>
              <a href="#expeditions" class="hover:text-celadon transition-colors">Upcoming Departures</a>
            </li>
            <li>
              <a href="#halal-integrity" class="hover:text-celadon transition-colors">Halal Integrity Protocol</a>
            </li>
            <li>
              <a href="#our-hosts" class="hover:text-celadon transition-colors">Yusuf Ma & Viona’s Story</a>
            </li>
            <li>
              <a href="#field-journal" class="hover:text-celadon transition-colors">Bento Scrapbook Archive</a>
            </li>
            <li>
              <a href="#flight-advisory" class="hover:text-celadon transition-colors">Flight Logistics to KMG</a>
            </li>
          </ul>
        </div>

        <!-- Direct Host Contact (4 cols) -->
        <div class="md:col-span-4 space-y-3">
          <div class="font-semibold text-stone-title uppercase text-xs tracking-wider">
            Host Communication
          </div>
          <p class="text-xs leading-relaxed">
            Have questions regarding upcoming batches, visa exemptions, or bespoke family itineraries? Message brother Ma directly:
          </p>
          <div class="space-y-2 pt-1 text-xs">
            <a 
              href="https://api.whatsapp.com/send?phone=8618487728484"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 text-stone-title font-medium hover:text-celadon transition-colors"
            >
              <PhChatCircleDots :size="16" weight="light" class="text-celadon" />
              <span>WhatsApp: +86 184 8772 8484</span>
            </a>
            <div class="flex items-center gap-2 text-stone-caption">
              <PhMapPin :size="16" weight="light" class="text-celadon" />
              <span>Kunming, Yunnan Province, P.R. China</span>
            </div>
            <div class="flex items-center gap-2 text-stone-caption">
              <PhEnvelope :size="16" weight="light" class="text-celadon" />
              <span>contact@manatravel.cn</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Legal & Ground Tour Disclaimer -->
      <div class="pt-8 border-t border-paper-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        <div>
          © {{ new Date().getFullYear() }} Mana Travel. All rights reserved. Ground Tour services hosted in Yunnan, China.
        </div>
        <div class="text-stone-caption">
          All international flights to/from China are self-arranged by guests. 100% Halal dining strictly guaranteed.
        </div>
      </div>

    </div>
  </footer>
</template>
