'use client'

import { useState } from 'react'
import { copy } from '@/lib/constants'

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number>(0)

  return (
    <section className="py-20 px-4 bg-bg-primary">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
            {copy.faqTitle}
          </h2>
        </div>
        <div className="space-y-4">
          {copy.faqItems.map((item, index) => (
            <div key={index} className="overflow-hidden rounded-3xl border border-border-light bg-white">
              <button
                type="button"
                className="w-full px-6 py-5 text-right text-text-primary font-semibold flex items-center justify-between gap-4"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                aria-expanded={openIndex === index}
              >
                <span>{item.question}</span>
                <span className={`transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 text-text-secondary leading-relaxed">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
