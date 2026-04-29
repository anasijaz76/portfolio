"use client";
import { useState } from "react";

export default function ContactSection() {
  const [copied, setCopied] = useState<string | null>(null);

  const copy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section id="contact" className="py-28 relative" style={{ background: "#0f0f1a" }}>
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-20">
          <p
            className="text-xs tracking-widest uppercase mb-3"
            style={{ color: "#c9a84c", fontFamily: "'Space Mono', monospace" }}
          >
            Lets Connect
          </p>
          <h2
            className="text-4xl md:text-5xl font-black"
            style={{ fontFamily: "'Playfair Display', serif", color: "#e8e8f0" }}
          >
            Contact Me
          </h2>
          <div className="flex justify-center mt-4">
            <div
              style={{
                width: "60px",
                height: "3px",
                background: "linear-gradient(90deg, #c9a84c, #7c6fd4)",
                borderRadius: "2px",
              }}
            />
          </div>
          <p className="mt-6 text-base max-w-lg mx-auto" style={{ color: "#7a7a9a" }}>
            Have a project in mind? I am available for freelance work and open to new
            opportunities. Lets build something great together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">

          {/* Left column - contact info cards */}
          <div className="flex flex-col gap-5">

            {/* Email */}
            <div
              className="p-6 rounded-2xl flex items-start gap-5 transition-all duration-300 cursor-pointer"
              style={{ background: "#16161f", border: "1px solid rgba(201,168,76,0.15)" }}
              onClick={() => copy("anasijaz586@gmail.com", "email")}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(201,168,76,0.4)")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(201,168,76,0.15)")}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 font-bold text-sm"
                style={{
                  background: "rgba(201,168,76,0.1)",
                  border: "1px solid rgba(201,168,76,0.2)",
                  color: "#c9a84c",
                  fontFamily: "'Space Mono', monospace",
                }}
              >
                @
              </div>
              <div>
                <p
                  className="text-xs uppercase tracking-widest mb-1"
                  style={{ color: "#7a7a9a", fontFamily: "'Space Mono', monospace" }}
                >
                  Email
                </p>
                <p className="text-sm font-semibold" style={{ color: "#e8e8f0" }}>
                  anasijaz586@gmail.com
                </p>
                <p
                  className="text-xs mt-1"
                  style={{ color: copied === "email" ? "#4ade80" : "#c9a84c" }}
                >
                  {copied === "email" ? "Copied!" : "Click to copy"}
                </p>
              </div>
            </div>

            {/* Phone */}
            <div
              className="p-6 rounded-2xl flex items-start gap-5 transition-all duration-300 cursor-pointer"
              style={{ background: "#16161f", border: "1px solid rgba(124,111,212,0.15)" }}
              onClick={() => copy("03124605277", "phone")}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(124,111,212,0.4)")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(124,111,212,0.15)")}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 font-bold text-sm"
                style={{
                  background: "rgba(124,111,212,0.1)",
                  border: "1px solid rgba(124,111,212,0.2)",
                  color: "#7c6fd4",
                  fontFamily: "'Space Mono', monospace",
                }}
              >
                Tel
              </div>
              <div>
                <p
                  className="text-xs uppercase tracking-widest mb-1"
                  style={{ color: "#7a7a9a", fontFamily: "'Space Mono', monospace" }}
                >
                  Mobile / WhatsApp
                </p>
                <p className="text-sm font-semibold" style={{ color: "#e8e8f0" }}>
                  0312-4605277
                </p>
                <p
                  className="text-xs mt-1"
                  style={{ color: copied === "phone" ? "#4ade80" : "#7c6fd4" }}
                >
                  {copied === "phone" ? "Copied!" : "Click to copy"}
                </p>
              </div>
            </div>

            {/* Location */}
            <div
              className="p-6 rounded-2xl flex items-start gap-5"
              style={{ background: "#16161f", border: "1px solid rgba(255,255,255,0.06)" }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 font-bold text-xs"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  color: "#7a7a9a",
                  fontFamily: "'Space Mono', monospace",
                }}
              >
                PKT
              </div>
              <div>
                <p
                  className="text-xs uppercase tracking-widest mb-1"
                  style={{ color: "#7a7a9a", fontFamily: "'Space Mono', monospace" }}
                >
                  Location
                </p>
                <p className="text-sm font-semibold" style={{ color: "#e8e8f0" }}>
                  Lahore, Pakistan
                </p>
                <p className="text-xs mt-1" style={{ color: "#7a7a9a" }}>
                  Available for remote work worldwide
                </p>
              </div>
            </div>

            {/* Availability */}
            <div
              className="p-6 rounded-2xl flex items-center gap-5"
              style={{
                background: "rgba(74,222,128,0.04)",
                border: "1px solid rgba(74,222,128,0.15)",
              }}
            >
              <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse shrink-0" />
              <div>
                <p className="text-sm font-semibold" style={{ color: "#e8e8f0" }}>
                  Currently Available
                </p>
                <p className="text-xs mt-0.5" style={{ color: "#7a7a9a" }}>
                  Open to freelance projects and full-time roles
                </p>
              </div>
            </div>

          </div>

          {/* Right column - CTA panel */}
          <div
            className="rounded-2xl p-8 flex flex-col justify-between"
            style={{
              background: "linear-gradient(135deg, #16161f, #1a1a2e)",
              border: "1px solid rgba(201,168,76,0.2)",
            }}
          >
            <div>
              <h3
                className="text-2xl font-bold mb-4"
                style={{ fontFamily: "'Playfair Display', serif", color: "#e8e8f0" }}
              >
                Ready to start a project?
              </h3>
              <p className="text-sm leading-relaxed mb-8" style={{ color: "#a0a0c0" }}>
                Whether you need a full eCommerce store, a custom web app, or a sleek
                landing page — I am here to turn your vision into reality. Fast delivery,
                clean code, and pixel-perfect design.
              </p>

              <div className="flex flex-col gap-3">
                {/* FIXED: Added <a> tag */}
                <a
                  href="mailto:anasijaz586@gmail.com"
                  className="w-full py-4 rounded-xl text-center font-semibold text-sm tracking-wider transition-all duration-300 block"
                  style={{
                    background: "linear-gradient(135deg, #c9a84c, #e6c56a)",
                    color: "#0a0a0f",
                    fontFamily: "'Space Mono', monospace",
                  }}
                >
                  Send an Email
                </a>
                
                {/* FIXED: Added <a> tag and used correct international format for WhatsApp */}
                <a
                  href="https://wa.me/923124605277"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 rounded-xl text-center font-semibold text-sm tracking-wider transition-all duration-300 block"
                  style={{
                    background: "rgba(37,211,102,0.1)",
                    border: "1px solid rgba(37,211,102,0.3)",
                    color: "#25D366",
                    fontFamily: "'Space Mono', monospace",
                  }}
                >
                  WhatsApp Me
                </a>
              </div>
            </div>

            <div
              className="mt-8 pt-6"
              style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
            >
              <p
                className="text-xs uppercase tracking-widest mb-3"
                style={{ color: "#7a7a9a", fontFamily: "'Space Mono', monospace" }}
              >
                Response Time
              </p>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400" />
                <span className="text-sm" style={{ color: "#e8e8f0" }}>
                  Usually within 1 to 2 hours
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}