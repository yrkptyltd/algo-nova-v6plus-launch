"use client";

export default function Home() {
  return (
    <main style={styles.page}>
      
      {/* HERO */}
      <section style={styles.hero}>
        <div style={styles.left}>
          <h1 style={styles.title}>
            ALGO NOVA EA <span style={{ color: "red" }}>v6+</span>
          </h1>

          <p style={styles.subtitle}>
            Advanced automated trading system built for precision and consistency.
          </p>

          <p style={styles.stars}>★★★★★ Trusted by 3500+ traders</p>
        </div>

        <div style={styles.right}>
          <div style={styles.glow}></div>
          <img src="/nova.png" style={styles.image} />
        </div>
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
            <a href="https://payf.st/hl78w" style={styles.button}>Buy</a>
          </div>

          <div style={styles.card}>
            <h3>iOS</h3>
            <p>R2000</p>
            <p>1 Year License</p>
            <p>AI Chart Scanner</p>
            <a href="https://payf.st/2xmr6" style={styles.button}>Buy</a>
          </div>

          <div style={styles.card}>
            <h3>PC Lifetime</h3>
            <p>R3500</p>
            <p>Lifetime Access</p>
            <p>More Accurate</p>
            <a href="https://payf.st/ex45h" style={styles.button}>Buy</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={styles.footer}>
        <p>All rights reserved since May 2025</p>
        <p>Founder: _nhlanhla_za</p>
      </footer>

    </main>
  );
}

const styles = {
  page: {
    background: "#ffffff",
    color: "#000",
    minHeight: "100vh",
    padding: "20px",
  },

  hero: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: "1000px",
    margin: "0 auto",
  },

  left: {
    flex: 1,
  },

  right: {
    flex: 1,
    position: "relative",
    textAlign: "center",
  },

  image: {
    width: "250px",
    position: "relative",
    zIndex: 2,
  },

  glow: {
    position: "absolute",
    width: "250px",
    height: "250px",
    background: "rgba(255,0,0,0.3)",
    filter: "blur(50px)",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },

  title: {
    fontSize: "36px",
    fontWeight: "bold",
  },

  subtitle: {
    opacity: 0.7,
  },

  stars: {
    color: "gold",
  },

  section: {
    textAlign: "center",
    marginTop: "60px",
  },

  grid: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
  },

  card: {
    background: "#f5f5f5",
    padding: "20px",
    borderRadius: "10px",
    width: "200px",
  },

  button: {
    display: "block",
    marginTop: "10px",
    background: "red",
    color: "white",
    padding: "10px",
    borderRadius: "6px",
    textDecoration: "none",
  },

  footer: {
    textAlign: "center",
    marginTop: "80px",
  },
};