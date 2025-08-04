"use client"
import { useState, useEffect } from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"

type Testimonial = {
  id: number
  message: string
  name: string
  position: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    message:
      "Lorem ipsum dolor sit amet consectetur. Arcu justo dolor curabitur facilisis. Malesuada fames magna cursus ultrices sit amet ultricies.",
    name: "Udin Kasbon",
    position: "Jabatan",
  },
  {
    id: 2,
    message:
      "Pelayanan sangat baik dan profesional. Sangat puas dengan hasil kerjanya!",
    name: "Siti Joko",
    position: "Manager",
  },
  {
    id: 3,
    message:
      "Layanan sangat memuaskan, saya pasti akan kembali.",
    name: "Rudi Hartono",
    position: "Direktur",
  },
  {
    id: 4,
    message:
      "Timnya sangat responsif dan cepat dalam menyelesaikan masalah.",
    name: "Tini Wulandari",
    position: "Customer",
  },
]

export default function OurClient() {
  const [startIndex, setStartIndex] = useState(0)
  const [itemsPerPage, setItemsPerPage] = useState(2)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1)
      } else {
        setItemsPerPage(2)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const handleNext = () => {
    setStartIndex((prev) =>
      prev + itemsPerPage < testimonials.length ? prev + itemsPerPage : 0
    )
  }

  const handlePrev = () => {
    setStartIndex((prev) =>
      prev - itemsPerPage >= 0
        ? prev - itemsPerPage
        : testimonials.length - itemsPerPage
    )
  }

  const visibleTestimonials = testimonials.slice(startIndex, startIndex + itemsPerPage)

  return (
    <section className="bg-white pt-[160px] pr-[120px] pb-[160px] pl-[120px]">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-10">
          <p className="text-2xl text-orange-500 italic font-medium" style={{ fontFamily: "Dancing Script" }}>
            Our Client
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Pengalaman Klien</h2>
          <p className="text-gray-500 text-lg">Bersama Kami</p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-[120px]">
          {visibleTestimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white">
              <p className="text-gray-700 text-sm leading-relaxed">
                {testimonial.message}
              </p>
              <div className="mt-6">
                <h4 className="font-semibold text-sm text-gray-800">{testimonial.name}</h4>
                <p className="text-xs text-gray-500">{testimonial.position}</p>
                <hr className="mt-2 border-gray-200" />
              </div>
            </div>
          ))}
        </div>

        {/* Tombol Navigasi */}
        <div className="mt-10 flex justify-end md:justify-end gap-4 md:gap-4 sm:justify-end sm:mt-8">
          <button
            onClick={handlePrev}
            className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white rounded-full px-4 py-2 transition"
          >
            <ArrowLeft size={18} />
          </button>
          <button
            onClick={handleNext}
            className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white rounded-full px-4 py-2 transition"
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  )
}
