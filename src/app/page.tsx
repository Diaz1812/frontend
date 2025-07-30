import Header from "./components/home/Header";
import WhyWorkWithUs from "./components/career/WhyWorkWithUs";
import CareerOpportunities from "./components/career/CareerOpportunities";
import Footer from "./components/career/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <WhyWorkWithUs />
        <CareerOpportunities />
      </main>
      <Footer />
    </div>
  );
}
