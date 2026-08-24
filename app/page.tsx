import { AboutGal } from '@/components/AboutGal'
import { BenefitsSection } from '@/components/BenefitsSection'
import { CTASection } from '@/components/CTASection'
import { FAQSection } from '@/components/FAQSection'
import { FloatingNavButton } from '@/components/FloatingNavButton'
import { HeroWithServices } from '@/components/HeroWithServices'
import { SectionNav } from '@/components/SectionNav'
import { WhereChangeBegins } from '@/components/WhereChangeBegins'
import { ProcessSection } from '@/components/ProcessSection'
import { WhoThisIsFor } from '@/components/WhoThisIsFor'
import { WorkWithMe } from '@/components/WorkWithMe'
import { WordsFromTheWay } from '@/components/WordsFromTheWay'
import { Footer } from '@/components/Footer'
import { WorkshopTeaser } from '@/components/WorkshopTeaser'

export default function Home() {
  return (
    <main>
      <HeroWithServices />
      <WorkshopTeaser />
      <SectionNav />
      <WhereChangeBegins />
      <ProcessSection />
      <WhoThisIsFor />
      <WorkWithMe />
      <WordsFromTheWay />
      <AboutGal />
      <BenefitsSection />
      <CTASection />
      <FAQSection />
      <Footer />
      <FloatingNavButton />
    </main>
  )
}
