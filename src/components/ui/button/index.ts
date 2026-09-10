import { cva, type VariantProps } from "class-variance-authority";

export { default as Button } from "./Button.vue";

export const buttonVariants = cva(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap text-xs font-semibold ring-offset-paper transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-celadon disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                default:
                    "bg-celadon text-white hover:bg-celadon-deep shadow-sm",
                terracotta:
                    "bg-terracotta text-white hover:bg-terracotta-deep shadow-sm",
                destructive: "bg-red-600 text-white hover:bg-red-700 shadow-sm",
                outline:
                    "border border-paper-border bg-paper text-stone-title hover:border-celadon hover:text-celadon hover:bg-celadon-surface/40",
                secondary:
                    "bg-celadon-surface text-celadon border border-celadon-border hover:bg-celadon-surface/80",
                ghost: "hover:bg-paper-subtle text-stone-title",
                link: "text-celadon underline-offset-4 hover:underline",
            },
            size: {
                default: "h-9 px-4 py-2 rounded-sharp",
                sm: "h-8 px-3 text-xs rounded-sharp",
                lg: "h-11 px-6 text-sm rounded-subtle",
                icon: "h-9 w-9 rounded-sharp",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    },
);

export type ButtonVariants = VariantProps<typeof buttonVariants>;
