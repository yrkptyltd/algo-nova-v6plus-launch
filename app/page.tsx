"use client";

export default function Home() {
  return (
    <main style={styles.page}>

      {/* HERO */}
      <section style={styles.hero}>
        <div style={styles.left}>
          <p style={styles.tag}>ALGO NOVA EA v6+</p>

          <h1 style={styles.title}>
            AUTOMATED <span style={styles.red}>TRADING</span> REDEFINED
          </h1>

          <p style={styles.subtitle}>
            AI-powered system built for precision, consistency and serious profits.
          </p>

          <p style={styles.stars}>★★★★★ Trusted by 3500+ traders</p>

          <p style={styles.urgent}>
            Limited copies available — sells out fast 🔥
          </p>
        </div>

        <div style={styles.right}>
          <img src="/nova.png" style={styles.image} />
        </div>
      </section>

      {/* PRODUCTS */}
      <section style={styles.section}>
        <h2 style={styles.heading}>Choose Your Access</h2>

        <div style={styles.grid}>

          {/* ANDROID */}
          <div style={{ ...styles.card, ...styles.redCard }}>
            <h3>Android</h3>
            <p>R1500 / $250</p>
            <p style={styles.small}>Mobile automation</p>
            <a href="https://payf.st/hl78w" target="_blank" style={styles.btn}>
              Buy Now 🔥
            </a>
          </div>

          {/* IOS */}
          <div style={{ ...styles.card, ...styles.whiteCard }}>
            <h3>iOS</h3>
            <p>R2000 / $300</p>
            <p style={styles.small}>iPhone optimized</p>
            <a href="https://payf.st/2xmr6" target="_blank" style={styles.btnDark}>
              Buy Now
            </a>
          </div>

          {/* PC */}
          <div style={{ ...styles.card, ...styles.darkCard }}>
            <h3>PC (Lifetime)</h3>
            <p>R3500 / $500</p>
            <p style={styles.small}>Full power version</p>
            <a href="https://payf.st/ex45h" target="_blank" style={styles.btn}>
              Buy Now ⚡
            </a>
          </div>

        </div>
      </section>

      {/* FEATURES */}
      <section style={styles.section}>
        <h2 style={styles.heading}>Why Traders Choose v6+</h2>

        <div style={styles.grid}>
          <div style={styles.feature}>📊 AI Chart Scanner</div>
          <div style={styles.feature}>🎯 Precise Entries</div>
          <div style={styles.feature}>⚡ Fast Execution</div>
          <div style={styles.feature}>🤖 Fully Automated</div>
        </div>
      </section>

      {/* ACCURACY */}
      <section style={styles.section}>
        <h2 style={styles.redBig}>98% Accuracy ⚡</h2>
        <p style={styles.subtitle}>
          Built for clean entries and high-probability trades.
        </p>
      </section>

      {/* RESULTS */}
      <section style={styles.section}>
        <h2 style={styles.heading}>Real Results</h2>

        <div style={styles.grid}>
          <div style={styles.result}>Upload Result</div>
          <div style={styles.result}>Upload Result</div>
          <div style={styles.result}>Upload Result</div>
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
  page: {
    background: "#0a0a0a",
    color: "white",
    fontFamily: "Inter, sans-serif",
  },

  hero: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "80px 20px",
  },

  left: { flex: 1 },

  right: { flex: 1, textAlign: "center" },

  image: {
    width: "280px",
    borderRadius: "20px",
    boxShadow: "0 0 40px red",
  },

  tag: {
    color: "red",
    fontWeight: "bold",
  },

  title: {
    fontSize: "42px",
    fontWeight: 900,
  },

  red: {
    color: "red",
  },

  redBig: {
    color: "red",
    fontSize: "30px",
    fontWeight: "bold",
  },

  subtitle: {
    opacity: 0.7,
  },

  stars: {
    color: "gold",
    marginTop: "10px",
  },

  urgent: {
    color: "red",
    fontWeight: "bold",
  },

  section: {
    textAlign: "center",
    marginTop: "80px",
    padding: "0 20px",
  },

  heading: {
    fontSize: "28px",
    marginBottom: "30px",
  },

  grid: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
  },

  card: {
    padding: "25px",
    borderRadius: "16px",
    width: "250px",
    textAlign: "center",
  },

  redCard: {
    background: "#1a0000",
    boxShadow: "0 0 20px red",
  },

  whiteCard: {
    background: "#fff",
    color: "#000",
  },

  darkCard: {
    background: "#111",
    boxShadow: "0 0 20px rgba(255,255,255,0.1)",
  },

  btn: {
    display: "block",
    marginTop: "15px",
    background: "red",
    padding: "10px",
    borderRadius: "8px",
    color: "white",
    textDecoration: "none",
  },

  btnDark: {
    display: "block",
    marginTop: "15px",
    background: "#000",
    padding: "10px",
    borderRadius: "8px",
    color: "white",
    textDecoration: "none",
  },

  small: {
    fontSize: "12px",
    opacity: 0.7,
  },

  feature: {
    background: "#111",
    padding: "15px",
    borderRadius: "10px",
  },

  result: {
    width: "120px",
    height: "120px",
    background: "#111",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
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