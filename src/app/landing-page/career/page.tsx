import Header from "./Header";
import WhyWorkWithUs from "./WhyWorkWithUs";
import TeamSection from "./TeamSection";
import CareerOpportunities from "./CareerOpportunities";
import FullTimePositions from "./FullTimePositions";
import Footer from "./Footer";

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
