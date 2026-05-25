import { copy } from '@/lib/constants'

export const BenefitsSection = () => {
  return (
    <section className="py-20 px-4 bg-bg-primary">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
            {copy.benefitsTitle}
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {copy.benefitsCards.map((item, index) => (
            <div key={index} className="flex items-start gap-4 rounded-3xl bg-white border border-border-light p-5 shadow-sm">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-accent-teal text-white text-lg font-bold">
                ✓
              </div>
              <p className="text-text-secondary font-semibold leading-relaxed">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
