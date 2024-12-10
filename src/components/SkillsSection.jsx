import SectionContainer from "./SectionContainer";
import SectionHeading from "./SectionHeading";
import SkillsList from "./SkillsList";

function SkillsSection() {
  return (
    <SectionContainer sectionId="skills">
      <SectionHeading title={["Core", "Skills"]} />
      <SkillsList />
    </SectionContainer>
  );
}

export default SkillsSection;
