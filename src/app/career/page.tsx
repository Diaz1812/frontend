import Header from "../components/career/Header";
import WhyWorkWithUs from "../components/career/WhyWorkWithUs";
import TeamSection from "../components/career/TeamSection";
import CareerOpportunities from "../components/career/CareerOpportunities";
import FullTimePositions from "../components/career/FullTimePositions";
import Footer from "../components/career/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <TeamSection />
        <WhyWorkWithUs />
        <CareerOpportunities />
        <FullTimePositions />
      </main>
      <Footer />
    </div>
  );
}
