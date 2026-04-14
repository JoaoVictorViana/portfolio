import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { CustomCursor } from '@/components/layout/CustomCursor'
import { ScrollProgress } from '@/components/layout/ScrollProgress'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
})

export const metadata: Metadata = {
  title: 'João Victor Duarte - Senior Full-Stack Developer',
  description:
    'Desenvolvedor Full-Stack Sênior com expertise em arquiteturas escaláveis, React, Node.js e TypeScript. 6+ anos de experiência com Java, Docker, Kubernetes e DevOps.',
  keywords: [
    'Full-Stack Developer',
    'React',
    'Node.js',
    'TypeScript',
    'Java',
    'DevOps',
    'Kubernetes',
    'Docker',
  ],
  authors: [
    {
      name: 'João Victor Duarte',
      url: 'https://jvduarte.dev',
    },
  ],
  creator: 'João Victor Duarte',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://jvduarte.dev',
    title: 'João Victor Duarte - Senior Full-Stack Developer',
    description:
      'Desenvolvedor Full-Stack Sênior com expertise em arquiteturas escaláveis.',
    siteName: 'João Victor Duarte Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@jvduarte',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://jvduarte.dev" />
      </head>
      <body className="bg-navy text-text">
        <CustomCursor />
        <ScrollProgress />
        <Navbar />

        <main className="relative">{children}</main>

        <Footer />
      </body>
    </html>
  )
}
