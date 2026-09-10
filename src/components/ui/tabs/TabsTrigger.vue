<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue';
import { TabsTrigger, type TabsTriggerProps, useForwardProps } from 'radix-vue';
import { cn } from '@/lib/utils';

const props = defineProps<TabsTriggerProps & { class?: HTMLAttributes['class'] }>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;
  return delegated;
});

const forwarded = useForwardProps(delegatedProps);
</script>

<template>
  <TabsTrigger
    v-bind="forwarded"
    :class="
      cn(
        'inline-flex items-center justify-center whitespace-nowrap rounded-sharp px-4 py-2 text-xs font-medium ring-offset-paper transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-celadon disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-paper-card data-[state=active]:text-celadon data-[state=active]:shadow-sm data-[state=active]:font-semibold data-[state=active]:border data-[state=active]:border-paper-border/80',
        props.class
      )
    "
  >
    <slot />
  </TabsTrigger>
</template>
