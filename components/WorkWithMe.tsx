'use client'

import { useRef, useState } from 'react'
import { MobileSectionDivider } from './ui/MobileSectionDivider'
import { BackToSectionNav } from './ui/BackToSectionNav'

const COACHING_WA_LINK = `https://wa.me/972528330884?text=${encodeURIComponent(
  'היי גל, ראיתי את האפשרות של אימון אישי 1:1 ואני רוצה לבדוק האם זה מתאים לי. אשמח לשיחת התאמה קצרה.'
)}`

const coachingDetailParagraphs = [
  'תהליך אישי ומעמיק שמבוסס על ההנחה שאתה לא "בעיה שצריך לתקן", אלא אדם שלם, יצירתי ובעל משאבים — שלפעמים פשוט צריך מרחב מדויק כדי לעצור, להקשיב ולגלות מה באמת מבקש שינוי.',
  'לא תמיד מה שמכביד עלינו הוא האירוע עצמו. הרבה פעמים זה האופן שבו אנחנו מפרשים אותו: מה זה אומר עליי, מה יחשבו, מה יקרה אם אטעה, האם אני מספיק טוב, ומה אני חייב להוכיח כדי להרגיש בטוח.',
  'והקולות האלה לא תמיד נשמעים לנו כמו קולות. באוטומט של החיים הם מרגישים כמו אמת, זהירות, היגיון או אחריות. רק כשעוצרים אפשר להתחיל לזהות אותם — ולהבין שהם לא בהכרח המציאות, אלא דפוס שמנהל אותנו מבפנים.',
  'שם בדיוק מתחילה העבודה האימונית: לא רק במה שקרה, אלא באדם שפוגש את מה שקרה. בקולות הפנימיים, באמונות, בערכים, בפחדים ובדפוסים שמנהלים את הבחירות שלנו מתחת לפני השטח.',
  'כדי שתהליך כזה יהיה אפקטיבי, הוא צריך רצף, מחויבות וזמן. לכן האימון האישי מבוסס על מינימום של 10 מפגשים שבועיים, כאשר כל מפגש נמשך כשעה. זה מאפשר לא רק להבין מה עוצר אותך — אלא גם להתחיל לתרגל דרך חדשה לפגוש את החיים עצמם, בין המפגשים.',
  'בתהליך נוכל לעבוד על בהירות ומיקוד, זיהוי ערכים ומטרות אמיתיות, פירוק אמונות מגבילות, קבלת החלטות בצמתי שינוי, שיפור תקשורת ומערכות יחסים, וחיזוק היכולת לעבור מהבנה לפעולה.',
  'המטרה היא פחות אוטומט, פחות ריצוי ופחד — ויותר בחירה, נוכחות ותנועה מבפנים.',
]

const GROUP_COACHING_WA_LINK = `https://wa.me/972528330884?text=${encodeURIComponent(
  'היי גל, ראיתי את האפשרות של אימון קבוצתי אונליין ואני רוצה לשמוע פרטים ולבדוק אם זה מתאים לי.'
)}`

const groupCoachingDetailParagraphs = [
  'אימון קבוצתי הוא תהליך חי ואישי בתוך מרחב משותף. זה לא קורס מוקלט ולא הרצאה, אלא קבוצה קטנה שבה כל משתתף פוגש את הדרך האישית שלו — ובמקביל לומד גם מתוך מה שקורה אצל אחרים.',
  'בתוך הקבוצה מתאפשר לגלות שאנחנו לא לבד עם התקיעות, הפחד לבחור, הצורך לרצות או הקול שאומר "עוד לא". לפעמים דווקא כשמישהו אחר משתף, אנחנו פתאום שומעים את עצמנו — ותובנה שנולדה אצל אדם אחד פותחת משהו גם אצל אחרים.',
  'הקבוצה יוצרת מרחב של שיקוף, תמיכה ומחויבות. היא מאפשרת לקבל נקודות מבט נוספות, לתרגל בחירה ותקשורת בתוך מרחב בטוח, ולהתחייב לצעדים קטנים בחיים עצמם בין המפגשים.',
  'התהליך מתאים למי שרוצה עומק, תנועה ותחושת "אני לא לבד" — ומרגיש שהכוח של קבוצה קטנה יכול לעזור לו לראות את עצמו ברור יותר ולהתחיל לבחור אחרת.',
]

const BREATHWORK_WA_LINK = `https://wa.me/972528330884?text=${encodeURIComponent(
  'היי גל, ראיתי את האפשרות של סדנת נשימה / ריברסינג ואני רוצה לקבל פרטים על המועד הקרוב.'
)}`

const breathworkDetailParagraphs = [
  'סדנת ריברסינג, או נשימה מעגלית, היא מרחב חווייתי עמוק שמבוסס על אחד הכלים הפשוטים והחזקים ביותר שיש לנו — הנשימה.',
  'באמצעות נשימה רציפה, מודעת ומונחית, בלי הפסקה בין השאיפה לנשיפה, אנחנו מאפשרים לגוף ולמערכת הפנימית להיכנס למצב אחר: פחות שליטה, פחות מאמץ, ויותר הקשבה למה שמתרחש מתחת לפני השטח.',
  'לפעמים יש דברים שקשה להגיע אליהם רק דרך דיבור. עומס, מתח, החזקה, רגשות שלא קיבלו מקום, או תחושה שהגוף כבר מדבר — אבל אנחנו לא תמיד עוצרים להקשיב. הנשימה יוצרת שער לעבודה אחרת: ישירה יותר, גופנית יותר, ולעיתים גם משחררת מאוד.',
  'במהלך הסדנה יכולים לעלות תחושות פיזיות, רגשות, זיכרונות, תובנות או פשוט חוויה של שקט ונוכחות. כל אדם פוגש את התהליך בדרך אחרת, ולכן העבודה נעשית בתוך מרחב בטוח, מונחה ומוחזק.',
  'הסדנה מתאימה למי שמרגיש עומס, מתח, תקיעות או רצון לפגוש את עצמו לא רק דרך הראש — אלא גם דרך הגוף והנשימה.',
  'הסדנאות אינן מתקיימות באופן קבוע. מדי פעם נפתחים מועדים חדשים, לעיתים גם בשיתופי פעולה עם מנחים נוספים, למשל סאונד הילינג או כלים משלימים אחרים שמעמיקים את החוויה.',
  'כדי להישאר מעודכנים במועדים הקרובים, כדאי לעקוב אחריי או לשלוח הודעה ולקבל פרטים על הסדנה הבאה.',
]

type ActiveOption = 'coaching' | 'group' | 'breathwork' | null

export const WorkWithMe = () => {
  const [active, setActive] = useState<ActiveOption>(null)
  const panelRef = useRef<HTMLDivElement>(null)

  const toggle = (option: Exclude<ActiveOption, null>) => {
    if (active === option) {
      setActive(null)
    } else {
      setActive(option)
      setTimeout(() => {
        panelRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 80)
    }
  }

  const detailBtnLabel = (opt: Exclude<ActiveOption, null>) =>
    active === opt ? '↑ סגור פרטים' : '↓ לפרטים'

  const cardBorder = (opt: Exclude<ActiveOption, null>) =>
    active === opt ? 'border-[#2F5A4F]' : 'border-[#E6D8C8]'

  const detailBtnColor = (opt: Exclude<ActiveOption, null>) =>
    `mt-3 md:mt-4 text-sm font-medium text-right transition hover:opacity-70 ${
      active === opt ? 'text-[#183B3B]' : 'text-[#2F5A4F]'
    }`

  return (
    <section id="work-with-me" className="bg-white px-4 pt-2 pb-8 md:py-16">
      <MobileSectionDivider />
      <div className="mt-6 md:mt-0 max-w-6xl mx-auto">

        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-[28px] md:text-4xl font-bold text-text-primary leading-tight">
            איך אפשר לעבוד איתי?
          </h2>
          <p className="mt-4 text-text-secondary text-[15px] md:text-lg max-w-2xl mx-auto leading-relaxed">
            שלוש דרכים שונות לעבודה משותפת — אימון אישי, אימון קבוצתי וסדנאות נשימה. התוכן המלא יתווסף בהמשך.
          </p>
        </div>

        {/* ── Mobile cards ── */}
        <div className="space-y-3 md:hidden" dir="rtl">

          <div className={`rounded-2xl border bg-[#FBF7F1] px-5 py-5 transition-colors ${cardBorder('coaching')}`}>
            <h3 className="text-[17px] font-semibold text-text-primary leading-snug">
              אימון אישי 1:1
            </h3>
            <p className="mt-1 text-text-secondary text-[14px] leading-relaxed">
              תהליך אישי ומעמיק למי שמרגיש תקיעות, עומס, צומת החלטה או רצון ליצור שינוי אמיתי מבפנים.
            </p>
            <button type="button" onClick={() => toggle('coaching')} className={detailBtnColor('coaching')}>
              {detailBtnLabel('coaching')}
            </button>
          </div>

          <div className={`rounded-2xl border bg-[#FBF7F1] px-5 py-5 transition-colors ${cardBorder('group')}`}>
            <h3 className="text-[17px] font-semibold text-text-primary leading-snug">
              אימון קבוצתי
            </h3>
            <p className="mt-1 text-text-secondary text-[14px] leading-relaxed">
              תהליך עומק בקבוצה קטנה, למי שרוצה לעבור דרך אישית בתוך מרחב משותף, תומך ומחייב — ולגלות שהוא לא לבד בתוך התקיעות, הפחדים והצורך בשינוי.
            </p>
            <button type="button" onClick={() => toggle('group')} className={detailBtnColor('group')}>
              {detailBtnLabel('group')}
            </button>
          </div>

          <div className={`rounded-2xl border bg-[#FBF7F1] px-5 py-5 transition-colors ${cardBorder('breathwork')}`}>
            <h3 className="text-[17px] font-semibold text-text-primary leading-snug">
              סדנאות נשימה / ריברסינג
            </h3>
            <p className="mt-1 text-text-secondary text-[14px] leading-relaxed">
              מרחב חווייתי לעבודה עם הגוף, הנשימה ומה שנמצא מתחת למילים — למי שרוצה לעצור, להרפות עומס פנימי, ולהקשיב למה שהגוף מבקש לומר.
            </p>
            <button type="button" onClick={() => toggle('breathwork')} className={detailBtnColor('breathwork')}>
              {detailBtnLabel('breathwork')}
            </button>
          </div>

        </div>

        {/* ── Desktop cards ── */}
        <div className="hidden md:grid gap-6 md:grid-cols-3 items-start" dir="rtl">

          <div className={`flex flex-col rounded-3xl border bg-[#FBF7F1] p-6 shadow-sm transition-colors ${cardBorder('coaching')}`}>
            <h3 className="text-xl font-semibold text-text-primary">אימון אישי 1:1</h3>
            <p className="mt-3 text-text-secondary text-[15px] leading-relaxed">
              תהליך אישי ומעמיק למי שמרגיש תקיעות, עומס, צומת החלטה או רצון ליצור שינוי אמיתי מבפנים.
            </p>
            <button type="button" onClick={() => toggle('coaching')} className={detailBtnColor('coaching')}>
              {detailBtnLabel('coaching')}
            </button>
          </div>

          <div className={`flex flex-col rounded-3xl border bg-[#FBF7F1] p-6 shadow-sm transition-colors ${cardBorder('group')}`}>
            <h3 className="text-xl font-semibold text-text-primary">אימון קבוצתי</h3>
            <p className="mt-3 text-text-secondary text-[15px] leading-relaxed">
              תהליך עומק בקבוצה קטנה, למי שרוצה לעבור דרך אישית בתוך מרחב משותף, תומך ומחייב — ולגלות שהוא לא לבד בתוך התקיעות, הפחדים והצורך בשינוי.
            </p>
            <button type="button" onClick={() => toggle('group')} className={detailBtnColor('group')}>
              {detailBtnLabel('group')}
            </button>
          </div>

          <div className={`flex flex-col rounded-3xl border bg-[#FBF7F1] p-6 shadow-sm transition-colors ${cardBorder('breathwork')}`}>
            <h3 className="text-xl font-semibold text-text-primary">סדנאות נשימה / ריברסינג</h3>
            <p className="mt-3 text-text-secondary text-[15px] leading-relaxed">
              מרחב חווייתי לעבודה עם הגוף, הנשימה ומה שנמצא מתחת למילים — למי שרוצה לעצור, להרפות עומס פנימי, ולהקשיב למה שהגוף מבקש לומר.
            </p>
            <button type="button" onClick={() => toggle('breathwork')} className={detailBtnColor('breathwork')}>
              {detailBtnLabel('breathwork')}
            </button>
          </div>

        </div>

        {/* ── Shared detail panel (spans full width) ── */}
        <div
          ref={panelRef}
          aria-hidden={!active}
          className={`grid transition-all duration-500 ease-in-out ${
            active
              ? 'grid-rows-[1fr] opacity-100'
              : 'grid-rows-[0fr] opacity-0 pointer-events-none'
          }`}
        >
          <div className="overflow-hidden">
            <div className="mt-6 rounded-[24px] border border-[#E6D8C8] bg-[#F7F4EF] p-6 md:p-8" dir="rtl">

              {/* Coaching detail */}
              {active === 'coaching' && (
                <>
                  <h3 className="mb-4 text-xl font-bold text-text-primary md:text-2xl">
                    אימון אישי 1:1 — פרטים
                  </h3>
                  <div className="space-y-3">
                    {coachingDetailParagraphs.map((p, i) => (
                      <p key={i} className="text-text-secondary text-[14px] md:text-[15px] leading-8">{p}</p>
                    ))}
                  </div>
                  <div className="mt-5 rounded-xl border border-[#E6D8C8] bg-white px-4 py-4">
                    <p className="text-[14px] md:text-[15px] font-semibold text-text-primary mb-1">מבנה התהליך:</p>
                    <p className="text-[14px] text-text-secondary"> מפגשים שבועיים | כ 3 חודשים | רק <b> 2900 ש"ח</b> לתהליך </p>
                    <p className="mt-3 text-[13px] text-text-secondary leading-6">
                      פגישת ייעוץ ואבחון: 400 ₪ — מתקזזת במידה וממשיכים לתהליך.
                    </p>
                  </div>
                  <a
                    href={COACHING_WA_LINK}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 flex w-full items-center justify-center rounded-xl bg-[#2F5A4F] px-5 py-3 text-[15px] font-semibold text-white transition hover:bg-[#254840] md:w-auto md:px-8"
                  >
                    בדיקת התאמה לאימון אישי
                  </a>
                </>
              )}

              {/* Group coaching detail */}
              {active === 'group' && (
                <>
                  <h3 className="mb-4 text-xl font-bold text-text-primary md:text-2xl">
                    אימון קבוצתי — פרטים
                  </h3>
                  <div className="space-y-3">
                    {groupCoachingDetailParagraphs.map((p, i) => (
                      <p key={i} className="text-text-secondary text-[14px] md:text-[15px] leading-8">{p}</p>
                    ))}
                  </div>
                  <div className="mt-5 rounded-xl border border-[#E6D8C8] bg-white px-4 py-4">
                    <p className="text-[14px] md:text-[15px] font-semibold text-text-primary mb-2">מבנה התהליך:</p>
                    <p className="text-[14px] text-text-secondary leading-7">
                      8 מפגשים אונליין<br />
                      קבוצה קטנה ואינטימית<br />
                      תהליך חי ומונחה<br />
                      עבודה עם דפוסים, קולות פנימיים, ערכים ובחירה
                    </p>
                    <p className="mt-3 text-[14px] md:text-[15px] font-semibold text-text-primary mb-1">עלות:</p>
                    <p className="text-[14px] text-text-secondary">990 ₪ לתהליך</p>
                  </div>
                  <a
                    href={GROUP_COACHING_WA_LINK}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 flex w-full items-center justify-center rounded-xl bg-[#2F5A4F] px-5 py-3 text-[15px] font-semibold text-white transition hover:bg-[#254840] md:w-auto md:px-8"
                  >
                    בדיקת התאמה לאימון קבוצתי
                  </a>
                </>
              )}

              {/* Breathwork detail */}
              {active === 'breathwork' && (
                <>
                  <h3 className="mb-4 text-xl font-bold text-text-primary md:text-2xl">
                    סדנאות נשימה / ריברסינג — פרטים
                  </h3>
                  <div className="space-y-3">
                    {breathworkDetailParagraphs.map((p, i) => (
                      <p key={i} className="text-text-secondary text-[14px] md:text-[15px] leading-8">{p}</p>
                    ))}
                  </div>
                  <div className="mt-5 rounded-xl border border-[#E6D8C8] bg-white px-4 py-4">
                    <p className="text-[14px] md:text-[15px] font-semibold text-text-primary mb-2">מבנה ועלות:</p>
                    <p className="text-[14px] text-text-secondary leading-7">
                      סדנה חד־פעמית / לפי מועד שמתפרסם מראש<br />
                      נשימה מעגלית מונחית<br />
                      מרחב קבוצתי בטוח ומוחזק<br />
                      לעיתים בשילוב כלים משלימים כמו סאונד הילינג
                    </p>
                    <p className="mt-3 text-[14px] md:text-[15px] font-semibold text-text-primary mb-1">עלות:</p>
                    <p className="text-[14px] text-text-secondary">
                      עלות: 250–400 ₪ למשתתף, בהתאם לסוג הסדנה, מיקום, משך ותוכן נוסף.
                    </p>
                  </div>
                  <a
                    href={BREATHWORK_WA_LINK}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 flex w-full items-center justify-center rounded-xl bg-[#2F5A4F] px-5 py-3 text-[15px] font-semibold text-white transition hover:bg-[#254840] md:w-auto md:px-8"
                  >
                    לקבלת פרטים על סדנת נשימה
                  </a>
                </>
              )}

              {/* Close button — bottom-left (visual) in RTL */}
              <div className="mt-6 flex justify-end border-t border-[#E6D8C8] pt-5">
                <button
                  onClick={() => setActive(null)}
                  className="rounded-xl border border-[#D1C9BB] px-5 py-2 text-sm font-medium text-[#6B7280] transition-colors duration-200 hover:border-[#183B3B] hover:text-[#183B3B]"
                >
                  סגור פרטים
                </button>
              </div>

            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <BackToSectionNav />
        </div>

      </div>
    </section>
  )
}
