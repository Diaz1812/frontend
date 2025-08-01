// src/app/portfolio/page.tsx

// Mengimpor komponen-komponen yang dibutuhkan
import Header from "../components/service/Header"; // Header sekarang sudah mencakup Hero Section untuk halaman portofolio
import ServiceSection from "../components/service/ServiceSection";
import Footer from "../components/service/Footer";

// Mengimpor global CSS. Biasanya ini dilakukan di layout.tsx atau _app.tsx (untuk Pages Router).
// Jika sudah diimpor di layout.tsx, baris ini bisa dihapus untuk menghindari duplikasi impor.
import "../../app/globals.css";

// Definisi komponen halaman PortfolioPage
function ServicePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header komponen yang sudah termasuk navigasi dan hero section Portofolio */}
      <Header />

      {/* Konten utama halaman Portofolio */}
      <main>
        {/* Bagian Selected Project */}
        <ServiceSection />
      </main>

      {/* Footer halaman */}
      <Footer />
    </div>
  );
}

export default ServicePage;
