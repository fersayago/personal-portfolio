import { useActiveSectionContext } from "@/context/active-section-context";
import { SectionName } from "@/lib/types";
import React from "react";
import { useInView } from "react-intersection-observer";

type useSectionInViewProps = {
  sectionName: SectionName,
  threshold?: number
}

export function useSectionInView({
  sectionName,
  threshold = 0.75
}: useSectionInViewProps) {
  const { ref, inView } = useInView({
    threshold,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  React.useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName)
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName])

  return { ref };
}