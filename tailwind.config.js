// frontend/tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // Pastikan ini ada jika Anda menggunakan folder src
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // Menambahkan font Poppins
      },
      colors: {
        // Jika Anda ingin menggunakan #555555 sebagai kelas Tailwind
        // Anda bisa tambahkan di sini, misalnya:
        // 'dark-gray-555': '#555555',
      }
    },
  },
  plugins: [],
}