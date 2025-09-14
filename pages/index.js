import EPISODES from "../data/episodes";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-poppins flex flex-col">
      {/* Hero */}
      <header className="bg-[#47c1ff] text-white py-20 px-6 text-center">
        <h1 className="text-5xl font-extrabold mb-4">🍋 Lemon Lime</h1>
        <p className="text-xl max-w-2xl mx-auto mb-6">
          Unhinged & random conversations with Alex & McKenzie.  
          Quick, loud, unpredictable.
        </p>
        <div className="space-x-4">
          <button className="bg-white text-[#47c1ff] font-bold px-6 py-3 rounded-xl shadow hover:opacity-90">
            🎧 Listen Now
          </button>
          <a
            href="#episodes"
            className="border border-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-[#47c1ff] transition"
          >
            Browse Episodes
          </a>
        </div>
        <p className="mt-6 text-sm">
          Call for Guests: <span className="font-bold">606-336-1088</span>
        </p>
      </header>

      {/* Episodes */}
      <main id="episodes" className="flex-1 max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-10 text-center text-[#47c1ff]">
          Latest Episode
        </h2>

        {EPISODES.map((ep) => (
          <div
            key={ep.id}
            className="bg-white shadow-lg rounded-2xl p-8 mb-10 border border-gray-100"
