<script setup lang="ts">
import { ref } from 'vue';
import { GUEST_STORIES } from '../data/reviews';
import { 
  PhQuotes, 
  PhCheckCircle, 
  PhMapPin, 
  PhUsers 
} from '@phosphor-icons/vue';

const stories = ref(GUEST_STORIES);
</script>

<template>
  <section class="py-16 sm:py-24 bg-paper">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <div class="seal-stamp mb-2">
            TRAVELER NARRATIVES • 真实评价
          </div>
          <h2 class="font-editorial text-2xl sm:text-3xl lg:text-4xl text-stone-title font-semibold tracking-tight">
            Voices From the Yunnan Trail
          </h2>
          <p class="text-xs sm:text-sm text-stone-caption mt-2 max-w-xl">
            Unfiltered reflections from Muslim solo travelers, families, and couples who traversed China’s historic Muslim villages with brother Ma and Viona.
          </p>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <article 
          v-for="story in stories.slice(0, 3)" 
          :key="story.id"
          class="bg-paper-card border border-paper-border rounded-sharp p-6 shadow-editorial flex flex-col justify-between space-y-6 hover:border-celadon-border transition-colors"
        >
          <div class="space-y-4">
            <!-- Header Meta -->
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2">
                <span class="w-7 h-7 rounded-full bg-celadon-surface border border-celadon-border flex items-center justify-center text-celadon font-bold text-xs">
                  {{ story.guestName.charAt(0) }}
                </span>
                <div>
                  <div class="text-sm font-semibold text-stone-title">{{ story.guestName }}</div>
                  <div class="text-xs text-stone-caption flex items-center gap-1 mt-0.5">
                    <PhMapPin :size="13" weight="light" class="text-celadon" />
                    <span>{{ story.originCountry }}</span>
                  </div>
                </div>
              </div>

              <span class="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-paper-subtle border border-paper-border text-stone-caption">
                {{ story.countryCode }}
              </span>
            </div>

            <!-- Quote Header -->
            <div class="relative pt-1">
              <PhQuotes :size="24" weight="light" class="text-terracotta/40 mb-1" />
              <p class="font-editorial text-base text-stone-title italic font-medium leading-snug">
                "{{ story.quote }}"
              </p>
            </div>

            <!-- Narrative Extract -->
            <p class="text-xs sm:text-sm text-stone-caption leading-relaxed line-clamp-4">
              {{ story.fullNarrative }}
            </p>
          </div>

          <!-- Bottom Footer Details -->
          <div class="pt-4 border-t border-paper-border flex items-center justify-between text-xs">
            <div class="flex items-center gap-1.5 text-stone-caption text-xs">
              <PhUsers :size="15" weight="light" />
              <span>{{ story.partyComposition }}</span>
            </div>

            <div class="flex items-center gap-1 text-celadon text-xs font-medium">
              <PhCheckCircle :size="14" weight="fill" />
              <span>Halal Verified</span>
            </div>
          </div>
        </article>
      </div>

    </div>
  </section>
</template>
