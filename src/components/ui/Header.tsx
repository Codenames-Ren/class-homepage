import { Button } from "./button";

export default function Header() {
  return (
    <header className="border-2 border-black shadow-[4px_4px_0_black bg-blue-600 text-black p-6 mb-6">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">TI24 SE 3</h1>
          <p className="text-sm">Global Institute</p>
        </div>
        <button className="border-black shadow-[2px_2px_0_black">🌙</button>
      </div>
    </header>
  );
}
