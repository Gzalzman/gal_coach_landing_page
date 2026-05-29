import { MobileSectionDivider } from './ui/MobileSectionDivider'
import { BackToSectionNav } from './ui/BackToSectionNav'
import { copy } from '@/lib/constants'

export const ProcessSection = () => {
  return (
    <section id="process" className="bg-white px-4 pt-2 pb-8 md:py-16">
      <MobileSectionDivider />
      <div className="mt-4 md:mt-0 max-w-6xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-[28px] md:text-4xl font-bold text-text-primary leading-tight">
            {copy.processTitle}
          </h2>
        </div>

        {/* Mobile: compact rows */}
        <div className="space-y-3 md:hidden" dir="rtl">
          {copy.processSteps.map((step, index) => (
            <div key={index} className="flex items-start gap-4 rounded-2xl border border-border-light bg-white px-5 py-5">
              <div className="w-10 h-10 shrink-0 rounded-full flex items-center justify-center bg-[#2F5A4F] text-white font-bold text-base">
                {step.number}
              </div>
              <div className="text-right">
                <h3 className="text-[17px] font-semibold text-text-primary leading-snug mb-1">
                  {step.title}
                </h3>
                <p className="text-text-secondary text-[15px] leading-7">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: grid cards */}
        <div className="hidden md:grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {copy.processSteps.map((step, index) => (
            <div key={index} className="rounded-3xl border border-border-light p-6 shadow-sm">
              <div className="w-14 h-14 rounded-full flex items-center justify-center bg-[#2F5A4F] text-white font-bold text-xl mb-5">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-3">
                {step.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <BackToSectionNav />
        </div>

      </div>
    </section>
  )
}
