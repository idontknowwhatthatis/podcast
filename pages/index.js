import EPISODES from "../data/episodes";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900 font-poppins">
      {/* Navbar */}
      <nav className="w-full border-b border-gray-200">
        <div className="max-w-5xl mx-auto flex justify-between items-center py-4 px-6">
          <h1 className="text-xl font-bold text-[#47c1ff]">🍋 Lemon Lime</h1>
          <div className="space-x-6 text-sm font-medium">
            <a href="#episodes" className="hover:text-[#47c1ff]">Episodes</a>
            <a href="#about" className="hover:text-[#47c1ff]">About</a>
            <a href="#contact" className="hover:text-[#47c1ff]">Contact</a>
            <button className="bg-[#47c1ff] text-white px-4 py-2 rounded-lg font-semibold hover:opacity-90">
              Subscribe
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="text-center py-16 px-6">
        <h2 className="text-5xl font-extrabold mb-4">Lemon Lime</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Unhinged & random conversations — Alex & McKenzie
        </p>
        <p className="mt-4 text-xl font-semibold">
          Quick, loud, unpredictable.
        </p>
        <button className="mt-8 bg-[#47c1ff] text-white px-6 py-3 rounded-lg font-bold hover:opacity-90">
          🎧 Listen Now
        </button>
        <p className="mt-4 text-sm">
          Call for Guests:{" "}
          <span className="font-bold">606-336-1088</span>
        </p>
      </header>

      {/* Episodes */}
      <main id="episodes" className="max-w-4xl mx-auto px-6 pb-16">
        <h3 className="text-2xl font-bold text-[#47c1ff] mb-6">
          Latest Episode
        </h3>
        {EPISODES.map((ep) => (
          <div
            key={ep.id}
            className="bg-white shadow-md rounded-2xl p-6 mb-6 border border-gray-100"
          >
            <h4 className="text-xl font-semibold">{ep.title}</h4>
            <p className="text-sm text-gray-500 mb-2">
              {ep.date} • {ep.duration}
            </p>
            <p className="text-gray-700 mb-4">{ep.description}</p>

            {ep.spotifyEmbed ? (
              <div
                className="rounded-lg overflow-hidden"
                dangerouslySetInnerHTML={{ __html: ep.spotifyEmbed }}
              />
            ) : (
              <audio controls className="w-full mt-2">
                <source src={ep.sampleAudio} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            )}
          </div>
        ))}
      </main>

      {/* Footer */}
      <footer
        id="contact"
        className="bg-gray-100 border-t border-gray-200 py-6 text-center text-sm"
      >
        <p>© {new Date().getFullYear()} Lemon Lime Podcast</p>
      </footer>
    </div>
  );
}
