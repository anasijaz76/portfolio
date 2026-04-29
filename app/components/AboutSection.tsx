"use client";
export default function AboutSection() {
  const experience = [
    {
      role: "Junior Mern Stack Developer",
      company: "Pny Trainings",
      period: "Oct 2025 – Apr 2026",
      description:
        "As a developing frontend enthusiast, I built key e-commerce features including interactive shopping carts, image galleries, and user authentication forms. Focused on mastering React hooks and folder-based routing to create organized, scalable frontend structures. Successfully integrated frontend views with REST APIs to display dynamic data from MongoDB."
      
    },
    {
      role: "Mern Stack Developer",
      company: "Self-Employed / Upwork",
      period: "Apr 2026 – Present",
      description:
        "Expert MERN Stack Developer focused on building responsive apps and bespoke eCommerce platforms. Highly skilled in frontend state management and backend API development. Dedicated to writing clean, optimized code for both server-side logic and user-facing interfaces."
    }

  ];

  return (
    <section id="about" className="py-28 relative" style={{ background: "#0a0a0f" }}>
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(circle, #2a2a3a 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <p className="text-xs tracking-widest uppercase mb-3" style={{ color: "#c9a84c", fontFamily: "'Space Mono', monospace" }}>
            My Story
          </p>
          <h2 className="text-4xl md:text-5xl font-black" style={{ fontFamily: "'Playfair Display', serif", color: "#e8e8f0" }}>
            About Me
          </h2>
          <div className="flex justify-center mt-4">
            <div style={{ width: "60px", height: "3px", background: "linear-gradient(90deg, #c9a84c, #7c6fd4)", borderRadius: "2px" }} />
          </div>
        </div>

        <div className="grid md:grid-cols-5 gap-16 items-start">

          <div className="md:col-span-2">
            <div className="p-8 rounded-2xl" style={{ background: "#16161f", border: "1px solid rgba(201,168,76,0.15)" }}>
              <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif", color: "#e8e8f0" }}>Anas Ijaz</h3>
              <p className="text-xs tracking-widest uppercase mb-6" style={{ color: "#c9a84c", fontFamily: "'Space Mono', monospace" }}>
                Mern Stack Developer
              </p>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "#a0a0c0" }}>
                I'm a 19-year-old Computer Science student and Mern stack developer with a deep passion for building web applications that are both technically robust and visually excellent.
              </p>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "#a0a0c0" }}>
                My journey started with HTML/CSS and quickly evolved into mastering the complete MERN stack. Today, I build production-grade eCommerce platforms,  dashboards, and  APIs for clients worldwide.
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "#a0a0c0" }}>
                Currently pursuing my Bachelor's in Computer Science, I balance academics with real-world freelance work — continuously pushing the boundaries of what modern web development can achieve.
              </p>

              <div className="mt-8 pt-6 grid grid-cols-2 gap-4" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                {[
                  { label: "Age", value: "19 Years" },
                  { label: "Degree", value: "B.Sc CS" },
                  { label: "Experience", value: "1+ Year" },
                ].map(({ label, value }) => (
                  <div key={label}>
                    <p className="text-xs uppercase tracking-wider mb-1" style={{ color: "#7a7a9a" }}>{label}</p>
                    <p className="text-sm font-semibold" style={{ color: "#e8e8f0" }}>{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-xs tracking-widest uppercase mb-10 flex items-center gap-3" style={{ color: "#7a7a9a", fontFamily: "'Space Mono', monospace" }}>
              <span style={{ width: "20px", height: "1px", background: "#c9a84c", display: "inline-block" }} />
              Work Experience
            </h3>

            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-px" style={{ background: "linear-gradient(to bottom, #c9a84c, rgba(124,111,212,0.3), transparent)" }} />
              <div className="flex flex-col gap-10">
                {experience.map((exp, i) => (
                  <div key={i} className="pl-14 relative">
                    <div
                      className="absolute left-0 top-1.5 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
                      style={{ background: "#16161f", border: "2px solid #c9a84c", color: "#c9a84c", fontFamily: "'Space Mono', monospace" }}
                    >
                      {i + 1}
                    </div>
                    <div
                      className="p-6 rounded-xl transition-all duration-300"
                      style={{ background: "#16161f", border: "1px solid rgba(201,168,76,0.1)" }}
                      onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(201,168,76,0.35)")}
                      onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(201,168,76,0.1)")}
                    >
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                        <h4 className="text-base font-bold" style={{ color: "#e8e8f0", fontFamily: "'Playfair Display', serif" }}>{exp.role}</h4>
                        <span className="text-xs px-3 py-1 rounded-full" style={{ background: "rgba(201,168,76,0.1)", color: "#c9a84c", fontFamily: "'Space Mono', monospace", whiteSpace: "nowrap" }}>{exp.period}</span>
                      </div>
                      <p className="text-xs tracking-wider uppercase mb-3" style={{ color: "#7c6fd4" }}>{exp.company}</p>
                      <p className="text-sm leading-relaxed mb-4" style={{ color: "#a0a0c0" }}>{exp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-14">
              <h3 className="text-xs tracking-widest uppercase mb-8 flex items-center gap-3" style={{ color: "#7a7a9a", fontFamily: "'Space Mono', monospace" }}>
                <span style={{ width: "20px", height: "1px", background: "#c9a84c", display: "inline-block" }} />
                What I Build
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "🛒", title: "eCommerce Stores", desc: "Full-featured stores with payments" },
                  { icon: "⚡", title: "MERN Applications", desc: "Scalable full-stack web apps" },
                  { icon: "🎨", title: "UI/UX Interfaces", desc: "Pixel-perfect React frontends" },
                  { icon: "🔗", title: "REST APIs", desc: "Robust backend API development" },
                ].map(({ icon, title, desc }) => (
                  <div
                    key={title}
                    className="p-5 rounded-xl transition-all duration-300"
                    style={{ background: "#16161f", border: "1px solid rgba(255,255,255,0.06)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(201,168,76,0.25)")}
                    onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)")}
                  >
                    <span className="text-2xl mb-3 block">{icon}</span>
                    <p className="text-sm font-semibold mb-1" style={{ color: "#e8e8f0" }}>{title}</p>
                    <p className="text-xs" style={{ color: "#7a7a9a" }}>{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}