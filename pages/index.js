// pages/index.js
import Head from "next/head";

const EPISODE = {
  id: 1,
  title: "What do we call it?",
  duration: "1:18:54",
  description: "We dropped a friend :D",
  spotifyEmbed:
    "https://open.spotify.com/embed/episode/6koPyVHIfFDnjApVBm0kOk?utm_source=generator", // replace with your own
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Lemon Lime Podcast</title>
        <meta name="description" content="The Lemon Lime Podcast" />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-green-200 to-yellow-200 p-10">
        <h1 className="text-5xl font-bold text-center mb-12 text-gray-800">
          Lemon Lime Podcast
        </h1>

        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-8 mb-10 border border-gray-100">
          <h2 className="text-2xl font-semibold mb-2">{EPISODE.title}</h2>
          <p className="text-sm text-gray-500 mb-4">{EPISODE.duration}</p>
          <p className="text-gray-700 mb-6">{EPISODE.description}</p>

          <iframe
            src={EPISODE.spotifyEmbed}
            width="100%"
            height="152"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="rounded-xl"
          ></iframe>
        </div>
      </main>
    </>
  );
}
