import { SectionHeader } from '@/components/ui/SectionHeader'
import { TechCategoryCard } from './TechCategory'
import { technologies } from '@/data/technologies'

export function Technologies() {
  return (
    <section
      id="tecnologias"
      className="py-24 bg-navy-2 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-blue/4 via-transparent to-cyan/4" />

      <div className="relative max-w-6xl mx-auto px-6">
        <SectionHeader
          preLabel="03. Tecnologias"
          title="Stack"
          highlight="Dominado"
          subtitle="Proficiência nas principais tecnologias modernas de desenvolvimento full-stack."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {technologies.map((category, index) => (
            <TechCategoryCard key={category.id} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
