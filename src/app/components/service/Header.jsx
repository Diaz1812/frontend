"use client";

import { Button } from "../ui/button";
import React from "react";

const Header = () => {
  return (
    <header className="w-full bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 2L3 7v11h4v-6h6v6h4V7l-7-5z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Navigation Menu */}
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a
                href="/home"
                className="text-gray-600 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors"
              >
                Home
              </a>
              <a
                href="/service"
                className="text-gray-600 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors"
              >
                Our Service
              </a>
              <a
                href="/portofolio"
                className="text-gray-600 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors"
              >
                Portfolio
              </a>
              <a
                href="/career"
                className="text-gray-600 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors"
              >
                Career
              </a>
              <a
                href="/blog"
                className="text-gray-600 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors"
              >
                Blog
              </a>
            </div>
          </nav>

          {/* Contact Button */}
          <div className="hidden md:block">
            <Button className="border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400">
              Contact Us
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900">
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
