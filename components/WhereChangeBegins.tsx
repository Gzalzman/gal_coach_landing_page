import { MobileSectionDivider } from './ui/MobileSectionDivider'
import { BackToSectionNav } from './ui/BackToSectionNav'
import { copy } from '@/lib/constants'

export const WhereChangeBegins = () => {
  return (
    <section id="pain" className="bg-white px-4 pt-2 pb-8 md:py-14">
      <MobileSectionDivider />
      <div className="mt-6 md:mt-0 w-full md:w-[75%] max-w-[1280px] mx-auto">
        <div className="rounded-3xl border border-[#E6D8C8] bg-[#FBF7F1] px-5 py-8 md:px-10 md:py-10">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-[28px] md:text-4xl font-bold text-text-primary leading-tight mb-5 md:mb-6 text-center">
              {copy.changeSectionTitle}
            </h2>

            {/* Mobile paragraphs — shorter versions */}
            <div className="block md:hidden max-w-4xl mx-auto space-y-3 mb-5">
              {copy.changeSectionIntroMobile.map((para, i) => (
                <p key={i} className="text-text-secondary text-[15px] leading-7 text-right">
                  {para}
                </p>
              ))}
            </div>

            {/* Desktop paragraphs — full versions */}
            <div className="hidden md:block max-w-4xl mx-auto space-y-4 mb-6">
              {copy.changeSectionIntro.map((para, i) => (
                <p key={i} className="text-text-secondary text-lg leading-relaxed text-right">
                  {para}
                </p>
              ))}
            </div>

            {/* Pills */}
            <div className="flex flex-wrap justify-center gap-1.5 md:gap-3 mb-5 md:mb-6">
              {copy.changeSectionItems.map((item, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white border border-[#E6D8C8] text-text-primary text-xs md:text-base font-medium shadow-sm"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Mobile closing — compact */}
            <div className="block md:hidden max-w-4xl mx-auto rounded-2xl bg-white/60 px-5 py-5">
              <p className="text-text-primary font-bold text-base text-right mb-2">
                {copy.changeSectionClosingLead}
              </p>
              <p className="text-text-secondary text-[15px] leading-relaxed text-right">
                {copy.changeSectionClosingMobile}
              </p>
            </div>

            {/* Desktop closing — full */}
            <div className="hidden md:block max-w-4xl mx-auto rounded-2xl bg-white/60 px-6 py-5">
              <p className="text-text-primary font-bold text-lg md:text-xl text-right mb-3">
                {copy.changeSectionClosingLead}
              </p>
              <p className="text-text-secondary text-base md:text-lg leading-relaxed text-right">
                {copy.changeSectionClosing}
              </p>
            </div>

          </div>
        </div>
        <div className="mt-6 text-center">
          <BackToSectionNav />
        </div>
      </div>
    </section>
  )
}
