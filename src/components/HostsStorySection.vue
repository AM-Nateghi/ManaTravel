<script setup lang="ts">
import { 
  PhHeart, 
  PhBookOpen, 
  PhUsers, 
  PhChatCircleDots 
} from '@phosphor-icons/vue';
</script>

<template>
  <section id="our-hosts" class="py-16 sm:py-24 bg-paper hairline-t hairline-b">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <!-- Left Image Narrative (5 cols) -->
        <div class="lg:col-span-5 relative space-y-4">
          <div class="border-2 border-paper-border bg-paper-card p-2 rounded-sharp shadow-elevated">
            <img 
              src="https://manatravel.cn/wp-content/uploads/2026/09/IMG_4966-300x208.jpg" 
              alt="Brother Ma hosting international Muslim travelers in traditional Hui village"
              class="w-full h-80 sm:h-96 object-cover rounded-sharp filter contrast-[1.03]"
              loading="lazy"
            />
            <div class="p-4 bg-paper hairline-t mt-2">
              <div class="font-editorial text-sm font-semibold text-stone-title">
                "Our ancestors built these masjids 600 years ago. We are here to welcome you home."
              </div>
              <div class="text-xs text-stone-caption mt-1">
                — Brother Yusuf Ma (马师傅) & Ayesha Viona
              </div>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-3 text-center text-xs">
            <div class="p-3 bg-paper-card border border-paper-border rounded-sharp shadow-sm">
              <div class="font-editorial text-lg font-bold text-celadon">700+ Years</div>
              <div class="text-stone-caption text-[11px] mt-0.5">Hui Muslim Heritage in Yunnan</div>
            </div>
            <div class="p-3 bg-paper-card border border-paper-border rounded-sharp shadow-sm">
              <div class="font-editorial text-lg font-bold text-terracotta">100% Native</div>
              <div class="text-stone-caption text-[11px] mt-0.5">Community-Rooted Operations</div>
            </div>
          </div>
        </div>

        <!-- Right Content Column (7 cols) -->
        <div class="lg:col-span-7 space-y-6">
          <div class="space-y-2">
            <div class="seal-stamp">
              THE MANA PHILOSOPHY • 信仰与文化
            </div>
            <h2 class="font-editorial text-3xl sm:text-4xl font-semibold text-stone-title tracking-tight leading-tight">
              Bridging the Global Ummah With China’s Living Islamic Heritage
            </h2>
          </div>

          <p class="text-stone-body text-sm sm:text-base leading-relaxed">
            Most travelers think of China only through mega-cities or mainstream tourist monuments. But tucked away along ancient tea-horse trails and mountain plateaus lies a rich, flourishing Islamic heritage established since the Mongol and Ming dynasties.
          </p>

          <p class="text-stone-body text-sm sm:text-base leading-relaxed">
            As native Chinese Muslims born and raised in Yunnan, <strong>brother Yusuf Ma</strong> and <strong>sister Ayesha Viona</strong> founded Mana Travel with a singular intention: to remove the anxiety, isolation, and language barriers that international Muslim travelers face when exploring China.
          </p>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div class="p-4 bg-paper-card border border-paper-border rounded-sharp space-y-1.5 shadow-sm">
              <div class="flex items-center gap-2 text-celadon font-semibold text-xs uppercase">
                <PhHeart :size="16" weight="light" />
                <span>Intimate Village Ties</span>
              </div>
              <p class="text-xs text-stone-caption leading-relaxed">
                We take you directly inside Hui family courtyards and historic wooden masjids where commercial tour buses cannot go.
              </p>
            </div>

            <div class="p-4 bg-paper-card border border-paper-border rounded-sharp space-y-1.5 shadow-sm">
              <div class="flex items-center gap-2 text-celadon font-semibold text-xs uppercase">
                <PhBookOpen :size="16" weight="light" />
                <span>Deep Cultural Translation</span>
              </div>
              <p class="text-xs text-stone-caption leading-relaxed">
                We explain the historical syncretism of Chinese Islamic calligraphy, architectural eaves, and local customs in fluent English.
              </p>
            </div>
          </div>

          <div class="pt-4 flex items-center gap-4">
            <a 
              href="https://api.whatsapp.com/send?phone=8618487728484"
              target="_blank"
              rel="noopener noreferrer"
              class="px-5 py-2.5 bg-celadon text-white rounded-sharp text-xs font-semibold hover:bg-celadon-deep transition-colors inline-flex items-center gap-2 shadow-sm"
            >
              <PhChatCircleDots :size="16" weight="light" />
              <span>Connect Directly With Yusuf Ma</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
