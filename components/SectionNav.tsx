const navItems = [
  { label: 'מה עוצר אותך?', href: '#pain' },
  { label: 'איך זה עובד?', href: '#process' },
  { label: 'למי זה מתאים?', href: '#fit' },
  { label: 'אפשרויות עבודה', href: '#work-with-me' },
  { label: 'מילים מהדרך', href: '#testimonials' },
  { label: 'קצת עליי', href: '#about' },
  { label: 'מה מקבלים?', href: '#benefits' },
  { label: 'שאלות נפוצות', href: '#faq' },
]

export const SectionNav = () => (
  <section id="section-nav" className="bg-white px-2 pb-4 md:px-0">
    <nav aria-label="ניווט בין חלקי הדף" dir="rtl">
      <div className="mx-auto w-full max-w-[1280px] px-1 md:w-[75%] md:px-0">
        <div className="rounded-2xl border border-[#E6D8C8] bg-white/90 p-2 shadow-sm">
          {/* Mobile: 2-column grid */}
          <div className="grid grid-cols-2 gap-2 md:hidden">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="w-full text-center rounded-full border border-[#D9CDBF] bg-[#F7F4EF] px-4 py-2 text-sm font-semibold text-[#2F5A4F] transition hover:bg-[#EFE7DC]"
              >
                {item.label}
              </a>
            ))}
          </div>
          {/* Desktop: one row, evenly distributed */}
          <div className="hidden md:flex md:gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="flex-1 text-center rounded-full border border-[#D9CDBF] bg-[#F7F4EF] px-2 py-2 text-sm font-semibold text-[#2F5A4F] transition hover:bg-[#EFE7DC] whitespace-nowrap"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  </section>
)
