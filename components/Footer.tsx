import { copy, getWhatsAppLink } from '@/lib/constants'

export const Footer = () => {
  return (
    <footer className="bg-text-primary text-white py-14 px-4">
      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-3">
        <div>
          <h3 className="text-2xl font-bold mb-2">{copy.footerName}</h3>
          <p className="text-white/80">{copy.footerRole}</p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">צור קשר</h4>
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-accent-teal hover:text-white transition-colors"
          >
            <span>📱</span>
            {copy.footerWhatsApp}
          </a>
        </div>
        <div>
          <h4 className="font-semibold mb-3">מידע</h4>
          <p className="text-white/70 text-sm leading-relaxed">
            אימון אישי קואקטיבי לתהליכי שינוי ותקיעות.
          </p>
        </div>
      </div>
      <div className="mt-10 border-t border-white/20 pt-6 text-center text-sm text-white/60">
        {copy.footerCopyright}
      </div>
    </footer>
  )
}
