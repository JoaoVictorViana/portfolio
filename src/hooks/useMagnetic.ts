import { useState, useRef, CSSProperties } from 'react'

interface MagneticPosition {
  x: number
  y: number
}

export function useMagnetic<T extends HTMLElement = HTMLElement>() {
  const ref = useRef<T>(null)
  const [position, setPosition] = useState<MagneticPosition>({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<T>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    setPosition({
      x: (e.clientX - centerX) * 0.3,
      y: (e.clientY - centerY) * 0.3,
    })
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  const style: CSSProperties = {
    transform: `translate(${position.x}px, ${position.y}px)`,
    transition: 'transform 0.3s ease-out',
  }

  return { ref, onMouseMove: handleMouseMove, onMouseLeave: handleMouseLeave, style }
}
