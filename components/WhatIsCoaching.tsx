import { copy } from '@/lib/constants'

export const WhatIsCoaching = () => {
  return (
    <section className="py-20 px-4 bg-bg-primary">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
            {copy.coachingTitle}
          </h2>
        </div>
        <div className="rounded-3xl bg-white border border-border-light p-8 shadow-soft">
          <p className="text-text-secondary text-lg leading-relaxed">
            {copy.coachingText}
          </p>
        </div>
        <div className="mt-10 rounded-3xl border-l-4 border-accent-teal bg-accent-teal/10 p-7">
          <p className="text-text-primary font-semibold text-lg">
            אימון הוא על בחירה, קול פנימי, ותנועה בעצם הדרך שלך.
          </p>
        </div>
      </div>
    </section>
  )
}
