import type { Metadata } from 'next'
import { GoogleAnalytics } from '@next/third-parties/google'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://gz-coach.vercel.app'),
  title: 'גל זלצמן | אימון אישי ורברסינג לתהליכי שינוי',
  description: 'אימון אישי ורברסינג עם גל זלצמן לאנשים שמרגישים תקיעות, עומס או נמצאים בצומת החלטה. תהליך לזיהוי דפוסים, יצירת בהירות ושינוי בדרך שבה פועלים.',
  alternates: {
    canonical: '/',
  },
  verification: {
    google: "buid3icVccyuDHxNRWWtiLuXaFA2XSZKri-obzyZ8FI",
  },
  keywords: [
    'מאמן אישי',
    'מאמן אישי קואקטיבי',
    'אימון אישי',
    'אימון אישי לשינוי',
    'אימון אישי לקבלת החלטות',
    'אימון אישי לתקיעות',
    'קואצ׳ינג'
  ],
  openGraph: {
    title: 'גל זלצמן | מאמן אישי קואקטיבי',
    description: 'אימון אישי ממוקד לאנשים שמרגישים תקועים, מתמודדים עם עומס או נמצאים בצומת החלטה.',
    type: 'website',
    url: 'https://gz-coach.vercel.app/',
    siteName: 'גל זלצמן - מאמן אישי',
    locale: 'he_IL'
  },
  robots: {
    index: true,
    follow: true,
  },
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
      <body>{children}</body>
      <GoogleAnalytics gaId="G-2JWJBKS8GH" />
    </html>
  )
}
