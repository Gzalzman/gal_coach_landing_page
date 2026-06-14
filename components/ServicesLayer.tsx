'use client'

import { Button } from './ui/Button'
import { getCompatibilityLink } from '@/lib/constants'
import { getActiveUpcomingWorkshop } from '@/lib/workshops'

interface ServicesLayerProps {
  isOpen: boolean
  onClose?: () => void
}

const REBIRTHING_LINK = `https://wa.me/972528330884?text=${encodeURIComponent(
  'היי גל, אשמח לתאם סשן רברסינג אישי.'
)}`

const WORKSHOPS_UPDATES_LINK = `https://wa.me/972528330884?text=${encodeURIComponent(
  'היי גל, אשמח לקבל עדכונים על סדנאות נשימה עתידיות.'
)}`

export const ServicesLayer = ({ isOpen, onClose }: ServicesLayerProps) => {
  const handleWorkshopsClick = () => {
    if (getActiveUpcomingWorkshop()) {
      document.getElementById('upcoming-workshops')?.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.open(WORKSHOPS_UPDATES_LINK, '_blank')
    }
  }

  return (
    <div
      aria-hidden={!isOpen}
      className={`grid transition-all duration-500 ease-in-out ${
        isOpen
          ? 'grid-rows-[1fr] opacity-100'
          : 'grid-rows-[0fr] opacity-0 pointer-events-none'
      }`}
    >
      <div className="overflow-hidden">
        <section className="bg-white px-2 pt-3 pb-8">
          <div
            className="mx-auto w-full max-w-[1280px] px-1 md:w-[75%] md:px-0"
            dir="rtl"
          >
            <div className="rounded-[32px] bg-[#F7F4EF] px-6 py-8 md:px-10">

              <h2 className="mb-2 text-right text-2xl font-bold text-[#183B3B] md:text-3xl">
                איך אפשר לעבוד יחד?
              </h2>
              <p className="mb-8 text-right text-base leading-relaxed text-[#4A5568] md:max-w-2xl">
                שלוש אפשרויות לעבודה אישית או קבוצתית — לפי המקום שבו אתה נמצא עכשיו: תהליך אימון אישי, סשן רברסינג אישי או סדנת נשימה קבוצתית.
              </p>

              <div className="grid gap-5 md:grid-cols-3">

                {/* Card 1 — תהליך אימון אישי */}
                <div className="flex flex-col rounded-2xl border border-[#E8E3D8] bg-white p-6">
                  <h3 className="mb-3 text-right text-lg font-bold text-[#183B3B]">
                    תהליך אימון אישי
                  </h3>
                  <p className="mb-4 text-right text-sm leading-relaxed text-[#4A5568]">
                    תהליך עומק של כ־3 חודשים, לזיהוי דפוסים חוזרים, יצירת בהירות ובניית דרך פעולה חדשה. במידת הצורך ובהתאם לנכונות המתאמן, ניתן לשלב גם תהליכי נשימה כחלק מהאימון.
                  </p>
                  <div className="mt-auto border-t border-[#E8E3D8] pt-4">
                    <p className="text-right text-sm font-semibold text-[#183B3B]">
                      עלות: 3,500 ₪ לתהליך המלא
                    </p>
                    <p className="mt-1.5 text-right text-xs leading-snug text-[#6B7280]">
                      פגישת ייעוץ ואבחון: 400 ₪ — מתקזזת במידה וממשיכים לתהליך.
                    </p>
                  </div>
                  <Button
                    size="sm"
                    variant="primary"
                    className="mt-4 w-full"
                    onClick={() => window.open(getCompatibilityLink(), '_blank')}
                  >
                    לבדוק התאמה לתהליך אימון אישי
                  </Button>
                </div>

                {/* Card 2 — סשן רברסינג אישי */}
                <div className="flex flex-col rounded-2xl border border-[#E8E3D8] bg-white p-6">
                  <div className="mb-3">
                    <h3 className="text-right text-lg font-bold text-[#183B3B]">
                      סשן רברסינג אישי
                    </h3>
                    <p className="mt-0.5 text-right text-xs font-medium text-[#5FA3A9]">
                      נשימה מעגלית מונחית
                    </p>
                  </div>
                  <p className="mb-4 text-right text-sm leading-relaxed text-[#4A5568]">
                    מפגש עומק אישי של כשעה וחצי לשחרור עומס, ויסות וחיבור פנימה.
                  </p>
                  <div className="mt-auto border-t border-[#E8E3D8] pt-4">
                    <p className="text-right text-sm font-semibold text-[#183B3B]">
                      עלות: 400 ₪ למפגש
                    </p>
                  </div>
                  <Button
                    size="sm"
                    variant="primary"
                    className="mt-4 w-full"
                    onClick={() => window.open(REBIRTHING_LINK, '_blank')}
                  >
                    לתיאום סשן נשימה אישי
                  </Button>
                </div>

                {/* Card 3 — סדנאות נשימה */}
                <div className="flex flex-col rounded-2xl border border-[#E8E3D8] bg-white p-6">
                  <h3 className="mb-3 text-right text-lg font-bold text-[#183B3B]">
                    סדנאות נשימה
                  </h3>
                  <p className="mb-4 text-right text-sm leading-relaxed text-[#4A5568]">
                    מרחב קבוצתי מונחה לעצירה, נשימה, שחרור וחיבור פנימה. המחיר משתנה לפי סוג הסדנה, מיקום, משך, ארוחות ותוכן נוסף.
                  </p>
                  <div className="mt-auto border-t border-[#E8E3D8] pt-4">
                    <p className="text-right text-sm font-semibold text-[#183B3B]">
                      עלות: 250–400 ₪ למשתתף
                    </p>
                  </div>
                  <Button
                    size="sm"
                    variant="primary"
                    className="mt-4 w-full"
                    onClick={handleWorkshopsClick}
                  >
                    לראות סדנאות קרובות
                  </Button>
                </div>

              </div>

              {/* Close button — bottom-left (visual) in RTL */}
              <div className="mt-6 flex justify-end border-t border-[#E8E3D8] pt-5">
                <button
                  onClick={onClose}
                  className="rounded-xl border border-[#D1C9BB] px-5 py-2 text-sm font-medium text-[#6B7280] transition-colors duration-200 hover:border-[#183B3B] hover:text-[#183B3B]"
                >
                  סגור פרטים
                </button>
              </div>

            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
