import Projects from "@/components/projects/Proj";
import ArchitectureHero from "@/components/ui/other-hero";

const ServicesPage = () => {
  return (
    <div>
      <div className="sticky top-0">
        <ArchitectureHero
          descriptionHeader="Our Services Speaks for themselves"
          title="Services"
          description="At Push To Profit, we provide strategies, tools, and systems that the world’s top entrepreneurs use to run their businesses."
          backgroundImage="https://res.cloudinary.com/dlfui2ojv/image/upload/v1774418498/bg-image_ersnzf.jpg"
          titleId="hero-title"
          descriptionId="hero-description"
        />
      </div>
      <Projects />
    </div>
  );
};

export default ServicesPage;
