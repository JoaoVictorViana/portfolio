export interface ExperienceItem {
  id: string
  company: string
  role: string
  period: string
  location?: string
  description: string
  tags: string[]
  isActive?: boolean
}

export interface TechItem {
  name: string
  level: number
}

export interface TechCategory {
  id: string
  name: string
  icon: string
  items: TechItem[]
}

export interface CertItem {
  id: string
  institution: string
  credential: string
}

export interface Stat {
  label: string
  value: number
  suffix?: string
}

export interface ContactItem {
  id: string
  label: string
  value: string
  href: string
  icon: string
}

export interface NavItem {
  label: string
  href: string
}

export type TypingPhrase = string[]
