// app/admin/portofolio-categories/new/page.tsx
"use client";
<<<<<<< HEAD

import React, { useState, useEffect } from "react";
import { Save, ArrowLeft, FolderOpen, AlertCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import api from "../../../../lib/api";
import toast from "react-hot-toast";
=======
import React, { useState, useEffect } from "react";
import { Save, ArrowLeft, FolderOpen, AlertCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import api from "../../../lib/api";
import toast from "react-hot-toast";
import { AxiosError } from "axios";
>>>>>>> 59c5ef4893b228218a7ac44d8eaafc767237ba10

interface PortofolioCategoryFormData {
  name: string;
}

export default function PortofolioCategoryCreatePage() {
  const router = useRouter();

<<<<<<< HEAD
  const [formData, setFormData] = useState<PortofolioCategoryFormData>({
    name: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // cek token
=======
>>>>>>> 59c5ef4893b228218a7ac44d8eaafc767237ba10
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      router.push("/login");
    }
  }, [router]);

<<<<<<< HEAD
=======
  const [formData, setFormData] = useState<PortofolioCategoryFormData>({
    name: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

>>>>>>> 59c5ef4893b228218a7ac44d8eaafc767237ba10
  const handleInputChange = (value: string) => {
    setFormData({ name: value });
    if (error) setError(null);
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      setError("Category name is required.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setError(null);

    try {
<<<<<<< HEAD
      await api.post("/admin/portofolio-categories", formData, {
=======
      await api.post("/admin/Portofolio-categories", formData, {
>>>>>>> 59c5ef4893b228218a7ac44d8eaafc767237ba10
        headers: {
          "Content-Type": "application/json",
        },
      });

      toast.success("Portofolio category added successfully!");
      router.push("/admin/portofolio-categories");
<<<<<<< HEAD
    } catch (error: any) {
      const message =
        error?.response?.data?.message || "An unexpected error occurred.";
=======
    } catch (error: unknown) {
      const err = error as AxiosError<{ message: string }>;
      const message = err.response?.data?.message || "An unexpected error occurred";
>>>>>>> 59c5ef4893b228218a7ac44d8eaafc767237ba10
      setError(message);
      toast.error(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    router.back();
  };

  return (
<<<<<<< HEAD
    <div className="p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <FolderOpen size={24} className="text-blue-500" />
          <h1 className="text-2xl font-bold text-white">
            Add New Portofolio Category
          </h1>
=======
    <div className="p-4 md:p-6 lg:p-8 max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2 md:space-x-3">
          <FolderOpen size={20} className="text-blue-500" />
          <h1 className="text-xl md:text-2xl font-bold text-white">Add New Portofolio Category</h1>
>>>>>>> 59c5ef4893b228218a7ac44d8eaafc767237ba10
        </div>
        <button
          onClick={handleCancel}
          disabled={isSubmitting}
          className="p-2 hover:bg-gray-800 rounded-lg transition-colors disabled:opacity-50"
          title="Back"
        >
          <ArrowLeft size={20} className="text-gray-300" />
        </button>
      </div>

<<<<<<< HEAD
      {/* Error */}
      {error && (
        <div className="mb-6 bg-red-900/50 border border-red-500 rounded-lg p-4 flex items-center space-x-3">
          <AlertCircle size={20} className="text-red-400" />
          <span className="text-red-200">{error}</span>
        </div>
      )}

      {/* Form */}
      <div className="bg-gray-800 rounded-xl p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Category Name */}
=======
      {error && (
        <div className="mb-4 md:mb-6 bg-red-900/50 border border-red-500 rounded-lg p-3 md:p-4 flex items-center space-x-3">
          <AlertCircle size={20} className="text-red-400" />
          <span className="text-red-200 text-sm">{error}</span>
        </div>
      )}

      <div className="bg-gray-800 rounded-xl p-4 md:p-6">
        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
>>>>>>> 59c5ef4893b228218a7ac44d8eaafc767237ba10
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Category Name *
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange(e.target.value)}
              placeholder="Enter category name"
              disabled={isSubmitting}
<<<<<<< HEAD
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg 
                         focus:outline-none focus:ring-2 focus:ring-blue-500 
                         text-white disabled:opacity-50"
            />
          </div>

          {/* Actions */}
          <div className="flex space-x-4 pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 
                         hover:from-blue-600 hover:to-blue-700 
                         disabled:opacity-50 px-4 py-2 rounded-lg 
                         flex items-center justify-center space-x-2 
                         transition-all text-white"
=======
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white disabled:opacity-50 text-sm md:text-base"
            />
          </div>

          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 pt-2 md:pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 disabled:opacity-50 px-4 py-2 rounded-lg flex items-center justify-center space-x-2 transition-all text-white text-sm"
>>>>>>> 59c5ef4893b228218a7ac44d8eaafc767237ba10
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  <span>Saving...</span>
                </>
              ) : (
                <>
                  <Save size={16} />
                  <span>Save Category</span>
                </>
              )}
            </button>
            <button
              type="button"
              onClick={handleCancel}
              disabled={isSubmitting}
<<<<<<< HEAD
              className="flex-1 bg-gray-600 hover:bg-gray-700 
                         disabled:opacity-50 px-4 py-2 rounded-lg 
                         transition-colors text-white"
=======
              className="flex-1 bg-gray-600 hover:bg-gray-700 disabled:opacity-50 px-4 py-2 rounded-lg transition-colors text-white text-sm"
>>>>>>> 59c5ef4893b228218a7ac44d8eaafc767237ba10
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> 59c5ef4893b228218a7ac44d8eaafc767237ba10
