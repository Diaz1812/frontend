import { Mail, Instagram, Twitter, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Bandar Lampung Location */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Bandar Lampung</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Jl Endro Suratmin No 53A, Way Dadi,
              <br />
              Kec Sukarame - Kota Bandar
              <br />
              Lampung, Lampung 35131
            </p>
          </div>

          {/* Jakarta Location */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Jakarta</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Jl Endro Suratmin No 53A, Way Dadi,
              <br />
              Kec Sukarame - Kota Bandar
              <br />
              Lampung, Lampung 35131
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-gray-400" />
                <span className="text-gray-300 text-sm">
                  microdataindonesia@gmail.com
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Instagram className="w-4 h-4 text-gray-400" />
                <span className="text-gray-300 text-sm">
                  microdataindonesia
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Twitter className="w-4 h-4 text-gray-400" />
                <span className="text-gray-300 text-sm">
                  microdataindonesia
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="w-4 h-4 text-gray-400" />
                <span className="text-gray-300 text-sm">
                  microdataindonesia
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          {/* Company Branding */}
          <div className="flex items-center mb-4 md:mb-0">
            <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full flex items-center justify-center mr-3">
              <svg
                className="w-5 h-5 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 2L3 7v11h4v-6h6v6h4V7l-7-5z" />
              </svg>
            </div>
            <span className="text-white font-semibold">MICRODATA</span>
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
