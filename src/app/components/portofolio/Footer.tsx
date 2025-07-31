import { Mail, Instagram, Twitter, Linkedin } from 'lucide-react'
import type { FC } from 'react'
import Image from 'next/image';

const Footer: FC = () => {
  return (
    // Mengubah background footer menjadi gradient
    // Sesuaikan warna 'from' dan 'to' agar sesuai dengan gradasi di gambar (image_6adbbe.png)
    <footer className="bg-gradient-to-r from-[#222222] to-[#402008] text-white py-12"> {/* */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section - Grid Locations & Contact */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Bandar Lampung Location */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Bandar Lampung</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Jl. Endro Suratmin No.52d, Way Dadi,<br />
              Kec. Sukarame - Kota Bandar<br />
              Lampung, Lampung 35131
            </p>
          </div>

          {/* Jakarta Location */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Jakarta</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Jl. Endro Suratmin No.52d, Way Dadi,<br />
              Kec. Sukarame - Kota Bandar<br />
              Lampung, Lampung 35131
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-gray-400" />
                <span className="text-gray-300 text-sm">microdataindonesia@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Instagram className="w-5 h-5 text-gray-400" />
                <span className="text-gray-300 text-sm">microdataindonesia</span>
              </div>
              <div className="flex items-center space-x-2">
                <Twitter className="w-5 h-5 text-gray-400" /> {/* Atau ganti dengan TikTok jika ada iconnya */}
                <span className="text-gray-300 text-sm">microdataindonesia</span>
              </div>
              <div className="flex items-center space-x-2">
                <Linkedin className="w-5 h-5 text-gray-400" />
                <span className="text-gray-300 text-sm">microdataindonesia</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Company Branding & Copyright */}
        <div className="pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          {/* Company Branding */}
          <div className="flex items-center mb-4 md:mb-0">
            <Image
              src="/microdata.png"
              alt="Microdata Logo"
              width={100}
              height={100}
              className="mr-2"
            />
          </div>

          {/* Copyright */}
          <div className="text-gray-400 text-sm text-center md:text-right">
            © 2025 PT. Microdata Indonesia all rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;