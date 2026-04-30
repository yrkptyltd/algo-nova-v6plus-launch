"use client";

import { useEffect, useRef } from "react";

export default function Home() {
  const sections = useRef<any[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0px)";
          }
        });
      },
      { threshold: 0.2 }
    );

    sections.current.forEach((el) => el && observer.observe(el));
  }, []);

  return (
    <main style={styles.page}>

      {/* FLOAT ROBOT */}
      <img src="/nova.png" style={styles.floatingRobot} />

      {/* HERO */}
      <section style={styles.hero}>
        <div style={styles.left}>
          <p style={styles.update}>NEW UPDATE — v6+ LIVE</p>

          <h1 style={styles.title}>
            ALGO NOVA EA <span style={styles.red}>v6+</span>
          </h1>

          <p style={styles.subtitle}>
            AI-powered automated trading built for precision and consistency.
          </p>

          <p style={styles.stars}>★★★★★ Trusted by 3500+ traders</p>

          <div style={styles.ctaRow}>
            <a href="#access" style={styles.ctaPrimary}>
              Get Access
            </a>

            <a href="https://wa.me/27616260886" style={styles.ctaSecondary}>
              Live Support
            </a>
          </div>
        </div>

        <div style={styles.right}>
          <div style={styles.glow}></div>
          <img src="/nova.png" style={styles.heroImage} />
        </div>
      </section>

      {/* FEATURES */}
      <section
        ref={(el) => (sections.current[0] = el)}
        style={styles.reveal}
      >
        <h2 style={styles.heading}>Why Traders Choose v6+</h2>

        <div style={styles.grid}>
          <div style={styles.card}>📊 AI Chart Scanner</div>
          <div style={styles.card}>🎯 Precision Entries</div>
          <div style={styles.card}>⚡ Fast Execution</div>
          <div style={styles.card}>🤖 Fully Automated</div>
        </div>
      </section>

      {/* ACCESS */}
      <section
        id="access"
        ref={(el) => (sections.current[1] = el)}
        style={styles.reveal}
      >
        <h2 style={styles.heading}>Choose Your Access</h2>

        <div style={styles.grid}>
          <a href="https://payf.st/hl78w" style={styles.product}>
            Android — R1500 / $250
          </a>

          <a href="https://payf.st/2xmr6" style={styles.product}>
            iOS — R2000 / $300
          </a>

          <a href="https://payf.st/ex45h" style={styles.product}>
            PC Lifetime — R3500 / $500
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={styles.footer}>
        <p>All rights reserved since May 2025</p>
        <p>Founder: _nhlanhla_za</p>
      </footer>

      {/* LIVE SUPPORT */}
      <a
        href="https://wa.me/27616260886"
        style={styles.chat}
      >
        Live Support 💬
      </a>

    </main>
  );
}

const styles: any = {
  page: {
    background: "#ffffff",
    color: "#000",
    fontFamily: "Inter, sans-serif",
  },

  hero: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "100px 20px",
  },

  left: { flex: 1 },

  right: { flex: 1, textAlign: "center", position: "relative" },

  heroImage: {
    width: "260px",
    borderRadius: "20px",
    transition: "0.4s",
  },

  glow: {
    position: "absolute",
    width: "260px",
    height: "260px",
    background: "red",
    filter: "blur(70px)",
  },

  floatingRobot: {
    position: "fixed",
    top: "20px",
    right: "20px",
    width: "60px",
    animation: "float 5s infinite",
  },

  title: {
    fontSize: "44px",
    fontWeight: 900,
  },

  red: { color: "red" },

  subtitle: { opacity: 0.7 },

  stars: { color: "gold" },

  update: { color: "red", fontWeight: "bold" },

  ctaRow: {
    display: "flex",
    gap: "10px",
    marginTop: "20px",
  },

  ctaPrimary: {
    background: "red",
    color: "white",
    padding: "12px",
    borderRadius: "8px",
    textDecoration: "none",
    transition: "0.3s",
  },

  ctaSecondary: {
    border: "1px solid red",
    padding: "12px",
    borderRadius: "8px",
    color: "red",
    textDecoration: "none",
  },

  grid: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
  },

  card: {
    background: "#fafafa",
    padding: "18px",
    borderRadius: "12px",
    transition: "0.3s",
  },

  product: {
    background: "red",
    color: "white",
    padding: "15px",
    borderRadius: "10px",
    textDecoration: "none",
    transition: "0.3s",
  },

  footer: {
    textAlign: "center",
    marginTop: "80px",
    padding: "20px",
  },

  chat: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    background: "green",
    padding: "12px",
    borderRadius: "50px",
    color: "white",
    boxShadow: "0 0 15px lime",
  },

  reveal: {
    opacity: 0,
    transform: "translateY(40px)",
    transition: "all 0.8s ease",
    textAlign: "center",
    marginTop: "80px",
  },
};