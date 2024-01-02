"use client";
import React from "react";
import type { SectionName } from "@/lib/types";

interface ActiveSectionContextProps {
  children: React.ReactNode;
}

type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

export const ActiveSectionContext =
  React.createContext<ActiveSectionContextType | null>(null);

const ActiveSectionContextProvider = ({
  children,
}: ActiveSectionContextProps) => {
  const [activeSection, setActiveSection] = React.useState<SectionName>("Home");
  const [timeOfLastClick, setTimeOfLastClick] = React.useState<number>(0); // se usa para desactivar el observer cuando se hace click en un link

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
};

export function useActiveSectionContext() {
  const context = React.useContext(ActiveSectionContext);
  if (context === null) {
    throw new Error(
      "useActiveSectionContext must be used within an ActiveSectionContextProvider"
    );
  }
  return context;
}

export default ActiveSectionContextProvider;
