"use client";

import { useState } from "react";

interface ClusterDef {
  id: string;
  title: string;
  color: string;
  cx: number;
  cy: number;
  r: number;
  skills: string[];
}

const CLUSTERS: ClusterDef[] = [
  {
    id: "llm",
    title: "LLM & Agentic",
    color: "#a855f7",
    cx: 170, cy: 155, r: 90,
    skills: ["Anthropic API", "OpenAI API", "LangChain", "Multi-Agent", "RAG Pipelines", "Knowledge Graphs", "Prompt Eng.", "MCP"],
  },
  {
    id: "langs",
    title: "Languages",
    color: "#22d3ee",
    cx: 480, cy: 120, r: 85,
    skills: ["Python", "TypeScript", "SQL", "React", "FastAPI", "Flask", "Java", "Next.js"],
  },
  {
    id: "aiml",
    title: "AI / ML",
    color: "#f472b6",
    cx: 790, cy: 155, r: 88,
    skills: ["PyTorch", "TensorFlow", "Hugging Face", "Scikit-learn", "NLP", "Fine-Tuning", "Computer Vision", "MoveNet"],
  },
  {
    id: "de",
    title: "Data Eng. & Cloud",
    color: "#34d399",
    cx: 170, cy: 415, r: 88,
    skills: ["Kafka", "PySpark", "dbt", "Airflow", "Snowflake", "BigQuery", "AWS", "Terraform", "Kubernetes"],
  },
  {
    id: "devops",
    title: "DevOps & MLOps",
    color: "#fbbf24",
    cx: 480, cy: 450, r: 80,
    skills: ["Docker", "GitHub Actions", "CI/CD", "Prometheus", "Grafana", "REST APIs", "Model Monitoring"],
  },
  {
    id: "se",
    title: "Software Eng.",
    color: "#60a5fa",
    cx: 790, cy: 405, r: 85,
    skills: ["Unit Testing", "Integration Testing", "Code Quality", "API Design", "Debugging", "Tech Docs", "Agile"],
  },
];

interface CrossConn {
  fromId: string; fromIdx: number;
  toId: string;   toIdx: number;
}

const CROSS_CONNS: CrossConn[] = [
  { fromId: "llm",    fromIdx: 4, toId: "de",     toIdx: 5 }, // RAG Pipelines → BigQuery
  { fromId: "llm",    fromIdx: 2, toId: "langs",  toIdx: 0 }, // LangChain → Python
  { fromId: "aiml",   fromIdx: 0, toId: "langs",  toIdx: 0 }, // PyTorch → Python
  { fromId: "de",     fromIdx: 0, toId: "langs",  toIdx: 2 }, // Kafka → SQL
  { fromId: "de",     fromIdx: 6, toId: "devops", toIdx: 0 }, // AWS → Docker
  { fromId: "devops", fromIdx: 2, toId: "se",     toIdx: 0 }, // CI/CD → Unit Testing
  { fromId: "se",     fromIdx: 3, toId: "langs",  toIdx: 4 }, // API Design → FastAPI
  { fromId: "llm",    fromIdx: 0, toId: "aiml",   toIdx: 2 }, // Anthropic API → Hugging Face
];

function getNodes(cx: number, cy: number, r: number, count: number) {
  return Array.from({ length: count }, (_, i) => {
    const angle = (i / count) * Math.PI * 2 - Math.PI / 2;
    return { x: cx + r * Math.cos(angle), y: cy + r * Math.sin(angle) };
  });
}

const GRAPH = CLUSTERS.map((c) => ({ ...c, nodes: getNodes(c.cx, c.cy, c.r, c.skills.length) }));

const nodeMap = new Map(GRAPH.map((c) => [c.id, c]));

export function SkillConstellation() {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <div className="constellation-wrap">
      <svg
        viewBox="0 0 960 560"
        className="constellation-svg"
        overflow="visible"
        aria-label="Interactive skills constellation"
        role="img"
      >
        <defs>
          {GRAPH.map((cat) => (
            <radialGradient key={cat.id} id={`cglow-${cat.id}`} cx="50%" cy="50%" r="50%">
              <stop offset="0%"   stopColor={cat.color} stopOpacity="0.2" />
              <stop offset="100%" stopColor={cat.color} stopOpacity="0" />
            </radialGradient>
          ))}
          <filter id="nodeGlow">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        {/* Background cluster glows */}
        {GRAPH.map((cat) => (
          <ellipse
            key={`bg-${cat.id}`}
            cx={cat.cx} cy={cat.cy}
            rx={cat.r + 30} ry={cat.r + 30}
            fill={`url(#cglow-${cat.id})`}
            opacity={activeId === null || activeId === cat.id ? 1 : 0.2}
            style={{ transition: "opacity 0.35s ease", pointerEvents: "none" }}
          />
        ))}

        {/* Cross-cluster connections */}
        {CROSS_CONNS.map((conn, i) => {
          const fromCat = nodeMap.get(conn.fromId)!;
          const toCat = nodeMap.get(conn.toId)!;
          const fp = fromCat.nodes[conn.fromIdx];
          const tp = toCat.nodes[conn.toIdx];
          const isLit = activeId === conn.fromId || activeId === conn.toId;
          return (
            <line
              key={`cc-${i}`}
              x1={fp.x} y1={fp.y}
              x2={tp.x} y2={tp.y}
              stroke={isLit ? fromCat.color : "rgba(255,255,255,0.05)"}
              strokeWidth={isLit ? 1.2 : 0.5}
              strokeDasharray="6 7"
              opacity={isLit ? 0.7 : 1}
              style={{ transition: "all 0.35s ease", pointerEvents: "none" }}
            />
          );
        })}

        {/* Each cluster */}
        {GRAPH.map((cat) => {
          const isActive = activeId === null || activeId === cat.id;
          return (
            <g
              key={cat.id}
              opacity={isActive ? 1 : 0.2}
              style={{ transition: "opacity 0.35s ease", cursor: "pointer" }}
              onMouseEnter={() => setActiveId(cat.id)}
              onMouseLeave={() => setActiveId(null)}
            >
              {/* Spoke lines */}
              {cat.nodes.map((node, i) => (
                <line
                  key={`spoke-${i}`}
                  x1={cat.cx} y1={cat.cy}
                  x2={node.x} y2={node.y}
                  stroke={cat.color}
                  strokeWidth={0.7}
                  opacity={0.35}
                  className={`constellation-spoke constellation-spoke-${cat.id}`}
                  style={{ animationDelay: `${i * 60}ms` }}
                />
              ))}

              {/* Category center */}
              <circle cx={cat.cx} cy={cat.cy} r={22}
                fill={`${cat.color}1a`} stroke={cat.color} strokeWidth={1.5} />
              <circle cx={cat.cx} cy={cat.cy} r={5}
                fill={cat.color} filter="url(#nodeGlow)" />

              {/* Category label */}
              <text
                x={cat.cx} y={cat.cy + 36}
                textAnchor="middle"
                fill={cat.color}
                style={{
                  fontFamily: "var(--font-mono-accent), ui-monospace, monospace",
                  fontSize: "10px",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  pointerEvents: "none",
                }}
              >
                {cat.title}
              </text>

              {/* Skill nodes */}
              {cat.nodes.map((node, i) => (
                <g key={`node-${i}`}>
                  {/* Halo */}
                  <circle cx={node.x} cy={node.y} r={10}
                    fill={`${cat.color}12`}
                    opacity={activeId === cat.id ? 1 : 0}
                    style={{ transition: "opacity 0.25s ease" }}
                  />
                  {/* Dot */}
                  <circle cx={node.x} cy={node.y} r={4.5}
                    fill={cat.color} opacity={0.85} filter="url(#nodeGlow)" />
                  {/* Label — visible on hover */}
                  <text
                    x={node.x}
                    y={node.y - 12}
                    textAnchor="middle"
                    fill="rgba(255,255,255,0.9)"
                    opacity={activeId === cat.id ? 1 : 0}
                    style={{
                      fontFamily: "var(--font-mono-accent), ui-monospace, monospace",
                      fontSize: "9.5px",
                      transition: "opacity 0.25s ease",
                      pointerEvents: "none",
                    }}
                  >
                    {cat.skills[i]}
                  </text>
                </g>
              ))}
            </g>
          );
        })}
      </svg>

      {/* Mobile fallback list */}
      <div className="constellation-list">
        {CLUSTERS.map((cat) => (
          <div key={cat.id} className="constellation-list-group">
            <p className="constellation-list-cat" style={{ color: cat.color }}>{cat.title}</p>
            <div className="constellation-list-skills">
              {cat.skills.map((s) => (
                <span key={s} className="skill-pill" style={{ borderColor: `${cat.color}50`, color: cat.color }}>
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
