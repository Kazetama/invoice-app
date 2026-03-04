"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Instagram, Twitter, Globe } from "lucide-react";

const ROLES = [
  "Full-Stack Developer",
  "Laravel Enthusiast",
  "Cloud Computing",
  "Tech Leader"
];

const ORIGINAL_NAME = "HI, I'M TEUKU ARYANSYAH PRATAMA";
const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export default function HeroSection() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  const [nameText, setNameText] = useState(ORIGINAL_NAME);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const handleNameHover = () => {
    let iteration = 0;
    
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setNameText((prev) =>
        prev
          .split("")
          .map((char, index) => {
            if (index < iteration) {
              return ORIGINAL_NAME[index];
            }
            if (ORIGINAL_NAME[index] === " " || ORIGINAL_NAME[index] === "'" || ORIGINAL_NAME[index] === ",") {
              return ORIGINAL_NAME[index];
            }
            return LETTERS[Math.floor(Math.random() * 26)];
          })
          .join("")
      );

      if (iteration >= ORIGINAL_NAME.length) {
        if (intervalRef.current) clearInterval(intervalRef.current);
      }
      iteration += 1 / 2; 
    }, 30);
  };

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % ROLES.length;
      const fullText = ROLES[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 40 : 100);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  const socialIcons = [Mail, Github, Linkedin, Instagram, Twitter, Globe];

  return (
    <section className="relative space-y-6 py-4">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:16px_16px] opacity-20 pointer-events-none" />

      <h1 
        onMouseEnter={handleNameHover}
        className="text-4xl md:text-3xl font-bold tracking-tight text-white uppercase cursor-default"
      >
        {nameText}
      </h1>
      
      <div className="flex items-center text-xl md:text-2xl text-zinc-400">
        <span className="font-light">I'm a&nbsp;</span>
        <span className="text-white font-medium">
          {text}
        </span>
        <span className="w-[2px] h-6 bg-white ml-[2px] animate-pulse"></span>
      </div>

      <p className="text-zinc-400 leading-relaxed text-base md:text-sm max-w-5xl">
        Passionate about <span className="text-zinc-200 font-medium">web development</span> and enjoy creating <span className="text-zinc-200 font-medium">creative and innovative solutions</span> using <span className="text-zinc-200 font-medium">modern technologies</span> such as <span className="text-zinc-200 font-medium">Laravel, Next.js, and TypeScript</span>, while remaining <span className="text-zinc-200 font-medium">committed to continuously improving my skills and expertise</span>.
      </p>

      <div className="flex items-center gap-4 pt-1">
        <span className="text-sm text-zinc-500">Find me on</span>
        <div className="flex items-center gap-2">
          {socialIcons.map((Icon, i) => (
            <Button 
              key={i} 
              variant="outline" 
              size="icon" 
              className="group rounded-full w-8 h-8 cursor-pointer border-zinc-800 bg-transparent hover:scale-110 hover:border-emerald-500/30 hover:bg-gradient-to-tr hover:from-emerald-500/20 hover:to-transparent transition-all duration-300 shadow-sm relative overflow-hidden"
            >
              <Icon className="w-4 h-4 text-zinc-400 group-hover:text-emerald-400 transition-colors duration-300 relative z-10" />
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}