"use client";

export default function Home() {
  return (
    <main style={styles.page}>

      {/* FLOAT SMALL ROBOT */}
      <img src="/nova.png" style={styles.floatingRobot} />

      {/* HERO */}
      <section style={styles.hero}>
        <div style={styles.left}>
          <p style={styles.update}>🔥 NEW UPDATE LIVE</p>

          <h1 style={styles.title}>
            ALGO NOVA EA <span style={styles.red}>v6+</span>
          </h1>

          <p style={styles.subtitle}>
            AI-powered automation built for precision, consistency and serious trading.
          </p>

          <p style={styles.stars}>★★★★★ Trusted by 3500+ users</p>

          <p style={styles.slogan}>#v6powerrr ⚡</p>

          <div style={styles.buttons}>
            <a href="https://payf.st/hl78w" target="_blank" style={styles.btn}>
              Android
            </a>

            <a href="https://payf.st/2xmr6" target="_blank" style={styles.btn}>
              iOS
            </a>

            <a href="https://payf.st/ex45h" target="_blank" style={styles.btn}>
              PC Lifetime
            </a>
          </div>
        </div>

        <div style={styles.right}>
          <div style={styles.imageGlow}></div>
          <img src="/nova.png" style={styles.heroImage} />
        </div>
      </section>

      {/* FEATURES */}
      <section style={styles.section}>
        <h2 style={styles.heading}>Why Traders Choose v6+</h2>

        <div style={styles.grid}>
          <div style={styles.card}>📊 AI Chart Scanner</div>
          <div style={styles.card}>🎯 Precise Trading</div>
          <div style={styles.card}>⚡ Fast Execution</div>
          <div style={styles.card}>🤖 Fully Automated</div>
        </div>
      </section>

      {/* ACCURACY */}
      <section style={styles.section}>
        <h2 style={styles.redBig}>98% Accuracy ⚡</h2>
        <p style={styles.subtitle}>Clean entries. Smart direction detection.</p>
      </section>

      {/* SOCIALS */}
      <section style={styles.section}>
        <h2 style={styles.heading}>Connect With Us</h2>

        <div style={styles.socials}>
          <a href="https://wa.me/27616260886">WhatsApp</a>
          <a href="https://t.me/+5zNgRPcXgGk3NmFk">Telegram</a>
          <a href="https://www.instagram.com/_nhlanhla_za">Founder</a>
          <a href="https://www.instagram.com/algo_nova_ea_v6">Robot Page</a>
          <a href="https://www.tiktok.com/@the_real_nhlanhla_za">TikTok</a>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={styles.footer}>
        <p>All rights reserved since May 2025</p>
        <p>Founder: _nhlanhla_za</p>
      </footer>

      {/* CHAT */}
      <a href="https://wa.me/27616260886" style={styles.chat}>
        Chat 24/7 💬
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
    justifyContent: "space-between",
    alignItems: "center",
    padding: "80px 20px",
    maxWidth: "1100px",
    margin: "0 auto",
  },

  left: { flex: 1 },

  right: { flex: 1, textAlign: "center", position: "relative" },

  heroImage: {
    width: "300px",
    borderRadius: "20px",
    zIndex: 2,
    position: "relative",
  },

  imageGlow: {
    position: "absolute",
    width: "300px",
    height: "300px",
    background: "red",
    filter: "blur(80px)",
  },

  floatingRobot: {
    position: "fixed",
    top: "20px",
    right: "20px",
    width: "60px",
    opacity: 0.8,
    borderRadius: "10px",
    boxShadow: "0 0 15px red",
  },

  title: { fontSize: "42px", fontWeight: 900 },

  red: { color: "red" },

  redBig: {
    color: "red",
    fontSize: "30px",
    fontWeight: "bold",
  },

  subtitle: { opacity: 0.7 },

  stars: { color: "gold" },

  slogan: {
    marginTop: "10px",
    color: "red",
    fontWeight: "bold",
  },

  update: {
    color: "red",
    fontWeight: "bold",
  },

  buttons: {
    display: "flex",
    gap: "10px",
    marginTop: "20px",
    flexWrap: "wrap",
  },

  btn: {
    background: "red",
    color: "white",
    padding: "10px",
    borderRadius: "8px",
    textDecoration: "none",
    boxShadow: "0 0 10px red",
  },

  section: {
    textAlign: "center",
    marginTop: "80px",
  },

  heading: {
    fontSize: "28px",
  },

  grid: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
  },

  card: {
    background: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(255,0,0,0.2)",
  },

  socials: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
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
};