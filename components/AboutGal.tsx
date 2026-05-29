import Image from 'next/image'
import { MobileSectionDivider } from './ui/MobileSectionDivider'
import { BackToSectionNav } from './ui/BackToSectionNav'
import { copy } from '@/lib/constants'

export const AboutGal = () => {
  return (
    <section id="about" className="bg-white px-4 pt-2 pb-8 md:py-16">
  <MobileSectionDivider />
  <div className="mt-6 md:mt-0 mx-auto max-w-6xl rounded-3xl bg-bg-primary px-6 py-10 md:px-12 md:py-12">
    <div
      className="grid items-start gap-8 md:gap-10 lg:grid-cols-[0.9fr_1fr]"
      dir="rtl"
    >
      <div className="relative h-[300px] w-full overflow-hidden rounded-3xl shadow-sm md:h-[350px]">
        <Image
          src="/images/clinic.png"
          alt="גל זלצמן בסשן אימון"
          fill
          className="object-cover object-center"
          sizes="(max-width: 1024px) 100vw, 430px"
        />
      </div>

      <div className="text-right" dir="rtl">
        <h2 className="mb-6 text-[28px] font-bold text-text-primary md:text-4xl">
          {copy.aboutTitle}
        </h2>

        <div className="mb-6 space-y-4">
          {copy.aboutText.map((para, i) => (
            <p
              key={i}
              className="text-[16px] leading-[1.85] text-text-secondary md:text-[17px]"
            >
              {para}
            </p>
          ))}
        </div>

        <div className="space-y-3">
          {copy.aboutCheckmarks.map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="mt-0.5 shrink-0 text-xl text-accent-teal">
                ✓
              </span>
              <p className="text-[15px] leading-7 text-text-secondary md:text-base">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="mt-8 text-center">
      <BackToSectionNav />
    </div>
  </div>
</section>
  )
}
