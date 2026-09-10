<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
import { 
  PhChatCircleDots, 
  PhList, 
  PhX, 
  PhCompass 
} from '@phosphor-icons/vue';

const router = useRouter();
const isVisible = ref(true);
const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);
let lastScrollY = 0;

function handleScroll() {
  const currentScrollY = window.scrollY;
  isScrolled.value = currentScrollY > 40;

  if (currentScrollY > lastScrollY && currentScrollY > 120) {
    // Scrolling down -> hide header
    isVisible.value = false;
    isMobileMenuOpen.value = false;
  } else {
    // Scrolling up -> show header with frosted backdrop
    isVisible.value = true;
  }
  lastScrollY = currentScrollY;
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

function scrollToSection(selector: string) {
  isMobileMenuOpen.value = false;
  if (window.location.pathname !== '/') {
    router.push('/').then(() => {
      setTimeout(() => {
        const el = document.querySelector(selector);
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    });
  } else {
    const el = document.querySelector(selector);
    el?.scrollIntoView({ behavior: 'smooth' });
  }
}
</script>

<template>
  <header 
    class="fixed top-0 left-0 right-0 z-40 transition-transform duration-300 border-b"
    :class="[
      isVisible ? 'translate-y-0' : '-translate-y-full',
      isScrolled 
        ? 'bg-paper/90 backdrop-blur-md border-paper-border shadow-editorial' 
        : 'bg-paper/60 backdrop-blur-sm border-transparent'
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
      <!-- Brand Logo -->
      <router-link to="/" class="flex items-center gap-2.5 sm:gap-3 group min-w-0">
        <div class="w-9 h-9 sm:w-10 sm:h-10 rounded-sharp border border-celadon bg-celadon-surface/50 flex items-center justify-center text-celadon group-hover:bg-celadon group-hover:text-white transition-colors shrink-0">
          <span class="font-editorial text-lg sm:text-xl font-bold">M</span>
        </div>
        <div class="min-w-0">
          <div class="font-editorial text-base sm:text-lg tracking-wider font-semibold text-stone-title uppercase truncate">
            Mana Travel
          </div>
          <div class="text-xs text-stone-caption tracking-wider uppercase font-sans hidden sm:block truncate">
            Sino-Islamic Cultural Expeditions
          </div>
        </div>
      </router-link>

      <!-- Desktop Navigation Links (Visible on lg: 1024px+) -->
      <nav class="hidden lg:flex items-center space-x-5 xl:space-x-7 text-xs xl:text-sm font-medium text-stone-body tracking-wide whitespace-nowrap">
        <button 
          @click="scrollToSection('#expeditions')"
          class="hover:text-celadon transition-colors py-1 whitespace-nowrap"
        >
          Expeditions
        </button>
        <button 
          @click="scrollToSection('#halal-integrity')"
          class="hover:text-celadon transition-colors py-1 whitespace-nowrap"
        >
          Halal Integrity
        </button>
        <button 
          @click="scrollToSection('#our-hosts')"
          class="hover:text-celadon transition-colors py-1 whitespace-nowrap"
        >
          Our Story
        </button>
        <button 
          @click="scrollToSection('#field-journal')"
          class="hover:text-celadon transition-colors py-1 whitespace-nowrap"
        >
          Field Journal
        </button>
        <button 
          @click="scrollToSection('#flight-advisory')"
          class="hover:text-celadon transition-colors py-1 whitespace-nowrap"
        >
          Flight & Transit
        </button>
      </nav>

      <!-- Header Action CTAs -->
      <div class="flex items-center gap-2.5 sm:gap-3 shrink-0">
        <button 
          @click="scrollToSection('#expeditions')"
          class="hidden xl:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-sharp border border-celadon text-celadon text-xs font-semibold hover:bg-celadon hover:text-white transition-colors whitespace-nowrap"
        >
          <PhCompass :size="15" weight="regular" />
          <span>Browse Batches</span>
        </button>

        <a 
          href="https://api.whatsapp.com/send?phone=8618487728484"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-sharp bg-celadon text-white text-xs font-semibold hover:bg-celadon-deep transition-colors shadow-sm shrink-0 whitespace-nowrap"
        >
          <PhChatCircleDots :size="15" weight="regular" />
          <span class="hidden sm:inline">Ask Ma & Viona</span>
          <span class="inline sm:hidden">WhatsApp</span>
        </a>

        <!-- Tablet & Mobile Menu Toggle (Visible below 1024px) -->
        <button 
          @click="isMobileMenuOpen = !isMobileMenuOpen"
          class="lg:hidden p-2 text-stone-title rounded-sharp hover:bg-paper-border/40 transition-colors"
          aria-label="Toggle navigation menu"
        >
          <PhX v-if="isMobileMenuOpen" :size="22" weight="regular" />
          <PhList v-else :size="22" weight="regular" />
        </button>
      </div>
    </div>

    <!-- Tablet & Mobile Navigation Drawer -->
    <div 
      v-if="isMobileMenuOpen" 
      class="lg:hidden bg-paper/98 backdrop-blur-md border-b border-paper-border px-6 py-5 space-y-4 text-sm font-medium animate-in slide-in-from-top-2 duration-200 shadow-elevated"
    >
      <button 
        @click="scrollToSection('#expeditions')" 
        class="block w-full text-left py-2 text-stone-title hover:text-celadon"
      >
        Upcoming Expeditions
      </button>
      <button 
        @click="scrollToSection('#halal-integrity')" 
        class="block w-full text-left py-2 text-stone-title hover:text-celadon"
      >
        Halal Assurance & Prayer
      </button>
      <button 
        @click="scrollToSection('#our-hosts')" 
        class="block w-full text-left py-2 text-stone-title hover:text-celadon"
      >
        Meet Yusuf Ma & Viona
      </button>
      <button 
        @click="scrollToSection('#field-journal')" 
        class="block w-full text-left py-2 text-stone-title hover:text-celadon"
      >
        Guest Scrapbook & Proof
      </button>
      <button 
        @click="scrollToSection('#flight-advisory')" 
        class="block w-full text-left py-2 text-stone-title hover:text-celadon"
      >
        Flight Logistics to Kunming
      </button>
    </div>
  </header>
</template>
