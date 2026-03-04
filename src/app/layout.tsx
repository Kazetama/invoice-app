import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Sidebar from "@/components/organism/sidebar";
import MatrixBackground from "@/components/organism/matrix-background"; // <-- Import komponennya
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kazeportho | Dashboard",
  description: "Modern Creative Portfolio Dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#09090b] text-zinc-100 selection:bg-emerald-500/30 selection:text-emerald-200`}
      >
        {/* Pasang background Matrix di sini */}
        <MatrixBackground />

        <div className="fixed left-0 right-0 top-[-10%] z-[-1] m-auto h-[400px] w-[400px] rounded-full bg-emerald-500 opacity-[0.05] blur-[120px] pointer-events-none"></div>

        <div className="flex min-h-screen">
          <Sidebar />

          <main className="flex-1 ml-0 lg:ml-80 min-h-screen transition-all duration-300">
            <div className="relative h-full bg-transparent p-6 md:p-8 lg:p-10">
              <div className="max-w-7xl mx-auto pb-24 lg:pb-0">
                {children}
              </div>
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}