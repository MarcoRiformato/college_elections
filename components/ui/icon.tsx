import { LucideIcon } from "lucide-react"
import { forwardRef } from "react"
import type { ComponentType, SVGProps } from "react"

interface IconProps extends SVGProps<SVGSVGElement> {
  icon: LucideIcon | ComponentType<SVGProps<SVGSVGElement>>
}

export const Icon = forwardRef<SVGSVGElement, IconProps>(
  ({ icon: IconComponent, className, ...props }, ref) => {
    return (
      <IconComponent
        ref={ref}
        className={className}
        {...props}
        suppressHydrationWarning
      />
    )
  }
)

Icon.displayName = "Icon" 