'use client'

import { Bike, Camera, Check, X, ArrowRight, CalendarDays, GraduationCap } from "lucide-react"
import { Notification } from '@/components/Notification'
import { Button } from "@/components/Button/Button";

export default function Home() {
  
  function logMessage(message : string): void {
    console.info(message);
  }
  

  return (
      <div className="w-[800px] py-8 m-auto">
        <Notification.Root>
          <Notification.Icon icon={CalendarDays} />
          <Notification.Content text="Você foi convidado para o maior evento de programação." />
          <Notification.Actions>
            <Notification.Action onClick={() => { logMessage('Cancel 1'); }} icon={X} className="bg-red-500 hover:bg-red-600 dark:bg-red-500 dark:hover:bg-red-600"/>
          </Notification.Actions>
        </Notification.Root>

        <Notification.Root>
          <Notification.Content text="Você foi convidado para o maior evento de programação." />
        </Notification.Root>

        <Notification.Root>
          <Notification.Icon icon={Bike} />
          <Notification.Content text="Você foi convidado para o maior evento de programação." />
          <Notification.Actions>
            <Notification.Action onClick={() => { logMessage('Cancel 2'); }} icon={X}/>
            <Notification.Action onClick={() => { logMessage('OK 2'); }} icon={Check} className="bg-violet-500 hover:bg-violet-600 dark:bg-violet-500 dark:hover:bg-violet-600" />
          </Notification.Actions>
        </Notification.Root>

        <Notification.Root>
          <Notification.Icon icon={Camera} />
          <Notification.Content text="Você foi convidado para o maior evento de programação." />
        </Notification.Root>

        <Notification.Root>
          <Notification.Icon icon={GraduationCap} />
          <Notification.Content text="Você foi convidado para o maior evento de programação." />
          <Notification.Actions>
            <Notification.Action onClick={() => { logMessage('Enter 1'); }} icon={ArrowRight} className="bg-emerald-500 hover:bg-emerald-600 dark:bg-emerald-500 dark:hover:bg-emerald-600" />
          </Notification.Actions>
        </Notification.Root>


        <Button className="w-60">
          teste com className
        </Button>

        <Button size='bg'>
          teste big
        </Button>

        <Button size='sm'>
          teste sm
        </Button>

        <Button size='xs'>
          teste xs
        </Button>

        <Button success>
          teste icon
        </Button>
      </div>
  )
}
