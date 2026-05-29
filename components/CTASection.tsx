'use client'

import { Button } from './ui/Button'
import { getCompatibilityLink } from '@/lib/constants'

export const CTASection = () => {
  return (
    <section className="bg-white px-4 pt-2 pb-8 md:py-16">
  <div className="mx-auto max-w-5xl rounded-3xl bg-[#738F84] px-6 py-10 text-center md:px-12 md:py-14">
    <h2 className="text-[28px] font-bold leading-tight text-white md:text-4xl">
      אל תחכה שהחיים יטלטלו אותך כדי לבחור לזוז
    </h2>

    <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-white/90 md:text-lg">
      אם משהו כאן פגש אותך, אפשר להתחיל בצעד קטן. שיחת התאמה קצרה, בלי התחייבות,
      כדי לבדוק אם התהליך נכון עבורך.
    </p>

    <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
      <a
        href={getCompatibilityLink()}
        target="_blank"
        rel="noreferrer"
        className="inline-flex min-h-[48px] items-center justify-center rounded-xl bg-white px-7 py-3 text-base font-semibold text-[#23443C] transition hover:opacity-90"
      >
        לתיאום פגישת התאמה
      </a>

      <a
        href="https://wa.me/972528330884?text=%D7%94%D7%99%D7%99%20%D7%92%D7%9C%2C%20%D7%A7%D7%A8%D7%90%D7%AA%D7%99%20%D7%A2%D7%9C%20%D7%AA%D7%94%D7%9C%D7%99%D7%9A%20%D7%94%D7%90%D7%99%D7%9E%D7%95%D7%9F%20%D7%95%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%91%D7%93%D7%95%D7%A7%20%D7%94%D7%AA%D7%90%D7%9E%D7%94"
        className="inline-flex min-h-[48px] items-center justify-center rounded-xl border border-white px-7 py-3 text-base font-semibold text-white transition hover:bg-white/10"
      >
        שלחו הודעה בוואטסאפ
      </a>
    </div>
  </div>
</section>
  )
}
