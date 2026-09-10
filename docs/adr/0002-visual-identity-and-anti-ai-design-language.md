# 0002. Visual Identity & Anti-AI Design Language

## Context

Many AI-assisted frontends suffer from a generic "AI look" (sterile dark modes, harsh purple/blue gradients, cold geometric cards, stock/AI-generated visuals, and disconnected iconography). For Mana Travel, prospective international Muslim guests commit substantial money and family time to travel deep into China; trust, warmth, and cultural authenticity are paramount.

## Decision

We establish an anti-AI, culturally grounded visual design language:

1. **Palette (Warm Pastels & Cultural Earth Tones)**:
   - Primary: Muted Celadon / Sage Jade (`#2D5A4C` solid, `#E8EFEA` pastel surface), reflecting Chinese celadon ceramics and Yunnan landscapes.
   - Accent: Warm Terracotta / Persimmon (`#C15C3D` solid, `#FDF0EB` pastel highlight), echoing ancient Silk Road architecture and brickwork.
   - Base Surfaces: Warm Rice Paper / Ivory (`#FBF9F5` background, `#FFFFFF` cards, `#E7E2D9` subtle stone borders), completely avoiding harsh sterile blues and pure black/grey.
2. **Iconography**: Softly rounded, stroke-based outline icons (1.75px stroke, rounded corners/caps) using warm hues. Filled icons are reserved exclusively for active states (ratings, verified badges).
3. **Asset Authenticity**: Strictly real photography of Ma & Viona, actual past tour groups, and verified local halal food. Zero AI-generated portraits or synthetic imagery.

## Consequences

- Creates immediate emotional warmth and cultural alignment with Hui Muslim heritage.
- Distinguishes Mana Travel from sterile tech products and generic commercial travel aggregators.
- Enforces strict design tokens in Tailwind configuration to prevent aesthetic drift.
