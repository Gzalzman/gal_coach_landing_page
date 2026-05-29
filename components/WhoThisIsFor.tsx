import { Card } from './ui/Card'
import { MobileSectionDivider } from './ui/MobileSectionDivider'
import { BackToSectionNav } from './ui/BackToSectionNav'
import { copy } from '@/lib/constants'

export const WhoThisIsFor = () => {
  return (
    <section id="fit" className="px-4 pt-2 pb-8 md:py-20 bg-white">
      <MobileSectionDivider />
      <div className="mt-6 md:mt-0 max-w-6xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-[28px] md:text-4xl font-bold text-text-primary leading-tight mb-5 md:mb-6">
            {copy.audienceTitle}
          </h2>
          <div className="max-w-3xl mx-auto space-y-3">
            {copy.audienceIntro.map((para, i) => (
              <p key={i} className="text-text-secondary text-[15px] md:text-base leading-[1.85]">
                {para}
              </p>
            ))}
          </div>
        </div>

        {/* Mobile: compact stacked rows */}
        <div className="space-y-4 md:hidden" dir="rtl">
          {copy.audienceCards.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-accent-teal/20 bg-gradient-to-br from-accent-teal/10 to-accent-sand/10 px-5 py-5 text-right"
            >
              <h3 className="text-[17px] font-semibold text-accent-teal-dark leading-snug">
                {item.title}
              </h3>
              <p className="mt-2 text-text-secondary text-[15px] leading-7">
                {item.mobileDescription}
              </p>
            </div>
          ))}
        </div>

        {/* Desktop: grid cards */}
        <div className="hidden md:grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {copy.audienceCards.map((item, index) => (
            <Card key={index} variant="highlight">
              <h3 className="text-xl font-semibold text-accent-teal-dark mb-3">
                {item.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {item.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <BackToSectionNav />
        </div>

      </div>
    </section>
  )
}
