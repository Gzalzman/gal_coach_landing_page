import { copy } from '@/lib/constants'

export const ProcessSection = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
            {copy.processTitle}
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {copy.processSteps.map((step, index) => (
            <div key={index} className="rounded-3xl border border-border-light p-6 shadow-sm">
              <div className="w-14 h-14 rounded-full flex items-center justify-center bg-accent-teal text-white font-bold text-xl mb-5">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-3">
                {step.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
