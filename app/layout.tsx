import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'גל זלצמן | מאמן אישי קואקטיבי לתהליכי שינוי, תקיעות וקבלת החלטות',
  description: 'אימון אישי קואקטיבי עם גל זלצמן לאנשים שמרגישים תקועים, מתמודדים עם עומס או נמצאים בצומת החלטה. תהליך ממוקד ליצירת בהירות, בחירה ותנועה קדימה.',
  keywords: [
    'מאמן אישי',
    'מאמן אישי קואקטיבי',
    'אימון אישי',
    'אימון אישי לשינוי',
    'אימון אישי לקבלת החלטות',
    'אימון אישי לתקיעות',
    'קואצ׳ינג אישי'
  ],
  openGraph: {
    title: 'גל זלצמן | מאמן אישי קואקטיבי',
    description: 'אימון אישי ממוקד לאנשים שמרגישים תקועים, מתמודדים עם עומס או נמצאים בצומת החלטה.',
    type: 'website',
    url: 'https://galzaltzman.co.il',
    siteName: 'גל זלצמן - מאמן אישי',
    locale: 'he_IL'
  },
  robots: 'index, follow',
  icons: {
    icon: '/favicon.ico'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="he" dir="rtl">
      <head>
        <link rel="canonical" href="https://galzaltzman.co.il" />
      </head>
      <body>{children}</body>
    </html>
  )
}
