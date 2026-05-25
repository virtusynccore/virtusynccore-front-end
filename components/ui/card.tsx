import * as React from 'react'

import { cn } from '@/lib/utils'

function Card({ className, children, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card"
      className={cn(
        'relative group min-h-[100px]',
        className,
      )}
      {...props}
    >
      {/* Outer Glowing Border */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-purple-500/10 to-purple-500 clip-scifi opacity-80 group-hover:opacity-100 transition-opacity duration-500 drop-shadow-[0_0_15px_rgba(0,240,255,0.3)]" />
      
      {/* Inner Card Background */}
      <div className="absolute inset-[1px] bg-[#0b071a] clip-scifi z-0" />
      
      {/* Decorative Elements */}
      {/* Top right lines */}
      <div className="absolute top-0 right-10 w-24 h-[2px] bg-cyan-400 z-10" />
      <div className="absolute top-[6px] right-12 w-16 h-[1px] bg-cyan-400/50 z-10" />
      
      {/* Bottom left arrows / dots */}
      <div className="absolute bottom-0 left-10 w-32 h-[2px] bg-purple-500 z-10" />
      <div className="absolute bottom-2 left-12 flex gap-1 z-10">
        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse delay-75" />
        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse delay-150" />
      </div>

      {/* Bottom right corner accent */}
      <div className="absolute bottom-1.5 right-1.5 w-3 h-3 bg-white/80 z-10" style={{ clipPath: 'polygon(100% 0, 0 100%, 100% 100%)' }} />

      {/* Left side data bars */}
      <div className="absolute top-1/4 left-1 w-1 h-16 flex flex-col justify-between z-10">
        <div className="w-full h-1/5 bg-cyan-400" />
        <div className="w-full h-1/5 bg-cyan-400/50" />
        <div className="w-full h-1/5 bg-cyan-400" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col gap-6 py-6 text-white h-full w-full">
        {children}
      </div>
    </div>
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        '@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6',
        className,
      )}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-title"
      className={cn('leading-none font-semibold', className)}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-description"
      className={cn('text-muted-foreground text-sm', className)}
      {...props}
    />
  )
}

function CardAction({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        'col-start-2 row-span-2 row-start-1 self-start justify-self-end',
        className,
      )}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-content"
      className={cn('px-6', className)}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-footer"
      className={cn('flex items-center px-6 [.border-t]:pt-6', className)}
      {...props}
    />
  )
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
}
