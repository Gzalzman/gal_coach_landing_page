import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'מדיניות פרטיות | גל זלצמן - מאמן אישי',
  description: 'מדיניות הפרטיות של גל זלצמן, מאמן אישי קואקטיבי.',
  robots: 'noindex, follow',
}

const sections = [
  {
    title: 'איסוף מידע',
    body: 'אנחנו עשויים לאסוף שם, טלפון, כתובת אימייל וכל מידע שתבחרו למסור דרך טפסי יצירת קשר, וואטסאפ או טפסי לידים.',
  },
  {
    title: 'מטרת השימוש במידע',
    body: 'המידע משמש רק ליצירת קשר, מענה לפנייה, תיאום שיחה או מתן מידע על שירותי אימון אישי, תהליכי שינוי וסדנאות.',
  },
  {
    title: 'שמירת המידע',
    body: 'המידע נשמר בצורה סבירה ומוגנת, ולא יימכר או יועבר לצד שלישי, אלא אם קיימת חובה חוקית לעשות זאת.',
  },
  {
    title: 'דיוור ועדכונים',
    body: 'לא יישלחו עדכונים שיווקיים ללא הסכמה. אפשר לבקש בכל עת להסיר פרטים מרשימת תפוצה או להפסיק קבלת עדכונים.',
  },
  {
    title: 'בקשה לעיון או מחיקת מידע',
    body: 'ניתן לפנות בבקשה לעיין, לעדכן או למחוק מידע אישי שנשמר.',
  },
  {
    title: 'יצירת קשר',
    body: 'לכל שאלה בנושא פרטיות ניתן לפנות דרך האתר או בוואטסאפ.',
  },
]

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#F7F4EF] px-4 py-16 md:py-24" dir="rtl">
      <div className="mx-auto max-w-2xl">

        {/* Back link */}
        <Link
          href="/"
          className="mb-10 inline-flex items-center gap-1 text-sm text-[#5FA3A9] hover:underline"
        >
          ← חזרה לדף הבית
        </Link>

        {/* Page title */}
        <h1 className="mt-4 text-3xl font-bold text-[#183B3B] md:text-4xl">
          מדיניות פרטיות
        </h1>

        {/* Intro */}
        <p className="mt-4 text-base leading-relaxed text-[#183B3B]/75">
          מדיניות זו מסבירה כיצד נשמר ומטופל מידע שנמסר דרך האתר וטפסי יצירת הקשר.
        </p>

        {/* Divider */}
        <div className="mt-8 h-px bg-[#D8C6A3]" />

        {/* Sections */}
        <div className="mt-8 space-y-8">
          {sections.map((section, i) => (
            <section key={i}>
              <h2 className="text-lg font-semibold text-[#183B3B]">
                {section.title}
              </h2>
              <p className="mt-2 text-base leading-relaxed text-[#183B3B]/75">
                {section.body}
              </p>
            </section>
          ))}
        </div>

        {/* Last updated */}
        <p className="mt-12 text-sm text-[#183B3B]/45">
          עודכן לאחרונה: יוני 2026
        </p>
      </div>
    </main>
  )
}
