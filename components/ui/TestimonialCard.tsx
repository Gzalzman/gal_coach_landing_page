import { FaLeaf } from 'react-icons/fa'

interface TestimonialCardProps {
  title: string
  body: string
  meta: string
  tag?: string
}

export const TestimonialCard = ({ title, body, meta, tag }: TestimonialCardProps) => (
  <div
    className="rounded-3xl border border-[#E6D8C8] bg-[#FBF7F1] px-7 py-8 shadow-soft md:px-10 md:py-10"
    dir="rtl"
  >
    {/* Leaf ornament */}
    <div className="mb-6 flex items-center justify-center gap-2" aria-hidden="true">
      <FaLeaf className="h-3.5 w-3.5 text-accent-teal" />
      <span className="mx-1 text-[11px] text-accent-sand">✦</span>
      <span className="inline-block [transform:scaleX(-1)]">
        <FaLeaf className="h-3.5 w-3.5 text-accent-teal" />
      </span>
    </div>

    {tag && (
      <div className="mb-5">
        <span className="inline-block rounded-full border border-[#C5DDD9] bg-white px-3 py-1 text-xs font-semibold text-accent-teal-dark">
          {tag}
        </span>
      </div>
    )}

    <h3 className="mb-5 text-[22px] font-bold leading-tight text-text-primary md:text-[26px]">
      {title}
    </h3>

    <div className="space-y-3">
      {body.split('\n\n').map((para, i) => (
        <p key={i} className="text-[15px] leading-[1.9] text-text-secondary md:text-[16px]">
          {para}
        </p>
      ))}
    </div>

    <div className="mt-7 border-t border-[#E6D8C8] pt-5">
      <p className="text-sm font-medium text-accent-teal-dark">{meta}</p>
    </div>
  </div>
)
