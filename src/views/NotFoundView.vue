<script setup lang="ts">
import { PhCompass, PhArrowLeft } from '@phosphor-icons/vue';
</script>

<template>
  <div class="min-h-[70vh] flex items-center justify-center px-4 py-24 bg-paper">
    <div class="max-w-md w-full text-center space-y-6 bg-paper-card border border-paper-border p-8 rounded-sharp shadow-editorial">
      <div class="w-14 h-14 rounded-full bg-celadon-surface text-celadon border border-celadon-border mx-auto flex items-center justify-center">
        <PhCompass :size="28" weight="light" />
      </div>

      <div class="space-y-2">
        <span class="seal-stamp text-[10px]">PAGE NOT FOUND</span>
        <h1 class="font-editorial text-2xl font-bold text-stone-title">
          Off the Beaten Trail
        </h1>
        <p class="text-xs sm:text-sm text-stone-caption leading-relaxed">
          The path you are following does not exist in our expedition archives. Let us guide you back to active journeys.
        </p>
      </div>

      <div class="pt-2">
        <router-link 
          to="/"
          class="px-5 py-2.5 bg-celadon text-white rounded-sharp text-xs font-semibold hover:bg-celadon-deep transition-colors inline-flex items-center gap-2"
        >
          <PhArrowLeft :size="15" weight="light" />
          <span>Return to Homepage</span>
        </router-link>
      </div>
    </div>
  </div>
</template>
