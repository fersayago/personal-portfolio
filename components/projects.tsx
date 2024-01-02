"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/hooks/hooks";

const Projects = () => {
  const { ref } = useSectionInView({
    sectionName: "Projects",
    threshold: 0.5,
  });

  return (
    <section id="projects" className="scroll-mt-28" ref={ref}>
      <SectionHeading>Projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Projects;
