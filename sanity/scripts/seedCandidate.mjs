import { createClient } from "@sanity/client";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
const token = process.env.SANITY_API_WRITE_TOKEN ?? process.env.SANITY_API_READ_TOKEN;

if (!projectId || !token) {
  console.error(
    "Missing NEXT_PUBLIC_SANITY_PROJECT_ID or SANITY_API_WRITE_TOKEN in environment.",
  );
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2024-01-01",
  token,
  useCdn: false,
});

const candidateDocument = {
  _id: "candidate-sankar-raghuthaman",
  _type: "candidate",
  fullName: "Sankar Raghuthaman",
  slug: { _type: "slug", current: "sankar-raghuthaman" },
  professionalTitle: "Data Scientist / AI-ML Engineer",
  shortBio:
    "AI/ML Engineer building production-ready machine learning systems across LLM applications, RAG, and scalable data pipelines.",
  featured: true,
  displayOrder: 0,
  hero: {
    headline: "AI/ML Engineer building production-ready machine learning systems.",
    subheadline:
      "I work across LLM applications, RAG systems, multi-agent orchestration, ML evaluation, and scalable data pipelines, with experience spanning research and production environments.",
    highlights: [
      "LLM Systems",
      "RAG",
      "Multi-Agent Orchestration",
      "Machine Learning",
      "MLOps",
      "Data Pipelines",
      "ML Evaluation",
    ],
    snapshotLabel: "Professional Snapshot",
    snapshotTitle: "AI/ML Engineer",
    snapshotItems: [
      "ML systems and evaluation workflows",
      "LLM applications and retrieval / ranking pipelines",
      "Scalable data pipelines and production-minded implementation",
      "Research-heavy and real-world problem solving",
    ],
  },
  about: {
    eyebrow: "About",
    title: "About Me",
    paragraphs: [
      "I'm a Data Scientist / AI-ML Engineer focused on building practical machine learning systems that are both rigorous and usable. My work spans model development, evaluation, experimentation, LLM-powered workflows, and scalable data pipelines across research and production environments.",
      "I'm especially interested in problems where strong modeling, thoughtful experimentation, and real-world implementation all matter, whether in applied AI, analytics, experimentation tooling, or ML platform workflows.",
    ],
    tags: [
      "Machine Learning",
      "LLM Workflows",
      "Experimentation",
      "Data Pipelines",
      "Applied AI",
    ],
  },
  contact: {
    title: "Let's Connect",
    description:
      "I'm currently exploring AI/ML Engineer and Applied Scientist opportunities. If you'd like to connect, feel free to reach out by email or through LinkedIn.",
    email: "sankarrag@gmail.com",
    linkedinUrl: "https://www.linkedin.com/in/sankar-raghuthaman/",
  },
  socialLinks: [
    {
      platform: "github",
      url: "https://github.com/Sankar16",
      label: "GitHub",
    },
    {
      platform: "linkedin",
      url: "https://www.linkedin.com/in/sankar-raghuthaman/",
      label: "LinkedIn",
    },
  ],
  seo: {
    metaTitle: "Sankar Raghuthaman | Data Scientist / AI-ML Engineer",
    metaDescription:
      "AI/ML Engineer building production-ready machine learning systems across LLM applications, RAG, multi-agent orchestration, and scalable data pipelines.",
    keywords: [
      "AI",
      "Machine Learning",
      "LLM",
      "RAG",
      "Data Science",
      "MLOps",
    ],
  },
  projectsSection: {
    eyebrow: "Selected Work",
    title: "Featured Projects",
    description:
      "A curated set of projects across machine learning, AI systems, and data workflow engineering.",
  },
  experienceSection: {
    eyebrow: "Work",
    title: "Experience",
    description:
      "Work across production ML systems, applied research, and data-intensive workflows.",
  },
  skillsSection: {
    eyebrow: "Capabilities",
    title: "Skills",
    description:
      "A mix of machine learning, AI application development, and data workflow engineering.",
  },
  educationSection: {
    eyebrow: "Academic Background",
    title: "Education",
  },
  researchSection: {
    eyebrow: "Research & Publications",
    title: "Selected Research",
    description:
      "A small selection of research-led work that complements my projects and applied engineering experience.",
  },
  projects: [
    {
      title: "Conversation Factory",
      slug: { _type: "slug", current: "conversation-factory" },
      category: "LLM / Synthetic Data / Multi-Agent",
      summary:
        "Automated pipeline that generates high-quality multi-turn tool-calling conversations for LLM supervised fine-tuning training at scale.",
      whyItMatters:
        "Existing synthetic datasets for tool-calling are repetitive and structurally invalid, teaching models wrong patterns. This pipeline enforces structural validity and quality at every layer.",
      detailSummary:
        "Generates synthetic multi-turn tool-calling conversations for LLM training using a directed tool graph to sample structurally valid chains and multi-agent orchestration with a 3-level quality system.",
      technologies: [
        "Python",
        "GPT-4.1-mini",
        "NetworkX",
        "asyncio",
        "Pydantic",
        "LangGraph",
        "ToolBench",
      ],
      githubUrl: "https://github.com/Sankar16/conversation-factory",
      featured: true,
      order: 0,
      detailBlocks: [
        {
          heading: "Problem",
          content:
            "Training tool-calling LLMs requires high-quality multi-turn conversations at scale. Existing datasets are repetitive and structurally invalid — wrong argument types, hallucinated IDs, tools called in the wrong order — teaching models incorrect patterns from the start.",
        },
        {
          heading: "What I Built",
          bulletItems: [
            "Directed tool graph with 4 edge types encoding API connection compatibility and ensuring structurally valid chains before any LLM call.",
            "Multi-agent orchestration with Scenario Planner, Assistant Agent, User Agent, and Mock Executor.",
            "3-level quality system: pre-execution validators, LLM judge scoring, and repair loop.",
            "Diversity steering that tracks corpus distribution and adjusts sampling constraints per batch.",
          ],
        },
        {
          heading: "Technical Approach",
          bulletItems: [
            "Structural validity enforced at the graph level before LLM involvement.",
            "Session state tracked separately from conversation history for fast O(1) ID lookup.",
            "Quality enforced at execution, generation, and evaluation layers independently.",
          ],
        },
        {
          heading: "Outcomes",
          bulletItems: [
            "Diversity steering improved multi-step conversation ratio from 59% to 64%.",
            "Mean tool calls per conversation improved from 2.85 to 3.20 with no quality regression.",
            "Three-level quality system produces clean JSONL training corpus at scale.",
          ],
        },
        {
          heading: "Key Learnings",
          bulletItems: [
            "Structural validity in training data matters more than generation model quality.",
            "Separating state management makes grounding reliable.",
          ],
        },
      ],
    },
    {
      title: "Contract Analyzer",
      slug: { _type: "slug", current: "contract-analyzer" },
      category: "LLM / Multi-Agent / RAG",
      summary:
        "Enterprise contract analysis platform using LangGraph multi-agent orchestration for parallel clause extraction, risk flagging, compliance scoring, and conversational Q&A with PDF citation highlighting.",
      whyItMatters:
        "Manual contract review is slow and inconsistent. This platform automates extraction, risk analysis, and Q&A while grounding every claim to exact document passages for legal-grade auditability.",
      technologies: [
        "Python",
        "LangGraph",
        "FastAPI",
        "React",
        "TypeScript",
        "ChromaDB",
        "PyMuPDF",
        "OpenAI API",
      ],
      githubUrl: "https://github.com/Sankar16/contract-analyzer",
      featured: true,
      order: 1,
    },
    {
      title: "Candidate Recommendation System",
      slug: { _type: "slug", current: "candidate-recommendation-system" },
      category: "AI / NLP / Retrieval",
      summary:
        "Resume-to-job matching system using LLM-based structured field extraction, section-level embeddings, and weighted scoring to rank candidates with LLM-generated explanations.",
      whyItMatters:
        "Full-text resume matching is inconsistent due to format variation. Section-level structured comparison gives more stable, explainable ranking.",
      technologies: [
        "Python",
        "Streamlit",
        "LLaMA 3.1 8B",
        "Hugging Face API",
        "Sentence Transformers",
        "FAISS",
        "pdfplumber",
        "python-docx",
      ],
      githubUrl:
        "https://github.com/Sankar16/Job-Candidate-Recommendation-System/tree/main",
      liveDemoUrl:
        "https://drive.google.com/file/d/1LR1LYkmmYKAvBK8xwwRoID7J77LIfBof/view?usp=sharing",
      featured: true,
      order: 2,
    },
  ],
  experience: [
    {
      title: "Graduate Research Intern",
      company: "North Carolina State University",
      duration: "Sept 2025 – May 2026",
      description:
        "Researched how retrieval quality affects LLM-generated code documentation. Built a two-phase RAG pipeline combining intent-matched cross-file retrieval with local call graph context.",
      highlights: [
        "Extracted 7,976 method-comment pairs from 7 open-source Ruby repositories using Tree-sitter AST parsing.",
        "Labeled the corpus for usefulness and 5-class documentation intent using LLaMA-3-8B with validation against human annotations.",
        "Phase 1: intent-matched few-shot retrieval preferred 92.2% of the time over unfiltered retrieval.",
        "Phase 2: combined pipeline preferred 90% of the time over few-shot alone.",
      ],
      technologies: [
        "Python",
        "LLaMA-3-8B",
        "OpenAI API (GPT-4.1-mini)",
        "Tree-sitter",
        "RAG",
        "Embeddings",
        "Call Graph",
        "Prompt Engineering",
        "Statistical Evaluation",
      ],
      order: 0,
    },
    {
      title: "Data Science Intern",
      company: "Children's Hospital of Philadelphia",
      duration: "Jun 2025 – Dec 2025",
      description:
        "Rebuilt a genomic ML pipeline for Cornelia de Lange Syndrome classification from scratch, resolving compounding flaws in the prior system.",
      highlights: [
        "Identified data leakage and ill-suited ML approach in inherited pipeline.",
        "Redesigned preprocessing with KNN imputation and Benjamini-Hochberg feature selection scoped inside each training fold.",
        "Built custom nested cross-validation for unbiased performance estimates.",
        "Trained LinearSVC achieving 98-99% precision and 100% recall.",
      ],
      technologies: [
        "Python",
        "Scikit-learn",
        "LinearSVC",
        "KNN Imputation",
        "Benjamini-Hochberg",
        "PCA",
        "Nested Cross-Validation",
        "DNA Methylation",
        "Statistical Analysis",
      ],
      order: 1,
    },
    {
      title: "Machine Learning Engineer II",
      company: "Tata Consultancy Services",
      duration: "Aug 2022 – Jul 2024",
      description:
        "Led production ML and data platform workflows for enterprise banking clients across document intelligence, MLOps automation, and cloud migration.",
      highlights: [
        "Developed async GPT-3.5 pipeline for extracting structured fields from 1,000+ weekly invoices.",
        "Built two-layer validation achieving 95% precision.",
        "Replaced rule-based template system with confidence-based three-tier routing.",
        "Architected reference MLOps framework across 40+ migrated pipelines.",
        "Implemented automated drift detection via Azure Monitor.",
      ],
      technologies: [
        "Python",
        "GPT-3.5",
        "asyncio",
        "Azure Databricks",
        "PySpark",
        "MLflow",
        "GitHub Actions",
        "Azure DevOps",
        "Azure Monitor",
        "Docker",
        "Kubernetes",
      ],
      order: 2,
    },
    {
      title: "Machine Learning Engineer",
      company: "Tata Consultancy Services",
      duration: "Aug 2020 – Jul 2022",
      description:
        "Built real-time ML systems and ML lifecycle tooling for enterprise banking environments.",
      highlights: [
        "Deployed real-time FX anomaly detection using Isolation Forest on Spark Structured Streaming.",
        "Resolved production partition skew with composite key repartitioning, increasing throughput 25%.",
        "Introduced MLflow experiment tracking and versioned model registry.",
      ],
      technologies: [
        "Python",
        "PySpark",
        "Spark Structured Streaming",
        "Isolation Forest",
        "MLflow",
        "Azure",
        "SQL",
      ],
      order: 3,
    },
  ],
  skills: [
    {
      title: "LLM & AI Systems",
      skills: [
        "RAG",
        "GraphRAG",
        "Multi-Agent Orchestration",
        "LangGraph",
        "LangChain",
        "Few-shot Prompting",
        "LLM-as-judge",
        "Prompt Engineering",
        "ChromaDB",
        "FAISS",
        "OpenAI API",
        "Hugging Face",
        "BERT",
        "Sentence Transformers",
        "Tree-sitter",
      ],
      order: 0,
    },
    {
      title: "Machine Learning & Data Science",
      skills: [
        "Scikit-learn",
        "PyTorch",
        "TensorFlow",
        "XGBoost",
        "SVM",
        "Random Forest",
        "Isolation Forest",
        "Feature Engineering",
        "Nested Cross-Validation",
        "Statistical Analysis",
        "Hypothesis Testing",
        "Model Evaluation",
        "SMOTE",
      ],
      order: 1,
    },
    {
      title: "Data Engineering & Cloud",
      skills: [
        "PySpark",
        "Spark Structured Streaming",
        "Azure Databricks",
        "Azure Data Factory",
        "Azure Monitor",
        "Azure DevOps",
        "ETL Pipelines",
        "asyncio",
        "Data Modeling",
        "MongoDB",
      ],
      order: 2,
    },
    {
      title: "MLOps & Software",
      skills: [
        "MLflow",
        "Docker",
        "Kubernetes",
        "GitHub Actions",
        "CI/CD",
        "Python",
        "SQL",
        "FastAPI",
        "Flask",
        "Streamlit",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Git",
        "Testing",
      ],
      order: 3,
    },
  ],
  education: [
    {
      institution: "North Carolina State University",
      degree: "Master of Computer Science",
      duration: "Aug 2024 – May 2026",
      order: 0,
    },
    {
      institution: "Mumbai University",
      degree: "Bachelor of Engineering in Information Technology",
      duration: "Aug 2016 – May 2020",
      order: 1,
    },
  ],
  research: [
    {
      title:
        "WIP: Usefulness-Gated, Intent-Aware Code Comment Generation with Large Language Models",
      publishedIn:
        "Frontiers in Education 2026 — Accepted, Pending Publication",
      date: "2026",
      summary:
        "Two-phase RAG pipeline for automated code documentation combining intent-matched retrieval from open-source corpora with local call graph context.",
      order: 0,
    },
    {
      title: "Classification of Disease using CBC",
      publishedIn:
        "Springer Artificial Intelligence and Soft Computing series",
      date: "July 2021",
      summary:
        "Disease classification using complete blood count data and machine learning methods.",
      order: 1,
    },
  ],
};

async function seed() {
  await client.createOrReplace(candidateDocument);
  console.log("Seeded featured candidate: Sankar Raghuthaman");
}

seed().catch((error) => {
  console.error(error);
  process.exit(1);
});
