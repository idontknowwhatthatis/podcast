import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Lemon Lime Podcast</title>
        <meta
          name="description"
          content="The official Lemon Lime Podcast website"
        />
        <link rel="icon" href="/logo.png" />
        {/* Google Fonts: Poppins */}
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className={styles.main}>
        <header className={styles.header}>
          <img
            src="/logo.png"
            alt="Lemon Lime Podcast Logo"
            className={styles.logo}
          />
          <h1 className={styles.title}>Lemon Lime Podcast</h1>
          <p className={styles.tagline}>
            Randomness, 24/7.
          </p>
        </header>

        <section className={styles.section}>
          <h2>About</h2>
          <p>
            Welcome to the <strong>Lemon Lime Podcast</strong>, where we do random stuff
            and hope that you like it.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Latest Episode: 1</h2>
          <div className={styles.player}>
            <iframe
              src="https://open.spotify.com/embed/episode/6koPyVHIfFDnjApVBm0kOk?utm_source=generator"
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
            Want to join us on the show?
          </p>
          <p className={styles.contact}>
            📞 Call or text us at:{" "}
            <a href="tel:6063361088" className={styles.phone}>
              (606) 336-1088
            </a>
          </p>
        </section>

        <footer className={styles.footer}>
          <p>
            &copy; {new Date().getFullYear()} Lemon Lime Podcast. All rights
            reserved.
          </p>
        </footer>
      </main>
    </>
  );
}
