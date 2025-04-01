import type { Metadata } from "next";
import { Sora } from "next/font/google";
import { StudyProvider } from "@/app/context/StudyContext";
import "../app/styles/globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Study Timer",
  description: "Generating statistics from your studies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sora.className} antialiased`}
      >
        <StudyProvider>
          {children}
        </StudyProvider>
      </body>
    </html>
  );
}
