import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import EpisodeCard from '../components/EpisodeCard';
import EPISODES from '../data/episodes';

export default function Home() {
  return (
    <>
      <Head>
        <title>Lemon Lime — Unhinged Conversations</title>
        <meta name="description" content="Lemon Lime podcast — short, loud, unpredictable conversations with Alex & McKenzie." />
      </Head>

      <div className="min-h-screen">
        <Header />

        <main className="px-6 md:px-12 pb-16">
          <section className="grid md:grid-cols-2 gap-8 items-center mt-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">Lemon Lime — quick, loud, unpredictable.</h2>
              <p className="mt-4 text-gray-700">We talk about weird stuff, change the subject mid-sentence, and invite guests who don't know what they're getting into.</p>

              <div className="mt-6 flex gap-3">
                <a id="subscribe" className="btn" href="#episodes">Listen Now</a>
                <div className="px-3 py-2 rounded-lg border text-sm text-gray-700 flex items-center gap-2">
                  <strong className="text-[var(--ll-main)]">Call for Guests:</strong>
                  <span className="font-semibold">606-336-1088</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h3 className="text-lg font-bold" style={{ color: 'var(--ll-main)' }}>Latest Episode</h3>
              <div className="mt-4">
                <div className="text-sm text-gray-600">Pilot: Lemon Zest & Chaos — Sep 14, 2025</div>
                <p className="mt-2 text-gray-700">A short and messy intro to the show. Expect bad jokes and honest interruptions.</p>

                <div className="mt-4">
                  <audio controls className="w-full" src={EPISODES[0]?.sampleAudio || ''}>
                    Your browser does not support the audio element.
                  </audio>

                  <div className="mt-3 flex gap-2">
                    <a className="text-sm" href="#">Open on Spotify</a>
                    <a className="text-sm" href="#">Apple Podcasts</a>
                    <a className="text-sm" href="#">YouTube</a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="episodes" className="mt-12">
            <h3 className="text-2xl font-bold">Episodes</h3>
            <p className="text-gray-600 mt-2">Short episodes. Long nonsense. Click an episode to open it.</p>

            <div className="mt-6 grid md:grid-cols-2 gap-6">
              {EPISODES.map(ep => <EpisodeCard key={ep.id} ep={ep} />)}
            </div>
          </section>

          <section id="about" className="mt-12">
            <h3 className="text-2xl font-bold">About Lemon Lime</h3>
            <p className="text-gray-700 mt-3">We are Alex and McKenzie. We don't always plan topics — sometimes we don't even plan sentences. The show is intentionally inconsistent: we like tangents, surprise guests, and a little chaos.</p>

            <div className="mt-6 grid md:grid-cols-2 gap-6">
              <div className="p-4 rounded-lg bg-white shadow-sm">
                <h4 className="font-semibold">Format</h4>
                <ul className="mt-2 text-sm text-gray-700 list-disc list-inside">
                  <li>Short episodes (5–20 minutes) or long rambling ones — we don't promise length consistency.</li>
                  <li>Guest requests via phone: <strong>606-336-1088</strong>.</li>
                  <li>Subscribe on your favorite podcast app.</li>
                </ul>
              </div>

              <div className="p-4 rounded-lg bg-white shadow-sm">
                <h4 className="font-semibold">Want to be a guest?</h4>
                <p className="mt-2 text-sm text-gray-700">Call/text <strong>606-336-1088</strong> with a short pitch and your availability. We record over Discord / Zoom / in-person depending on schedules.</p>
              </div>
            </div>
          </section>

          <section id="contact" className="mt-12">
            <h3 className="text-2xl font-bold">Contact</h3>

            <div className="mt-4 grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl bg-white shadow-md">
                <h4 className="font-semibold">Guest Line</h4>
                <p className="text-gray-700 mt-2">Call or text us for guest requests and collaborations.</p>
                <p className="mt-4 text-lg font-bold" style={{ color: 'var(--ll-main)' }}>Tel: <a href="tel:6063361088">606-336-1088</a></p>

                <div className="mt-6">
                  <h5 className="font-semibold">Message us</h5>
                  <form id="contactForm" className="mt-3 flex flex-col gap-3" onSubmit={async (e) => {
                    e.preventDefault();
                    const form = e.currentTarget;
                    const data = {
                      name: form.name.value,
                      contact: form.contact.value,
                      message: form.message.value
                    };
                    const res = await fetch('/api/contact', {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify(data)
                    });
                    if (res.ok) {
                      alert('Message sent. Thanks!');
                      form.reset();
                    } else {
                      alert('Send failed. Check console or setup SENDGRID_API_KEY.');
                    }
                  }}>
                    <input name="name" required className="border p-3 rounded-md" placeholder="Your name" />
                    <input name="contact" required className="border p-3 rounded-md" placeholder="Your email or phone" />
                    <textarea name="message" required className="border p-3 rounded-md" placeholder="Short pitch / message" rows={4} />
                    <button className="btn" type="submit">Send Message</button>
                  </form>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-white shadow-md">
                <h4 className="font-semibold">Where to listen</h4>
                <ul className="text-sm text-gray-700 list-disc list-inside mt-2">
                  <li>Spotify — publish via Anchor or use RSS</li>
                  <li>Apple Podcasts</li>
                  <li>YouTube (video versions)</li>
                  <li>Direct RSS: <a className="text-blue-600" href="/api/rss">/api/rss</a></li>
                </ul>

                <div className="mt-4 text-xs text-gray-500">
                  Need help publishing? Add your episodes in <code>data/episodes.js</code>, then use the RSS endpoint to submit to podcast platforms.
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
