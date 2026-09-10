import { cva, type VariantProps } from "class-variance-authority";

export { default as Badge } from "./Badge.vue";

export const badgeVariants = cva(
    "inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-1 focus:ring-celadon",
    {
        variants: {
            variant: {
                default: "border-transparent bg-celadon text-white shadow-sm",
                secondary:
                    "border-transparent bg-celadon-surface text-celadon border border-celadon-border",
                terracotta:
                    "border-transparent bg-terracotta-surface text-terracotta border border-terracotta-border",
                outline: "border border-paper-border text-stone-title bg-paper",
                seal: "seal-stamp",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    },
);

export type BadgeVariants = VariantProps<typeof badgeVariants>;
