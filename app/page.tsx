"use client";

import { useState } from "react";

export default function Home() {
  const [chatOpen, setChatOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [userCount, setUserCount] = useState(0);

  const [chat, setChat] = useState([
    {
      from: "bot",
      text: "Hi 👋 I’m Algo Nova Support. Ask me anything about v6+",
    },
  ]);

  function getReply(msg: string) {
    const text = msg.toLowerCase();

    if (text.includes("license"))
      return "Android & iOS = 1 year license. PC = lifetime.";

    if (text.includes("android"))
      return "Android includes AI chart scanner and works best with 200% bonus accounts.";

    if (text.includes("ios"))
      return "iOS has the same features as Android including AI scanner.";

    if (text.includes("pc"))
      return "PC version is more accurate, works on all brokers, and installs in under 5 minutes.";

    if (text.includes("broker"))
      return "Recommended broker is Razor Markets.";

    if (text.includes("risk") || text.includes("blow"))
      return "Trading is risky. No system is 100% guaranteed. Always manage risk.";

    if (text.includes("price"))
      return "Android R1500, iOS R2000, PC R3500 lifetime.";

    return "Ask about license, setup, broker or pricing.";
  }

  function sendMessage(text?: string) {
    const msg = text || message;
    if (!msg.trim()) return;

    const reply = getReply(msg);

    const newCount = userCount + 1;

    const updatedChat: any = [
      ...chat,
      { from: "user", text: msg },
      { from: "bot", text: reply },
    ];

    // 🔥 AUTO SELL AFTER 2 MESSAGES
    if (newCount >= 2) {
      updatedChat.push({
        from: "bot",
        text: "🔥 Ready to secure your access?",
      });
      updatedChat.push({
        from: "bot",
        text: "Choose your version below 👇",
      });
    }

    setChat(updatedChat);
    setUserCount(newCount);
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
            AI-powered automated trading system built for precision and consistency.
          </p>

          <p style={styles.stars}>★★★★★ Trusted by 3500+ traders</p>
        </div>

        <div style={styles.right}>
          <div style={styles.glow}></div>
          <img src="/nova.png" style={styles.image} />
        </div>
      </section>

      {/* BUY SECTION */}
      <section style={styles.section}>
        <h2 style={styles.heading}>Get Access</h2>

        <div style={styles.grid}>
          <a href="https://payf.st/hl78w" style={styles.product}>
            Android — R1500
          </a>

          <a href="https://payf.st/2xmr6" style={styles.product}>
            iOS — R2000
          </a>

          <a href="https://payf.st/ex45h" style={styles.product}>
            PC Lifetime — R3500
          </a>
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
            {chat.map((msg: any, i: number) => (
              <div
                key={i}
                style={msg.from === "bot" ? styles.bot : styles.user}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* BUY BUTTONS INSIDE CHAT */}
          {userCount >= 2 && (
            <div style={styles.buyRow}>
              <a href="https://payf.st/hl78w">Android</a>
              <a href="https://payf.st/2xmr6">iOS</a>
              <a href="https://payf.st/ex45h">PC</a>
            </div>
          )}

          <div style={styles.inputRow}>
            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ask about v6+..."
              onKeyDown={(e) => {
                if (e.key === "Enter") sendMessage();
              }}
            />
            <button onClick={() => sendMessage()}>Send</button>
          </div>
        </div>
      )}

      {/* FLOAT BUTTON */}
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
    fontFamily: "Inter, sans-serif",
  },

  hero: {
    display: "flex",
    justifyContent: "space-between",
    padding: "80px 20px",
    maxWidth: "1100px",
    margin: "0 auto",
    alignItems: "center",
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
    background: "rgba(255,0,0,0.3)",
    filter: "blur(60px)",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 1,
  },

  title: { fontSize: "40px", fontWeight: "bold" },
  red: { color: "red" },
  subtitle: { opacity: 0.7 },
  stars: { color: "gold" },

  section: { textAlign: "center", marginTop: "60px" },
  heading: { fontSize: "26px" },

  grid: { display: "flex", justifyContent: "center", gap: "15px" },

  product: {
    background: "red",
    color: "white",
    padding: "15px",
    borderRadius: "10px",
    textDecoration: "none",
  },

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
    width: "320px",
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
    height: "220px",
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

  inputRow: {
    display: "flex",
    padding: "10px",
    gap: "5px",
  },

  buyRow: {
    display: "flex",
    justifyContent: "space-around",
    padding: "10px",
  },
};