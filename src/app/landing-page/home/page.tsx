import Header from "./Header";
import HeroBanner from "./Banner";
import AboutSection from "./AboutUs";
import OurService from "./OurService";
import Footer from "./Footer";
import HomeSection from "./Portofolio";
import WhyMicrodata from "./WhyMicrodata";
import ClientExperience from "./OurClient";
import ProcessSection from "./OurProcess";
import VisiMisi from "./VisiMisi";
import LogoSlide from "./LogoSlide";
import Teknologi from "./Teknologi";
import ContactUs from "./ContactUs";
import LiniBisnis from "./LiniBisnis";

function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Main Content */}
      <main>
        {/* Banner */}
        <HeroBanner />

        {/* AboutSection */}
        <AboutSection />

        {/* VisiMisi */}
        <VisiMisi />

        {/* OurService */}
        <OurService />

        {/* LogoSlide */}
        <LogoSlide />

        {/* HomeSection */}
        <HomeSection />

        {/* TeknologiSection */}
        <Teknologi />

        {/* WhyMicrodata */}
        <WhyMicrodata />

        {/* ClientExperience */}
        <ClientExperience />

        {/* ProcessSection */}
        <ProcessSection />

        {/* ContactUs */}
        <ContactUs />

        {/* LiniBisnis */}
        <LiniBisnis />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default HomePage;
