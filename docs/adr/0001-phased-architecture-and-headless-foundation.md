# 0001. Phased Architecture & Headless Foundation

## Context

Mana Travel (manatravel.cn) is an existing WordPress site catering to international Muslim travelers visiting Hui Muslim regions in China. The current site lacks direct online transactions and suffers from UX friction, operational fatigue on WhatsApp, and template clutter. Rebuilding a custom full-stack system with a custom admin panel from scratch immediately would require months of effort and unnecessary infrastructure overhead for an early-stage operation.

## Decision

We adopt a 3-phase reverse product engineering approach:

1. **Phase 1 (Immediate UX Modernization)**: Build a high-converting, lightweight decoupled frontend using Vue 3, Vite, TypeScript, Tailwind CSS, and shadcn-vue. Content and media assets are extracted from the existing WordPress REST API (`/wp-json/wp/v2/`) into normalized JSON schemas. Conversion is handled via a contextual **Smart WhatsApp Handshake** micro-intake.
2. **Phase 2 (Tailored Custom Backend)**: Transition to a lightweight custom backend utilizing SQLite and modern API services once business workflows and tour management needs are validated.
3. **Phase 3 (Financial & Account Services)**: Introduce specialized transaction and settlement workflows (alternative payments/crypto/custom invoicing).

## Consequences

- Immediate zero-cost hosting (deployable to static CDN/Cloudflare Pages/Vercel or cheap container).
- Ma & Viona do not need to learn a new admin interface in Phase 1.
- Complete freedom to craft high-conversion UI/UX and domain-specific travel components without WordPress theme constraints.
- Normalized JSON schemas created in Phase 1 form the exact database schema for Phase 2 SQLite tables.
