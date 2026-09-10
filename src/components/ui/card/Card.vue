<script setup lang="ts">
import type { HTMLAttributes } from 'vue';
import { cn } from '@/lib/utils';

const props = defineProps<{
  class?: HTMLAttributes['class'];
}>();
</script>

<template>
  <div
    :class="
      cn(
        'rounded-sharp border border-paper-border bg-paper-card text-stone-body shadow-editorial',
        props.class
      )
    "
  >
    <slot />
  </div>
</template>
