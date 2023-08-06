import { CheckCircle } from "lucide-react";
import { ComponentProps } from "react";
import { tv, VariantProps } from "tailwind-variants";
import { Icon } from "../Icon/Icon";

// usando assim no className também acata a cor conforme atribnuto data, aqui não precisa pois criamos uma variante de sucesso
//data-[success]:bg-emerald-500

const button = tv({
    base: "flex items-center justify-center rounded bg-blue-200 text-sm font-medium my-2 text-zinc-950 hover:bg-blue-300",
    variants: {
        size: {
            bg: "h-12 px-5",
            default: "h-10 px-4",
            sm: "h-8 px-3",
            xs: "h-6 px-2 text-xs",
        },
        success: {
            true: "bg-emerald-500 hover:bg-emerald-600"
        }
    },
    defaultVariants: {
        size: 'default',
        success: false,
    },
})

export type ButtonProps = ComponentProps<'button'> & VariantProps<typeof button> & {
    success?: boolean,
}

export function Button({ success, size, className, ...outrasPropriedadesDoButton} : ButtonProps) {
    return (
        <button
            data-success={success}
            className={button({ success, size, className })}
            {...outrasPropriedadesDoButton}
            >
                {success ? <Icon icon={CheckCircle} className="w-6 h-6" /> : outrasPropriedadesDoButton.children}
            </button>
    )
}