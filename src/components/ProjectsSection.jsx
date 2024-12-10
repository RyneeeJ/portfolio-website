import ProjectsList from "./ProjectsList";
import SectionContainer from "./SectionContainer";
import SectionHeading from "./SectionHeading";

function ProjectsSection() {
  return (
    <SectionContainer sectionId="projects">
      <SectionHeading title={["Recent", "Projects"]} />
      <ProjectsList />
    </SectionContainer>
  );
}

export default ProjectsSection;
