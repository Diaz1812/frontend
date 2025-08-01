"use client";

import { Button } from '../ui/button';
import React from 'react';

const Header = () => {
  return (
    <header className="w-full bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img
                src="/images/logomicrodata.jpg"
                alt="Logo"
                className="w-24 h-24 object-contain"
              />
            </div>
          </div>

          {/* Navigation Menu */}
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="/" className="text-[#666666] focus:underline px-3 py-2 text-sm font-medium transition-colors hover:text-white">
                Home
              </a>
              <a href="/service" className="text-[#666666] focus:underline px-3 py-2 text-sm font-medium transition-colors hover:text-white">
                Our Service
              </a>
              <a href="/#portofolio" className="text-[#666666] focus:underline px-3 py-2 text-sm font-medium transition-colors hover:text-white">
                Portfolio
              </a>
              <a href="/career" className="text-[#666666] focus:underline px-3 py-2 text-sm font-medium transition-colors hover:text-white">
                Career
              </a>
              <a href="/blog" className="text-[#666666] focus:underline px-3 py-2 text-sm font-medium transition-colors hover:text-white">
                Blog
              </a>
            </div>
          </nav>

          {/* Contact Button */}
          <div className="hidden md:block">
            <Button 
              className="text-[#666666] focus:underline px-3 py-2 text-sm font-medium transition-colors hover:text-white"
            >
              Contact Us
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-[#666666] hover:text-white focus:outline-none focus:text-white">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;