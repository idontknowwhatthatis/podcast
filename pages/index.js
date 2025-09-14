// pages/index.js
import Head from "next/head";

const EPISODE = {
  id: 1,
  title: "What do we call it?",
  duration: "1:18:54",
  description: "We dropped a friend :D",
  spotifyEmbed:
    "https://open.spotify.com/embed/episode/4rOoJ6Egrf8K2IrywzwOMk?utm_source=generator", // replace with your actual episode link
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Lemon Lime Podcast</title>
        <meta name="description" content="The Lemon Lime Podcast" />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-lime-200 via-yellow-100 to-green-200 p-10 flex flex-col items-center">
        {/* Header */}
        <h1 className="text-6xl font-extrabold text-gray-800 mb-6 drop-shadow-lg text-center">
          🍋 Lemon Lime Podcast
        </h1>
        <p className="text-lg text-gray-700 mb-12 text-center max-w-xl">
          Fresh takes, tangy laughs, and just the right amount of chaos.
        </p>

        {/* Episode Card */}
        <div className="max-w-3xl w-full bg-white shadow-2xl rounded-3xl p-10 border border-gray-200 transform transition duration-300 hover:scale-105 hover:shadow-green-400/30">
          <h2 className="text-3xl font-bold mb-2 text-gray-900">
            {EPISODE.title}
          </h2>
          <p className="text-sm text-gray-500 mb-4">⏱ {EPISODE.duration}</p>
          <p className="text-gray-700 mb-6">{EPISODE.description}</p>

          <iframe
            src={EPISODE.spotifyEmbed}
            width="100%"
            height="152"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="rounded-xl shadow-md"
          ></iframe>
        </div>

        {/* Footer */}
        <footer className="mt-16 text-gray-600 text-sm">
          © {new Date().getFullYear()} Lemon Lime Podcast · All Rights Reserved
        </footer>
      </main>
    </>
  );
}
