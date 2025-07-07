export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to to-black text-white py-12 border-t-4 border-black mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-3xl font-black mb-4 tracking-tight">TI24 SE 3</h3>
        <p className="text-gray-300 font-bold mb-2">Global Institute</p>
        <p className="text-gray-300 font-bold mb-2">Tahun Ajaran 2025/2026</p>
        <p className="text-gray-400 font-bold text-sm">
          &copy; {new Date().getFullYear()} Homepage Kelas TI24 SE 3. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
}
