// src/app/components/portofolio/Footer.tsx
import { Mail, Instagram, Twitter, Linkedin } from "lucide-react";
import type { FC } from "react";
import Image from "next/image";
import Link from "next/link"; // Import Link untuk navigasi

const Footer: FC = () => {
  return (
    <footer
      className="relative w-full text-white py-16 px-6 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/bg_carrier.png')" }}
    >
      <div className="bg-black bg-opacity-80 absolute inset-0 z-0"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section - Grid Locations & Contact */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Bandar Lampung Location */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Bandar Lampung
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Jl. Endro Suratmin No.52d, Way Dadi,
              <br />
              Kec. Sukarame - Kota Bandar
              <br />
              Lampung, Lampung 35131
            </p>
          </div>

          {/* Jakarta Location */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Jakarta</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Jl. Endro Suratmin No.52d, Way Dadi,
              <br />
              Kec. Sukarame - Kota Bandar
              <br />
              Lampung, Lampung 35131
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-gray-400" />
                <span className="text-gray-300 text-sm">
                  microdataindonesia@gmail.com
                </span>
              </div>
              {/* Tambahkan link ke media sosial */}
              <Link href="https://instagram.com/microdataindonesia" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-orange-500 transition-colors">
                <Instagram className="w-5 h-5 text-gray-400" />
                <span className="text-gray-300 text-sm">
                  microdataindonesia
                </span>
              </Link>
              <Link href="https://twitter.com/microdataindonesia" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-orange-500 transition-colors">
                <Twitter className="w-5 h-5 text-gray-400" />
                <span className="text-gray-300 text-sm">
                  microdataindonesia
                </span>
              </Link>
              <Link href="https://linkedin.com/company/microdataindonesia" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-orange-500 transition-colors">
                <Linkedin className="w-5 h-5 text-gray-400" />
                <span className="text-gray-300 text-sm">
                  microdataindonesia
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center text-center">
          <div className="flex items-center justify-center md:justify-start mb-4 md:mb-0">
            <Image
              src="/microdata.png"
              alt="Microdata Logo"
              width={120} // Sesuaikan lebar agar proporsional
              height={48} // Sesuaikan tinggi agar proporsional
              className="mr-2"
            />
          </div>
          <div className="text-gray-400 text-sm">
            © 2025 PT. Microdata Indonesia all rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;