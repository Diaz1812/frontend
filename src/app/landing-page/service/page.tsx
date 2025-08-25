
import Header from "./Header";
import ServiceSection from "./ServiceSection";
import Footer from "./Footer";

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
