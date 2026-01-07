import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden group",
  {
    variants: {
      variant: {
        default: "bg-[#0F1F3D] text-white hover:bg-[#0F1F3D]/90 hover:shadow-lg hover:shadow-[#0F1F3D]/50 hover:scale-105",
        gold: "bg-gradient-to-r from-[#C5A059] to-[#D4B069] text-white hover:from-[#D4B069] hover:to-[#C5A059] hover:shadow-xl hover:shadow-[#C5A059]/40 hover:scale-105 border-0",
        outline: "border-2 border-[#0F1F3D] text-[#0F1F3D] hover:bg-[#0F1F3D] hover:text-white hover:shadow-lg hover:scale-105 bg-transparent",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-[#0F1F3D] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-auto rounded-lg px-6 py-3",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        <span className="relative z-10">{props.children}</span>
        <span className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-md" />
      </button>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }

