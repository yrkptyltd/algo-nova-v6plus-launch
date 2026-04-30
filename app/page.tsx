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
  "Someone is viewing results",
  "New visitor exploring v6+",
  "A trader checking pricing",
];

export default function Home() {
  const [time, setTime] = useState(new Date());
  const [note, setNote] = useState(notifications[0]);

  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const n = setInterval(() => {
      setNote(notifications[Math.floor(Math.random() * notifications.length)]);
    }, 12000);
    return () => clearInterval(n);
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
      
      {/* FLOAT NOTIFICATION */}
      <div style={styles.notification}>{note}</div>

      {/* HERO */}
      <section style={styles.hero}>
        <div style={styles.left}>
          <p style={styles.tag}>PRIVATE LAUNCH</p>

          <h1 style={styles.title}>
            ALGO NOVA EA <span style={styles.red}>v6+</span>
          </h1>

          <p style={styles.subtitle}>
            Precision automation. AI chart scanning. Built for serious traders.
          </p>

          <div style={styles.timer}>
            {countdown.h}h : {countdown.m}m : {countdown.s}s
          </div>

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
      <section style={styles.section}>
        <h2 style={styles.heading}>Choose Your Access</h2>

        <div style={styles.grid}>
          {products.map((p) => (
            <div style={styles.card} key={p.name}>
              <h3>{p.name}</h3>
              <p style={styles.price}>{p.price}</p>

              <a href={p.link} target="_blank" style={styles.buy}>
                Buy Now 🔥
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section style={styles.section}>
        <h2 style={styles.heading}>Why Traders Are Switching</h2>

        <div style={styles.grid}>
          <div style={styles.feature}>📊 AI Chart Scanner</div>
          <div style={styles.feature}>🎯 Precise Trading</div>
          <div style={styles.feature}>⚡ Fast Execution</div>
          <div style={styles.feature}>🤖 Fully Automated</div>
        </div>
      </section>

      {/* ACCURACY BLOCK */}
      <section style={styles.accuracy}>
        <h2>98% Accuracy ⚡</h2>
        <p>Clean entries. Smart direction detection. Built for results.</p>
      </section>

      {/* RESULTS */}
      <section style={styles.section}>
        <h2 style={styles.heading}>Real Results</h2>

        <div style={styles.gallery}>
          {[1,2,3].map(i => (
            <div key={i} style={styles.result}>Result {i}</div>
          ))}
        </div>
      </section>

      {/* WHATSAPP QUICK */}
      <div style={styles.quick}>
        {["Broker", "Deposit", "Setup", "License"].map(q => (
          <a
            key={q}
            href={`https://wa.me/27616260886?text=${q}`}
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
    background: "#050505",
    color: "white",
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

  left: { flex: 1 },

  right: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    position: "relative",
  },

  image: {
    width: "320px",
    zIndex: 2,
  },

  glow: {
    position: "absolute",
    width: "300px",
    height: "300px",
    background: "red",
    filter: "blur(120px)",
  },

  tag: { color: "red", fontSize: "12px" },

  title: { fontSize: "48px", fontWeight: 900 },

  red: { color: "red" },

  subtitle: { opacity: 0.7 },

  timer: { fontSize: "24px", margin: "10px 0" },

  cta: {
    background: "linear-gradient(45deg, red, darkred)",
    padding: "14px",
    borderRadius: "12px",
    border: "none",
    color: "white",
    cursor: "pointer",
    boxShadow: "0 0 20px red",
  },

  section: {
    textAlign: "center",
    marginTop: "80px",
  },

  heading: { fontSize: "32px" },

  grid: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
  },

  card: {
    background: "rgba(255,255,255,0.05)",
    padding: "25px",
    borderRadius: "16px",
    backdropFilter: "blur(10px)",
  },

  price: { fontSize: "22px", fontWeight: 800 },

  buy: {
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

  accuracy: {
    textAlign: "center",
    marginTop: "80px",
    fontSize: "22px",
    color: "red",
  },

  gallery: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
  },

  result: {
    width: "120px",
    height: "120px",
    background: "#111",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  notification: {
    position: "fixed",
    top: "15px",
    left: "50%",
    transform: "translateX(-50%)",
    background: "#111",
    padding: "10px",
    borderRadius: "20px",
  },

  quick: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginTop: "40px",
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