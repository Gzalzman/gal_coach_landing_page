'use client'

import { Button } from './ui/Button'
import { copy, getWhatsAppLink } from '@/lib/constants'

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-accent-teal via-accent-teal/70 to-bg-primary pt-24 pb-20">
      <div className="absolute inset-0 opacity-70" />
      <div className="relative max-w-5xl mx-auto px-4 text-center">
        <p className="text-accent-teal-dark font-semibold text-lg mb-4">
          {copy.heroEyebrow}
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-text-primary leading-tight mb-6">
          {copy.heroTitle}
        </h1>
        <p className="max-w-3xl mx-auto text-text-secondary text-lg md:text-xl leading-relaxed mb-12">
          {copy.heroSubtitle}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" variant="primary" className="w-full sm:w-auto">
            {copy.heroCTAPrimary}
          </Button>
          <Button
            size="lg"
            variant="secondary"
            className="w-full sm:w-auto"
            onClick={() => window.open(getWhatsAppLink(), '_blank')}
          >
            {copy.heroCTASecondary}
          </Button>
        </div>
      </div>
    </section>
  )
}
