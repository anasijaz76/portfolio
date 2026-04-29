"use client";
import { useEffect, useRef, useState } from "react";

const skills = [
  { name: "React.js", level: 95, category: "Frontend" },
  { name: "Next.js", level: 85, category: "Frontend" },
  { name: "Tailwind CSS", level: 92, category: "Frontend" },
  { name: "HTML & CSS", level: 95, category: "Frontend" },
  { name: "Node.js", level: 82, category: "Backend" },
  { name: "Express.js", level: 85, category: "Backend" },
  { name: "PHP & Laravel", level: 75, category: "Backend" },
  { name: "MongoDB", level: 80, category: "Database" },
  { name: "MySQL", level: 70, category: "Database" },
  { name: "JavaScript (ES6+)", level: 85, category: "Language" },
  { name: "TypeScript", level: 75, category: "Language" },
  { name: "Git & GitHub", level: 75, category: "Tools" },
];

const techBadges = [
  "React", "Next.js", "Node.js", "Express", "MongoDB", "PHP",
  "Laravel", "Tailwind CSS", "TypeScript", "JavaScript", "HTML5",
  "CSS3", "MySQL", "Git", "REST APIs", "eCommerce",
];

export default function SkillsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const categories = [...new Set(skills.map((s) => s.category))];

  return (
    <section id="skills" ref={ref} className="py-28 relative" style={{ background: "#0f0f1a" }}>
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-20">
          <p className="text-xs tracking-widest uppercase mb-3" style={{ color: "#c9a84c", fontFamily: "'Space Mono', monospace" }}>
            What I Work With
          </p>
          <h2 className="text-4xl md:text-5xl font-black" style={{ fontFamily: "'Playfair Display', serif", color: "#e8e8f0" }}>
            Skills & Technologies
          </h2>
          <div className="flex justify-center mt-4">
            <div style={{ width: "60px", height: "3px", background: "linear-gradient(90deg, #c9a84c, #7c6fd4)", borderRadius: "2px" }} />
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-20">
          {techBadges.map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 cursor-default"
              style={{
                background: "rgba(201,168,76,0.06)",
                border: "1px solid rgba(201,168,76,0.2)",
                color: "#c9a84c",
                fontFamily: "'Space Mono', monospace",
                letterSpacing: "0.05em",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(201,168,76,0.15)";
                e.currentTarget.style.borderColor = "#c9a84c";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(201,168,76,0.06)";
                e.currentTarget.style.borderColor = "rgba(201,168,76,0.2)";
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {categories.map((cat) => (
            <div key={cat}>
              <h3
                className="text-xs tracking-widest uppercase mb-6 flex items-center gap-3"
                style={{ color: "#7a7a9a", fontFamily: "'Space Mono', monospace" }}
              >
                <span style={{ width: "20px", height: "1px", background: "#c9a84c", display: "inline-block" }} />
                {cat}
              </h3>
              <div className="flex flex-col gap-5">
                {skills.filter((s) => s.category === cat).map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium" style={{ color: "#e8e8f0" }}>{skill.name}</span>
                      <span className="text-xs" style={{ color: "#c9a84c", fontFamily: "'Space Mono', monospace" }}>{skill.level}%</span>
                    </div>
                    <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
                      {visible && (
                        <div
                          className="h-full rounded-full skill-bar-fill"
                          style={{
                            "--target-width": `${skill.level}%`,
                            width: `${skill.level}%`,
                            background: "linear-gradient(90deg, #c9a84c, #7c6fd4)",
                          } as React.CSSProperties}
                        />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}