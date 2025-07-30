// components/ContactSection.tsx
import React from 'react';

const ContactSection: React.FC = () => {
  return (
    <section className="bg-white flex justify-center items-center">
      <div className="w-[1512px] h-[687px] px-12 py-16 flex items-center justify-between">
        {/* Form */}
        <form className="w-1/2 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Nama"
              className="border border-black text-gray-900 rounded-md px-4 py-2 text-sm"
            />
            <input
              type="email"
              placeholder="Email"
              className="border border-black text-gray-900 rounded-md px-4 py-2 text-sm"
            />
            <input
              type="text"
              placeholder="Phone"
              className="border border-black text-gray-900 rounded-md px-4 py-2 text-sm"
            />
            <input
              type="text"
              placeholder="Company"
              className="border border-black text-gray-900 rounded-md px-4 py-2 text-sm"
            />
          </div>
          <textarea
            placeholder="Pesan"
            rows={5}
            className="w-full border border-black text-gray-900 rounded-md px-4 py-2 text-sm"
          ></textarea>
          <button
            type="submit"
            className="bg-orange-500 text-white px-6 py-2 rounded-full text-sm hover:bg-orange-600 transition"
          >
            Button
          </button>
        </form>

        {/* Text */}
        <div className="w-1/3 text-left">
          <p className="italic text-gray-700 mb-1">Contact Us</p>
          <h2 className="text-3xl font-bold text-gray-900 leading-snug">
            Konsultasikan <br />
            <span className="font-normal">Rencana Proyek Anda</span>
          </h2>
          <p className="text-sm text-gray-600 mt-4 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Amet libero pharetra elit
            tellus libero tortor eget.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
