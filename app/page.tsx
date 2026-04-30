"use client";

import { useEffect, useMemo, useState } from "react";

const launchDate = new Date("2026-04-30T13:00:00+02:00");

const products = [
  { name: "Android", price: "R1500 / $250", link: "https://payf.st/hl78w" },
  { name: "iOS", price: "R2000 / $300", link: "https://payf.st/2xmr6" },
  { name: "PC Lifetime", price: "R3500 / $500", link: "https://payf.st/ex45h" },
];

const notifications = [
  "A trader just joined the priority list",
  "Someone is checking Android access",
  "New user exploring v6+ features",
  "A trader opened the pricing section",
  "Someone is viewing results",
];

export default function Home() {
  const [time, setTime] = useState(new Date());
  const [noteIndex, setNoteIndex] = useState(0);

  const isLaunched = time >= launchDate;

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setNoteIndex(Math.floor(Math.random() * notifications.length));
    }, 12000);
    return () => clearInterval(interval);
  }, []);

  const countdown = useMemo(() => {
    const diff = Math.max(0, launchDate.getTime() - time.getTime());
    return {
      h: Math.floor(diff / 3600000),
      m: Math.floor((diff / 60000) % 60),
      s: Math.floor((diff / 1000) % 60),
    };
  }, [time]);

  return (
    <main style={styles.page}>
      
      {/* NOTIFICATION */}
      <div style={styles.notification}>
        {notifications[noteIndex]}
      </div>

      {/* HERO */}
      <section style={styles.hero}>
        <div style={styles.left}>
          <p style={styles.tag}>PRIVATE LAUNCH</p>

          <h1 style={styles.title}>
            ALGO NOVA EA <span style={styles.red}>v6+</span>
          </h1>

          <p style={styles.subtitle}>
            The next evolution of automated trading. Built for dominance.
          </p>

          <div style={styles.timer}>
            {countdown.h}h : {countdown.m}m : {countdown.s}s
          </div>

          <p style={styles.urgent}>
            Limited launch access — first come first served ⚡
          </p>

          <button style={styles.cta}>
            Join Priority List 🔥
          </button>
        </div>

        <div style={styles.right}>
          <div style={styles.glow}></div>
          <img src="/nova.png" style={styles.image} />
        </div>
      </section>

      {/* PRODUCTS */}
      <section style={styles.products}>
        <h2 style={styles.sectionTitle}>Choose Your Access</h2>

        <div style={styles.cardWrap}>
          {products.map((p) => (
            <div style={styles.card} key={p.name}>
              <h3>{p.name}</h3>
              <p style={styles.price}>{p.price}</p>

              <a href={p.link} target="_blank" style={styles.buyBtn}>
                Buy Now 🔥
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Why Traders Are Waiting</h2>

        <div style={styles.cardWrap}>
          <div style={styles.feature}>📊 AI Chart Scanner</div>
          <div style={styles.feature}>🎯 Precise Trading</div>
          <div style={styles.feature}>⚡ Fast Execution</div>
          <div style={styles.feature}>🤖 Fully Automated</div>
        </div>
      </section>

      {/* BOT ASSISTANT */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Bot Chat Assistant 🤖</h2>
        <p style={styles.subtitle}>
          Get instant help, setup guidance and answers directly inside the system — 24/7 support built in.
        </p>
      </section>

      {/* ACCURACY */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>98% Accuracy ⚡</h2>
        <p style={styles.subtitle}>
          Designed for clean entries, smart direction detection and powerful automation.
        </p>
      </section>

      {/* RESULTS */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Real Results</h2>

        <div style={styles.gallery}>
          {[1,2,3,4].map(i => (
            <div style={styles.resultBox} key={i}>
              Result {i}
            </div>
          ))}
        </div>
      </section>

      {/* WHATSAPP QUICK */}
      <div style={styles.quickWrap}>
        {[
          "Recommended broker",
          "Minimum deposit",
          "Installation help",
          "License info"
        ].map(q => (
          <a
            key={q}
            href={`https://wa.me/27616260886?text=${encodeURIComponent(q)}`}
            style={styles.quickBtn}
          >
            {q}
          </a>
        ))}
      </div>

      {/* FLOAT CHAT */}
      <a href="https://wa.me/27616260886" style={styles.chat}>
        Chat 💬
      </a>

    </main>
  );
}

const styles: any = {
  page: {
    background: "#000",
    color: "white",
    minHeight: "100vh",
    fontFamily: "Inter, sans-serif",
  },

  hero: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: "80px 20px",
    maxWidth: "1200px",
    margin: "0 auto",
  },

  left: { flex: 1, minWidth: "300px" },

  right: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    position: "relative",
  },

  image: {
    width: "300px",
    zIndex: 2,
  },

  glow: {
    position: "absolute",
    width: "300px",
    height: "300px",
    background: "red",
    filter: "blur(100px)",
  },

  tag: { color: "red", fontSize: "12px" },

  title: { fontSize: "48px", fontWeight: 900 },

  red: { color: "red", textShadow: "0 0 20px red" },

  subtitle: { opacity: 0.7 },

  timer: { fontSize: "28px", marginTop: "10px" },

  urgent: { color: "red", marginBottom: "20px" },

  cta: {
    background: "red",
    padding: "15px",
    borderRadius: "10px",
    border: "none",
    color: "white",
    cursor: "pointer",
    animation: "pulse 1.5s infinite",
  },

  products: { textAlign: "center", marginTop: "60px" },

  section: { textAlign: "center", marginTop: "80px" },

  sectionTitle: { fontSize: "32px" },

  cardWrap: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
  },

  card: {
    background: "#111",
    padding: "20px",
    borderRadius: "15px",
  },

  price: { fontSize: "22px", fontWeight: 800 },

  buyBtn: {
    display: "block",
    background: "red",
    padding: "10px",
    borderRadius: "10px",
    color: "white",
    textDecoration: "none",
  },

  feature: {
    background: "#111",
    padding: "15px",
    borderRadius: "10px",
  },

  gallery: {
    display: "flex",
    gap: "10px",
    justifyContent: "center",
  },

  resultBox: {
    width: "100px",
    height: "100px",
    background: "#111",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  notification: {
    position: "fixed",
    top: "10px",
    left: "50%",
    transform: "translateX(-50%)",
    background: "#111",
    padding: "10px",
    borderRadius: "20px",
    zIndex: 10,
  },

  quickWrap: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginTop: "40px",
    flexWrap: "wrap",
  },

  quickBtn: {
    background: "#222",
    padding: "10px",
    borderRadius: "10px",
    color: "white",
    textDecoration: "none",
  },

  chat: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    background: "green",
    padding: "15px",
    borderRadius: "50px",
    color: "white",
  },
};