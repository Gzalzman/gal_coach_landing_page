import Link from 'next/link'
import { copy } from '@/lib/constants'
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export const Footer = () => {
  return (
  <footer className="bg-white px-4 pb-8" dir="rtl">
  <div className="mx-auto max-w-6xl overflow-hidden rounded-t-3xl bg-[#2F5A4F] px-6 py-10 text-white md:px-12 md:py-12">
    <div className="flex flex-col items-center gap-8 text-center md:flex-row md:items-center md:justify-between md:text-right">

      {/* Text block */}
      <div className="max-w-xl">
        <h2 className="text-2xl font-bold text-white md:text-3xl">
          {copy.footerName}
        </h2>

        <p className="mt-2 text-base text-white/75">
          {copy.footerRole}
        </p>

        <p className="mt-3 text-sm text-white/70">
          אימון אישי | אימון קבוצתי | נשימה וריברסינג
        </p>

        <p className="mt-1 text-sm text-white/60">
          קיבוץ דברת / עמק יזרעאל | אונליין בזום
        </p>

        <p className="mt-4 text-base leading-8 text-white/80">
          {copy.footerBody}
        </p>

        <p className="mt-3 text-base font-semibold leading-8 text-white">
          {copy.footerClosing}
        </p>
      </div>

      {/* WhatsApp CTA + social links */}
      <div className="flex shrink-0 flex-col items-center gap-3 md:items-start">
        <span className="text-sm text-white/75">
          רוצים לבדוק התאמה?
        </span>

        <a
          href="https://wa.me/972528330884"
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-[48px] items-center justify-center rounded-xl bg-[#DFF5E7] px-6 py-3 font-semibold text-[#1F5A43] transition-colors hover:bg-[#CFEFDB]"
        >
          {copy.footerWhatsApp}
        </a>

        <div className="mt-5 flex items-center justify-center gap-3 md:justify-start">
  <a
    href="https://wa.me/972528330884"
    target="_blank"
    rel="noreferrer"
    aria-label="וואטסאפ"
    className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-white transition hover:opacity-90"
  >
    <FaWhatsapp className="h-4 w-4" />
  </a>

  <a
    href="https://www.instagram.com/zaltzmangal/"
    target="_blank"
    rel="noreferrer"
    aria-label="אינסטגרם"
    className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#515BD4] text-white transition hover:opacity-90"
  >
    <FaInstagram className="h-4 w-4" />
  </a>

  <a
    href="https://www.facebook.com/Galcoach"
    target="_blank"
    rel="noreferrer"
    aria-label="פייסבוק"
    className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1877F2] text-white transition hover:opacity-90"
  >
    <FaFacebookF className="h-4 w-4" />
  </a>
</div>
      </div>
    </div>

    {/* Copyright */}
    <div className="mt-8 border-t border-white/15 pt-5 text-center text-sm text-white/65">
      {copy.footerCopyright}
      <span className="mx-2">·</span>
      <Link href="/privacy" className="hover:text-white/90 underline underline-offset-2">
        מדיניות פרטיות
      </Link>
    </div>
  </div>
</footer>
  )
}
