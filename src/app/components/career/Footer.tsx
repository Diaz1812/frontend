import { Mail, Instagram, Linkedin, Music } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative w-full text-white bg-black py-16 px-6 overflow-hidden">
      {/* Background gradasi */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[500px] h-[500px] bg-gradient-to-t from-orange-700 to-transparent rounded-full blur-3xl opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 relative z-10">
        {/* Lokasi */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Bandar Lampung</h3>
          <p className="text-sm text-gray-300">
            Jl. Endro Suratmin No.52d, Way Dadi, Kec. Sukarame, Kota Bandar
            Lampung, Lampung 35131
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Jakarta</h3>
          <p className="text-sm text-gray-300">
            Jl. Endro Suratmin No.52d, Way Dadi, Kec. Sukarame, Kota Bandar
            Lampung, Lampung 35131
          </p>
        </div>

        {/* Kontak & Sosmed */}
        <div className="space-y-3">
          <p className="flex items-center gap-2 text-sm">
            <Mail size={16} /> microdataindonesia@gmail.com
          </p>
          <p className="flex items-center gap-2 text-sm">
            <Instagram size={16} /> microdataindonesia
          </p>
          <p className="flex items-center gap-2 text-sm">
            <Music size={16} /> microdataindonesia
          </p>
          <p className="flex items-center gap-2 text-sm">
            <Linkedin size={16} /> microdataindonesia
          </p>
        </div>
      </div>

      {/* Logo & Copyright */}
      <div className="max-w-7xl mx-auto mt-12 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400 relative z-10">
        <img
          src="/images/logo_microdata.png"
          alt="Microdata Logo"
          className="h-25 mb-10 md:mb-0"
        />
        <p>2025 PT. Microdata Indonesia all rights reserved.</p>
      </div>
    </footer>
  );
}
