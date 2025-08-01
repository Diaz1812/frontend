import { Mail, Instagram, Twitter, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0D0D0D] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Bandar Lampung Location */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Bandar Lampung</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Jl. Endro Suratmin No. 53A, Way Dadi,<br />
              Kec. Sukarame, Kota Bandar Lampung,<br />
              Lampung 35131
            </p>
          </div>

          {/* Jakarta Location */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Jakarta</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Jl. Endro Suratmin No. 53A, Way Dadi,<br />
              Kec. Sukarame, Kota Bandar Lampung,<br />
              Lampung 35131
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-gray-400" />
                <span className="text-gray-300 text-sm">microdataindonesia@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Instagram className="w-4 h-4 text-gray-400" />
                <span className="text-gray-300 text-sm">microdataindonesia</span>
              </div>
              <div className="flex items-center space-x-2">
                <Twitter className="w-4 h-4 text-gray-400" />
                <span className="text-gray-300 text-sm">microdataindonesia</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="w-4 h-4 text-gray-400" />
                <span className="text-gray-300 text-sm">microdataindonesia</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          {/* Company Branding */}
          <div className="flex items-center mb-4 md:mb-0">
            <div className="flex-shrink-0">
              <img
                src="microdata.png"
                alt="Microdata Logo"
                className="w-24 h-16 object-contain" // Lebar 96 piksel, tinggi dibatasi 64 piksel
              />
            </div>
          </div>

          {/* Copyright */}
          <div className="text-gray-400 text-sm">
            © 2025 PT. Microdata Indonesia all rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;