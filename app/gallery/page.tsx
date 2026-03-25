import Gallery from "@/components/gallery/Gallery";
import ArchitectureHero from "@/components/ui/other-hero";

const GalleryPage = () => {
  return (
    <div>
      <div className="sticky top-0">
        <ArchitectureHero
          descriptionHeader="Our collection of memories past and present"
          title="Gallery"
          description="At Push To Profit, every moment tells a story. Our gallery showcases our clients and community — from business achievements to cultural events, sports, and everyday experiences. Explore these captured memories that reflect our spirit of business, creativity, and excellence."
          backgroundImage="https://res.cloudinary.com/dlfui2ojv/image/upload/v1774418498/bg-image_ersnzf.jpg"
          titleId="hero-title"
          descriptionId="hero-description"
        />
      </div>
      <Gallery />
    </div>
  );
};

export default GalleryPage;
