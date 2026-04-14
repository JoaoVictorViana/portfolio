import { SectionHeader } from '@/components/ui/SectionHeader'
import { ExpCard } from './ExpCard'
import { experiences } from '@/data/experience'

export function Experience() {
  return (
    <section
      id="experiencia"
      className="py-20 bg-navy relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-blue/5 via-transparent to-cyan/5" />

      <div className="relative max-w-6xl mx-auto px-6">
        <SectionHeader
          preLabel="02. EXPERIÊNCIA"
          title="Jornada"
          highlight="Profissional"
          subtitle="Mais de 6 anos desenvolvendo soluções inovadoras em diversas empresas"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experiences.map((exp) => (
            <ExpCard key={exp.id} item={exp} />
          ))}
        </div>
      </div>
    </section>
  )
}
