import { Card } from './ui/Card'
import { copy } from '@/lib/constants'

export const PainSection = () => {
  return (
    <section className="bg-white px-4 pt-2 pb-8 md:py-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
            {copy.painTitle}
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {copy.painCards.map((card, index) => (
            <Card key={index}>
              <h3 className="text-xl font-semibold text-text-primary mb-3">
                {card.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {card.description}
              </p>
            </Card>
          ))}
        </div>
        <p className="mt-12 text-center max-w-3xl mx-auto text-lg text-text-secondary">
          {copy.painClosing}
        </p>
      </div>
    </section>
  )
}
