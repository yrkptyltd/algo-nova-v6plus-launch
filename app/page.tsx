"use client";

import { useState } from "react";

const replies = [
  {
    keys: ["license", "how long"],
    answer:
      "Android & iOS versions come with a 1-year license. PC version is lifetime access.",
  },
  {
    keys: ["android", "mobile"],
    answer:
      "Android includes AI chart scanner, flexible account types, and works best with 200% bonus accounts. Fully automated.",
  },
  {
    keys: ["ios"],
    answer:
      "iOS has the same features as Android: AI chart scanner, flexible accounts, and optimized for 200% bonus accounts.",
  },
  {
    keys: ["pc"],
    answer:
      "PC version is more accurate, includes chart scanner, works on all brokers, and is installed in under 5 minutes after payment.",
  },
  {
    keys: ["install", "setup"],
    answer:
      "Installation is quick and simple — usually under 5 minutes after payment confirmation.",
  },
  {
    keys: ["broker"],
    answer:
      "Recommended broker is Razor Markets for best performance and smooth withdrawals.",
  },
  {
    keys: ["blow", "risk"],
    answer:
      "Trading is risky and no system is 100% guaranteed. Proper risk management is very important when using any robot.",
  },
];

export default function Home() {
  const [chatOpen, setChatOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([
    {
      from: "bot",
      text: "Hi 👋 Ask anything about Algo Nova EA v6+",
    },
  ]);

  function sendMessage(text?: string) {
    const msg = text || message;
    if (!msg.trim()) return;

    const lower = msg.toLowerCase();

    const found = replies.find((r) =>
      r.keys.some((k) => lower.includes(k))
    );

    const reply =
      found?.answer ||
      "Ask about license, features, broker, setup or risk. I'm here to help.";

    setChat((prev) => [
      ...prev,
      { from: "user", text: msg },
      { from: "bot", text: reply },
    ]);

    setMessage("");
  }

  return (
    <main style={styles.page}>

      {/* HERO */}
      <section style={styles.hero}>
        <div style={styles.left}>
          <h1 style={styles.title}>
            ALGO NOVA EA <span style={styles.red}>v6+</span>
          </h1>

          <p style={styles.subtitle}>
            Advanced automated trading built for precision and consistency.
          </p>
        </div>

        <div style={styles.right}>
          <div style={styles.glow}></div>
          <img src="/nova.png" style={styles.image} />
        </div>
      </section>

      {/* CHAT BOT */}
      {chatOpen && (
        <div style={styles.chatBox}>
          <div style={styles.chatHeader}>
            Algo Nova Support
            <button onClick={() => setChatOpen(false)}>×</button>
          </div>

          <div style={styles.chatMessages}>
            {chat.map((c, i) => (
              <div key={i} style={c.from === "bot" ? styles.bot : styles.user}>
                {c.text}
              </div>
            ))}
          </div>

          <div style={styles.quick}>
            <button onClick={() => sendMessage("license")}>License</button>
            <button onClick={() => sendMessage("android")}>Android</button>
            <button onClick={() => sendMessage("pc")}>PC</button>
            <button onClick={() => sendMessage("risk")}>Risk</button>
          </div>

          <div style={styles.chatInput}>
            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ask something..."
            />
            <button onClick={() => sendMessage()}>Send</button>
          </div>
        </div>
      )}

      {/* CHAT BUTTON */}
      <button onClick={() => setChatOpen(true)} style={styles.chatBtn}>
        Live Support 💬
      </button>

    </main>
  );
}

const styles: any = {
  page: {
    background: "#fff",
    color: "#000",
    fontFamily: "Inter",
    minHeight: "100vh",
  },

  hero: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "80px 20px",
    maxWidth: "1100px",
    margin: "0 auto",
  },

  left: { flex: 1 },

  right: { flex: 1, position: "relative", textAlign: "center" },

  image: {
    width: "260px",
    position: "relative",
    zIndex: 2,
  },

  glow: {
    position: "absolute",
    width: "260px",
    height: "260px",
    background: "rgba(255,0,0,0.4)",
    filter: "blur(60px)",
    top: "20px",
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: 1,
  },

  title: { fontSize: "40px", fontWeight: 900 },

  red: { color: "red" },

  subtitle: { opacity: 0.7 },

  chatBtn: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    background: "green",
    padding: "12px",
    borderRadius: "50px",
    color: "white",
  },

  chatBox: {
    position: "fixed",
    bottom: "80px",
    right: "20px",
    width: "300px",
    background: "white",
    borderRadius: "10px",
    boxShadow: "0 0 20px rgba(0,0,0,0.2)",
  },

  chatHeader: {
    background: "red",
    color: "white",
    padding: "10px",
    display: "flex",
    justifyContent: "space-between",
  },

  chatMessages: {
    padding: "10px",
    height: "200px",
    overflow: "auto",
  },

  bot: {
    background: "#eee",
    padding: "8px",
    marginBottom: "5px",
    borderRadius: "6px",
  },

  user: {
    background: "red",
    color: "white",
    padding: "8px",
    marginBottom: "5px",
    borderRadius: "6px",
    textAlign: "right",
  },

  quick: {
    display: "flex",
    gap: "5px",
    padding: "10px",
  },

  chatInput: {
    display: "flex",
    padding: "10px",
    gap: "5px",
  },
};