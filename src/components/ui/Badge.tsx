import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/cn'

const badgeVariants = cva(
  'inline-flex items-center gap-2 rounded-full text-xs font-mono font-medium border',
  {
    variants: {
      variant: {
        default: 'px-3 py-1.5 bg-blue/10 text-blue-bright border-blue/25',
        pulse: 'px-4 py-1.5 bg-blue/8 text-blue-bright border-blue/20',
      },
    },
    defaultVariants: { variant: 'default' },
  }
)

interface BadgeProps extends VariantProps<typeof badgeVariants> {
  children: React.ReactNode
  className?: string
}

export function Badge({ variant, children, className }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)}>
      {variant === 'pulse' && (
        <span
          className="w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0"
          style={{ animation: 'pulseGreen 2s ease-in-out infinite' }}
          aria-hidden="true"
        />
      )}
      {children}
    </div>
  )
}
