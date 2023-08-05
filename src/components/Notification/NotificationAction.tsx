import { ComponentProps, ElementType } from "react"
import { twMerge } from "tailwind-merge"

interface NotificationActionProps extends ComponentProps<'button'> {
    icon: ElementType
}

export function NotificationAction({icon: Icon, ...outrasPropriedadesDoButton } : NotificationActionProps) {
    return (
        <button 
            {...outrasPropriedadesDoButton} 
            className={twMerge("w-8 h-8 rounded flex items-center justify-center bg-zinc-400 hover:bg-zinc-500 dark:bg-zinc-800", outrasPropriedadesDoButton.className)}>
            <Icon className="w-3 h-3 text-zinc-50" />
        </button>
    )
}