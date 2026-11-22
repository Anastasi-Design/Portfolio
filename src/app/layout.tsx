import type { Metadata } from "next";
import { Jersey_25, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jersey25 = Jersey_25({
  variable: "--font-jersey",
  weight: "400",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anastasi-Design — Product designer",
  description:
    "I design mobile app interfaces, from initial user flows to screens ready for development.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${jersey25.variable} ${jetBrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
