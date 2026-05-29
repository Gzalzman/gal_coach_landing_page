import { MobileSectionDivider } from './ui/MobileSectionDivider'
import { BackToSectionNav } from './ui/BackToSectionNav'
import { copy } from '@/lib/constants'

export const BenefitsSection = () => {
  return (
    <section id="benefits" className="bg-white px-4 pt-2 pb-8 md:py-16">
      <MobileSectionDivider />
      <div className="mt-6 md:mt-0 max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-[28px] md:text-4xl font-bold text-text-primary">
            {copy.benefitsTitle}
          </h2>
        </div>
        <p className="text-text-secondary text-base md:text-lg text-center leading-relaxed mb-12 max-w-2xl mx-auto">
          {copy.benefitsIntro}
        </p>
        <div className="grid gap-5 sm:grid-cols-2" dir="rtl">
          {copy.benefitsCards.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-2 rounded-2xl bg-[#FBF7F1] border border-[#E6D8C8] p-6"
            >
              <p className="text-text-primary font-semibold text-[17px]">{item.title}</p>
              <p className="text-text-secondary text-[15px] leading-relaxed">{item.description}</p>
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
