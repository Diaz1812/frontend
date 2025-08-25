import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
<<<<<<< HEAD
import "./globals.css";
import { Toaster } from 'react-hot-toast';
=======
import './globals.css';
>>>>>>> 59c5ef4893b228218a7ac44d8eaafc767237ba10

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "MicroData Project",
  description: "Admin Dashboard and Landing Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`}
      >
        {children}
        <Toaster position="top-right" reverseOrder={false} />
      </body>
    </html>
  );
}
