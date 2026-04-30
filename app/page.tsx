"use client";

import { useEffect, useMemo, useState } from "react";

const launchDate = new Date("2026-04-30T13:00:00+02:00");

const products = [
  { name: "Android", price: "R1500 / $250", link: "https://payf.st/hl78w" },
  { name: "iOS", price: "R2000 / $300", link: "https://payf.st/2xmr6" },
  { name: "PC Lifetime", price: "R3500 / $500", link: "https://payf.st/ex45h" },
];

export default function Home() {
  const [time, setTime] = useState(new Date());
  const [viewers, setViewers] = useState(23);
  const [copies, setCopies] = useState(37);

  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setViewers((v) => Math.max(15, v + (Math.random() > 0.5 ? 1 : -1)));
      setCopies((c) => Math.max(12, c - (Math.random() > 0.7 ? 1 : 0)));
    }, 6000);
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
      
      {/* TOP BAR */}
      <div style={styles.topBar}>
        🔴 {viewers} people viewing • {copies} copies left today
      </div>

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

          <p style={styles.urgent}>
            Limited launch access — first come first served ⚡
          </p>

          <button style={styles.cta}>
            Secure Access Now 🔥
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

      {/* AUTHORITY BLOCK */}
      <section style={styles.authority}>
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

  topBar: {
    textAlign: "center",
    padding: "10px",
    background: "#111",
    color: "red",
    fontWeight: "bold",
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

  tag: { color: "red" },

  title: { fontSize: "48px", fontWeight: 900 },

  red: { color: "red" },

  subtitle: { opacity: 0.7 },

  timer: { fontSize: "24px" },

  urgent: { color: "red" },

  cta: {
    background: "linear-gradient(45deg, red, darkred)",
    padding: "14px",
    borderRadius: "12px",
    border: "none",
    color: "white",
    cursor: "pointer",
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

  authority: {
    textAlign: "center",
    marginTop: "80px",
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