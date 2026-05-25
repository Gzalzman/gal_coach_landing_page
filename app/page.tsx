import { AboutGal } from '@/components/AboutGal'
import { BenefitsSection } from '@/components/BenefitsSection'
import { CTASection } from '@/components/CTASection'
import { FAQSection } from '@/components/FAQSection'
import { Hero } from '@/components/Hero'
import { PainSection } from '@/components/PainSection'
import { ProcessSection } from '@/components/ProcessSection'
import { WhatIsCoaching } from '@/components/WhatIsCoaching'
import { WhoThisIsFor } from '@/components/WhoThisIsFor'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <PainSection />
      <WhatIsCoaching />
      <WhoThisIsFor />
      <AboutGal />
      <ProcessSection />
      <BenefitsSection />
      <CTASection />
      <FAQSection />
      <Footer />
    </main>
  )
}
