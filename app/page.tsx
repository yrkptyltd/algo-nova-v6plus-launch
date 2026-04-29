"use client";

import { useEffect, useState } from "react";

const launchDate = new Date("2026-04-30T10:00:00+02:00");

export default function Home() {
  const [time, setTime] = useState(new Date());
  const [submitted, setSubmitted] = useState(false);

  const isLaunched = time >= launchDate;

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const diff = Math.max(0, launchDate.getTime() - time.getTime());
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff / 3600000) % 24);
  const minutes = Math.floor((diff / 60000) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return (
    <main style={{
      background: "linear-gradient(to bottom, #0b0000, #1a0000)",
      color: "white",
      minHeight: "100vh",
      padding: "40px",
      fontFamily: "sans-serif"
    }}>
      
      {/* HERO */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap" }}>
        
        <div style={{ maxWidth: "500px" }}>
          <p style={{ color: "red", letterSpacing: 2 }}>PRIVATE LAUNCH ACCESS</p>

          <h1 style={{
            fontSize: "56px",
            textShadow: "0 0 20px red, 0 0 40px red"
          }}>
            ALGO NOVA EA v6+
          </h1>

          <p style={{ opacity: 0.8 }}>
            The next evolution of automated trading. Built for dominance.
          </p>

          {!isLaunched ? (
            <>
              <h2 style={{ marginTop: 30 }}>
                {days}d {hours}h {minutes}m {seconds}s
              </h2>

              <div style={{ marginTop: 20 }}>
                <input placeholder="Name" style={inputStyle} /><br />
                <input placeholder="Email" style={inputStyle} /><br />
                <input placeholder="WhatsApp" style={inputStyle} /><br />

                <button
                  onClick={() => setSubmitted(true)}
                  style={buttonStyle}
                >
                  Join Priority List 🔥
                </button>

                {submitted && <p style={{ color: "red" }}>You're locked in ⚡</p>}
              </div>
            </>
          ) : (
            <div style={{ marginTop: 30 }}>
              <a href="https://payf.st/hl78w" style={buttonStyle}>Buy Android</a><br /><br />
              <a href="https://payf.st/2xmr6" style={buttonStyle}>Buy iOS</a><br /><br />
              <a href="https://payf.st/ex45h" style={buttonStyle}>Buy PC (Lifetime)</a>
            </div>
          )}
        </div>

        {/* ROBOT IMAGE */}
        <img
          src="/nova.png"
          alt="robot"
          style={{
            width: "350px",
            filter: "drop-shadow(0 0 30px red)",
            animation: "float 3s ease-in-out infinite"
          }}
        />
      </div>

      {/* INFO */}
      <div style={{ marginTop: 80 }}>
        <h2>Why Traders Are Waiting 🔥</h2>
        <p>✔ 200% Bonus Account Ready</p>
        <p>✔ Works On All Brokers</p>
        <p>✔ Minimum Deposit R300+</p>
        <p>✔ Lifetime PC License</p>
      </div>

      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
    </main>
  );
}

const inputStyle = {
  margin: "10px 0",
  padding: "10px",
  width: "100%",
  borderRadius: "6px",
  border: "none"
};

const buttonStyle = {
  background: "red",
  color: "white",
  padding: "12px 20px",
  borderRadius: "8px",
  border: "none",
  cursor: "pointer",
  boxShadow: "0 0 20px red"
};