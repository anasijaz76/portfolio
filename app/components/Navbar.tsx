"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Define navigation items in one place for easy updates
  const navItems = [
    { id: "home", label: "Home" },
      { id: "skills", label: "Skills" },
    { id: "about", label: "About Me" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <nav
      style={{
        background: scrolled ? "rgba(10,10,15,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(201,168,76,0.15)" : "none",
        transition: "all 0.4s ease",
      }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => scrollTo("home")}
          className="font-bold text-xl tracking-widest"
          style={{ fontFamily: "'Space Mono', monospace", color: "#c9a84c" }}
        >
          Anas<span style={{ color: "#e8e8f0" }}>Ijaz</span>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="text-sm tracking-widest uppercase transition-all duration-300"
              style={{ fontFamily: "'Space Mono', monospace", color: "#7a7a9a" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#c9a84c")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#7a7a9a")}
            >
              {label}
            </button>
          ))}
        </div>

        <button
          onClick={() => scrollTo("contact")}
          className="hidden md:block text-xs px-5 py-2 rounded-full tracking-widest uppercase transition-all duration-300"
          style={{
            fontFamily: "'Space Mono', monospace",
            border: "1px solid #c9a84c",
            color: "#c9a84c",
            background: "transparent",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#c9a84c";
            e.currentTarget.style.color = "#0a0a0f";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = "#c9a84c";
          }}
        >
          Hire Me
        </button>

        {/* Hamburger Icon */}
        <button className="md:hidden flex flex-col gap-1.5 p-2" onClick={() => setMenuOpen(!menuOpen)}>
          <span style={{ background: "#c9a84c", display: "block", height: "2px", width: "24px", transition: "0.3s", transform: menuOpen ? "rotate(45deg) translateY(6px)" : "none" }} />
          <span style={{ background: "#c9a84c", display: "block", height: "2px", width: "24px", opacity: menuOpen ? 0 : 1, transition: "0.3s" }} />
          <span style={{ background: "#c9a84c", display: "block", height: "2px", width: "24px", transition: "0.3s", transform: menuOpen ? "rotate(-45deg) translateY(-6px)" : "none" }} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          className="md:hidden px-6 pb-6 flex flex-col gap-5"
          style={{ background: "rgba(10,10,15,0.98)", borderTop: "1px solid rgba(201,168,76,0.1)" }}
        >
          {navItems.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="text-left text-sm tracking-widest uppercase pt-4"
              style={{ fontFamily: "'Space Mono', monospace", color: "#7a7a9a" }}
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}