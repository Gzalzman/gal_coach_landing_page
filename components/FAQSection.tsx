'use client'

import { useState } from 'react'
import { MobileSectionDivider } from './ui/MobileSectionDivider'
import { BackToSectionNav } from './ui/BackToSectionNav'
import { copy } from '@/lib/constants'

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number>(-1)

  return (
  <section id="faq" className="bg-white px-4 pt-2 pb-8 md:py-16">
    <MobileSectionDivider />
    <div className="mt-6 md:mt-0 mx-auto max-w-6xl rounded-3xl bg-bg-primary px-5 pt-2 pb-8 md:px-10 md:py-14">
      <div className="mb-10 text-center md:mb-12">
        <h2 className="text-[28px] font-bold text-text-primary md:text-4xl">
          {copy.faqTitle}
        </h2>
      </div>

      <div className="space-y-4">
        {copy.faqItems.map((item, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-3xl border border-border-light bg-white"
          >
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-right font-semibold text-text-primary"
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              aria-expanded={openIndex === index}
            >
              <span>{item.question}</span>
              <span
                className={`transition-transform duration-200 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </button>

            {openIndex === index && (
              <div className="px-6 pb-6 text-text-secondary">
                {item.answer.split('\n\n').map((para, i) => (
                  <p key={i} className="leading-relaxed mb-3 last:mb-0">{para}</p>
                ))}
              </div>
            )}
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
