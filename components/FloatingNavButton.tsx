'use client'

import { useEffect, useState } from 'react'

export const FloatingNavButton = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 250)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToNav = () => {
    document.getElementById('section-nav')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <button
      type="button"
      onClick={scrollToNav}
      aria-label="חזרה לניווט"
      className={`fixed bottom-6 left-6 z-[9999] flex items-center justify-center rounded-full border border-[#D9CDBF] bg-[#F7F4EF] px-4 py-2 text-sm font-semibold text-[#2F5A4F] shadow-sm transition-all duration-300 hover:bg-[#EFE7DC] ${
        visible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      ↑ חזרה לניווט
    </button>
  )
}
