'use client'

import { useRef, useState } from 'react'
import { Hero } from './Hero'
import { ServicesLayer } from './ServicesLayer'
import { UpcomingWorkshopBanner } from './UpcomingWorkshopBanner'
import { getActiveUpcomingWorkshop } from '@/lib/workshops'

export const HeroWithServices = () => {
  const [servicesOpen, setServicesOpen] = useState(false)
  const layerRef = useRef<HTMLDivElement>(null)
  const workshop = getActiveUpcomingWorkshop()

  const handleServicesClick = () => {
    if (!servicesOpen) {
      setServicesOpen(true)
      setTimeout(() => {
        layerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 80)
    } else {
      layerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <>
      <Hero onServicesClick={handleServicesClick} />
      {workshop && <UpcomingWorkshopBanner workshop={workshop} />}
      <div ref={layerRef}>
        <ServicesLayer isOpen={servicesOpen} onClose={() => setServicesOpen(false)} />
      </div>
    </>
  )
}
