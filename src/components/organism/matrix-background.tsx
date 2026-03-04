// src/components/ui/matrix-background.tsx
"use client";

import { useEffect, useRef } from "react";

export default function MatrixBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Menyesuaikan ukuran canvas dengan layar
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    // Karakter yang akan turun (kombinasi huruf, angka, dan Katakana jepang)
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレゲゼデベペオォコソトノホモヨョロゴゾドボポヴッン";
    const fontSize = 14;
    const columns = Math.floor(window.innerWidth / fontSize);

    // Array untuk melacak posisi 'Y' dari setiap kolom rintik hujan
    const drops: number[] = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }

    const draw = () => {
      // Warna background transparan untuk efek jejak (trail) memudar
      ctx.fillStyle = "rgba(9, 9, 11, 0.05)"; // Warna #09090b dengan opacity 5%
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Warna teks hijau emerald ala hacker
      ctx.fillStyle = "#10b981"; 
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        // Ambil karakter acak
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        
        // Gambar teks di canvas
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Jika rintik sudah sampai bawah, reset ke atas secara acak
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    // Kecepatan animasi (sekitar 30 frame per detik)
    const interval = setInterval(draw, 33);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", setCanvasSize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      // z-[-1] agar berada di paling belakang, opacity diturunkan agar teks utama tetap terbaca
      className="fixed inset-0 z-[-1] opacity-[0.15] pointer-events-none"
    />
  );
}