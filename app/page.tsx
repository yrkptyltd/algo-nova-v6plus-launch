"use client";

import { useState } from "react";

export default function Home() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    whatsapp: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleSubmit() {
    if (!form.name || !form.email || !form.whatsapp) {
      alert("Fill all fields");
      return;
    }

    console.log("Captured:", form);
    setSubmitted(true);
  }

  return (
    <main style={styles.page}>
      <div style={styles.container}>

        <div style={styles.left}>
          <h1 style={styles.title}>
            ALGO NOVA EA <span style={styles.red}>v6+</span>
          </h1>

          <p style={styles.subtitle}>
            AI-powered automation built for serious traders.
          </p>

          <p style={styles.stars}>★★★★★ Trusted by 3500+ users</p>

          <p style={styles.urgent}>
            Limited to 200 users — sells out fast 🔥
          </p>

          {!submitted ? (
            <div style={styles.form}>
              <input
                placeholder="Full Name"
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
                style={styles.input}
              />

              <input
                placeholder="Email"
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
                style={styles.input}
              />

              <input
                placeholder="WhatsApp"
                value={form.whatsapp}
                onChange={(e) =>
                  setForm({ ...form, whatsapp: e.target.value })
                }
                style={styles.input}
              />

              <button onClick={handleSubmit} style={styles.button}>
                Join Priority List 🔥
              </button>
            </div>
          ) : (
            <p style={styles.success}>
              You're in 🔥 We'll notify you first.
            </p>
          )}
        </div>

        <div style={styles.right}>
          <img src="/nova.png" style={styles.image} />
        </div>

      </div>

      <a href="https://wa.me/27616260886" style={styles.chat}>
        Chat 24/7 💬
      </a>
    </main>
  );
}

const styles = {
  page: {
    background: "#000",
    color: "white",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  container: {
    display: "flex",
    gap: "40px",
    flexWrap: "wrap",
    maxWidth: "1000px",
    padding: "20px",
  },

  left: { flex: 1 },

  right: { flex: 1, textAlign: "center" },

  image: {
    width: "280px",
    boxShadow: "0 0 40px red",
    borderRadius: "20px",
  },

  title: {
    fontSize: "40px",
    fontWeight: "bold",
  },

  red: {
    color: "red",
  },

  subtitle: {
    opacity: 0.7,
    marginBottom: "10px",
  },

  stars: {
    color: "gold",
  },

  urgent: {
    color: "red",
    marginBottom: "20px",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },

  input: {
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #333",
    background: "#111",
    color: "white",
    outline: "none",
  },

  button: {
    padding: "14px",
    background: "red",
    border: "none",
    borderRadius: "10px",
    color: "white",
    cursor: "pointer",
  },

  success: {
    color: "lime",
  },

  chat: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    background: "green",
    padding: "12px",
    borderRadius: "50px",
    color: "white",
  },
};