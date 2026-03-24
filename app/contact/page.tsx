import ContactPage from "@/components/contact/Contact";
import ArchitectureHero from "@/components/ui/other-hero";

const ContactPageRoute = () => {
  return (
    <div>
      <div className="sticky top-0">
        <ArchitectureHero
          descriptionHeader="Let’s build a solid foundation for the next generation"
          title="Contact Us"
          description="Need to make an enquiry or simply want to know more about Push To Profit..? follow the form below to contact and we will respond adequately as soon as we can."
          backgroundImage="https://res.cloudinary.com/dlfui2ojv/image/upload/v1774283510/bg-image_vwbemw.jpg"
          titleId="hero-title"
          descriptionId="hero-description"
        />
      </div>
      <ContactPage />
    </div>
  );
};

export default ContactPageRoute;
