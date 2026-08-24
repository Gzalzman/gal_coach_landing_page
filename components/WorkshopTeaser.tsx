import Image from 'next/image'
import Link from 'next/link'

export const WorkshopTeaser = () => {
  return (
    <section className="bg-white px-2 py-3">
      <div className="mx-auto w-full max-w-[1280px] px-1 md:w-[75%] md:px-0">
        <div className="overflow-hidden rounded-[32px] border border-[#D8C6A3] bg-[#F7F4EF]">

          {/*
            Grid layout:
            - Mobile: single column — image on top, text below
            - Desktop (RTL): col-1 → RIGHT (image), col-2 → LEFT (text)
            This matches the Hero's image-right / text-left pattern.
          */}
          <div className="grid md:grid-cols-[45%_55%]">

            {/* Image — top on mobile, right column on desktop */}
            <div className="relative h-[210px] md:h-auto md:min-h-[270px]">
              <Image
                src="/images/reb_20-08-26.png"
                alt="אווירת סדנת רברסינג — מרחב שקט ומקצועי"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 35vw"
              />
              {/* Soft gradient at bottom on mobile to blend into text section */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-16 md:hidden"
                style={{ background: 'linear-gradient(to top, #F7F4EF 0%, transparent 100%)' }}
              />
            </div>

            {/* Text — below image on mobile, left column on desktop */}
            <div
              className="flex flex-col justify-center px-6 pb-8 pt-5 md:px-10 md:py-10"
              dir="rtl"
            >
              <span className="mb-4 inline-block w-fit rounded-full border border-[#C5DDD9] bg-white px-3 py-1 text-xs font-semibold text-[#5FA3A9]">
                מסדנאות שהתקיימו
              </span>

              <h2 className="text-[22px] font-bold leading-snug text-[#183B3B] md:text-2xl">
                הצצה מסדנאות הרברסינג האחרונות
              </h2>

              <p className="mt-3 text-[15px] leading-relaxed text-[#4A5568]">
                רגעים אמיתיים מתהליכי נשימה, שחרור וחיבור.
              </p>

              <div className="mt-6">
                <Link
                  href="/workshops"
                  className="inline-flex items-center justify-center rounded-xl bg-[#2F5A4F] px-5 py-3 text-[15px] font-semibold text-white transition hover:bg-[#23443C]"
                >
                  לצפות ברגעים ובתגובות משתתפים
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
