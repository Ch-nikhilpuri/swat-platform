import "@/styles/globals.css";
import { AppShell } from "@/components/layout/AppShell";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SWAT — Supply Resilience Command Center",
  description: "Mission-control operating system for global supply resilience.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen relative">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
