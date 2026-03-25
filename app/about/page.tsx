import OurStory from "@/components/about/AboutSpark";
import VisionSection from "@/components/about/OurMission";
import ArchitectureHero from "@/components/ui/other-hero";

const AboutPage = () => {
  return (
    <main>
      <div className="sticky top-0">
        <ArchitectureHero
          descriptionHeader="Broad Vision. Exceptional Business. Lasting Impact"
          title="About"
          description="Our mission, both then and now, is to equip small and medium-sized business owners with the knowledge, skills, and confidence to compete on a global scale."
          backgroundImage="https://res.cloudinary.com/dlfui2ojv/image/upload/v1774283510/bg-image_vwbemw.jpg"
          titleId="hero-title"
          descriptionId="hero-description"
        />
      </div>
      <OurStory />
      <VisionSection />
      {/* <Contact /> */}
    </main>
  );
};

export default AboutPage;
