import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Sriram Mentey — Healthcare Systems Engineer",
  description:
    "Engineering lead building event-driven, real-time systems at 90M+ user scale — from low-latency scheduling engines to multi-agent AI assistants in production.",
  openGraph: {
    title: "Sriram Mentey — Healthcare Systems Engineer",
    description:
      "Engineering lead building event-driven, real-time systems at 90M+ user scale — from low-latency scheduling engines to multi-agent AI assistants in production.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${instrumentSerif.variable} min-h-screen bg-background font-sans text-foreground antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
