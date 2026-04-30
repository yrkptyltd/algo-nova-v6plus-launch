"use client";

import { useState } from "react";

export default function Home() {
  const [chatOpen, setChatOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([
    { from: "bot", text: "Hi 👋 Ask anything about Algo Nova EA v6+" },
  ]);

  function smartReply(input: string) {
    const msg = input.toLowerCase();

    if (msg.includes("blow") || msg.includes("risk"))
      return "Trading is risky. No robot is 100% accurate. Algo Nova is built for precision, but risk management is key.";

    if (msg.includes("android"))
      return "Android includes AI chart scanner, 1-year license, supports all brokers & pairs, and works best with 200% bonus accounts.";

    if (msg.includes("ios"))
      return "iOS includes AI chart scanner, 1-year license, flexible account types, and supports all brokers.";

    if (msg.includes("pc"))
      return "PC version is lifetime, more accurate, includes chart scanner, works on all brokers, and installs in under 5 minutes.";

    if (msg.includes("price"))
      return "Android: R1500, iOS: R2000, PC Lifetime: R3500.";

    return "Ask about features, pricing, setup or risk.";
  }

  function sendMessage() {
    if (!message) return;

    const reply = smartReply(message);

    setChat((prev) => [
      ...prev,
      { from: "user", text: message },
      { from: "bot", text: reply },
    ]);

    setMessage("");
  }

  return (
    <main style={styles.page}>
      {/* HERO */}
      <section style={styles.hero}>
        <div>
          <h1 style={styles.title}>
            ALGO NOVA EA <span style={{ color: "red" }}>v6+</span>
          </h1>

          <p>AI-powered automated trading system.</p>

          <p style={{ color: "gold" }}>★★★★★ Trusted by 3500+ users</p>
        </div>

        <img src="/nova.png" style={styles.image} />
      </section>

      {/* PRODUCTS */}
      <section style={styles.section}>
        <h2>Choose Your Access</h2>

        <div style={styles.grid}>
          <div style={styles.card}>
            <h3>Android</h3>
            <p>R1500</p>
            <p>1 Year License</p>
            <p>AI Chart Scanner</p>
            <p>All Brokers & Pairs</p>
            <a href="https://payf.st/hl78w">Buy Now</a>
          </div>

          <div style={styles.card}>
            <h3>iOS</h3>
            <p>R2000</p>
            <p>1 Year License</p>
            <p>AI Chart Scanner</p>
            <p>Flexible Accounts</p>
            <a href="https://payf.st/2xmr6">Buy Now</a>
          </div>

          <div style={styles.card}>
            <h3>PC Lifetime</h3>
            <p>R3500</p>
            <p>Lifetime Access</p>
            <p>More Accurate</p>
            <p>5 Min Setup</p>
            <a href="https://payf.st/ex45h">Buy Now</a>
          </div>
        </div>
      </section>

      {/* CHATBOT */}
      {chatOpen && (
        <div style={styles.chatBox}>
          {chat.map((c, i) => (
            <div key={i}>{c.text}</div>
          ))}

          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <button onClick={sendMessage}>Send</button>
        </div>
      )}

      <button onClick={() => setChatOpen(true)} style={styles.chatBtn}>
        Live Support 💬
      </button>
    </main>
  );
}

const styles = {
  page: { background: "#fff", padding: "20px" },

  hero: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  image: { width: "200px" },

  section: { marginTop: "60px", textAlign: "center" },

  grid: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
  },

  card: {
    background: "#f5f5f5",
    padding: "20px",
    borderRadius: "10px",
  },

  chatBtn: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    background: "green",
    padding: "10px",
    color: "white",
  },

  chatBox: {
    position: "fixed",
    bottom: "80px",
    right: "20px",
    background: "white",
    padding: "10px",
  },
};