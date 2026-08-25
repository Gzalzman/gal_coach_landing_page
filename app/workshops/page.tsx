import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { pastWorkshops } from '@/lib/workshops'
import { TestimonialCard } from '@/components/ui/TestimonialCard'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'סדנאות רברסינג — רגעים מהדרך | גל זלצמן',
  description:
    'תמונות ותגובות ממשתתפים בסדנאות רברסינג שהנחה גל זלצמן — מרחבים של נשימה, שחרור וחיבור פנימי.',
  alternates: {
    canonical: '/workshops',
  },
}

const registrationLink = `https://wa.me/972528330884?text=${encodeURIComponent(
  'היי גל, אשמח לשמוע על הסדנה הבאה.'
)}`

export default function WorkshopsPage() {
  return (
    <main className="min-h-screen bg-[#FAF8F4]">

      {/* Page header */}
      <section className="bg-white px-4 pb-10 pt-12" dir="rtl">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/"
            className="mb-8 inline-block text-sm font-medium text-[#5FA3A9] transition hover:underline"
          >
            חזרה לעמוד הבית
          </Link>

          <h1 className="mt-6 text-3xl font-bold leading-tight text-[#183B3B] md:text-4xl">
            סדנאות רברסינג — רגעים מהדרך
          </h1>

          <p className="mt-4 max-w-xl text-[16px] leading-relaxed text-[#4A5568]">
            זה קורה כאן. אנשים כבר עברו את התהליך.
          </p>
        </div>
      </section>

      {/* Workshop cards */}
      <section className="px-4 py-10">
        <div className="mx-auto max-w-4xl space-y-12">
          {pastWorkshops.map((workshop) => (
            <article
              key={workshop.id}
              className="overflow-hidden rounded-3xl border border-[#E8E3D8] bg-white"
            >
              {/* Hero image */}
              <div className="relative h-[240px] md:h-[420px]">
                <Image
                  src={workshop.heroImage}
                  alt={`סדנת רברסינג ${workshop.displayDate} — ${workshop.location}`}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 896px"
                />
                {/* Gradient to blend image into card */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-20"
                  style={{ background: 'linear-gradient(to top, white 0%, transparent 100%)' }}
                />
              </div>

              {/* Workshop details */}
              <div className="px-6 pb-10 pt-4 md:px-10" dir="rtl">

                {/* Date + location badges */}
                <div className="mb-5 flex flex-wrap gap-2">
                  <span className="rounded-full border border-[#E8E3D8] bg-[#F7F4EF] px-3 py-1 text-sm font-medium text-[#183B3B]">
                    {workshop.displayDate}
                  </span>
                  <span className="rounded-full border border-[#E8E3D8] bg-[#F7F4EF] px-3 py-1 text-sm font-medium text-[#183B3B]">
                    {workshop.location}
                  </span>
                </div>

                <h2 className="text-2xl font-bold text-[#183B3B] md:text-3xl">
                  {workshop.title}
                </h2>

                <p className="mt-3 text-[15px] leading-relaxed text-[#4A5568]">
                  {workshop.description}
                </p>

                {/* Gallery — rendered only when images are available */}
                {workshop.gallery.length > 0 && (
                  <div className="mt-10">
                    <h3 className="mb-4 text-lg font-bold text-[#183B3B]">רגעים מהסדנה</h3>
                    <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
                      {workshop.gallery.map((src, i) => (
                        <div
                          key={i}
                          className="relative aspect-square overflow-hidden rounded-xl"
                        >
                          <Image
                            src={src}
                            alt={`תמונה ${i + 1} מהסדנה`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 50vw, 33vw"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Testimonials — rendered only when entries exist */}
                {workshop.testimonials.length > 0 && (
                  <div className="mt-10">
                    <h3 className="mb-6 text-lg font-bold text-[#183B3B]">מה אמרו המשתתפים</h3>
                    <div className="grid gap-5 md:grid-cols-2">
                      {workshop.testimonials.map((t, i) => (
                        <TestimonialCard
                          key={i}
                          title={t.title}
                          body={t.body}
                          meta={t.meta}
                          tag={t.tag}
                        />
                      ))}
                    </div>
                    <p className="mt-4 text-xs text-[#4A5568]/60">
                      ההמלצות מוצגות באישור המשתתפים, ובמידת הצורך ללא שם מלא.
                    </p>
                  </div>
                )}

              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Registration CTA */}
      <section className="bg-white px-4 py-14" dir="rtl">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-2xl font-bold text-[#183B3B] md:text-3xl">
            רוצה להצטרף לסדנה הבאה?
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-[#4A5568]">
            שלח הודעה קצרה ואעדכן אותך כשהרשמה לסדנה הבאה נפתחת.
          </p>
          <div className="mt-6">
            <a
              href={registrationLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-[#2F5A4F] px-6 py-3 text-[15px] font-semibold text-white transition hover:bg-[#23443C]"
            >
              לפרטים על הסדנה הבאה
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
