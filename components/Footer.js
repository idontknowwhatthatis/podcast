export default function Footer() {
  return (
    <footer className="py-8 px-6 md:px-12 border-t text-sm text-gray-600">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[var(--ll-main)] flex items-center justify-center text-white">LL</div>
          <div>
            <div className="font-semibold">Lemon Lime</div>
            <div className="text-xs">Unhinged conversations — Alex & McKenzie</div>
          </div>
        </div>
        <div className="text-xs">© {new Date().getFullYear()} Lemon Lime. All rights reserved.</div>
      </div>
    </footer>
  );
}
