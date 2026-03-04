"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  FolderOpen,
  LayoutDashboard,
  MessageSquare,
  Link2,
  ChevronRight,
  ChevronUp,
  Code2,
  Terminal,
  User
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { Separator } from "../ui/separator";

const menuItems = [
  { icon: Home, label: "Home", href: "/" },
  { icon: FolderOpen, label: "Projects", href: "/projects" },
  { icon: LayoutDashboard, label: "Experience", href: "/experience" },
  { icon: MessageSquare, label: "Public Chat", href: "/chat" },
  { icon: Link2, label: "Social Links", href: "/links" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <>
      <aside className="fixed left-0 top-0 w-80 h-screen bg-[#09090b] text-zinc-400 p-6 hidden lg:flex flex-col z-50">
        <div className="p-3 mt-8 mb-6">
          <div className="flex flex-col space-y-4 mb-8 px-2">
            <div className="relative w-fit group cursor-pointer">
              <Avatar className="h-20 w-20 border-2 border-zinc-800 ring-4 ring-black/50 shadow-2xl transition-transform duration-500 group-hover:scale-105">
                <AvatarImage
                  src="/avatar.jpg"
                  alt="Tama"
                  className="grayscale group-hover:grayscale-0 transition-all duration-500 object-cover"
                />
                <AvatarFallback className="bg-zinc-800 text-zinc-100 font-black tracking-tighter text-xl">TM</AvatarFallback>
              </Avatar>
              <div className="absolute bottom-1 right-1 w-4 h-4 bg-emerald-500 border-2 border-[#09090b] rounded-full animate-pulse shadow-sm" />
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <h2 className="text-[17px] font-black text-zinc-100 tracking-tighter leading-none">Teuku Aryansyah Pratama</h2>
                <svg viewBox="0 0 24 24" className="w-4 h-4 text-emerald-500 fill-current shrink-0">
                  <path d="m23 12-2.44-2.79.34-3.69-3.61-.82-1.89-3.2L12 2.96 8.6 1.5 6.71 4.69 3.1 5.5l.34 3.7L1 12l2.44 2.79-.34 3.7 3.61.82L8.6 22.5l3.4-1.47 3.4 1.46 1.89-3.19 3.61-.82-.34-3.69L23 12zm-12.91 4.72-3.8-3.81 1.48-1.48 2.32 2.33 5.85-5.87 1.48 1.48-7.33 7.35z" />
                </svg>
              </div>
              <p className="text-xs font-bold text-emerald-500 uppercase tracking-[0.15em]">Full-Stack Developer</p>
              <p className="text-[11px] font-medium text-zinc-500 leading-tight">Informatics Engineering</p>
            </div>
          </div>

          {/* Organization Status Card */}
          <div className="group relative overflow-hidden bg-zinc-900/40 border border-zinc-800/60 rounded-2xl p-4 mb-8 transition-all hover:bg-zinc-900/80 hover:border-zinc-700 cursor-default mx-1">
            <div className="flex justify-between items-start relative z-10 text-left">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Terminal className="w-3 h-3 text-emerald-500 group-hover:translate-x-1 transition-transform duration-300" />
                  <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Current Role</span>
                </div>
                <p className="text-[11px] font-bold text-zinc-100">Head of Biro Teknik Informatika</p>
                <p className="text-[11px] text-zinc-500 leading-tight italic">Period 2025/2026</p>
              </div>
              <div className="p-1.5 rounded-lg bg-zinc-800/50 text-emerald-500 group-hover:rotate-12 transition-transform duration-300">
                <User className="w-4 h-4" />
              </div>
            </div>
            <div className="absolute -right-6 -top-6 w-16 h-16 bg-emerald-500/5 blur-3xl group-hover:bg-emerald-500/10 transition-all duration-500" />
          </div>

          <nav className="space-y-1.5 flex-grow px-1">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "group flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-300 relative overflow-hidden",
                    isActive
                      ? "bg-zinc-800/80 text-zinc-100 shadow-lg border border-white/5"
                      : "hover:bg-zinc-900/50 text-zinc-500 hover:text-zinc-200"
                  )}
                >
                  <div className="flex items-center gap-3.5 relative z-10">
                    <div className="transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-110">
                      <item.icon className={cn(
                        "w-[18px] h-[18px] transition-colors duration-300",
                        isActive ? "text-emerald-400" : "group-hover:text-emerald-400"
                      )} />
                    </div>
                    <span className="text-sm font-semibold transition-transform duration-300 group-hover:translate-x-1">{item.label}</span>
                  </div>

                  {isActive ? (
                    <ChevronRight className="w-4 h-4 text-emerald-500/50 animate-pulse" />
                  ) : (
                    <ChevronRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-zinc-600" />
                  )}

                  {/* Subtle background glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/0 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </Link>
              );
            })}
          </nav>
        </div>
      </aside>

      {/* --- MOBILE FLOATING NAV --- */}
      <div className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] w-fit">
        <nav className="flex items-center bg-[#151515]/80 backdrop-blur-xl border border-white/10 p-1.5 rounded-[2rem] shadow-2xl ring-1 ring-black/50">
          <div className="flex items-center gap-1">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "flex items-center justify-center p-3.5 rounded-full transition-all duration-300 relative group",
                    isActive
                      ? "bg-zinc-800 text-white shadow-inner"
                      : "text-zinc-500 hover:text-zinc-200 hover:bg-zinc-900/50"
                  )}
                >
                  <item.icon className={cn(
                    "w-5 h-5 transition-transform duration-300 group-hover:scale-110 group-active:scale-95",
                    isActive ? "text-emerald-400" : "group-hover:text-emerald-400"
                  )} />
                  {isActive && (
                    <span className="absolute -top-1 px-2 py-0.5 bg-emerald-500 text-[8px] font-bold text-black rounded-full uppercase tracking-tighter shadow-lg animate-bounce">
                      {item.label}
                    </span>
                  )}
                </Link>
              );
            })}
          </div>

          <Separator orientation="vertical" className="h-6 mx-2 bg-zinc-700" />

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="p-3.5 rounded-full text-zinc-500 hover:text-white transition-all duration-300 hover:bg-zinc-900/50 group"
          >
            <ChevronUp className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-1" />
          </button>
        </nav>
      </div>
    </>
  );
}