'use client';
import { useMemo, useState } from 'react';

type Product = {
  name: string;
  price: string;
  details: string[];
  link: string;
  highlight?: boolean;
};

const products: Product[] = [
  {
    name: 'Android',
    price: 'R1500',
    details: [
      '1 year license',
      'AI chart scanner',
      'Works on all brokers & pairs',
    ],
    link: 'https://payf.st/hl78w',
  },
  {
    name: 'iOS',
    price: 'R2000',
    details: [
      '1 year license',
      'AI chart scanner',
      'Flexible account types',
    ],
    link: 'https://payf.st/2xmr6',
    highlight: true,
  },
  {
    name: 'PC (Lifetime)',
    price: 'R3500',
    details: [
      'Lifetime access',
      'More accurate',
      'Setup under 5 minutes',
      'Works on all brokers',
    ],
    link: 'https://payf.st/ex45h',
  },
];

const quickReplies = [
  'License',
  'Features',
  'Broker',
  'Risk',
  'Installation',
];

export default function Home() {
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState<string[]>([
    'Hi, welcome to ALGO NOVA EA v6+ support. Ask me about licenses, features, broker compatibility, risk, or installation.',
  ]);

  const responseMap = useMemo<Record<string, string>>(
    () => ({
      license:
        'All plans are license-based. Android and iOS include a 1 year license, and PC includes lifetime access after one payment.',
      features:
        'Core features include AI chart scanning, precision trade filtering, and full automation designed for fast and consistent execution.',
      broker:
        'ALGO NOVA EA v6+ works with most major brokers and supports multiple pairs. PC and Android are optimized for broad broker compatibility.',
      risk:
        'Trading is risky and no robot is 100% accurate. Always use risk management, start with safe lot sizes, and only trade funds you can afford to risk.',
      installation:
        'Installation is simple: purchase your package, receive your license, follow setup instructions, and activate. Most users are ready quickly, with PC setup under 5 minutes.',
      default:
        'I can help with: License, Features, Broker, Risk, and Installation. Use a quick reply for instant answers.',
    }),
    []
  );

  const handleQuickReply = (topic: string) => {
    const key = topic.toLowerCase();
    const answer = responseMap[key] ?? responseMap.default;
    setMessages((prev) => [...prev, `You: ${topic}`, `Support: ${answer}`]);
  };

  return (
  <div>
    <p style={{ color: "red" }}>#v6powerrr ⚡</p>
  </div>
);
    <main className="page">
      <section className="hero">
        <div className="heroText">
          <p className="update">NEW UPDATE</p>
          <h1>
            ALGO NOVA EA <span>v6+</span>
          </h1>
          <p className="subtitle">
            Premium automated trading with AI scanning, fast setup, and reliable
            precision.
          </p>
          <p className="slogan">#v6powerrr</p>
          <p className="trust">★★★★★ Trusted by 3500+ users</p>
        </div>

        <div className="heroVisual">
          <div className="glow" aria-hidden="true" />
          <img src="/nova.png" alt="ALGO NOVA trading robot" className="robot" />
        </div>
      </section>

      <section className="section" id="features">
        <h2>Features</h2>
        <div className="featureGrid">
          <article className="featureCard">
            <h3>AI Chart Scanner</h3>
            <p>Scans chart structure quickly to detect high-quality setups.</p>
          </article>
          <article className="featureCard">
            <h3>Precision Trading</h3>
            <p>Filters entries with tighter logic for cleaner market execution.</p>
          </article>
          <article className="featureCard">
            <h3>Full Automation</h3>
            <p>Runs strategy logic automatically for consistent decision flow.</p>
          </article>
        </div>
      </section>

      <section className="section" id="products">
        <h2>Products</h2>
        <div className="productGrid">
          {products.map((product) => (
            <article
              key={product.name}
              className={`productCard${product.highlight ? ' highlight' : ''}`}
            >
              <h3>{product.name}</h3>
              <p className="price">{product.price}</p>
              <ul>
                {product.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
              <a href={product.link} target="_blank" rel="noreferrer">
                Buy Now
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section support" id="support">
        <h2>Support</h2>
        <p>
          Need help before or after purchase? Our live support options cover
          setup, licensing, and account compatibility.
        </p>
      </section>

      <section className="section" id="socials">
        <h2>Social Links</h2>
        <div className="socialLinks">
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href="https://t.me" target="_blank" rel="noreferrer">
            Telegram
          </a>
          <a href="https://wa.me" target="_blank" rel="noreferrer">
            WhatsApp
          </a>
        </div>
      </section>

      <footer>
        <p>All rights reserved since May 2025</p>
        <p>Founder: _nhlanhla_za</p>
      </footer>

      <button
        type="button"
        className="chatToggle"
        onClick={() => setChatOpen((prev) => !prev)}
        aria-label="Open live support"
      >
        Live Support
      </button>

      {chatOpen ? (
        <aside className="chatPanel" aria-label="Support Chat">
          <div className="chatHeader">ALGO NOVA Support</div>
          <div className="chatBody">
            {messages.slice(-6).map((msg, idx) => (
              <p key={`${msg}-${idx}`}>{msg}</p>
            ))}
          </div>
          <div className="quickReplies">
            {quickReplies.map((item) => (
              <button key={item} type="button" onClick={() => handleQuickReply(item)}>
                {item}
              </button>
            ))}
          </div>
        </aside>
      ) : null}

      <style jsx>{`
        .page {
          background: #ffffff;
          color: #141414;
          min-height: 100vh;
          padding: 34px 20px 88px;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        .hero,
        .section,
        footer {
          max-width: 1120px;
          margin: 0 auto;
        }

        .hero {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 28px;
          align-items: center;
          padding: 42px 0 20px;
        }

        .update {
          color: #e11d2e;
          font-weight: 700;
          letter-spacing: 0.08em;
          margin: 0 0 12px;
        }

        h1 {
          font-size: clamp(2rem, 4vw, 3.6rem);
          margin: 0;
          line-height: 1.1;
        }

        h1 span {
          color: #df1028;
        }

        .subtitle {
          margin: 18px 0 0;
          font-size: 1.05rem;
          color: #383838;
          max-width: 620px;
          line-height: 1.7;
        }

        .slogan {
          margin: 18px 0 0;
          font-size: 1.05rem;
          font-weight: 600;
          color: #1c1c1c;
        }

        .trust {
          margin: 16px 0 0;
          font-size: 1rem;
          color: #be1010;
          font-weight: 600;
        }

        .heroVisual {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 320px;
        }

        .glow {
          position: absolute;
          width: 330px;
          height: 330px;
          border-radius: 999px;
          background: radial-gradient(circle, rgba(231, 0, 34, 0.24) 0%, rgba(231, 0, 34, 0.08) 45%, rgba(231, 0, 34, 0) 78%);
          filter: blur(4px);
          z-index: 0;
        }

        .robot {
          position: relative;
          z-index: 1;
          width: min(100%, 360px);
          object-fit: contain;
          border-radius: 20px;
        }

        .section {
          padding: 36px 0 10px;
        }

        .section h2 {
          margin: 0 0 18px;
          font-size: 1.7rem;
        }

        .featureGrid,
        .productGrid {
          display: grid;
          gap: 18px;
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        .featureCard,
        .productCard {
          border: 1px solid #ececec;
          border-radius: 16px;
          padding: 22px;
          background: linear-gradient(180deg, #ffffff 0%, #fdfdfd 100%);
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
        }

        .featureCard:hover,
        .productCard:hover {
          transform: translateY(-4px);
          border-color: #f5b4b9;
          box-shadow: 0 14px 30px rgba(0, 0, 0, 0.06);
        }

        .featureCard h3,
        .productCard h3 {
          margin: 0 0 8px;
        }

        .featureCard p {
          margin: 0;
          color: #414141;
          line-height: 1.6;
        }

        .productCard {
          border-color: #efefef;
        }

        .productCard.highlight {
          border-color: #eb4859;
          box-shadow: 0 8px 25px rgba(214, 16, 40, 0.15);
        }

        .productCard .price {
          font-size: 1.6rem;
          color: #d61028;
          font-weight: 700;
          margin: 0 0 12px;
        }

        .productCard ul {
          margin: 0;
          padding: 0 0 0 18px;
          color: #2f2f2f;
          line-height: 1.6;
          min-height: 128px;
        }

        .productCard a {
          display: inline-block;
          margin-top: 18px;
          text-decoration: none;
          background: #dd182f;
          color: #fff;
          padding: 10px 18px;
          border-radius: 999px;
          font-weight: 600;
          transition: background-color 0.2s ease, transform 0.2s ease;
        }

        .productCard a:hover {
          background: #bc1225;
          transform: translateY(-1px);
        }

        .support p {
          color: #353535;
          max-width: 700px;
          line-height: 1.7;
          margin: 0;
        }

        .socialLinks {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .socialLinks a {
          display: inline-block;
          text-decoration: none;
          color: #111;
          border: 1px solid #e7e7e7;
          border-radius: 999px;
          padding: 10px 16px;
          transition: border-color 0.2s ease, background-color 0.2s ease;
        }

        .socialLinks a:hover {
          border-color: #de1b31;
          background: #fff6f7;
        }

        footer {
          margin-top: 42px;
          padding: 16px 0 20px;
          color: #2f2f2f;
          border-top: 1px solid #f0f0f0;
        }

        footer p {
          margin: 6px 0;
        }

        .chatToggle {
          position: fixed;
          right: 20px;
          bottom: 20px;
          border: none;
          border-radius: 999px;
          padding: 12px 18px;
          background: #d8102a;
          color: #fff;
          font-weight: 700;
          cursor: pointer;
          box-shadow: 0 10px 24px rgba(216, 16, 42, 0.35);
          z-index: 50;
        }

        .chatPanel {
          position: fixed;
          right: 20px;
          bottom: 74px;
          width: min(92vw, 360px);
          background: #fff;
          border: 1px solid #f0d9dc;
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 18px 40px rgba(0, 0, 0, 0.14);
          z-index: 50;
        }

        .chatHeader {
          background: #d9102a;
          color: #fff;
          font-weight: 700;
          padding: 12px 14px;
        }

        .chatBody {
          max-height: 240px;
          overflow-y: auto;
          padding: 12px 14px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .chatBody p {
          margin: 0;
          font-size: 0.95rem;
          color: #252525;
          line-height: 1.5;
        }

        .quickReplies {
          padding: 12px;
          border-top: 1px solid #f0f0f0;
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .quickReplies button {
          border: 1px solid #edc0c6;
          background: #fff;
          color: #b10f24;
          border-radius: 999px;
          padding: 7px 11px;
          cursor: pointer;
        }

        .quickReplies button:hover {
          background: #fff3f5;
        }

        @media (max-width: 980px) {
          .hero {
            grid-template-columns: 1fr;
            text-align: center;
            padding-top: 20px;
          }

          .heroVisual {
            min-height: 250px;
          }

          .subtitle,
          .support p {
            margin-left: auto;
            margin-right: auto;
          }

          .featureGrid,
          .productGrid {
            grid-template-columns: 1fr;
          }

          .productCard ul {
            min-height: 0;
          }
        }
      `}</style>
    </main>
  );
}
