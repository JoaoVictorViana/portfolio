import { cn } from '@/lib/cn'

interface TagProps {
  children: React.ReactNode
  className?: string
}

export function Tag({ children, className }: TagProps) {
  return (
    <span
      className={cn(
        'inline-block px-3 py-1 text-xs font-medium bg-blue/10 text-blue-bright rounded border border-blue/30',
        className
      )}
    >
      {children}
    </span>
  )
}
