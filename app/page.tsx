"use client";

export default function Home() {
  return (
    <main style={styles.page}>

      {/* FLOATING BRAND ICON */}
      <img src="/nova.png" style={styles.floatingRobot} />

      {/* HERO */}
      <section style={styles.hero}>
        <div style={styles.left}>
          <p style={styles.update}>NEW UPDATE — v6+ LIVE</p>

          <h1 style={styles.title}>
            ALGO NOVA EA <span style={styles.red}>v6+</span>
          </h1>

          <p style={styles.subtitle}>
            Advanced automated trading system built for precision, discipline and consistency.
          </p>

          <p style={styles.stars}>★★★★★ Trusted by 3500+ traders</p>

          <p style={styles.slogan}>#v6powerrr ⚡</p>

          <div style={styles.ctaRow}>
            <a href="#access" style={styles.ctaPrimary}>
              Get Access
            </a>

            <a href="https://wa.me/27616260886" style={styles.ctaSecondary}>
              Live Support
            </a>
          </div>
        </div>

        <div style={styles.right}>
          <div style={styles.glow}></div>
          <img src="/nova.png" style={styles.heroImage} />
        </div>
      </section>

      {/* FEATURES */}
      <section style={styles.section}>
        <h2 style={styles.heading}>Why Traders Choose v6+</h2>

        <div style={styles.grid}>
          <div style={styles.card}>📊 AI Chart Scanner</div>
          <div style={styles.card}>🎯 Precision Entries</div>
          <div style={styles.card}>⚡ Fast Execution</div>
          <div style={styles.card}>🤖 Fully Automated</div>
        </div>
      </section>

      {/* TRUST */}
      <section style={styles.section}>
        <h2 style={styles.heading}>Built for Real Markets</h2>

        <p style={styles.text}>
          Developed from real trading experience across previous Algo Nova versions.
          Focused on structure, risk awareness and consistent execution.
        </p>

        <p style={styles.warning}>
          ⚠️ Trading is risky. No system is 100% accurate. Always manage risk properly.
        </p>
      </section>

      {/* ACCESS */}
      <section id="access" style={styles.section}>
        <h2 style={styles.heading}>Choose Your Access</h2>

        <div style={styles.grid}>
          <a href="https://payf.st/hl78w" style={styles.product}>
            Android — R1500 / $250
          </a>

          <a href="https://payf.st/2xmr6" style={styles.product}>
            iOS — R2000 / $300
          </a>

          <a href="https://payf.st/ex45h" style={styles.product}>
            PC Lifetime — R3500 / $500
          </a>
        </div>
      </section>

      {/* SOCIALS */}
      <section style={styles.section}>
        <h2 style={styles.heading}>Stay Connected</h2>

        <div style={styles.links}>
          <a href="https://wa.me/27616260886">WhatsApp</a>
          <a href="https://t.me/+5zNgRPcXgGk3NmFk">Telegram</a>
          <a href="https://www.instagram.com/_nhlanhla_za">Founder</a>
          <a href="https://www.instagram.com/algo_nova_ea_v6">Robot IG</a>
          <a href="https://www.tiktok.com/@the_real_nhlanhla_za">TikTok</a>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={styles.footer}>
        <p>All rights reserved since May 2025</p>
        <p>Founder: _nhlanhla_za</p>
      </footer>

      {/* LIVE SUPPORT */}
      <a
        href="https://wa.me/27616260886?text=Hi I want info about Algo Nova EA v6+"
        style={styles.chat}
      >
        Live Support 💬
      </a>

    </main>
  );
}

const styles = {
  page: {
    background: "#ffffff",
    color: "#000",
    fontFamily: "Inter, sans-serif",
  },

  hero: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "100px 20px",
  },

  left: { flex: 1 },

  right: { flex: 1, textAlign: "center", position: "relative" },

  heroImage: {
    width: "260px",
    borderRadius: "20px",
    position: "relative",
    zIndex: 2,
  },

  glow: {
    position: "absolute",
    width: "260px",
    height: "260px",
    background: "red",
    filter: "blur(70px)",
  },

  floatingRobot: {
    position: "fixed",
    top: "20px",
    right: "20px",
    width: "60px",
    borderRadius: "12px",
    boxShadow: "0 0 15px red",
    opacity: 0.9,
  },

  title: {
    fontSize: "44px",
    fontWeight: 900,
    marginBottom: "10px",
  },

  red: { color: "red" },

  subtitle: {
    opacity: 0.7,
    maxWidth: "500px",
  },

  stars: {
    color: "gold",
    marginTop: "10px",
  },

  slogan: {
    marginTop: "10px",
    color: "red",
    fontWeight: "bold",
  },

  update: {
    color: "red",
    fontWeight: "bold",
    marginBottom: "10px",
  },

  ctaRow: {
    display: "flex",
    gap: "10px",
    marginTop: "20px",
  },

  ctaPrimary: {
    background: "red",
    color: "white",
    padding: "12px 18px",
    borderRadius: "8px",
    textDecoration: "none",
  },

  ctaSecondary: {
    border: "1px solid red",
    padding: "12px 18px",
    borderRadius: "8px",
    textDecoration: "none",
    color: "red",
  },

  section: {
    textAlign: "center",
    marginTop: "80px",
    padding: "0 20px",
  },

  heading: {
    fontSize: "28px",
    marginBottom: "20px",
  },

  grid: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
  },

  card: {
    background: "#fafafa",
    padding: "18px",
    borderRadius: "12px",
    boxShadow: "0 0 10px rgba(255,0,0,0.1)",
  },

  product: {
    background: "red",
    color: "white",
    padding: "15px",
    borderRadius: "10px",
    textDecoration: "none",
  },

  links: {
    display: "flex",
    gap: "15px",
    justifyContent: "center",
    flexWrap: "wrap",
  },

  text: {
    maxWidth: "600px",
    margin: "0 auto",
    opacity: 0.7,
  },

  warning: {
    color: "red",
    marginTop: "10px",
  },

  footer: {
    textAlign: "center",
    marginTop: "80px",
    padding: "20px",
  },

  chat: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    background: "green",
    padding: "12px",
    borderRadius: "50px",
    color: "white",
    boxShadow: "0 0 15px lime",
  },
};