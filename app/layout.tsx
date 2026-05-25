import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sonic Flare AI — Infrastructure Powering the AI Economy",
  description:
    "Sonic Flare AI is a strategic execution partner bridging governments, hyperscalers, investors, utilities, and local partners to deliver AI infrastructure and technology ecosystems.",
  openGraph: {
    title: "Sonic Flare AI",
    description:
      "Building the infrastructure powering the AI economy — from strategy and stakeholder alignment to execution and long-term operational success.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin=""
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:wght@500;600;700;800;900&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
