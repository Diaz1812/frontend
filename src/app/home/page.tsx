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
import '../../app/globals.css'



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

      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default HomePage