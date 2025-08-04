import { Mail, Instagram, Twitter, Linkedin } from "lucide-react";
import type { FC } from "react";
import Image from "next/image";

const Footer: FC = () => {
  return (
    <footer
      className="relative w-full text-white py-16 px-6 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/bg_carrier.png')" }}
    >
      
      {/* Overlay agar teks tetap terbaca */}
      <div className="bg-black bg-opacity-80 absolute inset-0 z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Bandar Lampung */}
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

          {/* Jakarta */}
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

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-gray-400" />
                <span className="text-gray-300 text-sm">
                  microdataindonesia@gmail.com
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Instagram className="w-5 h-5 text-gray-400" />
                <span className="text-gray-300 text-sm">
                  microdataindonesia
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Twitter className="w-5 h-5 text-gray-400" />
                <span className="text-gray-300 text-sm">
                  microdataindonesia
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Linkedin className="w-5 h-5 text-gray-400" />
                <span className="text-gray-300 text-sm">
                  microdataindonesia
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Image
              src="/microdata.png"
              alt="Microdata Logo"
              width={100}
              height={100}
              className="mr-2"
            />
          </div>
          <div className="text-gray-400 text-sm text-center md:text-right">
            © 2025 PT. Microdata Indonesia all rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
