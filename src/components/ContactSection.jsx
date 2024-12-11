import ContactLinksList from "./ContactLinksList";
import SectionContainer from "./SectionContainer";
import SectionHeading from "./SectionHeading";

function ContactSection() {
  return (
    <SectionContainer sectionId="contact">
      <SectionHeading title={["Let's Work", "Together"]} type="contact" />

      <p className="mb-16 text-center text-xl tracking-wide sm:text-2xl md:mb-20 lg:mb-28">
        Connect with me.
      </p>

      <ContactLinksList />
    </SectionContainer>
  );
}

export default ContactSection;
