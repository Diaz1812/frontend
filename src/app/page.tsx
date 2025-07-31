import Header from "./components/home/Header";
import WhyWorkWithUs from "./components/career/WhyWorkWithUs";
import TeamSection from "./components/career/TeamSection";
import FullTimePositions from "./components/career/FullTimePositions";
import Footer from "./components/career/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <WhyWorkWithUs />
        <TeamSection />
        <FullTimePositions />
      </main>
      <Footer />
    </div>
  );
}
