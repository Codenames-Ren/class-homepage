import Header from "@/components/ui/Header";
import ClassCarousel from "@/components/ui/classCarousel";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header />
      <ClassCarousel />
    </main>
  );
}
