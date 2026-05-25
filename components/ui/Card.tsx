import React from 'react'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'highlight'
  children: React.ReactNode
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ variant = 'default', className = '', children, ...props }, ref) => {
    const variantStyles =
      variant === 'highlight'
        ? 'bg-gradient-to-br from-accent-teal/10 to-accent-sand/10 border border-accent-teal/20'
        : 'bg-white border border-border-light'

    return (
      <div
        ref={ref}
        className={`rounded-3xl p-6 ${variantStyles} ${className}`}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'
