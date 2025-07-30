import Header from "@/app/components/career/Header";
import TeamSection from "@/app/components/career/TeamSection";
import WhyWorkWithUs from "@/app/components/career/WhyWorkWithUs";
import CareerOpportunities from "@/app/components/career/CareerOpportunities";
import Footer from "@/app/components/career/Footer";
import "../globals.css";

export default function CareerPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <TeamSection />
        <WhyWorkWithUs />
        <CareerOpportunities />
      </main>
      <Footer />
    </div>
  );
}
