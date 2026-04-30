"use client";

import { useEffect, useMemo, useState } from "react";

const launchDate = new Date("2026-04-30T13:00:00+02:00");

const products = [
  { name: "Android", price: "R1500 / $250", link: "https://payf.st/hl78w" },
  { name: "iOS", price: "R2000 / $300", link: "https://payf.st/2xmr6" },
  { name: "PC Lifetime", price: "R3500 / $500", link: "https://payf.st/ex45h" },
];

const notifications = [
  "Someone from Johannesburg joined the priority list 🔥",
  "A trader reserved Android access ⚡",
  "Someone is checking PC Lifetime access 🖥️",
  "New visitor opened the v6+ launch page 🚀",
  "A trader asked about Razor Markets 💬",
];

export default function Home() {
  const [time, setTime] = useState(new Date());
  const [submitted, setSubmitted] = useState(false);
  const [noteIndex, setNoteIndex] = useState(0);
  const [form, setForm] = useState({
    name: "",
    email: "",
    whatsapp: "",
    product: "Android",
  });

  const isLaunched = time >= launchDate;

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setNoteIndex((current) => (current + 1) % notifications.length);
    }, 6500);
    return () => clearInterval(interval);
  }, []);

  const countdown = useMemo(() => {
    const diff = Math.max(0, launchDate.getTime() - time.getTime());
    return {
      hours: Math.floor(diff / 3600000),
      minutes: Math.floor((diff / 60000) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }, [time]);

  async function submitWaitlist(e: React.FormEvent) {
    e.preventDefault();

    // This captures the client details on the frontend.
    // Next step is connecting this to a real email sender / database.
    console.log("WAITLIST ENTRY:", form);

    setSubmitted(true);
  }

  return (
    <main style={styles.page}>
      <div style={styles.fakeNotification}>{notifications[noteIndex]}</div>

      <section style={styles.hero}>
        <div style={styles.left}>
          <p style={styles.tag}>PRIVATE LAUNCH ACCESS</p>

          <h1 style={styles.title}>
            ALGO NOVA EA <span style={styles.red}>v6+</span>
          </h1>

          <p style={styles.subtitle}>
            The next evolution of automated trading. Built for dominance, speed and serious automation.
          </p>

          {!isLaunched ? (
            <>
              <div style={styles.timerBox}>
                <div style={styles.timeItem}>
                  <strong>{countdown.hours}</strong>
                  <span>Hours</span>
                </div>
                <div style={styles.timeItem}>
                  <strong>{countdown.minutes}</strong>
                  <span>Minutes</span>
                </div>
                <div style={styles.timeItem}>
                  <strong>{countdown.seconds}</strong>
                  <span>Seconds</span>
                </div>
              </div>

              <p style={styles.urgent}>Limited launch access — first come, first served ⚡</p>

              <form style={styles.form} onSubmit={submitWaitlist}>
                <input
                  required
                  placeholder="Full Name"
                  style={styles.input}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />

                <input
                  required
                  type="email"
                  placeholder="Email Address"
                  style={styles.input}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />

                <input
                  required
                  placeholder="WhatsApp Number"
                  style={styles.input}
                  value={form.whatsapp}
                  onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                />

                <select
                  style={styles.input}
                  value={form.product}
                  onChange={(e) => setForm({ ...form, product: e.target.value })}
                >
                  <option>Android</option>
                  <option>iOS</option>
                  <option>PC Lifetime</option>
                </select>

                <button style={styles.button}>Join Priority List 🔥</button>

                {submitted && (
                  <p style={styles.success}>
                    You're locked in. Watch your email and WhatsApp when v6+ drops ⚡
                  </p>
                )}
              </form>
            </>
          ) : (
            <div style={styles.launchBox}>
              <h2>ALGO NOVA EA v6+ IS LIVE 🔥</h2>
              <p>Choose your access below and complete payment securely.</p>
            </div>
          )}
        </div>

        <div style={styles.right}>
          <div style={styles.glow}></div>
          <img src="/nova.png" alt="ALGO NOVA EA v6+ robot" style={styles.image} />
        </div>
      </section>

      <section style={styles.products}>
        <h2 style={styles.sectionTitle}>Choose Your Access</h2>

        <div style={styles.cardWrap}>
          {products.map((product) => (
            <div style={styles.card} key={product.name}>
              <p style={styles.cardTag}>ALGO NOVA EA v6+</p>
              <h3>{product.name}</h3>
              <p style={styles.price}>{product.price}</p>

              {isLaunched ? (
                <a href={product.link} target="_blank" style={styles.linkButton}>
                  Buy Now 🔥
                </a>
              ) : (
                <a href="#waitlist" style={styles.linkButton}>
                  Reserve Access
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      <section style={styles.trust}>
        <h2 style={styles.sectionTitle}>Why Traders Are Waiting For v6+</h2>

        <div style={styles.cardWrap}>
          <div style={styles.miniCard}>⚡ Faster setup</div>
          <div style={styles.miniCard}>🤖 Cleaner automation</div>
          <div style={styles.miniCard}>📲 WhatsApp support</div>
          <div style={styles.miniCard}>📈 Built for serious traders</div>
        </div>
      </section>

      <section style={styles.results}>
        <h2 style={styles.sectionTitle}>Real Results. No Talk.</h2>
        <p style={styles.subtitle}>
          Add your screenshots inside the public folder as result1.jpg, result2.jpg, result3.jpg.
        </p>

        <div style={styles.gallery}>
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <div style={styles.resultBox} key={num}>
              <img
                src={`/result${num}.jpg`}
                alt={`Result ${num}`}
                style={styles.resultImage}
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
              <span>Upload Result {num}</span>
            </div>
          ))}
        </div>
      </section>

      <section style={styles.info}>
        <h2 style={styles.sectionTitle}>Quick Info</h2>

        <div style={styles.infoGrid}>
          <p>✅ Recommended broker: Razor Markets</p>
          <p>✅ Minimum deposit: R300+</p>
          <p>✅ Best account: 200% bonus account</p>
          <p>✅ Works on all brokers</p>
          <p>✅ Mobile license: 1 year</p>
          <p>✅ PC version: lifetime</p>
        </div>
      </section>

      <footer style={styles.footer}>
        <p>© All Rights Reserved Since May 2025</p>
        <p style={styles.disclaimer}>Trading involves risk. Results may vary. Use proper risk management.</p>
      </footer>

      <a href="https://wa.me/27616260886" target="_blank" style={styles.whatsapp}>
        Chat 💬
      </a>
    </main>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    background: "radial-gradient(circle at top, #250000 0%, #080000 45%, #000 100%)",
    color: "white",
    overflowX: "hidden",
    paddingBottom: 60,
  },

  fakeNotification: {
    position: "fixed",
    top: 18,
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: 50,
    background: "rgba(20,0,0,0.92)",
    border: "1px solid rgba(255,0,0,0.45)",
    boxShadow: "0 0 25px rgba(255,0,0,0.25)",
    color: "white",
    borderRadius: 999,
    padding: "10px 18px",
    fontSize: 13,
    maxWidth: "90%",
    textAlign: "center",
  },

  hero: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
    maxWidth: 1180,
    margin: "0 auto",
    padding: "100px 20px 60px",
    gap: 30,
  },

  left: {
    flex: "1 1 420px",
    minWidth: 0,
  },

  right: {
    flex: "1 1 320px",
    display: "flex",
    justifyContent: "center",
    position: "relative",
  },

  tag: {
    color: "#ff2a2a",
    fontSize: 12,
    letterSpacing: 3,
    fontWeight: 800,
    marginBottom: 12,
  },

  title: {
    fontSize: "clamp(44px, 10vw, 88px)",
    lineHeight: 0.9,
    fontWeight: 900,
    margin: "0 0 18px",
    letterSpacing: "-3px",
  },

  red: {
    color: "#ff1616",
    textShadow: "0 0 22px rgba(255,0,0,0.85)",
  },

  subtitle: {
    color: "rgba(255,255,255,0.72)",
    fontSize: 17,
    lineHeight: 1.6,
    maxWidth: 560,
  },

  timerBox: {
    display: "flex",
    gap: 12,
    flexWrap: "wrap",
    margin: "28px 0 8px",
  },

  timeItem: {
    minWidth: 95,
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,0,0,0.25)",
    borderRadius: 16,
    padding: "16px 14px",
    textAlign: "center",
    boxShadow: "0 0 20px rgba(255,0,0,0.12)",
  },

  urgent: {
    color: "#ff3b3b",
    fontWeight: 700,
    marginBottom: 20,
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: 12,
    maxWidth: 420,
  },

  input: {
    width: "100%",
    boxSizing: "border-box",
    padding: "16px 15px",
    borderRadius: 14,
    border: "1px solid rgba(255,255,255,0.1)",
    background: "rgba(255,255,255,0.06)",
    color: "white",
    outline: "none",
    fontSize: 15,
  },

  button: {
    width: "100%",
    padding: "16px",
    background: "linear-gradient(135deg, #ff0000, #b90000)",
    borderRadius: 14,
    border: "none",
    color: "white",
    fontWeight: 900,
    cursor: "pointer",
    boxShadow: "0 0 28px rgba(255,0,0,0.45)",
    fontSize: 15,
  },

  success: {
    color: "#ff4b4b",
    fontWeight: 700,
  },

  launchBox: {
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,0,0,0.3)",
    borderRadius: 20,
    padding: 24,
    maxWidth: 470,
  },

  glow: {
    position: "absolute",
    width: 430,
    height: 430,
    background: "radial-gradient(circle, rgba(255,0,0,0.48), transparent 65%)",
    filter: "blur(38px)",
    borderRadius: "50%",
    top: 20,
  },

  image: {
    position: "relative",
    zIndex: 2,
    width: "min(430px, 92vw)",
    borderRadius: 30,
    boxShadow: "0 30px 90px rgba(255,0,0,0.22)",
  },

  products: {
    maxWidth: 1180,
    margin: "40px auto 0",
    padding: "0 20px",
    textAlign: "center",
  },

  sectionTitle: {
    fontSize: "clamp(30px, 7vw, 46px)",
    lineHeight: 1.05,
    marginBottom: 28,
    fontWeight: 900,
  },

  cardWrap: {
    display: "flex",
    justifyContent: "center",
    gap: 18,
    flexWrap: "wrap",
  },

  card: {
    background: "linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))",
    border: "1px solid rgba(255,0,0,0.22)",
    borderRadius: 22,
    padding: 26,
    width: "min(310px, 100%)",
    boxShadow: "0 0 30px rgba(255,0,0,0.12)",
  },

  cardTag: {
    color: "#ff3333",
    fontSize: 12,
    fontWeight: 800,
    letterSpacing: 1.5,
  },

  price: {
    fontSize: 28,
    fontWeight: 900,
  },

  linkButton: {
    display: "block",
    width: "100%",
    boxSizing: "border-box",
    padding: "15px 16px",
    background: "linear-gradient(135deg, #ff0000, #b90000)",
    color: "white",
    textDecoration: "none",
    borderRadius: 14,
    fontWeight: 900,
    boxShadow: "0 0 25px rgba(255,0,0,0.35)",
  },

  trust: {
    maxWidth: 1180,
    margin: "85px auto 0",
    padding: "0 20px",
    textAlign: "center",
  },

  miniCard: {
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,0,0,0.18)",
    borderRadius: 18,
    padding: 22,
    width: "min(230px, 100%)",
    fontWeight: 800,
  },

  results: {
    maxWidth: 1180,
    margin: "85px auto 0",
    padding: "0 20px",
    textAlign: "center",
  },

  gallery: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
    gap: 16,
    marginTop: 28,
  },

  resultBox: {
    minHeight: 190,
    border: "1px solid rgba(255,0,0,0.22)",
    borderRadius: 20,
    background: "rgba(255,255,255,0.05)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    position: "relative",
    color: "rgba(255,255,255,0.45)",
    fontWeight: 800,
  },

  resultImage: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  info: {
    maxWidth: 980,
    margin: "85px auto 0",
    padding: "0 20px",
    textAlign: "center",
  },

  infoGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: 12,
    textAlign: "left",
  },

  footer: {
    textAlign: "center",
    marginTop: 80,
    padding: "0 20px",
    color: "rgba(255,255,255,0.6)",
  },

  disclaimer: {
    fontSize: 12,
  },

  whatsapp: {
    position: "fixed",
    bottom: 18,
    right: 18,
    zIndex: 60,
    background: "#0faa43",
    padding: "14px 18px",
    borderRadius: 999,
    color: "white",
    fontWeight: 900,
    textDecoration: "none",
    boxShadow: "0 0 25px rgba(0,255,100,0.4)",
  },
};