import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Lemon Lime Podcast</title>
        <meta name="description" content="The official Lemon Lime Podcast website" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <main className={styles.main}>
        <header className={styles.header}>
          <img src="/logo.png" alt="Lemon Lime Podcast Logo" className={styles.logo} />
          <h1 className={styles.title}>Lemon Lime Podcast</h1>
          <p className={styles.tagline}>
            Fresh takes. Bold conversations. Always refreshing.
          </p>
        </header>

        <section className={styles.section}>
          <h2>About</h2>
          <p>
            Welcome to the <strong>Lemon Lime Podcast</strong>, where we dive into engaging
            stories, unique perspectives, and conversations that matter. Every episode is
            crisp, sharp, and full of flavor—just like a fresh lemon-lime.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Listen Now</h2>
          <div className={styles.player}>
            <iframe
              src="https://open.spotify.com/embed/show/yourpodcastid"
              width="100%"
              height="152"
              frameBorder="0"
              allow="encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Be a Guest</h2>
          <p>
            Want to join us on the show? We’re always looking for fresh voices and ideas.
          </p>
          <p className={styles.contact}>
            📞 Call or text us at:{" "}
            <a href="tel:6063361088" className={styles.phone}>
              (606) 336-1088
            </a>
          </p>
        </section>

        <footer className={styles.footer}>
          <p>&copy; {new Date().getFullYear()} Lemon Lime Podcast. All rights reserved.</p>
        </footer>
      </main>
    </>
  );
}
