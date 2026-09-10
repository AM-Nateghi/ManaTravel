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
  <Tabs :model-value="modelValue" @update:model-value="handleChange" class="w-auto">
    <TabsList class="p-1 h-auto bg-paper-border/60 border border-paper-border rounded-sharp shadow-inner">
      <TabsTrigger 
        value="scheduled"
        class="px-4 sm:px-6 py-2 rounded-sharp text-xs sm:text-sm font-medium transition-all flex items-center gap-2"
      >
        <PhUsersThree :size="18" weight="light" :class="modelValue === 'scheduled' ? 'text-celadon' : ''" />
        <span>Scheduled Group Expeditions</span>
        <Badge 
          v-if="scheduledCount !== undefined" 
          variant="secondary"
          class="ml-1 text-[11px] py-0 px-2"
        >
          {{ scheduledCount }}
        </Badge>
      </TabsTrigger>

      <TabsTrigger 
        value="private"
        class="px-4 sm:px-6 py-2 rounded-sharp text-xs sm:text-sm font-medium transition-all flex items-center gap-2"
      >
        <PhHouseLine :size="18" weight="light" :class="modelValue === 'private' ? 'text-celadon' : ''" />
        <span>Private & Family Bespoke</span>
        <Badge 
          v-if="privateCount !== undefined" 
          variant="outline"
          class="ml-1 text-[11px] py-0 px-2 bg-paper-subtle"
        >
          {{ privateCount }}
        </Badge>
      </TabsTrigger>
    </TabsList>
  </Tabs>
</template>
