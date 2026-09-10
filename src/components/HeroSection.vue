<script setup lang="ts">
import { 
  PhShieldCheck, 
  PhUsersThree, 
  PhTranslate, 
  PhArrowDown, 
  PhChatCircleDots,
  PhAirplaneTilt
} from '@phosphor-icons/vue';

defineEmits<{
  (e: 'explore'): void;
}>();
</script>

<template>
  <section class="relative pt-24 sm:pt-32 pb-16 lg:pb-24 overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        
        <!-- Left Editorial Narrative (7 cols) -->
        <div class="lg:col-span-7 space-y-6 sm:space-y-8">
          
          <!-- Cultural Header Seals -->
          <div class="flex flex-wrap items-center gap-2 sm:gap-3">
            <span class="seal-stamp">
              云南回族 • YUNNAN HUI HERITAGE
            </span>
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-terracotta-surface text-terracotta border border-terracotta-border">
              <PhAirplaneTilt :size="14" weight="light" />
              <span>Ground Tours • International Flights Self-Arranged</span>
            </span>
          </div>

          <!-- Primary Headline -->
          <h1 class="font-editorial text-3xl sm:text-4xl lg:text-5xl tracking-tight text-stone-title leading-[1.18]">
            Walk the Ancient Muslim Footpaths of China With Local Hosts.
          </h1>

          <!-- Body Subtitle -->
          <p class="text-stone-body text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
            Immerse yourself in centuries of living Sino-Islamic heritage across Yunnan and the Silk Road. Join intimate small-group expeditions hosted personally by 
            <strong class="text-celadon font-semibold">Yusuf Ma</strong> and 
            <strong class="text-celadon font-semibold">Ayesha Viona</strong>, featuring 100% Halal village banquets, historic Ming masjids, and warm homestay fellowship.
          </p>

          <!-- Core Value Proposition Badges -->
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <div class="border border-paper-border bg-paper-card p-3 rounded-sharp flex items-start gap-2.5 shadow-sm">
              <PhShieldCheck :size="20" weight="light" class="text-celadon shrink-0 mt-0.5" />
              <div>
                <div class="text-xs font-semibold text-stone-title">100% Halal Integrity</div>
                <div class="text-[11px] text-stone-caption">Every meal certified Muslim dining</div>
              </div>
            </div>

            <div class="border border-paper-border bg-paper-card p-3 rounded-sharp flex items-start gap-2.5 shadow-sm">
              <PhUsersThree :size="20" weight="light" class="text-celadon shrink-0 mt-0.5" />
              <div>
                <div class="text-xs font-semibold text-stone-title">Small Groups</div>
                <div class="text-[11px] text-stone-caption">8 to 14 travelers max per batch</div>
              </div>
            </div>

            <div class="border border-paper-border bg-paper-card p-3 rounded-sharp flex items-start gap-2.5 shadow-sm">
              <PhTranslate :size="20" weight="light" class="text-celadon shrink-0 mt-0.5" />
              <div>
                <div class="text-xs font-semibold text-stone-title">Native Hosts</div>
                <div class="text-[11px] text-stone-caption">English & Chinese guidance</div>
              </div>
            </div>
          </div>

          <!-- CTAs -->
          <div class="flex flex-wrap items-center gap-3 pt-2">
            <a 
              href="#expeditions" 
              class="px-6 py-3 rounded-sharp bg-celadon text-white text-xs sm:text-sm font-semibold hover:bg-celadon-deep transition-all shadow-sm inline-flex items-center gap-2"
            >
              <span>Explore 2026-2027 Departures</span>
              <PhArrowDown :size="16" weight="light" />
            </a>

            <a 
              href="https://api.whatsapp.com/send?phone=8618487728484&text=Salam%20Ma%20%26%20Viona!%20I%20saw%20your%20YouTube%20videos%20and%20would%20love%20to%20learn%20more%20about%20your%20upcoming%20Yunnan%20Muslim%20tours."
              target="_blank"
              rel="noopener noreferrer"
              class="px-5 py-3 rounded-sharp border border-celadon bg-paper text-celadon text-xs sm:text-sm font-semibold hover:bg-celadon-surface/50 transition-all inline-flex items-center gap-2"
            >
              <PhChatCircleDots :size="16" weight="light" />
              <span>Direct WhatsApp Inquiry</span>
            </a>
          </div>

          <!-- Social Proof Micro-Tag -->
          <div class="pt-1 flex items-center gap-2 text-xs text-stone-caption">
            <span class="w-2 h-2 rounded-full bg-celadon inline-block"></span>
            <span>Welcoming Muslim travelers from Singapore, Malaysia, Indonesia, US, UK, and across the globe.</span>
          </div>
        </div>

        <!-- Right Visual Showcase (5 cols) -->
        <div class="lg:col-span-5 relative">
          <!-- Main Portrait & Expedition Collage -->
          <div class="relative mx-auto max-w-md lg:max-w-none">
            <!-- Primary Image Frame (Sharp Architectural border) -->
            <div class="border-2 border-paper-border bg-paper-card p-2 rounded-sharp shadow-elevated overflow-hidden">
              <img 
                src="https://manatravel.cn/wp-content/uploads/2026/09/IMG_4967.jpg" 
                alt="Brother Yusuf Ma and Ayesha Viona with international Muslim travelers in Yunnan"
                class="w-full h-80 sm:h-96 object-cover rounded-sharp filter contrast-[1.02]"
                loading="eager"
              />
              <div class="p-3 bg-paper-card flex items-center justify-between border-t border-paper-border mt-2">
                <div>
                  <div class="text-xs font-semibold text-stone-title">Yusuf Ma & Ayesha Viona</div>
                  <div class="text-[11px] text-stone-caption">Founders & Lead Cultural Expedition Hosts</div>
                </div>
                <div class="seal-stamp text-[10px]">
                  LOCAL HOSTS
                </div>
              </div>
            </div>

            <!-- Floating Badge: Halal Peace of Mind -->
            <div class="absolute -bottom-4 -left-4 sm:-left-6 bg-paper-card border border-paper-border p-3 rounded-sharp shadow-editorial max-w-[220px] hidden sm:block">
              <div class="text-[11px] font-semibold text-celadon uppercase tracking-wide flex items-center gap-1">
                <PhShieldCheck :size="16" weight="bold" />
                <span>Zero Compromise</span>
              </div>
              <p class="text-[11px] text-stone-caption mt-1 leading-snug">
                Every restaurant personally audited by brother Ma. Prayer facilities pre-arranged at local masjids.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
