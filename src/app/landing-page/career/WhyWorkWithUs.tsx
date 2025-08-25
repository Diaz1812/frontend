// components/WhyWorkWithUs.tsx
"use client";

import React, { useEffect, useState } from "react";
import { HandshakeIcon } from "lucide-react";
import api from "../../lib/api"; // sesuaikan path-nya

type CareerItem = {
  id: number;
  title: string;
  description: string;
};

const WhyWorkWithUs = () => {
  const [items, setItems] = useState<CareerItem[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await api.get("/careers");
      const data = res.data.data || res.data;
      setItems(data);
    } catch (error) {
      console.error("Error fetching careers:", error);
      setItems([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">
          Why Work With Us?
        </h2>

        {loading ? (
          <p className="text-gray-500">Loading...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 text-left">
            {items.map((item) => (
              <div key={item.id} className="flex items-start space-x-4">
                <div className="p-2 bg-gray-200 rounded-lg">
                  <HandshakeIcon className="w-6 h-6 text-gray-700" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default WhyWorkWithUs;
