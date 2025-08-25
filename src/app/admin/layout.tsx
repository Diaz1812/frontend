<<<<<<< HEAD
"use client";
import React, { useState } from 'react';
import Sidebar from '../../../components/Sidebar';
import Header from '../../../components/Header';
import AuthGuard from '../../../components/AuthGuard';
=======
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from 'react-hot-toast'; 

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Admin Dashboard',
  description: 'Admin dashboard for managing content',
};
>>>>>>> 59c5ef4893b228218a7ac44d8eaafc767237ba10

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
<<<<<<< HEAD
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <AuthGuard>
      <div className="min-h-screen bg-gray-900 text-white">
        <div className="flex">
          {/* Sidebar */}
          <Sidebar
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
          />

          {/* Main Content */}
          <div className="flex-1 flex flex-col">
            {/* Header */}
            <Header
              setSidebarOpen={setSidebarOpen}
            />

            {/* Content */}
            <main className="flex-1">
              {children}
            </main>
          </div>
        </div>
      </div>
    </AuthGuard>
  );
}

=======
  return (
    <div className={inter.className}>
      {children}
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
}
>>>>>>> 59c5ef4893b228218a7ac44d8eaafc767237ba10
