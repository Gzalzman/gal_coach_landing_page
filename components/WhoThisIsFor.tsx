import { Card } from './ui/Card'
import { copy } from '@/lib/constants'

export const WhoThisIsFor = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
            {copy.audienceTitle}
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {copy.audienceCards.map((item, index) => (
            <Card key={index} variant="highlight">
              <h3 className="text-xl font-semibold text-accent-teal-dark mb-3">
                {item.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {item.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
