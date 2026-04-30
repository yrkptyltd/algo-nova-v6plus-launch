import "./globals.css";

export const metadata = {
  title: "ALGO NOVA EA v6+",
  description: "The next evolution of automated trading",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* PREMIUM FONT */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap"
          rel="stylesheet"
        />
      </head>

      <body style={{
        margin: 0,
        fontFamily: "Inter, sans-serif",
        background: "#000",
        color: "white"
      }}>
        {children}
      </body>
    </html>
  );
}