'use client'

import Image from 'next/image'
import { Button } from './ui/Button'
import { copy, getWhatsAppLink, getCompatibilityLink } from '@/lib/constants'

export const Hero = () => {
  return (
    <section className="bg-white px-2 py-4 md:py-4">
      <div className="mx-auto w-full max-w-[1280px] px-1 md:w-[75%] md:px-0">
        <div className="relative overflow-hidden rounded-[32px] bg-[#f7f4ef] md:min-h-[580px]">
          {/* Desktop image */}
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[72%] items-end justify-end md:flex">
            <Image
              src="/images/gz-desktop.png"
              alt="גל זלצמן - מאמן אישי קואקטיבי"
              fill
              className="object-cover object-right-top"
              priority
            />
          </div>

          {/* Desktop overlay */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 hidden md:block"
            style={{
              background:
                "linear-gradient(to right, rgba(247,244,239,1) 0%, rgba(247,244,239,0.98) 26%, rgba(247,244,239,0.82) 40%, rgba(247,244,239,0.42) 56%, rgba(247,244,239,0.10) 70%, rgba(247,244,239,0.00) 82%)",
            }}
          />

          {/* Desktop text block */}
          <div
            className="relative z-10 mr-auto hidden min-h-[620px] w-[470px] flex-col justify-center md:flex xl:ml-[8%] xl:w-[520px]"
            dir="rtl"
          >
            <p className="mb-4 text-right text-base font-semibold tracking-wide text-[#2F5A4F] md:text-lg">
              {copy.heroEyebrow}
            </p>

            <h1 className="mb-6 text-right text-3xl font-bold leading-tight text-text-primary lg:text-4xl xl:text-[44px]">
              {copy.heroTitle}
            </h1>

            <p className="mb-10 text-right text-lg leading-relaxed text-text-secondary xl:text-xl">
              {copy.heroSubtitle}
            </p>

            <div className="flex flex-col justify-start gap-4 sm:flex-row">
              <Button size="lg" variant="primary" onClick={() => window.open(getCompatibilityLink(), "_blank")}>
                {copy.heroCTAPrimary}
              </Button>

              <Button
                size="lg"
                variant="secondary"
                onClick={() => window.open(getWhatsAppLink(), "_blank")}
              >
                {copy.heroCTASecondary}
              </Button>
            </div>
          </div>
        </div>

         {/* Mobile layout */}
        <div className="relative z-10 flex flex-col md:hidden">
  <div className="rounded-[32px] bg-[#f7f4ef] px-5 pb-7 pt-5 text-center" dir="rtl">
    <div className="relative mx-auto h-[205px] w-full overflow-hidden">
      <Image
        src="/images/me_mobile_banner.png"
        alt="גל זלצמן - מאמן אישי מוסמך"
        fill
        className="object-contain object-top"
        priority
      />
    </div>

    <p className="mt-2 text-sm font-semibold text-accent-teal-dark">
      {copy.heroEyebrow}
    </p>

    <h1 className="mt-4 text-[25px] font-bold leading-[1.18] text-text-primary">
      {copy.heroTitle}
    </h1>

    <div className="mt-6 flex flex-col gap-3">
      <Button size="md" variant="primary" className="w-full" onClick={() => window.open(getCompatibilityLink(), "_blank")}>
        {copy.heroCTAPrimary}
      </Button>

      <Button
        size="md"
        variant="secondary"
        className="w-full"
        onClick={() => window.open(getWhatsAppLink(), "_blank")}
      >
        {copy.heroCTASecondary}
      </Button>
    </div>
  </div>
</div>
      </div>
    </section>
  );
};
