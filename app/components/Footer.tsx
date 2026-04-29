export default function Footer() {
  return (
    <footer
      className="py-10 text-center"
      style={{ background: "#0a0a0f", borderTop: "1px solid rgba(201,168,76,0.1)" }}
    >
      <p className="text-xs tracking-widest uppercase" style={{ color: "#7a7a9a", fontFamily: "'Space Mono', monospace" }}>
        © 2025 Anas Ijaz — Built with Next.js & Tailwind CSS
      </p>
      <p className="text-xs mt-2" style={{ color: "rgba(122,122,154,0.4)" }}>All rights reserved.</p>
    </footer>
  );
}