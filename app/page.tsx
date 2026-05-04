export default function Home() {
  return (
    <main style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>
        ALGO NOVA EA <span style={{ color: "red" }}>v6+</span>
      </h1>

      <p>AI-powered automated trading system built for precision.</p>

      <p style={{ color: "gold" }}>★★★★★ Trusted by 3500+ traders</p>

      <h2 style={{ marginTop: "40px" }}>Get Access</h2>

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        <a href="https://payf.st/hl78w" style={btn}>Android — R1500</a>
        <a href="https://payf.st/2xmr6" style={btn}>iOS — R2000</a>
        <a href="https://payf.st/ex45h" style={btn}>PC Lifetime — R3500</a>
      </div>
    </main>
  );
}

const btn = {
  background: "red",
  color: "white",
  padding: "12px",
  borderRadius: "8px",
  textDecoration: "none",
};