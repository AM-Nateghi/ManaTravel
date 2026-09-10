<script setup lang="ts">
import type { TourType } from '../types/tour';
import { Tabs, TabsList, TabsTrigger } from './ui/tabs';
import { Badge } from './ui/badge';
import { PhUsersThree, PhHouseLine } from '@phosphor-icons/vue';

const props = defineProps<{
  modelValue: TourType;
  scheduledCount?: number;
  privateCount?: number;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: TourType): void;
}>();

function handleChange(val: string | number) {
  emit('update:modelValue', val as TourType);
}
</script>

<template>
  <div class="w-full sm:w-auto">
    <Tabs :model-value="modelValue" @update:model-value="handleChange" class="w-full sm:w-auto">
      <TabsList class="grid grid-cols-2 sm:flex sm:flex-row w-full sm:w-auto p-1 h-auto bg-paper-border/60 border border-paper-border rounded-sharp shadow-inner gap-1">
        <TabsTrigger 
          value="scheduled"
          class="w-full sm:w-auto px-2.5 sm:px-5 py-2.5 rounded-sharp text-xs sm:text-sm font-medium transition-all flex items-center justify-center gap-1.5 text-center"
        >
          <PhUsersThree :size="17" weight="light" class="shrink-0" :class="modelValue === 'scheduled' ? 'text-celadon' : ''" />
          <span class="hidden sm:inline">Scheduled Group Expeditions</span>
          <span class="inline sm:hidden">Scheduled ({{ scheduledCount }})</span>
          <Badge 
            v-if="scheduledCount !== undefined" 
            variant="secondary"
            class="hidden sm:inline-flex ml-1 text-xs py-0 px-2"
          >
            {{ scheduledCount }}
          </Badge>
        </TabsTrigger>

        <TabsTrigger 
          value="private"
          class="w-full sm:w-auto px-2.5 sm:px-5 py-2.5 rounded-sharp text-xs sm:text-sm font-medium transition-all flex items-center justify-center gap-1.5 text-center"
        >
          <PhHouseLine :size="17" weight="light" class="shrink-0" :class="modelValue === 'private' ? 'text-celadon' : ''" />
          <span class="hidden sm:inline">Private & Family Bespoke</span>
          <span class="inline sm:hidden">Private ({{ privateCount }})</span>
          <Badge 
            v-if="privateCount !== undefined" 
            variant="outline"
            class="hidden sm:inline-flex ml-1 text-xs py-0 px-2 bg-paper-subtle"
          >
            {{ privateCount }}
          </Badge>
        </TabsTrigger>
      </TabsList>
    </Tabs>
  </div>
</template>
