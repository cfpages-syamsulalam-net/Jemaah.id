import * as React from "react"
import { cn } from "../../lib/utils"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'primary' | 'success' | 'outline' | 'secondary'
}

function Badge({ className, variant = 'primary', ...props }: BadgeProps) {
  const variants = {
    primary: "border-transparent bg-primary/10 text-primary",
    success: "border-transparent bg-primary text-primary-foreground",
    secondary: "border-transparent bg-slate-500/10 text-slate-500",
    outline: "border border-primary/10 text-primary bg-transparent",
  }

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
        variants[variant],
        className
      )}
      {...props}
    />
  )
}

export { Badge }
