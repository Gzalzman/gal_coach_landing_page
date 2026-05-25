'use client'

import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className = '', children, ...props }, ref) => {
    const baseStyles =
      'font-semibold rounded-xl transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-teal focus-visible:ring-offset-2'

    const variantStyles =
      variant === 'secondary'
        ? 'bg-white text-accent-teal border-2 border-accent-teal hover:bg-accent-teal hover:text-white active:bg-accent-teal-dark'
        : 'bg-accent-teal text-white hover:bg-accent-teal-dark active:bg-accent-teal-dark'

    const sizeStyles =
      size === 'lg'
        ? 'px-8 py-4 text-base'
        : size === 'sm'
        ? 'px-4 py-2 text-sm'
        : 'px-6 py-3 text-base'

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variantStyles} ${sizeStyles} ${className}`}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
