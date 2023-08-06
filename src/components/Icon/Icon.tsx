import { ElementType } from "react";
import { tv, VariantProps } from "tailwind-variants";

const icon = tv({
    base: "rounded text-zinc-50 p-1",
    variants: {
        size: {
            bg: "h-12 w-12",
            default: "h-10 w-10",
            sm: "h-8 w-8",
            xs: "h-6 w-6",
        },
    },
    defaultVariants: {
        size: 'default'
    },
})

export type IconProps = VariantProps<typeof icon> & {
    icon: ElementType,
    className?: string,
}

export function Icon({ icon: Icon, size, className } : IconProps) {
    return (
        <Icon className={icon({ size, className })} />
    )
}