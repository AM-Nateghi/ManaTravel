<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue';
import {
  DialogClose,
  DialogContent,
  type DialogContentEmits,
  type DialogContentProps,
  DialogOverlay,
  DialogPortal,
  useForwardPropsEmits,
} from 'radix-vue';
import { PhX } from '@phosphor-icons/vue';
import { cn } from '@/lib/utils';

const props = defineProps<DialogContentProps & { class?: HTMLAttributes['class']; portalDisabled?: boolean; to?: string | HTMLElement }>();
const emits = defineEmits<DialogContentEmits>();

const delegatedProps = computed(() => {
  const { class: _, portalDisabled: __, to: ___, ...delegated } = props;
  return delegated;
});

const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
  <DialogPortal :disabled="portalDisabled" :to="to">
    <DialogOverlay
      class="fixed inset-0 z-50 bg-stone-title/60 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
    />
    <DialogContent
      v-bind="forwarded"
      :class="
        cn(
          'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-paper-border bg-paper-card p-6 shadow-elevated duration-200 rounded-subtle data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]',
          props.class
        )
      "
    >
      <slot />

      <DialogClose
        class="absolute right-4 top-4 rounded-sharp p-1 text-stone-caption opacity-70 ring-offset-paper transition-opacity hover:opacity-100 hover:bg-paper-border/40 focus:outline-none focus:ring-1 focus:ring-celadon disabled:pointer-events-none"
        aria-label="Close"
      >
        <PhX :size="18" weight="light" />
      </DialogClose>
    </DialogContent>
  </DialogPortal>
</template>
