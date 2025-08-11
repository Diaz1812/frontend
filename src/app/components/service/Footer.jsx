import { Mail, Instagram, Twitter, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer
      className="relative w-full text-white py-16 px-6 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/footer_bawah.png')" }}
    >
      {/* Overlay hitam transparan agar teks tetap terbaca */}
      <div className="bg-black bg-opacity-10 absolute inset-0 z-10"></div>

      {/* Gradasi terang di tengah bawah - hanya untuk mobile */}
      <div
        className="absolute bottom-0 left-0 w-full h-full z-10 md:hidden"
        style={{
          background:
            "radial-gradient(circle at 50% 150%, rgba(255, 160, 0, 0.6) 0%, rgba(0, 0, 0, 0) 60%)",
        }}
      ></div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Bandar Lampung */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Bandar Lampung
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Jl. Endro Suratmin No. 53A, Way Dadi,
              <br />
              Kec. Sukarame, Kota Bandar Lampung,
              <br />
              Lampung 35131
            </p>
          </div>

          {/* Jakarta */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Jakarta</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Jl. Endro Suratmin No. 53A, Way Dadi,
              <br />
              Kec. Sukarame, Kota Bandar Lampung,
              <br />
              Lampung 35131
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-white" />
                <span className="text-white text-sm">
                  microdataindonesia@gmail.com
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Instagram className="w-5 h-5 text-white" />
                <span className="text-white text-sm">microdataindonesia</span>
              </div>
              <div className="flex items-center space-x-2">
                <Twitter className="w-5 h-5 text-white" />
                <span className="text-white text-sm">microdataindonesia</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="w-5 h-5 text-white" />
                <span className="text-white text-sm">microdataindonesia</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <img
              src="microdata.png"
              alt="Microdata Logo"
              width={100}
              height={100}
              className="mr-2"
            />
          </div>
          <div className="text-white text-sm text-center md:text-right">
            © 2025 PT. Microdata Indonesia all rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
