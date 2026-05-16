"use client";

import { ReactNode, useState } from "react";
import { Sidebar } from "./Sidebar";
import { Topbar } from "./Topbar";
import { AIAdvisor } from "./AIAdvisor";
import { cn } from "@/lib/cn";

export function AppShell({ children }: { children: ReactNode }) {
  const [advisorOpen, setAdvisorOpen] = useState(true);

  return (
    <div className="relative z-10 flex min-h-screen">
      {/* Sidebar */}
      <aside className="fixed inset-y-0 left-0 w-[220px] border-r border-white/5 bg-ink-800/60 backdrop-blur-xl overflow-y-auto z-30">
        <Sidebar />
      </aside>

      {/* Main + Topbar */}
      <div
        className={cn(
          "flex-1 flex flex-col transition-[margin] duration-300",
          "ml-[220px]",
          advisorOpen ? "mr-[320px]" : "mr-[48px]",
        )}
      >
        <Topbar />
        <main className="flex-1 px-6 py-6">{children}</main>
      </div>

      {/* Right Advisor */}
      <aside
        className={cn(
          "fixed inset-y-0 right-0 border-l border-white/5 bg-ink-800/60 backdrop-blur-xl z-30 transition-[width] duration-300",
          advisorOpen ? "w-[320px]" : "w-[48px]",
        )}
      >
        <AIAdvisor open={advisorOpen} onToggle={() => setAdvisorOpen((v) => !v)} />
      </aside>
    </div>
  );
}
