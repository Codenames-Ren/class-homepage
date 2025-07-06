// app/page.tsx
"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// Data siswa
const students = [
  { name: "Ahmad Fadli", initial: "AF", url: "#" },
  {
    name: "Bayu Sukma",
    initial: "BS",
    url: "https://mukromah-hijrah.ti24se3.my.id",
  },
  { name: "Citra Dewi", initial: "CD", url: "#" },
  { name: "Dimas Pratama", initial: "DP", url: "#" },
  { name: "Eka Putri", initial: "EP", url: "#" },
  { name: "Fajar Ramadan", initial: "FR", url: "#" },
  { name: "Gita Melani", initial: "GM", url: "#" },
  { name: "Hendra Wijaya", initial: "HW", url: "#" },
  { name: "Indira Sari", initial: "IS", url: "#" },
  { name: "Joko Susilo", initial: "JS", url: "#" },
  { name: "Kartika Dewi", initial: "KD", url: "#" },
  { name: "Lukman Hakim", initial: "LH", url: "#" },
  { name: "Maya Sari", initial: "MS", url: "#" },
  { name: "Nanda Pratama", initial: "NP", url: "#" },
  { name: "Ovi Rahayu", initial: "OR", url: "#" },
  { name: "Putra Wijaya", initial: "PW", url: "#" },
  { name: "Qori Amalia", initial: "QA", url: "#" },
  { name: "Rizki Fadilah", initial: "RF", url: "#" },
];

// Data carousel
const carouselData = [
  {
    title: "Selamat Datang di Kelas XII-A",
    description: "Tempat foto kegiatan kelas akan ditampilkan di sini",
    bgColor: "bg-gradient-to-r from-blue-500 to-purple-600",
  },
  {
    title: "Kegiatan Pembelajaran",
    description: "Dokumentasi kegiatan belajar mengajar",
    bgColor: "bg-gradient-to-r from-green-500 to-teal-600",
  },
  {
    title: "Album Kelas",
    description: "Album Kelas",
    bgColor: "bg-gradient-to-r from-pink-500 to-rose-600",
  },
  {
    title: "Album Kelas",
    description: "Album Kelas",
    bgColor: "bg-gradient-to-r from-orange-500 to-red-600",
  },
  {
    title: "Prestasi Kelas",
    description: "Pencapaian dan penghargaan kelas",
    bgColor: "bg-gradient-to-r from-indigo-500 to-blue-600",
  },
];

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDark, setIsDark] = useState(false);

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Theme toggle
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselData.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + carouselData.length) % carouselData.length
    );
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const handleStudentClick = (student: (typeof students)[0]) => {
    if (student.url && student.url !== "#") {
      window.open(student.url, "_blank");
    } else {
      alert(`Project ${student.name} belum tersedia`);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] border-4 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="text-white">
              <h1 className="text-3xl font-black tracking-tight">
                KELAS XII-A
              </h1>
              <p className="text-blue-100 font-bold">SMA Negeri 1 Jakarta</p>
            </div>
            <Button
              onClick={() => setIsDark(!isDark)}
              variant="reverse"
              size="icon"
              className="bg-white hover:bg-gray-100 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
            >
              {isDark ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </header>

      {/* Carousel */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="relative">
          <Card className="overflow-hidden border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
            <CardContent className="p-0">
              <div className="relative h-96 overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-in-out h-full"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {carouselData.map((slide, index) => (
                    <div
                      key={index}
                      className={`min-w-full h-full flex items-center justify-center ${slide.bgColor} relative`}
                    >
                      <div className="text-center text-white z-10">
                        <h3 className="text-4xl font-black mb-4 drop-shadow-lg">
                          {slide.title}
                        </h3>
                        <p className="text-xl font-bold drop-shadow-lg">
                          {slide.description}
                        </p>
                      </div>
                      <div className="absolute inset-0 bg-black opacity-20"></div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Carousel Controls */}
          <Button
            onClick={prevSlide}
            variant="reverse"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-100 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            onClick={nextSlide}
            variant="reverse"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-100 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {carouselData.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-4 h-4 border-2 border-black transition-all duration-200 ${
                  index === currentSlide
                    ? "bg-blue-600 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                    : "bg-white hover:bg-gray-100"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Students Gallery */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-5xl font-black text-center mb-12 text-gray-900 dark:text-white">
          DAFTAR SISWA
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {students.map((student, index) => (
            <Card
              key={index}
              className="cursor-pointer border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all duration-200 bg-white dark:bg-gray-800"
              onClick={() => handleStudentClick(student)}
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <span className="text-white font-black text-xl">
                    {student.initial}
                  </span>
                </div>
                <h3 className="font-black text-sm text-gray-900 dark:text-white leading-tight">
                  {student.name}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-black text-white py-12 border-t-4 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-black mb-4">KELAS XII-A</h3>
          <p className="text-gray-300 font-bold mb-2">SMA Negeri 1 Jakarta</p>
          <p className="text-gray-300 font-bold mb-2">Tahun Ajaran 2024/2025</p>
          <p className="text-gray-400 font-bold">
            &copy; 2024 Homepage Kelas XII-A. Semua hak dilindungi.
          </p>
        </div>
      </footer>
    </div>
  );
}
