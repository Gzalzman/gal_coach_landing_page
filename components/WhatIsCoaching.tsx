import { copy } from '@/lib/constants'

export const WhatIsCoaching = () => {
  return (
    <section className="bg-white py-14 md:py-20 px-4">
      <div className="w-full md:w-[75%] max-w-[1280px] mx-auto">
        <div className="rounded-[32px] bg-bg-primary px-6 py-12 md:px-14 md:py-16">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-[#2F5A4F] font-semibold text-base md:text-lg tracking-wide mb-4">
              {copy.coachingEyebrow}
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-text-primary leading-tight mb-8">
              {copy.coachingTitle}
            </h2>

            <div className="rounded-3xl bg-white border border-border-light p-7 md:p-9 shadow-soft">
              <p className="text-text-secondary text-lg leading-relaxed">
                {copy.coachingText}
              </p>
            </div>

            <div className="mt-8 rounded-3xl border-r-4 border-[#2F5A4F] bg-white p-7 shadow-sm">
              <p className="text-text-primary font-semibold text-lg leading-relaxed">
                {copy.coachingQuote}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
