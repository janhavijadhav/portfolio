import type { Candidate } from "@/types";

/**
 * Static portfolio content for Janhavi Jadhav.
 *
 * This site originally fetched everything from Sanity CMS. To keep things
 * simple for a personal portfolio (no CMS write token required), all
 * content lives here as a typed constant and is imported directly by the
 * pages instead of going through the Sanity client.
 */

export const RESUME_URL = "/Janhavi_Jadhav_Resume.pdf";

export const candidate: Candidate = {
  _id: "candidate-janhavi-jadhav",
  fullName: "Janhavi Jadhav",
  slug: "janhavi-jadhav",
  professionalTitle: "Software Engineer, Agentic AI & Applied ML",
  shortBio:
    "Graduate student with 2+ years of experience building AI-powered applications, agentic systems, and production-grade APIs — turning complex data into practical, decision-ready software.",
  featured: true,
  displayOrder: 0,

  hero: {
    headline: "Building agentic AI systems that turn complex data into decisions.",
    subheadline:
      "I'm a graduate student and software engineer with 2+ years of experience building AI-powered applications, retrieval-augmented generation systems, and production-grade APIs using Python, FastAPI, and modern LLM frameworks. I care about practical AI products that improve decision-making, efficiency, and user experience.",
    highlights: [
      "Agentic AI",
      "RAG & Knowledge Graphs",
      "Multi-Agent Systems",
      "FastAPI",
      "LLM Engineering",
      "Data Platforms",
    ],
    snapshotLabel: "Snapshot",
    snapshotTitle: "Software Engineer, Agentic AI",
    snapshotItems: [
      "2+ years building production AI systems and APIs",
      "Multi-agent RAG architectures with knowledge graphs",
      "MS in Information Systems, UMBC — GPA 3.97/4.0",
      "Open to Software Engineer / Applied AI roles",
    ],
  },

  about: {
    eyebrow: "About",
    title: "About Me",
    paragraphs: [
      "I'm a graduate student in Information Systems with 2+ years of experience building AI-powered applications, intelligent data systems, and production-grade APIs. My work spans LLM-enabled solutions, retrieval-augmented generation, and end-to-end software platforms built with Python, FastAPI, and PostgreSQL.",
      "What excites me most about AI right now isn't content generation — it's AI that helps people make better decisions, work more efficiently, and solve real operational problems. I enjoy translating complex technical challenges into scalable, user-focused solutions, and I'm currently exploring Software Engineer and Applied AI roles where I can keep building agentic systems that create real impact.",
    ],
    tags: [
      "Agentic AI",
      "RAG Pipelines",
      "Multi-Agent Systems",
      "Full-Stack AI Platforms",
      "MLOps",
    ],
  },

  contact: {
    title: "Let's Connect",
    description:
      "I'm graduating from UMBC in May 2026 and currently exploring Software Engineer and Applied AI opportunities. If you'd like to connect, reach out by email or LinkedIn — I'd love to talk.",
    email: "janhavij0603@gmail.com",
    linkedinUrl: "https://www.linkedin.com/in/janhavi-jadhav006",
  },

  socialLinks: [
    {
      platform: "linkedin",
      url: "https://www.linkedin.com/in/janhavi-jadhav006",
      label: "LinkedIn",
    },
  ],

  seo: {
    metaTitle: "Janhavi Jadhav | Software Engineer, Agentic AI & Applied ML",
    metaDescription:
      "Graduate student and software engineer building AI-powered applications, agentic systems, RAG pipelines, and production-grade APIs.",
    keywords: [
      "Agentic AI",
      "RAG",
      "Multi-Agent Systems",
      "FastAPI",
      "Machine Learning",
      "LLM Engineering",
      "Software Engineer",
    ],
  },

  projectsSection: {
    eyebrow: "Selected Work",
    title: "Featured Projects",
    description:
      "Production-minded AI systems spanning multi-agent orchestration, real-time data platforms, and applied NLP.",
  },
  experienceSection: {
    eyebrow: "Work",
    title: "Experience",
    description:
      "Software engineering and applied ML work across enterprise SaaS, data platforms, and project operations.",
  },
  skillsSection: {
    eyebrow: "Capabilities",
    title: "Skills",
    description:
      "A mix of agentic AI / LLM engineering, applied machine learning, data engineering, and full-stack software practices.",
  },
  educationSection: {
    eyebrow: "Academic Background",
    title: "Education",
  },

  projects: [
    {
      title: "FinSight — Multi-Agent Financial Research System",
      slug: "finsight",
      category: "LLM / Multi-Agent / RAG",
      summary:
        "Production-grade multi-agent system orchestrating 4 specialized agents (Planning, RAG, Research, Synthesis) to generate cited financial analyst reports from SEC 10-K filings in under 12 seconds, with streaming delivery via FastAPI.",
      whyItMatters:
        "Manual analyst research is slow and hard to audit. FinSight grounds every claim in source filings via hybrid retrieval, so reports stay fast, cited, and trustworthy.",
      detailSummary:
        "A multi-agent financial research platform combining hybrid RAG, a knowledge graph of filing risk factors, structured outputs, and streaming responses to generate analyst-style reports from SEC 10-K filings.",
      technologies: [
        "Python",
        "FastAPI",
        "ChromaDB",
        "NetworkX",
        "Multi-Agent Systems",
        "Streamlit",
        "SQLite",
        "Prompt Engineering",
      ],
      featured: true,
      order: 0,
      detailBlocks: [
        {
          heading: "What I Built",
          bulletItems: [
            "Architected a production-grade multi-agent system orchestrating 4 specialized agents — Planning, RAG, Research, and Synthesis — to generate cited financial analyst reports from SEC 10-K filings in under 12 seconds, with streaming response delivery via FastAPI.",
            "Implemented hybrid RAG combining ChromaDB vector search across 1,138 chunks with a NetworkX knowledge graph of 366 risk nodes and 606 edges for richer, more accurate retrieval.",
            "Exposed the system via a typed FastAPI REST API with structured outputs, plus a Streamlit analytics interface.",
          ],
        },
        {
          heading: "Reliability & Evaluation",
          bulletItems: [
            "Engineered an automated evaluation pipeline scoring every response for relevance, consistency, and hallucinations.",
            "Added prompt injection guardrails and full SQLite audit logging for traceability.",
            "Reached 90%+ test coverage across the pipeline.",
          ],
        },
      ],
    },
    {
      title: "Market Intelligence Data Platform",
      slug: "market-intelligence-data-platform",
      category: "Data Engineering / Streaming",
      summary:
        "Streaming financial data platform ingesting real-time market feeds via Kafka, transforming them with PySpark into a Snowflake data warehouse for investment signal analysis.",
      whyItMatters:
        "Investment teams need timely, analytics-ready data. This platform turns raw streaming feeds into governed, queryable datasets that power dashboards and signal analysis.",
      detailSummary:
        "A streaming data platform that ingests real-time market feeds via Kafka, transforms them with PySpark, models them with dbt in Snowflake, and exposes them through a FastAPI service and Superset dashboards.",
      technologies: [
        "Kafka",
        "PySpark",
        "Snowflake",
        "dbt",
        "FastAPI",
        "Superset",
        "Airflow",
      ],
      featured: true,
      order: 1,
      detailBlocks: [
        {
          heading: "What I Built",
          bulletItems: [
            "Built a streaming financial data platform ingesting real-time market feeds via Kafka and transforming them with PySpark into a Snowflake data warehouse.",
            "Modeled analytics-ready datasets using dbt and exposed them through a FastAPI service and Superset dashboards used for investment signal analysis.",
          ],
        },
        {
          heading: "Challenges Resolved",
          bulletItems: [
            "Kafka listener configuration across environments.",
            "Snowflake MFA bypass for automated service accounts.",
            "Airflow executor compatibility issues.",
          ],
        },
      ],
    },
    {
      title: "Product Sentiment Analysis Pipeline",
      slug: "product-sentiment-analysis-pipeline",
      category: "NLP / MLOps",
      summary:
        "AI-powered sentiment analysis application using Hugging Face RoBERTa to classify 500K+ customer reviews, with containerized deployment and CI/CD.",
      whyItMatters:
        "Turning unstructured customer feedback into reliable sentiment signals at scale, with the monitoring needed to trust the model in production.",
      detailSummary:
        "An AI-powered sentiment analysis application leveraging Hugging Face RoBERTa to classify 500K+ customer reviews, exposed via RESTful APIs with full containerized CI/CD and monitoring.",
      technologies: [
        "Hugging Face Transformers",
        "RoBERTa",
        "Docker",
        "CI/CD",
        "REST APIs",
        "NLP",
      ],
      featured: true,
      order: 2,
      detailBlocks: [
        {
          heading: "What I Built",
          bulletItems: [
            "Developed an AI-powered sentiment analysis application leveraging Hugging Face RoBERTa to classify 500K+ customer reviews.",
            "Built RESTful APIs and automated workflows to support scalable inference, monitoring, and deployment.",
          ],
        },
        {
          heading: "Deployment & Monitoring",
          bulletItems: [
            "Containerized services with Docker and implemented CI/CD pipelines for reliable software delivery.",
            "Designed monitoring dashboards to visualize sentiment insights, model performance, and operational metrics.",
          ],
        },
      ],
    },
  ],

  experience: [
    {
      title: "Project Management Intern",
      company: "MicDots",
      duration: "January 2026 – May 2026",
      description:
        "Supported technology and pilot initiatives through project coordination, operational reporting, and stakeholder collaboration.",
      highlights: [
        "Developed reporting dashboards and tracking systems to monitor progress and key metrics.",
        "Collaborated with cross-functional teams to improve execution efficiency and communication.",
      ],
      order: 0,
    },
    {
      title: "Assistant Systems Engineer",
      company: "Tata Consultancy Services",
      duration: "January 2024 – July 2024",
      description:
        "Built and maintained production data pipelines processing 5M+ records/day within a large-scale SaaS enterprise environment, feeding ML model training and real-time inference workflows.",
      highlights: [
        "Deployed ML-powered services via REST APIs integrated into enterprise SaaS applications, supporting classification and forecasting at scale; wrote technical documentation for each integration.",
        "Engineered preprocessing and feature engineering workflows that cut model training latency by 35%.",
        "Implemented automated data validation systems that improved dataset reliability by 30%, reducing downstream model errors.",
        "Collaborated with cross-functional teams to operationalize models and communicate results to non-technical stakeholders.",
      ],
      technologies: ["Python", "REST APIs", "ML Pipelines", "Data Validation"],
      order: 1,
    },
    {
      title: "Data Analyst Intern",
      company: "TCR Innovation",
      duration: "March 2022 – May 2023",
      description:
        "Developed ML models on datasets exceeding 1M records, improving prediction accuracy by 18% through feature engineering and hyperparameter tuning.",
      highlights: [
        "Applied NLP techniques — tokenization, embeddings, and text classification — to extract actionable insights from unstructured customer feedback.",
        "Evaluated model performance using precision, recall, F1-score, and cross-validation; documented findings for reproducibility.",
        "Built dashboards to communicate AI-driven insights to non-technical business stakeholders.",
      ],
      technologies: ["NLP", "Embeddings", "Model Evaluation"],
      order: 2,
    },
  ],

  skills: [
    {
      title: "LLM & Agentic Systems",
      skills: [
        "Anthropic API",
        "OpenAI API",
        "Groq API",
        "LangChain",
        "MCP (Model Context Protocol)",
        "Multi-Agent Systems",
        "Tool Invocation / Function Calling",
        "Structured Outputs",
        "Streaming Responses",
        "Multi-Step Reasoning",
        "Prompt Engineering",
        "RAG Pipelines",
        "Knowledge Graphs",
        "Fine-Tuning",
      ],
      order: 0,
    },
    {
      title: "Languages & Frameworks",
      skills: [
        "TypeScript",
        "Python",
        "SQL",
        "Java",
        "React",
        "FastAPI",
        "Flask",
        "Streamlit",
      ],
      order: 1,
    },
    {
      title: "AI / ML",
      skills: [
        "PyTorch",
        "Hugging Face Transformers",
        "Scikit-learn",
        "Embeddings",
        "NLP",
        "Model Evaluation (Precision, Recall, F1)",
        "Hallucination Scoring",
      ],
      order: 2,
    },
    {
      title: "Databases & Vector Stores",
      skills: ["ChromaDB", "Qdrant", "PostgreSQL", "MySQL", "SQLite"],
      order: 3,
    },
    {
      title: "MLOps & DevOps",
      skills: [
        "Docker",
        "REST API Design",
        "CI/CD",
        "Model Monitoring",
        "Airflow",
        "Kafka",
        "AWS (S3, EC2)",
      ],
      order: 4,
    },
    {
      title: "Software Engineering",
      skills: [
        "Unit Testing",
        "Integration Testing",
        "Code Quality Practices",
        "Technical Documentation",
        "Debugging",
        "API Design",
        "RESTful Service Integration",
        "Agile Development",
      ],
      order: 5,
    },
  ],

  education: [
    {
      institution: "University of Maryland, Baltimore County",
      degree: "Master of Science in Information Systems — GPA 3.97/4.0",
      duration: "Expected May 2026",
      order: 0,
    },
    {
      institution: "University of Mumbai",
      degree: "Bachelor of Engineering in Electronics — GPA 3.42/4.0",
      duration: "Graduated May 2023",
      order: 1,
    },
  ],
};
