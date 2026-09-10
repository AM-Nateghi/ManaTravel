# 0003. Editorial Social Proof & Navigation Ergonomics

## Context
Standard AI-generated websites default to generic 3-card 5-star review carousels and intrusive mobile bottom navigation bars. For Mana Travel, prospective international Muslim travelers experience anxiety regarding food halal integrity, prayer facilities, and flight logistics. Carousels induce ad blindness, while persistent bottom navigation bars crowd mobile viewports and degrade immersive travel storytelling.

## Decision
1. **Curated Social Proof Architecture**:
   - Replace carousel sliders with two distinct editorial formats:
     - **Bento Travel Scrapbook**: A 4-to-5 cell non-uniform visual field journal combining real traveler banquet photos, handwritten/voice reflections, departure stamps, and host commitment cards.
     - **Editorial Travelogue**: An asymmetric magazine layout featuring un-retouched high-contrast photography, pull quotes in Playfair serif, origin flight codes (e.g., KUL → KMG), and host guide attribution.
2. **Iconography & Accents**:
   - Standardize strictly on **Phosphor Icons (Light weight, 1.5px stroke)** to eliminate childish emojis and heavy SaaS-style icons.
   - Enforce outline-only discipline with tactile Cinnabar seal stamps (*Yinzhang*) for verification.
3. **Navigation Ergonomics**:
   - **Zero Bottom Nav on Landing Page**: Ensure uninterrupted vertical storytelling.
   - **Smart Sticky Header**: Transparent at top, auto-hides on downward scroll, glides down with Rice Paper backdrop blur upon upward scroll.
   - **Contextual Floating Action Dock**: Mobile-only compact pill appearing solely on `/tours/:slug` pages past the Trip Essentials Box, linking to the 3-step Micro-Intake Modal.

## Consequences
- Elevates the visual trust and editorial authority to luxury expedition standards (comparable to Aman or Belmond).
- Protects 100% of mobile viewport during storytelling while keeping the WhatsApp Handshake accessible at peak decision moments.
- Establishes concrete CSS and layout blueprints that strictly prevent generic AI styling.
