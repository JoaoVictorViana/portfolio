import { HeroContent } from './HeroContent'
import { ThreeScene } from './ThreeScene'

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20 bg-navy overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue/5 via-transparent to-cyan/5" />

      <div className="relative max-w-6xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[600px]">
          <HeroContent />

          <div className="hidden lg:block relative h-[600px]">
            <ThreeScene />
          </div>
        </div>
      </div>
    </section>
  )
}
