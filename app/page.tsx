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
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return (
    <main style={styles.page}>
      <div style={styles.container}>
        
        {/* LEFT SIDE */}
        <div style={styles.left}>
          <p style={styles.tag}>PRIVATE LAUNCH</p>

          <h1 style={styles.title}>
            ALGO NOVA <span style={{ color: "red" }}>V6+</span>
          </h1>

          <p style={styles.subtitle}>
            The next evolution of automated trading. Built for dominance.
          </p>

          <div style={styles.countdown}>
            {hours}h {minutes}m {seconds}s
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

        {/* RIGHT SIDE IMAGE */}
        <div style={styles.right}>
          <img src="/nova.png" style={styles.image} />
        </div>

      </div>
    </main>
  );
}

const styles: any = {
  page: {
    background: "radial-gradient(circle at top, #1a0000, #000)",
    minHeight: "100vh",
    color: "white",
    fontFamily: "Inter, sans-serif",
  },

  container: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "60px 20px",
  },

  left: {
    flex: 1,
    minWidth: "300px",
  },

  right: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    marginTop: "40px",
  },

  image: {
    width: "320px",
    borderRadius: "20px",
    boxShadow: "0 0 60px rgba(255,0,0,0.4)",
  },

  tag: {
    color: "red",
    letterSpacing: "2px",
    fontSize: "12px",
  },

  title: {
    fontSize: "48px",
    margin: "10px 0",
  },

  subtitle: {
    opacity: 0.7,
    marginBottom: "20px",
  },

  countdown: {
    fontSize: "24px",
    marginBottom: "20px",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    maxWidth: "350px",
  },

  input: {
    padding: "12px",
    borderRadius: "8px",
    border: "none",
    background: "#111",
    color: "white",
  },

  button: {
    background: "red",
    padding: "14px",
    borderRadius: "10px",
    border: "none",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
  },
};