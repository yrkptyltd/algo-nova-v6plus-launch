"use client";

import { useEffect, useState } from "react";

const launchDate = new Date("2026-04-30T13:00:00+02:00");

export default function Home() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const diff = Math.max(0, launchDate.getTime() - time.getTime());
  const hours = Math.floor(diff / 3600000);
  const minutes = Math.floor((diff / 60000) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return (
    <main style={styles.page}>
      
      {/* HERO */}
      <section style={styles.hero}>
        
        <div style={styles.left}>
          <p style={styles.tag}>PRIVATE LAUNCH ACCESS</p>

          <h1 style={styles.title}>
            ALGO NOVA EA <span style={styles.red}>v6+</span>
          </h1>

          <p style={styles.subtitle}>
            The next evolution of automated trading. Built for dominance.
          </p>

          <div style={styles.timer}>
            {hours}h : {minutes}m : {seconds}s
          </div>

          <div style={styles.form}>
            <input placeholder="Full Name" style={styles.input} />
            <input placeholder="Email Address" style={styles.input} />
            <input placeholder="WhatsApp Number" style={styles.input} />

            <button style={styles.button}>
              Join Priority List 🔥
            </button>
          </div>
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
          <div style={styles.card}>
            <h3>Android</h3>
            <p>R1500 / $250</p>
            <button style={styles.button}>Reserve Access</button>
          </div>

          <div style={styles.card}>
            <h3>iOS</h3>
            <p>R2000 / $300</p>
            <button style={styles.button}>Reserve Access</button>
          </div>

          <div style={styles.card}>
            <h3>PC (Lifetime)</h3>
            <p>R3500 / $500</p>
            <button style={styles.button}>Reserve Access</button>
          </div>
        </div>
      </section>

    </main>
  );
}

const styles: any = {
  page: {
    minHeight: "100vh",
    background: "radial-gradient(circle at top, #1a0000, #000)",
    color: "white",
    fontFamily: "Inter, sans-serif",
  },

  hero: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "80px 20px",
  },

  left: {
    flex: 1,
    minWidth: "300px",
  },

  right: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    position: "relative",
    marginTop: "40px",
  },

  image: {
    width: "320px",
    position: "relative",
    zIndex: 2,
  },

  glow: {
    position: "absolute",
    width: "350px",
    height: "350px",
    background: "radial-gradient(circle, rgba(255,0,0,0.4), transparent)",
    filter: "blur(40px)",
    borderRadius: "50%",
  },

  tag: {
    color: "red",
    fontSize: "12px",
    letterSpacing: "2px",
  },

  title: {
    fontSize: "48px",
    fontWeight: 800,
    margin: "10px 0",
  },

  red: {
    color: "red",
    textShadow: "0 0 15px red",
  },

  subtitle: {
    opacity: 0.7,
    marginBottom: "20px",
  },

  timer: {
    fontSize: "28px",
    marginBottom: "30px",
    fontWeight: "bold",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    maxWidth: "350px",
  },

  input: {
    padding: "14px",
    borderRadius: "10px",
    border: "none",
    background: "#111",
    color: "white",
  },

  button: {
    padding: "14px",
    background: "red",
    borderRadius: "12px",
    border: "none",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
    boxShadow: "0 0 20px red",
  },

  products: {
    marginTop: "100px",
    textAlign: "center",
  },

  sectionTitle: {
    fontSize: "32px",
    marginBottom: "30px",
  },

  cardWrap: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
  },

  card: {
    background: "#111",
    padding: "30px",
    borderRadius: "16px",
    width: "250px",
    boxShadow: "0 0 20px rgba(255,0,0,0.2)",
  },
};