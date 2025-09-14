import { useRouter } from 'next/router';
import EPISODES from '../../data/episodes';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function EpisodePage() {
  const router = useRouter();
  const { id } = router.query;
  const ep = EPISODES.find(e => e.id === id) || EPISODES[0];

  return (
    <>
      <Header />

      <main className="px-6 md:px-12 pb-12">
        <div className="max-w-3xl mx-auto mt-12">
          <div className="bg-white p-8 rounded-2xl shadow-md">
            <h1 className="text-2xl font-bold">{ep.title}</h1>
            <div className="text-sm text-gray-500 mt-1">{ep.date} • {ep.duration}</div>
            <p className="mt-4 text-gray-700">{ep.description}</p>

            <div className="mt-6">
              <audio controls className="w-full" src={ep.sampleAudio}>
                Your browser does not support audio.
              </audio>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
