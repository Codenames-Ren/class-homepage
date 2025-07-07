import Header from "@/components/Header";
import ClassCarousel from "@/components/classCarousel";
import StudentGrid from "@/components/StudentGrid";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header />
      <ClassCarousel />
      <StudentGrid />
      <Footer />
    </main>
  );
}
