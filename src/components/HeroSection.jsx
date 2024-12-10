import ProfileCard from "./ProfileCard";
import SectionContainer from "./SectionContainer";
import HeroHeading from "./HeroHeading";

function HeroSection() {
  return (
    <SectionContainer type="hero" sectionId="about">
      <div className="mt-5 flex flex-col items-center gap-7 sm:gap-10 md:mt-12 md:gap-14 lg:mt-20 lg:flex-row lg:gap-20">
        <ProfileCard />
        <HeroHeading />
      </div>
    </SectionContainer>
  );
}

export default HeroSection;
