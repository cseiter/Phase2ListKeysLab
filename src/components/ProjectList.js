import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  const showProjects = projects.map((indProject) => (
    <ProjectItem key={indProject.id} 
      name={indProject.name} 
      about={indProject.about} 
      technologies={indProject.technologies} />
      )
      );
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{showProjects}</div>
    </div>
  );
}

export default ProjectList;