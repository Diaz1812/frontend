import React from "react";
import { MailIcon, InstagramIcon, LinkedinIcon } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      {/* CTA */}
      <div className="py-16 text-left ml-30">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-white">
          Bergabunglah Dengan Kami
        </h2>
        <p className="text-sm sm:text-base text-gray-300 mb-6 max-w-md">
          Raih kesempatan berkarier di dunia teknologi bersama Microdata
          Indonesia. Kami membuka peluang bagi Anda untuk berkembang,
          berinovasi, dan menjadi bagian dari tim yang profesional.
        </p>
        <Link href="/career/form">
          <button className="border border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-gray-800 transition">
            Bergabung Sekarang
          </button>
        </Link>
      </div>

      {/* Alamat & Sosial */}
      <div className="bg-gray-700 py-10 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-sm text-gray-300">
          <div>
            <h3 className="font-bold text-white mb-2">Bandar Lampung</h3>
            <p>
              Jl. Endro Suratmin No.52d, Way Dadi, Kec. Sukarame, Kota Bandar
              Lampung, Lampung 35131
            </p>
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Jakarta</h3>
            <p>
              Jl. Endro Suratmin No.52d, Way Dadi, Kec. Sukarame, Kota Bandar
              Lampung, Lampung 35131
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <MailIcon className="w-4 h-4" />
              <span>microdataindonesia@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <InstagramIcon className="w-4 h-4" />
              <span>microdataindonesia</span>
            </div>
            <div className="flex items-center space-x-2">
              <LinkedinIcon className="w-4 h-4" />
              <span>microdataindonesia</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="bg-gray-800 border-t border-gray-700 py-4 px-4 text-sm text-gray-400 flex items-center justify-between max-w-7xl mx-auto">
        <div>
          {/* Ganti dengan <Image> jika pakai Next.js dan punya logo */}
          <span className="font-bold text-white">MICRODATA</span>
        </div>
        <div>2025 PT. Microdata Indonesia all rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
