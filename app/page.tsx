"use client";

export default function Home() {
  return (
    <main style={styles.page}>

      {/* FLOAT ROBOT */}
      <img src="/nova.png" style={styles.floatingRobot} />

      {/* HERO */}
      <section style={styles.hero}>
        <div style={styles.left}>
          <p style={styles.update}>🔥 NEW UPDATE — v6+ LIVE</p>

          <h1 style={styles.title}>
            ALGO NOVA EA <span style={styles.red}>v6+</span>
          </h1>

          <p style={styles.subtitle}>
            Advanced automated trading powered by AI chart scanning and precision execution.
          </p>

          <p style={styles.stars}>★★★★★ Trusted by 3500+ users</p>

          <p style={styles.slogan}>#v6powerrr ⚡</p>
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
          <div style={styles.card}>🎯 Precise Trading Entries</div>
          <div style={styles.card}>⚡ Fast Execution</div>
          <div style={styles.card}>🤖 Fully Automated System</div>
        </div>
      </section>

      {/* TRUST / INFO */}
      <section style={styles.section}>
        <h2 style={styles.heading}>Built for Real Traders</h2>

        <p style={styles.subtitle}>
          Designed using real trading experience from previous Algo Nova versions.  
          Focused on consistency, automation and smart market direction.
        </p>

        <p style={styles.warning}>
          ⚠️ Trading is risky. No system is 100% accurate. Proper risk management is essential.
        </p>
      </section>

      {/* PRODUCTS */}
      <section style={styles.section}>
        <h2 style={styles.heading}>Get Access</h2>

        <div style={styles.grid}>
          <a href="https://payf.st/hl78w" target="_blank" style={styles.product}>
            Android — R1500 / $250
          </a>

          <a href="https://payf.st/2xmr6" target="_blank" style={styles.product}>
            iOS — R2000 / $300
          </a>

          <a href="https://payf.st/ex45h" target="_blank" style={styles.product}>
            PC Lifetime — R3500 / $500
          </a>
        </div>
      </section>

      {/* SOCIALS + LINKS */}
      <section style={styles.section}>
        <h2 style={styles.heading}>Connect & Stay Updated</h2>

        <div style={styles.links}>
          <a href="https://wa.me/27616260886">WhatsApp</a>
          <a href="https://t.me/+5zNgRPcXgGk3NmFk">Telegram Group</a>
          <a href="https://www.instagram.com/_nhlanhla_za">Founder IG</a>
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

const styles: any = {
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
    padding: "80px 20px",
  },

  left: { flex: 1 },

  right: { flex: 1, textAlign: "center", position: "relative" },

  heroImage: {
    width: "280px",
    borderRadius: "20px",
    zIndex: 2,
  },

  glow: {
    position: "absolute",
    width: "280px",
    height: "280px",
    background: "red",
    filter: "blur(80px)",
  },

  floatingRobot: {
    position: "fixed",
    top: "20px",
    right: "20px",
    width: "60px",
    boxShadow: "0 0 10px red",
    borderRadius: "10px",
  },

  title: { fontSize: "42px", fontWeight: 900 },

  red: { color: "red" },

  subtitle: { opacity: 0.7 },

  stars: { color: "gold" },

  slogan: { color: "red", fontWeight: "bold" },

  update: { color: "red", fontWeight: "bold" },

  section: {
    textAlign: "center",
    marginTop: "80px",
    padding: "0 20px",
  },

  heading: { fontSize: "28px" },

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
    boxShadow: "0 0 10px rgba(255,0,0,0.2)",
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

  warning: {
    color: "red",
    marginTop: "10px",
  },
};