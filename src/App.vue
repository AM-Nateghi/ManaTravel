<script setup lang="ts">
import SmartStickyHeader from './components/SmartStickyHeader.vue';
import FooterSection from './components/FooterSection.vue';
</script>

<template>
  <div class="min-h-screen flex flex-col bg-paper text-stone-body antialiased selection:bg-celadon-surface selection:text-celadon">
    <!-- Smart Sticky Header -->
    <SmartStickyHeader />

    <!-- Main Dynamic Route View -->
    <main class="flex-grow w-full max-w-full overflow-x-hidden">
      <router-view />
    </main>

    <!-- Cultural Editorial Footer -->
    <FooterSection />
  </div>
</template>
