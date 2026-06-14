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
