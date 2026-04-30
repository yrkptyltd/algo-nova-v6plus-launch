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
      <section style={styles.hero}>
        
        {/* LEFT SIDE */}
        <div style={styles.left}>
          <p style={styles.tag}>PRIVATE LAUNCH ACCESS</p>

          <h1 style={styles.title}>
            ALGO NOVA EA <span style={styles.highlight}>v6+</span>
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

        {/* RIGHT SIDE IMAGE */}
        <div style={styles.right}>
          <div style={styles.imageGlow}></div>
          <img src="/nova.png" style={styles.image} />
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
  },

  hero: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "80px 20px",
    flexWrap: "wrap",
  },

  left: {
    flex: 1,
    minWidth: "320px",
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

  imageGlow: {
    position: "absolute",
    width: "350px",
    height: "350px",
    background: "radial-gradient(circle, rgba(255,0,0,0.4), transparent)",
    borderRadius: "50%",
    filter: "blur(40px)",
    zIndex: 1,
  },

  tag: {
    color: "red",
    letterSpacing: "2px",
    fontSize: "12px",
    marginBottom: "10px",
  },

  title: {
    fontSize: "52px",
    fontWeight: 800,
    marginBottom: "10px",
  },

  highlight: {
    color: "red",
    textShadow: "0 0 20px red",
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
    gap: "12px",
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
    padding: "16px",
    background: "red",
    borderRadius: "12px",
    border: "none",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
    boxShadow: "0 0 20px red",
  },
};