'use client'

import { Button } from './ui/Button'
import { copy, getWhatsAppLink } from '@/lib/constants'

export const CTASection = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
          {copy.ctaTitle}
        </h2>
        <p className="text-text-secondary text-lg md:text-xl leading-relaxed mb-12">
          {copy.ctaSubtitle}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" variant="primary" className="w-full sm:w-auto">
            {copy.ctaPrimary}
          </Button>
          <Button
            size="lg"
            variant="secondary"
            className="w-full sm:w-auto"
            onClick={() => window.open(getWhatsAppLink(), '_blank')}
          >
            {copy.ctaSecondary}
          </Button>
        </div>
      </div>
    </section>
  )
}
