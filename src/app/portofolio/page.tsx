// src/app/portfolio/page.tsx
// Pastikan path impor sesuai dengan struktur Anda
import Header from "../components/portofolio/Header";
import PortfolioSection from "../components/portofolio/PortfolioSection";
import TechnologySection from "../components/portofolio/TechnologySection";
import Footer from "../components/portofolio/Footer";
// Import globals.css di _app.tsx (Next.js Pages Router) atau layout.tsx (Next.js App Router)
// Mengimpornya di sini seperti yang Anda lakukan sebelumnya kadang bisa berfungsi,
// tapi lebih baik di titik masuk aplikasi yang lebih tinggi.
// Jika Anda masih ingin mengimpor di sini, ini adalah kode Anda:
import "../../app/globals.css";


function PortfolioPage() { // Ubah nama fungsi menjadi PascalCase sesuai konvensi komponen React
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

export default PortfolioPage;