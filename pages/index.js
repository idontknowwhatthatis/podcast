import { useEffect, useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [theme, setTheme] = useState("light");

  // Load saved theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  // Toggle theme and save
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

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
          <p className={styles.tagline}>Randomness, 24/7.</p>

          {/* 🌙☀️ Toggle Switch */}
          <div className={styles.themeToggle} onClick={toggleTheme}>
            <div
              className={`${styles.toggleCircle} ${
                theme === "dark" ? styles.toggleDark : ""
              }`}
            ></div>
          </div>
        </header>

        <section className={styles.section}>
          <h2>About</h2>
          <p>
            Welcome to the <strong>Lemon Lime Podcast</strong>, where we do
            random stuff and hope that you like it.
          </p>
        </section>

<section className={`${styles.section} ${styles.sectionWide}`}>
  <h2>Latest Episode: 1</h2>
  <div className={styles.player}>
    <iframe
      title="Lemon Lime Podcast Episode 1"
      src="https://open.spotify.com/embed/episode/6koPyVHIfFDnjApVBm0kOk?utm_source=generator"
      width="100%"
      height="232"
      frameBorder="0"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    ></iframe>
  </div>
</section>


        <section className={styles.section}>
          <h2>Be a Guest</h2>
          <p>Want to join us on the show?</p>
          <p className={styles.contact}>
            📞 Call or text us at:{" "}
            <a href="tel:6063361088" className={styles.phone}>
              (606) 336-1088
            </a>
          </p>
        </section>
<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSe44eA0-S6ZGwfKQiakj-hx_G-h7E46GzqfVMxllECWAdzhpQ/viewform?embedded=true" width="640" height="606" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        <footer className={styles.footer}>
          <p>
            &copy; {new Date().getFullYear()} Lemon Lime Podcast. All rights
            reserved. Troll callers/messagers will be blocked.
          </p>
        </footer>
      </main>
    </>
  );
}
