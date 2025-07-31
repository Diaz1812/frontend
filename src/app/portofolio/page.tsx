// src/app/portfolio/page.tsx

// Mengimpor komponen-komponen yang dibutuhkan
import Header from "../components/portofolio/Header"; // Header sekarang sudah mencakup Hero Section untuk halaman portofolio
import PortfolioSection from "../components/portofolio/PortfolioSection";
import TechnologySection from "../components/portofolio/TechnologySection";
import Footer from "../components/portofolio/Footer";

// Mengimpor global CSS. Biasanya ini dilakukan di layout.tsx atau _app.tsx (untuk Pages Router).
// Jika sudah diimpor di layout.tsx, baris ini bisa dihapus untuk menghindari duplikasi impor.
import "../../app/globals.css";

// Definisi komponen halaman PortfolioPage
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
