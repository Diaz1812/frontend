
import Header from "./Header"; 
import PortfolioSection from "./PortfolioSection";
import TechnologySection from "./TechnologySection";
import Footer from "./Footer";

function PortfolioPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header komponen yang sudah termasuk navigasi dan hero section Portofolio */}
      <Header />

      {/* Konten utama halaman Portofolio */}
      <main>
        {/* Bagian Selected Project */}
        <PortfolioSection />

        {/* Bagian Teknologi Yang Digunakan */}
        <TechnologySection />
      </main>

      {/* Footer halaman */}
      <Footer />
    </div>
  );
}

export default PortfolioPage;
