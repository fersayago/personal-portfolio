"use client";
import React from 'react'
import { links } from '@/lib/data'

type SectionName = typeof links[number]["name"];

interface ActiveSectionContextProps {
  children: React.ReactNode
}

type ActiveSectionContextType = {
  activeSection: SectionName
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>
}

export const ActiveSectionContext = React.createContext<ActiveSectionContextType | null>(null)

const ActiveSectionContextProvider = ({children}: ActiveSectionContextProps ) => {
  const [activeSection, setActiveSection] = React.useState<SectionName>("Home")

  return (
    <ActiveSectionContext.Provider
      value={{activeSection, setActiveSection}}
    >
      {children}
    </ActiveSectionContext.Provider>
  )
}

export function useActiveSectionContext() {
  const context = React.useContext(ActiveSectionContext)
  if (context === null) {
    throw new Error('useActiveSectionContext must be used within an ActiveSectionContextProvider')
  }
  return context
}

export default ActiveSectionContextProvider