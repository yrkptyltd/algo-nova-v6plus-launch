"use client";

import { useEffect, useMemo, useState } from "react";

const launchDate = new Date("2026-04-30T13:00:00+02:00");

const products = [
  { name: "Android", price: "R1500 / $250", link: "https://payf.st/hl78w" },
  { name: "iOS", price: "R2000 / $300", link: "https://payf.st/2xmr6" },
  { name: "PC Lifetime", price: "R3500 / $500", link: "https://payf.st/ex45h" },
];

const notifications = [
  { text: "Someone just joined the priority list", flag: "🇿🇦" },
  { text: "A trader is checking access", flag: "🇺🇸" },
  { text: "New visitor exploring v6+", flag: "🇬🇧" },
  { text: "Someone is viewing results", flag: "🇿🇦" },
];

export default function Home() {
  const [time, setTime] = useState(new Date());
  const [note, setNote] = useState(notifications[0]);
  const [form, setForm] = useState({ name: "", email: "", whatsapp: "" });

  const isLaunched = time >= launchDate;

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

      {/* NOTIFICATION */}
      <div style={styles.notification}>
        {note.flag} {note.text}
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

          {/* ⭐ TRUST */}
          <p style={styles.stars}>★★★★★ Trusted by 3500+ users</p>

          {/* COUNTDOWN */}
          <div style={styles.timer}>
            {countdown.h}h : {countdown.m}m : {countdown.s}s
          </div>

          {/* SCARCITY */}
          <p style={styles.urgent}>
            Limited to 200 users — sells out fast every time 🔥
          </p>

          {/* FORM */}
          {!isLaunched && (
            <div style={styles.form}>
              <input
                placeholder="Full Name"
                style={styles.input}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />

              <input
                placeholder="Email"
                style={styles.input}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />

              <input
                placeholder="WhatsApp"
                style={styles.input}
                value={form.whatsapp}
                onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
              />

              <button style={styles.cta}>
                Join Priority List 🔥
              </button>
            </div>
          )}

        </div>

        {/* IMAGE */}
        <div style={styles.right}>
          <div style={styles.glow}></div>
          <img src="/nova.png" style={styles.image} />
        </div>
      </section>

      {/* PRODUCTS (LOCKED BEFORE LAUNCH) */}
      {isLaunched && (
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
      )}

      {/* FEATURES */}
      <section style={styles.section}>
        <h2 style={styles.heading}>Why Traders Are Waiting</h2>

        <div style={styles.grid}>
          <div style={styles.feature}>📊 AI Chart Scanner</div>
          <div style={styles.feature}>🎯 Precise Trading</div>
          <div style={styles.feature}>⚡ Fast Execution</div>
          <div style={styles.feature}>🤖 Fully Automated</div>
        </div>
      </section>

      {/* WHATSAPP */}
      <a href="https://wa.me/27616260886" style={styles.chat}>
        Chat 24/7 💬
      </a>

    </main>
  );
}

const styles: any = {
  page: { background: "#050505", color: "white", fontFamily: "Inter, sans-serif" },

  hero: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: "80px 20px",
    maxWidth: "1200px",
    margin: "0 auto",
  },

  left: { flex: 1 },

  right: { flex: 1, display: "flex", justifyContent: "center", position: "relative" },

  image: { width: "320px", zIndex: 2 },

  glow: { position: "absolute", width: "300px", height: "300px", background: "red", filter: "blur(120px)" },

  tag: { color: "red" },

  title: { fontSize: "48px", fontWeight: 900 },

  red: { color: "red" },

  subtitle: { opacity: 0.7 },

  stars: { color: "gold", marginTop: "10px" },

  timer: { fontSize: "24px", marginTop: "10px" },

  urgent: { color: "red", fontWeight: "bold" },

  form: { display: "flex", flexDirection: "column", gap: "10px", marginTop: "20px" },

  input: {
    padding: "12px",
    borderRadius: "10px",
    border: "1px solid #333",
    background: "#111",
    color: "white",
    outline: "none",
  },

  cta: {
    background: "red",
    padding: "14px",
    borderRadius: "10px",
    border: "none",
    color: "white",
    boxShadow: "0 0 20px red",
  },

  section: { textAlign: "center", marginTop: "80px" },

  heading: { fontSize: "32px" },

  grid: { display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" },

  card: { background: "#111", padding: "20px", borderRadius: "12px" },

  price: { fontSize: "22px", fontWeight: 800 },

  buy: { background: "red", padding: "10px", borderRadius: "10px", color: "white", textDecoration: "none" },

  feature: { background: "#111", padding: "15px", borderRadius: "10px" },

  notification: {
    position: "fixed",
    top: "10px",
    left: "50%",
    transform: "translateX(-50%)",
    background: "#111",
    padding: "10px",
    borderRadius: "20px",
  },

  chat: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    background: "green",
    padding: "15px",
    borderRadius: "50px",
    color: "white",
    fontWeight: "bold",
  },
};
