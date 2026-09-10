<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue';
import { TabsList, type TabsListProps } from 'radix-vue';
import { cn } from '@/lib/utils';

const props = defineProps<TabsListProps & { class?: HTMLAttributes['class'] }>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;
  return delegated;
});
</script>

<template>
  <TabsList
    v-bind="delegatedProps"
    :class="
      cn(
        'inline-flex items-center justify-center rounded-sharp bg-paper-border/60 border border-paper-border p-1 text-stone-caption',
        props.class
      )
    "
  >
    <slot />
  </TabsList>
</template>
