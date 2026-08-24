export interface Workshop {
  title: string
  subtitle: string
  description: string
  date: string          // ISO: 'YYYY-MM-DD' — used for future-date check
  displayDate: string   // Hebrew display
  time: string
  location: string
  includes: string
  earlyBirdPrice: string
  earlyBirdUntil: string
  couplePrice: string
  regularPrice: string
  isActive: boolean
}

export const workshops: Workshop[] = [
  {
    title: 'סדנת נשימה מעגלית וסאונד הילינג',
    subtitle: 'לעצור. לנשום. לשחרר.',
    description: 'מרחב קבוצתי של נשימה מעגלית, צלילים מרפאים, שחרור וחיבור פנימה.',
    date: '2026-07-17',
    displayDate: 'שישי, 17.7.26',
    time: '10:00–15:00',
    location: 'תל יוסף',
    includes: 'כולל כיבוד בוקר וארוחת צהריים קלה',
    earlyBirdPrice: '350 ₪',
    earlyBirdUntil: '1.7',
    couplePrice: '680 ₪',
    regularPrice: '380 ₪',
    isActive: true,
  },
]

/** Returns the first active workshop whose date is today or in the future, or null. */
export const getActiveUpcomingWorkshop = (): Workshop | null => {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  return (
    workshops.find((w) => {
      if (!w.isActive) return false
      return new Date(w.date) >= today
    }) ?? null
  )
}

// ─── Past workshops ───────────────────────────────────────────────────────────

export interface PastWorkshopTestimonial {
  title: string
  body: string
  meta: string
  tag?: string
}

export interface PastWorkshop {
  id: string
  title: string
  displayDate: string
  location: string
  description: string
  heroImage: string
  gallery: string[]
  testimonials: PastWorkshopTestimonial[]
}

export const pastWorkshops: PastWorkshop[] = [
  {
    id: 'reb-20-08-26',
    title: 'סדנת רברסינג — אוגוסט 2026',
    displayDate: '20.8.26',
    location: 'תל יוסף',
    description:
      'מרחב קבוצתי של תהליכי נשימה, שחרור וחיבור פנימי. כמה אנשים עצרו יחד, נשמו ביחד, וחזרו מחוברים יותר לעצמם.',
    heroImage: '/images/reb_20-08-26.png',
    gallery: [
      // TODO: הוסף נתיבים לתמונות גלריה מהסדנה
      // '/images/workshops/reb-20-08-26/gallery-1.jpg',
      // '/images/workshops/reb-20-08-26/gallery-2.jpg',
    ],
    testimonials: [
      {
        title: 'חוויה חוץ גופית מטורפת',
        body: 'תודה על חוויה חוץ גופית מטורפת. אחד הדברים המשמעותיים שחוויתי. גל אתה לב גדול!',
        meta: 'משתתפ/ת בסדנת רברסינג, אוגוסט 2026',
        tag: 'רברסינג קבוצתי',
      },
      {
        title: 'הסדנה ממשיכה לעבוד',
        body: 'חוויה מיוחדת ועוצמתית. הסדנה ממשיכה לעבוד והתחושה שלי היא של רוגע פנימי ושמחה. תודה על המקצועיות האנושיות והרגישות.',
        meta: 'משתתפ/ת בסדנת רברסינג, אוגוסט 2026',
        tag: 'רברסינג קבוצתי',
      },
      {
        title: 'חוויה מיוחדת מאוד',
        body: 'היתה חוויה מיוחדת מאוד.',
        meta: 'משתתפ/ת בסדנת רברסינג, אוגוסט 2026',
        tag: 'רברסינג קבוצתי',
      },
      {
        title: 'חוויה מעצימה',
        body: 'היתה חוויה מעצימה.',
        meta: 'משתתפ/ת בסדנת רברסינג, אוגוסט 2026',
        tag: 'רברסינג קבוצתי',
      },
    ],
  },
]
