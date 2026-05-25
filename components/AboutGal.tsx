import { copy } from '@/lib/constants'

export const AboutGal = () => {
  return (
    <section className="py-20 px-4 bg-bg-primary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
            {copy.aboutTitle}
          </h2>
        </div>
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] items-center">
          <div className="rounded-3xl overflow-hidden shadow-soft bg-gradient-to-br from-accent-teal via-accent-teal/70 to-accent-sand/70 min-h-[360px] flex items-center justify-center">
            <div className="text-center px-6">
              <span className="text-5xl">📸</span>
              <p className="mt-6 text-white text-lg font-semibold">
                תמונה אישית תוצב כאן
              </p>
            </div>
          </div>
          <div>
            <p className="text-accent-teal font-semibold mb-4">{copy.aboutRole}</p>
            <h3 className="text-3xl font-bold text-text-primary mb-6">
              {copy.aboutName}
            </h3>
            <p className="text-text-secondary text-lg leading-relaxed mb-6">
              {copy.aboutText}
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-accent-teal text-2xl">✓</span>
                <p className="text-text-secondary">
                  תהליך ייעודי עם תשומת לב לפרקטיקה ולבחירה.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-accent-teal text-2xl">✓</span>
                <p className="text-text-secondary">
                  ניסיון בליווי אנשים בצמתים אישיים ומקצועיים.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-accent-teal text-2xl">✓</span>
                <p className="text-text-secondary">
                  משלב גישה ישירה ורגישה בלי הבטחות גדולות מדי.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
