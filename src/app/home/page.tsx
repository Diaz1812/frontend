import Header from '../components/home/Header'
import HeroBanner from '../components/home/Banner'
import AboutSection from '../components/home/AboutUs'
import OurService from '../components/home/OurService'
import Footer from '../components/home/Footer'
import HomeSection from '../components/home/Portofolio'
import WhyMicrodata from '../components/home/WhyMicrodata'
import ClientExperience from '../components/home/OurClient'
import ProcessSection from '../components/home/OurProcess'
import VisiMisi from '../components/home/VisiMisi'
import LogoSlide from '../components/home/LogoSlide'
import Teknologi from '../components/home/Teknologi'
import ContactUs from '../components/home/ContactUs'
import '../../app/globals.css'
import LiniBisnis from '../components/home/LiniBisnis'



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
  )
}

export default HomePage