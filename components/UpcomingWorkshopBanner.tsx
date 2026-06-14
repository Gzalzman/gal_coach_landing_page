'use client'

import Image from 'next/image'
import { Workshop } from '@/lib/workshops'

interface Props {
  workshop: Workshop
}

export const UpcomingWorkshopBanner = ({ workshop }: Props) => {
  const waLink = `https://wa.me/972528330884?text=${encodeURIComponent(
    `היי גל, אשמח להירשם לסדנת נשימה מעגלית וסאונד הילינג ב־${workshop.displayDate} ב${workshop.location}`
  )}`

  const [, month, day] = workshop.date.split('-')
  const shortDate = `${parseInt(day)}.${parseInt(month)}`
  const detailsLink = `https://wa.me/972528330884?text=${encodeURIComponent(
    `אשמח לקבל פרטים נוספים על הסדנה ב${workshop.location} ב־${shortDate}`
  )}`

  return (
    <section id="upcoming-workshops" className="bg-white px-2 py-3">
      <div className="mx-auto w-full max-w-[1280px] px-1 md:w-[75%] md:px-0" dir="rtl">

        {/* Card — overflow-hidden lets the image bleed to the rounded edges */}
        <div className="overflow-hidden rounded-[32px] border border-[#D8C6A3] bg-[#F7F4EF]">

          {/* ── Intro section ── */}
          <div className="px-6 pb-6 pt-7 md:px-10 md:pt-8">
            <span className="mb-4 inline-block rounded-full bg-[#2F5A4F] px-3 py-1 text-xs font-semibold text-white">
              סדנה קרובה
            </span>
            <h2 className="text-right text-2xl font-bold leading-snug text-[#183B3B] md:text-3xl">
              {workshop.title}
            </h2>
            <p className="mt-1 text-right text-base font-medium text-[#5FA3A9] md:text-lg">
              {workshop.subtitle}
            </p>
            <p className="mt-3 text-right text-[15px] leading-relaxed text-[#4A5568]">
              {workshop.description}
            </p>
          </div>

          {/* ── Full-bleed image ── */}
          <div className="relative h-[220px] md:h-[400px]">
            <Image
              src="/images/events/workshop-breathwork-sound-healing.png"
              alt="סדנת נשימה מעגלית וסאונד הילינג"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 75vw"
            />
            {/* Top gradient — blends card bg into image */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-0 h-24"
              style={{ background: 'linear-gradient(to bottom, #F7F4EF 0%, transparent 100%)' }}
            />
            {/* Bottom gradient — blends image into card bg */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 bottom-0 h-24"
              style={{ background: 'linear-gradient(to top, #F7F4EF 0%, transparent 100%)' }}
            />
          </div>

          {/* ── Details + pricing + CTAs ── */}
          <div className="px-6 pb-7 pt-2 md:px-10 md:pb-9">

            {/* Two-column: details | pricing */}
            <div className="grid gap-6 md:grid-cols-2">

              {/* Details list */}
              <ul className="space-y-3">
                {[
                  workshop.displayDate,
                  workshop.time,
                  workshop.location,
                  workshop.includes,
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-[15px] text-[#183B3B]">
                    <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#5FA3A9]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Pricing box */}
              <div className="rounded-xl border border-[#E8E3D8] bg-white p-4">
                <div className="mb-3 rounded-lg border border-[#E8D5AB] bg-[#FAF3E8] px-3 py-2.5">
                  <p className="text-right text-xs font-semibold text-[#8B6914]">
                    הרשמה מוקדמת עד {workshop.earlyBirdUntil}
                  </p>
                  <p className="text-right text-2xl font-bold text-[#2F5A4F]">
                    {workshop.earlyBirdPrice}
                  </p>
                </div>
                <div className="space-y-1.5">
                  <p className="text-right text-sm text-[#6B7280]">
                    זוג:{' '}
                    <span className="font-semibold text-[#183B3B]">{workshop.couplePrice}</span>
                  </p>
                  <p className="text-right text-sm text-[#6B7280]">
                    מחיר רגיל:{' '}
                    <span className="font-semibold text-[#183B3B]">{workshop.regularPrice}</span>
                  </p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={waLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center rounded-xl bg-[#2F5A4F] px-6 py-3 text-[15px] font-semibold text-white transition hover:bg-[#254840]"
              >
                להרשמה לסדנה
              </a>
              <a
                href={detailsLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center rounded-xl border-2 border-[#2F5A4F] bg-white px-6 py-3 text-[15px] font-semibold text-[#2F5A4F] transition hover:bg-[#F3EEE6]"
              >
                לפרטים נוספים
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
