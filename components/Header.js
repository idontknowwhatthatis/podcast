import Link from 'next/link';

export default function Header() {
  return (
    <header className="py-6 px-6 md:px-12 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-[var(--ll-main)] flex items-center justify-center text-white font-bold">LL</div>
        <div>
          <h1 className="text-xl md:text-2xl font-bold">Lemon Lime</h1>
          <p className="text-xs text-gray-600">Unhinged & random conversations — Alex & McKenzie</p>
        </div>
      </div>

      <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
        <a href="#episodes" className="hover:underline">Episodes</a>
        <a href="#about" className="hover:underline">About</a>
        <a href="#contact" className="hover:underline">Contact</a>
        <a href="#subscribe" className="btn">Subscribe</a>
      </nav>
    </header>
  );
}
