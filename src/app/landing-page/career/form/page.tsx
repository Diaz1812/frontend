"use client";

import React from "react";

export default function CareerFormPage() {
  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          Form Pendaftaran
        </h1>

        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Nama Lengkap
            </label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Nomor Telepon
            </label>
            <input
              type="tel"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Posisi yang Dilamar
            </label>
            <select className="mt-1 block w-full border border-gray-300 rounded-md p-2">
              <option>Software Developer</option>
              <option>UI/UX Designer</option>
              <option>Project Manager</option>
              <option>Marketing</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              CV / Resume (PDF)
            </label>
            <input
              type="file"
              accept=".pdf"
              className="mt-1 block w-full text-sm text-gray-700"
            />
          </div>

          <button
            type="submit"
            className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition"
          >
            Kirim Lamaran
          </button>
        </form>
      </div>
    </div>
  );
}
