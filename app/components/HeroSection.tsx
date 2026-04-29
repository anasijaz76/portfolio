"use client";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0a0a0f 0%, #0f0f1a 50%, #0a0a0f 100%)" }}
    >
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "radial-gradient(circle, #2a2a3a 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />
      <div className="absolute top-1/4 right-1/4 rounded-full blur-3xl opacity-10 pointer-events-none" style={{ width: "400px", height: "400px", background: "#c9a84c" }} />
      <div className="absolute bottom-1/3 left-1/4 rounded-full blur-3xl opacity-10 pointer-events-none" style={{ width: "300px", height: "300px", background: "#7c6fd4" }} />

      <div className="max-w-6xl mx-auto px-6 py-32 w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          <div className="order-2 md:order-1">
            <div
              className="fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs tracking-widest uppercase mb-6"
              style={{
                border: "1px solid rgba(201,168,76,0.3)",
                color: "#c9a84c",
                background: "rgba(201,168,76,0.05)",
                fontFamily: "'Space Mono', monospace",
              }}
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Available for Freelance
            </div>

            <p
              className="fade-up-delay-2 text-lg md:text-xl mb-6 font-light tracking-wide"
              style={{ color: "#7a7a9a", fontFamily: "'Space Mono', monospace" }}
            >
              Mern Stack Developer · eCommerce
            </p>

            <p
              className="fade-up-delay-3 text-base leading-relaxed mb-10 max-w-md"
              style={{ color: "#a0a0c0" }}
            >
              Hello! I'm Anas Ijaz, a mern-stack web developer — MongoDB, Express, React, and Node.js. With a strong foundation
              in modern web technologies and a deep passion for eCommerce development, I build
              scalable, high-performance applications that deliver exceptional user experiences.
            </p>

            <div className="fade-up-delay-4 flex flex-wrap gap-4">
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="px-8 py-3 rounded-full font-semibold text-sm tracking-wider transition-all duration-300"
                style={{
                  background: "linear-gradient(135deg, #c9a84c, #e6c56a)",
                  color: "#0a0a0f",
                  fontFamily: "'Space Mono', monospace",
                }}
              >
                Let's Work Together
              </button>
              <button
                onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                className="px-8 py-3 rounded-full text-sm tracking-wider transition-all duration-300"
                style={{
                  border: "1px solid rgba(201,168,76,0.4)",
                  color: "#c9a84c",
                  fontFamily: "'Space Mono', monospace",
                }}
              >
                View My Work
              </button>
            </div>

            <div
              className="fade-up-delay-5 flex gap-10 mt-14 pt-8"
              style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
            >
              {[
                { value: "1+", label: "Year Experience" },
                { value: "3+", label: "Projects Done" },
                { value: "100%", label: "Client Focus" },
              ].map(({ value, label }) => (
                <div key={label}>
                  <p className="text-2xl font-bold" style={{ color: "#c9a84c", fontFamily: "'Playfair Display', serif" }}>{value}</p>
                  <p className="text-xs tracking-wider uppercase mt-1" style={{ color: "#7a7a9a" }}>{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative">
              <div
                className="absolute inset-0 rounded-2xl"
                style={{
                  background: "linear-gradient(135deg, #c9a84c, #7c6fd4)",
                  transform: "rotate(3deg) scale(1.03)",
                  zIndex: 0,
                  opacity: 0.5,
                }}
              />
              <div
                className="relative z-10 rounded-2xl overflow-hidden pulse-glow"
                style={{ width: "320px", height: "400px", border: "2px solid rgba(201,168,76,0.4)" }}
              >
                <Image
                  src="/anas.jpeg"
                  alt="Anas Ijaz"
                  fill
                  style={{ objectFit: "cover", objectPosition: "center top" }}
                  priority
                />
              </div>
              
            </div>
          </div>

        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <p className="text-xs tracking-widest uppercase" style={{ color: "#7a7a9a", fontFamily: "'Space Mono', monospace" }}>Scroll</p>
        <div className="w-px h-12" style={{ background: "linear-gradient(to bottom, #c9a84c, transparent)" }} />
      </div>
    </section>
  );
}