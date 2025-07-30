import Header from "../components/portofolio/Header";
import PortfolioSection from "../components/portofolio/PortfolioSection";
import TechnologySection from "../components/portofolio/TechnologySection";
import Footer from "../components/portofolio/Footer";
import "../../app/globals.css";

function portofolio() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Main Content */}
      <main>
        {/* Portfolio Section */}
        <PortfolioSection />

        {/* Technology Section */}
        <TechnologySection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default portofolio;
