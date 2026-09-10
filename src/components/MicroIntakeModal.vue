<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import type { TourPackage, MicroIntakeForm } from '../types/tour';
import { 
  compileWhatsAppHandshake, 
  validateMicroIntake 
} from '../utils/handshake';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from './ui/dialog';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

import { 
  PhArrowRight, 
  PhArrowLeft, 
  PhAirplaneTilt, 
  PhMapPin, 
  PhCheck, 
  PhChatCircleDots 
} from '@phosphor-icons/vue';

const props = withDefaults(defineProps<{
  isOpen: boolean;
  tour: TourPackage | null;
  initialBatchId?: string;
  portalDisabled?: boolean;
}>(), {
  portalDisabled: false,
});

const emit = defineEmits<{
  (e: 'close'): void;
}>();

const currentStep = ref<1 | 2 | 3>(1);

const form = ref<MicroIntakeForm>({
  tourId: '',
  tourTitle: '',
  batchId: '',
  batchDates: '',
  customTravelMonth: '',
  adultsCount: 2,
  childrenCount: 0,
  originLocation: '',
  flightAcknowledged: false,
});

watch(
  () => props.tour,
  (newTour) => {
    if (newTour) {
      form.value.tourId = newTour.id;
      form.value.tourTitle = newTour.title;
      if (newTour.batches && newTour.batches.length > 0) {
        const targetBatch = props.initialBatchId 
          ? newTour.batches.find((b) => b.id === props.initialBatchId) 
          : newTour.batches.find((b) => b.status === 'open' || b.status === 'limited') || newTour.batches[0];
        if (targetBatch) {
          form.value.batchId = targetBatch.id;
          form.value.batchDates = targetBatch.displayDates;
        }
      } else {
        form.value.batchId = '';
        form.value.batchDates = '';
        form.value.customTravelMonth = 'Flexible / Next 6 Months';
      }
      currentStep.value = 1;
      form.value.flightAcknowledged = false;
    }
  },
  { immediate: true }
);

function selectBatch(batchId: string, dates: string) {
  form.value.batchId = batchId;
  form.value.batchDates = dates;
}

function nextStep() {
  if (currentStep.value === 1) {
    currentStep.value = 2;
  } else if (currentStep.value === 2) {
    if (form.value.adultsCount < 1 || !form.value.originLocation.trim()) {
      return;
    }
    currentStep.value = 3;
  }
}

function prevStep() {
  if (currentStep.value > 1) {
    currentStep.value = (currentStep.value - 1) as 1 | 2;
  }
}

const isStep2Valid = computed(() => {
  return form.value.adultsCount >= 1 && form.value.originLocation.trim().length > 0;
});

const validation = computed(() => {
  return validateMicroIntake(form.value);
});

const handshakePayload = computed(() => {
  return compileWhatsAppHandshake(form.value);
});

function handleDispatch() {
  if (!validation.value.isValid) return;
  window.open(handshakePayload.value.encodedUrl, '_blank', 'noopener,noreferrer');
  emit('close');
}

function handleOpenUpdate(val: boolean) {
  if (!val) {
    emit('close');
  }
}
</script>

<template>
  <Dialog :open="isOpen && !!tour" @update:open="handleOpenUpdate">
    <DialogContent v-if="tour" :portal-disabled="portalDisabled" class="max-w-lg p-0 overflow-hidden border-paper-border bg-paper-card">
      <!-- Modal Header -->
      <DialogHeader class="px-6 py-4 bg-paper hairline-b space-y-1">
        <div class="flex items-center gap-2">
          <Badge variant="seal" class="text-[10px] py-0 px-1">INQUIRY HANDSHAKE</Badge>
          <span class="text-[11px] font-semibold text-terracotta uppercase tracking-wider">
            Step {{ currentStep }} of 3
          </span>
        </div>
        <DialogTitle class="font-editorial text-lg text-stone-title font-semibold line-clamp-1">
          {{ tour.title }}
        </DialogTitle>
        <DialogDescription class="text-xs text-stone-caption">
          Connect directly with Brother Yusuf Ma and Ayesha Viona on WhatsApp.
        </DialogDescription>
      </DialogHeader>

      <!-- Step Indicator Bar -->
      <div class="grid grid-cols-3 h-1 bg-paper-border">
        <div 
          class="h-full transition-all duration-300 bg-celadon" 
          :class="{ 'col-span-1': currentStep === 1, 'col-span-2': currentStep === 2, 'col-span-3': currentStep === 3 }"
        ></div>
      </div>

      <!-- Modal Body -->
      <div class="p-6 space-y-5">
        <!-- STEP 1: Batch / Month Selection -->
        <div v-if="currentStep === 1" class="space-y-4">
          <div>
            <label class="block text-xs font-semibold uppercase text-stone-caption tracking-wider mb-1">
              Select Your Travel Window
            </label>
            <p class="text-xs text-stone-caption">
              Choose an active departure batch or specify your target travel window.
            </p>
          </div>

          <!-- If Scheduled Tour: Batches List -->
          <div v-if="tour.tourType === 'scheduled' && tour.batches && tour.batches.length > 0" class="space-y-2">
            <div 
              v-for="batch in tour.batches" 
              :key="batch.id"
              @click="selectBatch(batch.id, batch.displayDates)"
              class="border p-3 rounded-sharp cursor-pointer transition-all flex items-center justify-between"
              :class="form.batchId === batch.id 
                ? 'border-celadon bg-celadon-surface/50 text-stone-title ring-1 ring-celadon' 
                : 'border-paper-border hover:border-celadon-border bg-paper/40 text-stone-body'"
            >
              <div class="flex items-center gap-3">
                <div 
                  class="w-4 h-4 rounded-full border flex items-center justify-center transition-colors"
                  :class="form.batchId === batch.id ? 'border-celadon bg-celadon text-white' : 'border-stone-caption'"
                >
                  <PhCheck v-if="form.batchId === batch.id" :size="10" weight="bold" />
                </div>
                <div>
                  <div class="font-medium text-sm text-stone-title">{{ batch.displayDates }}</div>
                  <div class="text-[11px] text-stone-caption">{{ tour.durationDays }} Days Ground Expedition</div>
                </div>
              </div>

              <div class="text-right">
                <Badge 
                  v-if="batch.status === 'limited'" 
                  variant="terracotta"
                >
                  {{ batch.availableSeats }} seats left
                </Badge>
                <Badge 
                  v-else-if="batch.status === 'open'" 
                  variant="secondary"
                >
                  Available
                </Badge>
                <span 
                  v-else 
                  class="text-[11px] font-medium text-stone-caption bg-paper-border px-2 py-0.5 rounded-full"
                >
                  Waitlist Only
                </span>
              </div>
            </div>
          </div>

          <!-- If Private Tour or Custom Month -->
          <div v-else class="space-y-3">
            <div class="p-3 bg-paper-subtle border border-paper-border rounded-sharp text-xs text-stone-caption">
              This is a private bespoke journey. Brother Ma and Viona customize the schedule based on your requested month and party pacing.
            </div>
            <div>
              <label class="block text-xs font-medium text-stone-caption mb-1">Preferred Travel Month / Year</label>
              <input 
                v-model="form.customTravelMonth"
                type="text" 
                placeholder="e.g. November 2026 or Spring 2027"
                class="w-full text-sm border border-paper-border rounded-sharp px-3 py-2 bg-paper focus:outline-none focus:border-celadon focus:ring-1 focus:ring-celadon"
              />
            </div>
          </div>
        </div>

        <!-- STEP 2: Travelers Composition & Origin -->
        <div v-if="currentStep === 2" class="space-y-4">
          <div>
            <label class="block text-xs font-semibold uppercase text-stone-caption tracking-wider mb-1">
              Who Is Traveling?
            </label>
            <p class="text-xs text-stone-caption">
              Specify your group size so Ma & Viona can verify hotel room allocations and banquet reservations.
            </p>
          </div>

          <div class="grid grid-cols-2 gap-3">
            <!-- Adults Stepper -->
            <div class="border border-paper-border p-3 rounded-sharp bg-paper/50">
              <span class="text-xs text-stone-caption font-medium block">Adults (Age 12+)</span>
              <div class="flex items-center justify-between mt-2">
                <button 
                  type="button"
                  @click="form.adultsCount = Math.max(1, form.adultsCount - 1)"
                  class="w-8 h-8 rounded-sharp border border-paper-border bg-paper flex items-center justify-center font-bold hover:bg-paper-subtle"
                >-</button>
                <span class="text-base font-semibold text-stone-title">{{ form.adultsCount }}</span>
                <button 
                  type="button"
                  @click="form.adultsCount = Math.min(14, form.adultsCount + 1)"
                  class="w-8 h-8 rounded-sharp border border-paper-border bg-paper flex items-center justify-center font-bold hover:bg-paper-subtle"
                >+</button>
              </div>
            </div>

            <!-- Children Stepper -->
            <div class="border border-paper-border p-3 rounded-sharp bg-paper/50">
              <span class="text-xs text-stone-caption font-medium block">Children (Under 12)</span>
              <div class="flex items-center justify-between mt-2">
                <button 
                  type="button"
                  @click="form.childrenCount = Math.max(0, form.childrenCount - 1)"
                  class="w-8 h-8 rounded-sharp border border-paper-border bg-paper flex items-center justify-center font-bold hover:bg-paper-subtle"
                >-</button>
                <span class="text-base font-semibold text-stone-title">{{ form.childrenCount }}</span>
                <button 
                  type="button"
                  @click="form.childrenCount = Math.min(10, form.childrenCount + 1)"
                  class="w-8 h-8 rounded-sharp border border-paper-border bg-paper flex items-center justify-center font-bold hover:bg-paper-subtle"
                >+</button>
              </div>
            </div>
          </div>

          <!-- Origin Country/City -->
          <div>
            <label class="block text-xs font-semibold text-stone-caption mb-1">
              Your Departure City & Country
            </label>
            <div class="relative">
              <PhMapPin :size="16" weight="light" class="absolute left-3 top-3 text-stone-caption" />
              <input 
                v-model="form.originLocation"
                type="text"
                placeholder="e.g. Kuala Lumpur, Singapore, London, or Chicago"
                class="w-full text-sm pl-9 pr-3 py-2 border border-paper-border rounded-sharp bg-paper focus:outline-none focus:border-celadon focus:ring-1 focus:ring-celadon"
                required
              />
            </div>
            <p class="text-[11px] text-stone-caption mt-1">
              Helps brother Ma advise you on the best connecting flights into Kunming (KMG).
            </p>
          </div>
        </div>

        <!-- STEP 3: Flight Verification & WhatsApp Compilation -->
        <div v-if="currentStep === 3" class="space-y-4">
          <div class="p-3 bg-terracotta-surface border border-terracotta-border rounded-sharp space-y-2">
            <div class="flex items-center gap-2 text-terracotta font-semibold text-xs">
              <PhAirplaneTilt :size="18" weight="light" />
              <span>Crucial Flight Notice</span>
            </div>
            <p class="text-xs text-stone-body leading-relaxed">
              Mana Travel provides <strong>Ground Tour Services</strong> inside China (private van/trains, 100% Halal banquets, hotels, English-speaking hosts, masjid visits). 
              <strong>International airfare to/from China is self-arranged by travelers.</strong>
            </p>
            <label class="flex items-start gap-2.5 pt-1.5 cursor-pointer select-none">
              <input 
                v-model="form.flightAcknowledged"
                type="checkbox"
                class="mt-0.5 rounded-sharp border-paper-border text-terracotta focus:ring-terracotta"
                data-testid="flight-ack-checkbox"
              />
              <span class="text-xs font-medium text-stone-title">
                I acknowledge that international flights are self-arranged and will book my flights upon host confirmation.
              </span>
            </label>
          </div>

          <!-- Compiled Handshake Preview -->
          <div>
            <span class="text-[11px] font-semibold uppercase text-stone-caption tracking-wider block mb-1">
              Pre-Qualified WhatsApp Message Preview
            </span>
            <div class="bg-paper border border-paper-border p-3 rounded-sharp text-xs font-mono text-stone-title whitespace-pre-line leading-relaxed max-h-36 overflow-y-auto">
              {{ handshakePayload.rawText }}
            </div>
          </div>
        </div>
      </div>

      <!-- Modal Footer Controls -->
      <DialogFooter class="px-6 py-4 bg-paper hairline-t flex items-center justify-between gap-3 sm:justify-between">
        <Button 
          v-if="currentStep > 1"
          @click="prevStep"
          type="button"
          variant="outline"
          size="sm"
        >
          <PhArrowLeft :size="14" weight="light" />
          <span>Back</span>
        </Button>
        <div v-else></div>

        <!-- Next / Dispatch CTA -->
        <Button 
          v-if="currentStep < 3"
          @click="nextStep"
          :disabled="currentStep === 2 && !isStep2Valid"
          type="button"
          data-testid="continue-step-btn"
          variant="default"
          size="sm"
        >
          <span>Continue</span>
          <PhArrowRight :size="14" weight="light" />
        </Button>

        <Button 
          v-else
          @click="handleDispatch"
          :disabled="!validation.isValid"
          type="button"
          data-testid="dispatch-whatsapp-btn"
          variant="default"
          size="sm"
        >
          <PhChatCircleDots :size="16" weight="light" />
          <span>Send Direct to Ma & Viona</span>
        </Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>
