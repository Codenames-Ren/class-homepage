"use client";

import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { students, type Student } from "@/lib/data";
import Swal from "sweetalert2";

export default function StudentGrid() {
  const handleClick = (student: Student) => {
    if (student.url === "#" || !student.url) {
      Swal.fire({
        title: "Belum Tersedia",
        text: `Project ${student.name} belum tersedia saat ini.`,
        icon: "info",
        confirmButtonText: "OK",
        background: "#fff",
        color: "#111",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
        customClass: {
          popup:
            "border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-none",
          confirmButton: "bg-black text-white px-4 py-2 rounded font-bold",
        },
      });
    } else {
      window.open(student.url, "_blank");
    }
  };

  return (
    <section className=",ax-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-5xl font-black text-center mb-12 text-gray-900 dark:text-white">
        DAFTAR MAHASISWA
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {students.map((student, index) => (
          <Card
            key={index}
            className="cursor-pointer border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all duration-200 bg-white dark:bg-gray-800"
            onClick={() => handleClick(student)}
          >
            <CardContent className="p-6 text-center">
              <Avatar className="w-20 h-20 mx-auto mb-4 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                {student.avatar && (
                  <AvatarImage src={student.avatar} alt={student.name} />
                )}
                <AvatarFallback className="bg-gradient-to-r from-blue-800 to-blue-500 text-white font-black text-xl">
                  {student.initial}
                </AvatarFallback>
              </Avatar>
              <h3 className="font-black text-xl text-gray-900 dark:text-white leading-tight">
                {student.name}
              </h3>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
