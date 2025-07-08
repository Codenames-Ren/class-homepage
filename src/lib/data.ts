//Carousel Type
export type Slide = {
  title: string;
  description: string;
  bgColor: string;
};

// Student Type
export type Student = {
  name: string;
  initial: string;
  url: string;
  avatar?: string;
};

export const students: Student[] = [
  { name: "Ahmad Fadli", initial: "AF", url: "#" },
  {
    name: "Bayu Sukma",
    initial: "BS",
    url: "https://mukromah-hijrah.ti24se3.my.id",
    avatar:
      "https://upload-os-bbs.hoyolab.com/upload/2024/12/20/303087208/b031bbf8db3585a18f5e42fa60a2f8a1_5116011547625521972.png?x-oss-process=image%2Fresize%2Cs_1000%2Fauto-orient%2C0%2Finterlace%2C1%2Fformat%2Cwebp%2Fquality%2Cq_70",
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
export const carouselData: Slide[] = [
  {
    title: "Documentation of SE-3",
    description: "Tempat foto kegiatan kelas akan ditampilkan di sini",
    bgColor: "bg-gradient-to-r from-blue-800 to-blue-500",
  },
  {
    title: "Kegiatan Pembelajaran",
    description: "Dokumentasi kegiatan belajar mengajar",
    bgColor: "bg-gradient-to-r from-green-700 to-green-500",
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
