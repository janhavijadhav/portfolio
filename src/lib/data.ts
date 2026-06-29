import type { Candidate } from "@/types";

/**
 * Static portfolio content for Janhavi Jadhav.
 * All sections maintained here — no CMS required.
 *
 * Certifications array is ready — add your LinkedIn certs below.
 */

export const RESUME_URL = "/Janhavi_Jadhav_Resume.pdf";

export const candidate: Candidate = {
  _id: "candidate-janhavi-jadhav",
  fullName: "Janhavi Jadhav",
  slug: "janhavi-jadhav",
  professionalTitle: "Data Engineer · Software Engineer · Agentic AI",
  shortBio:
    "MS graduate (UMBC, GPA 3.97) with 2+ years building AI systems, cloud data pipelines, and production APIs — across agentic AI, data engineering, machine learning, and full-stack development.",
  featured: true,
  displayOrder: 0,

  hero: {
    headline: "Building data systems and AI that turn complexity into clarity.",
    subheadline:
      "I'm a recent Information Systems graduate with 2+ years of experience across AI/ML systems, cloud-native data engineering, and full-stack development. From multi-agent LLM pipelines to AWS data lakehouses, I build production-grade systems that make data useful and decisions faster.",
    highlights: [
      "Agentic AI & RAG",
      "Data Engineering",
      "ML Engineering",
      "Cloud (AWS · GCP)",
      "Python & FastAPI",
      "Full-Stack",
    ],
    snapshotLabel: "Snapshot",
    snapshotTitle: "Software Engineer · AI/ML · Data Engineering",
    snapshotItems: [
      "MS in Information Systems, UMBC — GPA 3.97/4.0",
      "6 end-to-end projects: AI, DE, ML & full-stack",
      "AWS, GCP, Kafka, Spark, dbt, Airflow, Terraform",
      "Open to SWE · AI/ML · Data Engineering · Data Science roles",
    ],
  },

  about: {
    eyebrow: "About",
    title: "About Me",
    paragraphs: [
      "I'm a recent Information Systems graduate (UMBC, GPA 3.97) with hands-on experience across AI/ML systems, data engineering, and full-stack development. My work spans multi-agent LLM systems, real-time streaming data pipelines, cloud-native data lakehouses, NLP, and computer vision — all built to production standards with CI/CD, testing, and monitoring.",
      "I thrive at the intersection of data and intelligent systems — building things that solve real operational problems at scale.",
    ],
    tags: [
      "Agentic AI",
      "Data Engineering",
      "Machine Learning",
      "Cloud Platforms",
      "Full-Stack Development",
      "MLOps",
    ],
  },

  contact: {
    title: "Let's Connect",
    description:
      "I recently graduated from UMBC (May 2026) and am actively exploring roles in Software Engineering, AI/ML Engineering, Data Engineering, and Data Science. Reach out via email or LinkedIn — I'd love to talk.",
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
    metaTitle: "Janhavi Jadhav | Software Engineer · AI/ML · Data Engineering",
    metaDescription:
      "Recent MS graduate (UMBC, GPA 3.97) building AI systems, cloud data pipelines, and production-grade software. Open to SWE, AI/ML, Data Engineering, and Data Science roles.",
    keywords: [
      "Software Engineer",
      "AI Engineer",
      "ML Engineer",
      "Data Engineer",
      "Data Scientist",
      "Agentic AI",
      "RAG",
      "Multi-Agent Systems",
      "Data Engineering",
      "FastAPI",
      "Python",
      "AWS",
      "GCP",
    ],
  },

  projectsSection: {
    eyebrow: "Selected Work",
    title: "Featured Projects",
    description:
      "End-to-end builds spanning agentic AI, cloud data engineering, ML/NLP pipelines, streaming systems, and computer vision.",
  },
  experienceSection: {
    eyebrow: "Work",
    title: "Experience",
    description:
      "Software engineering and applied ML work across enterprise SaaS, data platforms, and project operations.",
  },
  skillsSection: {
    eyebrow: "Capabilities",
    title: "Technical Skills",
    description:
      "Spanning LLM/agentic AI, data engineering, cloud infrastructure, machine learning, and full-stack software engineering.",
  },
  educationSection: {
    eyebrow: "Academic Background",
    title: "Education",
  },

  /* ─────────────────────────────
     PROJECTS
  ───────────────────────────── */
  projects: [
    {
      title: "AI Deployment Autopsy",
      slug: "ai-deployment-autopsy",
      category: "LLMOps / Agentic AI",
      summary:
        "Interactive post-mortem of 6 real AI deployment failures at a fictional manufacturing company — each with a live simulation: hallucination cascade, latency wall, schema drift bomb, auth deadlock, RAG reranking failure, and eval metric collapse.",
      whyItMatters:
        "Most AI demos show things working. This one shows what breaks in production and why — each failure reproduced interactively, with the root cause, the fix, and the before/after metrics.",
      detailSummary:
        "A Streamlit-based interactive museum of 6 AI deployment failures. Each page lets you reproduce the failure and see the fix — powered by a live LangGraph agent, BGE-M3 + BM25 hybrid RAG with cross-encoder reranking, and Groq Llama 3.3 70B streaming.",
      technologies: [
        "LangGraph",
        "Claude Sonnet",
        "Groq Llama 3.3 70B",
        "BGE-M3 + BM25 RAG",
        "Cross-Encoder Reranking",
        "DuckDB",
        "SQLite",
        "Redis",
        "LangFuse",
        "DeepEval",
        "Prometheus",
        "Streamlit",
        "GitHub Actions",
      ],
      liveDemoUrl: "https://ai-deployment-autopsy.streamlit.app",
      featured: true,
      order: 0,
      detailBlocks: [
        {
          heading: "What I Built",
          bulletItems: [
            "9 fully interactive simulation pages covering 6 production AI failures: Hallucination Cascade, Latency Wall, Context Collapse, Schema Drift Bomb, Auth Deadlock, and Eval That Lied — each with symptom, root cause, fix, and metrics.",
            "Live Reranker Lab showing keyword-collision failures in RRF fusion vs. cross-encoder reranking in real time — Jaccard-simulated scores reproduce the BAAI/bge-reranker-v2-m3 ordering without requiring model weights in the demo.",
            "Agent Chat powered by Groq Llama 3.3 70B (streaming) via a LangGraph StateGraph with DuckDB (OLAP) + SQLite (OLTP + checkpointing) and Redis semantic cache at 0.92 cosine threshold.",
          ],
        },
        {
          heading: "Observability & Evals",
          bulletItems: [
            "Full observability stack: LangFuse tracing, Prometheus metrics, Grafana dashboards, and PagerDuty alerting wired across all pipeline stages.",
            "Evaluation with DeepEval + LLM-as-judge + adversarial query generator; GitHub Actions eval gate blocks deploys on regression.",
          ],
        },
      ],
    },

    {
      title: "FinSight — Multi-Agent Financial Research System",
      slug: "finsight",
      category: "Agentic AI / RAG",
      summary:
        "Production-grade multi-agent platform orchestrating 4 specialized agents (Planning, RAG, Research, Synthesis) to generate cited financial analyst reports from SEC 10-K filings in under 12 seconds, with streaming delivery via FastAPI.",
      whyItMatters:
        "Manual analyst research is slow and hard to audit. FinSight grounds every claim in source filings via hybrid retrieval, so reports stay fast, cited, and trustworthy.",
      detailSummary:
        "A multi-agent financial research platform combining hybrid RAG (ChromaDB + NetworkX knowledge graph), structured outputs, and streaming responses to generate analyst-style reports from SEC 10-K filings.",
      technologies: [
        "Python",
        "FastAPI",
        "ChromaDB",
        "NetworkX",
        "Multi-Agent Systems",
        "Streamlit",
        "SQLite",
        "Prompt Engineering",
        "Llama 3.3 70B",
        "Sentence Transformers",
      ],
      githubUrl: "https://github.com/janhavijadhav/finsight",
      liveDemoUrl: "https://finsight006.streamlit.app",
      featured: true,
      order: 1,
      detailBlocks: [
        {
          heading: "What I Built",
          bulletItems: [
            "Architected a production-grade multi-agent system orchestrating 4 specialized agents — Planning, RAG, Research, and Synthesis — to generate cited financial analyst reports from SEC 10-K filings in under 12 seconds, with streaming response delivery via FastAPI.",
            "Implemented hybrid RAG combining ChromaDB vector search across 1,138 chunks with a NetworkX knowledge graph of 366 risk nodes and 606 edges for richer, more accurate retrieval.",
            "Exposed the system via a typed FastAPI REST API with structured outputs, plus a Streamlit analytics interface with audit logs and an evaluation dashboard.",
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
      title: "HealthFlow — Cloud-Native Healthcare Data Pipeline",
      slug: "healthflow",
      category: "Data Engineering / Cloud",
      summary:
        "End-to-end healthcare data engineering platform processing 14K+ synthetic Medicare claims across a 3-zone AWS data lakehouse, with PySpark transformation, dbt analytics in BigQuery (19/19 tests passing), and 7 FastAPI endpoints — all orchestrated by Airflow on Kubernetes with Terraform-provisioned infra.",
      whyItMatters:
        "Healthcare analytics requires reliable, auditable data across multiple systems. This platform demonstrates production DE patterns: IaC, event-driven ingestion, distributed batch processing, and analytics engineering from raw to mart.",
      detailSummary:
        "A cloud-native data engineering platform ingesting Synthea synthetic EHR data through a 3-zone S3 lakehouse, PySpark transformation, BigQuery dbt modeling, and a FastAPI serving layer — all orchestrated by Airflow 3.x on Kubernetes.",
      technologies: [
        "AWS S3",
        "AWS Lambda",
        "AWS Glue",
        "PySpark",
        "dbt",
        "Google BigQuery",
        "Airflow",
        "Kubernetes",
        "Helm",
        "Terraform",
        "FastAPI",
        "GitHub Actions",
        "Great Expectations",
        "Python",
      ],
      githubUrl: "https://github.com/janhavijadhav/healthflow",
      liveDemoUrl: "https://healthflow006.streamlit.app",
      featured: true,
      order: 2,
      detailBlocks: [
        {
          heading: "What I Built",
          bulletItems: [
            "Designed a 3-zone S3 data lakehouse (raw → processed → curated) with event-driven ingestion: AWS Lambda fires on S3 PutObject; Glue Crawlers auto-catalog schemas.",
            "Built PySpark batch jobs that transform raw CSVs to Snappy-compressed Parquet; loaded into BigQuery via pandas-gbq and modeled with dbt (4 staging views, 2 mart tables, 19/19 quality tests passing).",
            "Deployed a FastAPI REST API with 7 live BigQuery-backed endpoints and Swagger docs; orchestrated the full pipeline with a 6-task Airflow DAG on Kubernetes (Helm-deployed).",
          ],
        },
        {
          heading: "Infrastructure & CI/CD",
          bulletItems: [
            "Provisioned all 18 AWS resources (S3, Lambda, Glue, IAM, CloudWatch) via Terraform — fully reproducible infra.",
            "GitHub Actions CI runs linting, unit tests, and `terraform fmt` on every push.",
          ],
        },
      ],
    },

    {
      title: "Market Intelligence Data Platform",
      slug: "market-intelligence-data-platform",
      category: "Data Engineering / Streaming",
      summary:
        "Real-time financial data platform ingesting simulated market tick data via Kafka, processing with PySpark Structured Streaming (VWAP, anomaly detection), warehousing in Snowflake, and serving analytics via FastAPI + Redis + Apache Superset dashboards.",
      whyItMatters:
        "Investment teams need timely, analytics-ready data. This platform demonstrates an event-driven streaming architecture — from raw tick feed to governed mart tables with statistical anomaly detection.",
      detailSummary:
        "A streaming financial data platform built on Kafka, PySpark Structured Streaming, Snowflake, dbt, FastAPI, Redis, and Apache Superset — containerized with Docker Compose and automated with GitHub Actions CI/CD.",
      technologies: [
        "Apache Kafka",
        "PySpark Structured Streaming",
        "Snowflake",
        "dbt",
        "FastAPI",
        "Redis",
        "Apache Superset",
        "Airflow",
        "Docker Compose",
        "GitHub Actions",
        "Python",
      ],
      githubUrl: "https://github.com/janhavijadhav/market-intelligence-platform",
      featured: true,
      order: 3,
      detailBlocks: [
        {
          heading: "What I Built",
          bulletItems: [
            "Kafka producer simulates tick data for 5 symbols; PySpark Structured Streaming computes VWAP, rolling averages, trade count, and volatility on 1-minute windows every 30 seconds.",
            "Processed data lands in Snowflake across raw → staging → mart layers via dbt with full lineage tracking and anomaly detection (z-score-based price spike flags).",
            "FastAPI + Redis cache (60s TTL) serves 7 endpoints; Apache Superset connected to Snowflake marts for VWAP, volume, and volatility charts.",
          ],
        },
        {
          heading: "Observability & CI/CD",
          bulletItems: [
            "Airflow DAG monitors pipeline health every 15 minutes: connection check, data freshness validation, null-rate checks, and dbt model refresh.",
            "GitHub Actions CI runs pytest (7 unit tests) and flake8 linting on every push to main.",
          ],
        },
      ],
    },

    {
      title: "Product Sentiment Analysis Pipeline",
      slug: "product-sentiment-analysis-pipeline",
      category: "NLP / MLOps",
      summary:
        "End-to-end MLOps pipeline processing 500K+ product reviews with HuggingFace RoBERTa, served via Flask REST API, orchestrated by Airflow, and monitored through Grafana + Prometheus dashboards — fully containerized with Docker and CI/CD.",
      whyItMatters:
        "Turning unstructured customer feedback into reliable sentiment signals at scale, with the monitoring infrastructure to trust the model in production.",
      detailSummary:
        "An AI-powered sentiment analysis application leveraging HuggingFace RoBERTa (cardiffnlp/twitter-roberta-base-sentiment-latest) to classify 500K+ customer reviews, with MLOps infrastructure including Airflow orchestration, Prometheus metrics, Grafana dashboards, and GitHub Actions CI.",
      technologies: [
        "Hugging Face Transformers",
        "RoBERTa",
        "Flask",
        "PostgreSQL",
        "Airflow",
        "Prometheus",
        "Grafana",
        "Docker",
        "CI/CD",
        "pytest",
        "Python",
      ],
      githubUrl: "https://github.com/janhavijadhav/sentiment-pipeline",
      featured: true,
      order: 4,
      detailBlocks: [
        {
          heading: "What I Built",
          bulletItems: [
            "Developed an ETL pipeline loading 500K+ product reviews into PostgreSQL, scoring each with cardiffnlp/twitter-roberta-base-sentiment-latest, storing results for downstream analytics.",
            "Built a Flask REST API with 7 endpoints: single prediction, batch prediction, paginated review data, pipeline stats, run history, and Prometheus metrics.",
            "Designed Grafana monitoring dashboards tracking inference latency, sentiment distribution, model accuracy, and pipeline run history.",
          ],
        },
        {
          heading: "Deployment & Monitoring",
          bulletItems: [
            "Containerized all services (PostgreSQL, Airflow, Grafana, Prometheus, Flask) with Docker Compose.",
            "GitHub Actions CI spins up PostgreSQL, installs dependencies, runs pytest suite, and builds Docker image on every push.",
          ],
        },
      ],
    },

    {
      title: "Aviation RAG Assistant",
      slug: "aviation-rag-assistant",
      category: "LLM / RAG",
      summary:
        "Conversational AI assistant for aviation documentation queries — uses RAG over ICAO and FAA regulatory documents to answer compliance and airworthiness questions with source-cited responses.",
      whyItMatters:
        "Aviation compliance documentation is dense and high-stakes. Grounding every answer in cited ICAO/FAA source sections eliminates the hallucination risk that makes generic LLMs unsafe for regulatory queries.",
      detailSummary:
        "A RAG-based aviation compliance assistant that indexes ICAO/FAA documentation into a vector store and retrieves relevant sections to answer domain-specific questions with citations.",
      technologies: [
        "Python",
        "RAG Pipelines",
        "LangChain",
        "Vector Database",
        "FastAPI",
        "Prompt Engineering",
        "Document Parsing",
      ],
      liveDemoUrl: "https://aviation-rag-assistant.streamlit.app",
      featured: true,
      order: 5,
      detailBlocks: [
        {
          heading: "What I Built",
          bulletItems: [
            "Ingested and chunked ICAO and FAA PDF documents into a vector store; designed a retrieval pipeline to fetch the most relevant regulatory sections for each user query.",
            "Built a conversational interface that returns source-cited answers, reducing hallucination risk for compliance-sensitive aviation queries.",
          ],
        },
      ],
    },

    {
      title: "SmartFit — Real-Time Workout Form Analyzer",
      slug: "smartfit",
      category: "Computer Vision / ML",
      summary:
        "Real-time fitness pose estimation app using Google MoveNet Thunder TFLite to extract 17 body keypoints from webcam feed, feeding a custom Keras neural network trained on labeled exercise pose data for live workout form feedback.",
      whyItMatters:
        "Poor form during workouts leads to injury. SmartFit brings pose-based feedback to anyone with a webcam, no gym trainer required.",
      detailSummary:
        "A full-stack fitness application combining MoveNet Thunder pose estimation (17 keypoints), a custom Keras classifier trained on CSV pose datasets, and a React frontend for real-time webcam-based exercise form analysis.",
      technologies: [
        "TensorFlow / Keras",
        "MoveNet Thunder TFLite",
        "Python",
        "React",
        "Computer Vision",
        "Pose Estimation",
        "scikit-learn",
        "JavaScript",
      ],
      githubUrl: "https://github.com/janhavijadhav/smartfit.github.io",
      featured: true,
      order: 6,
      detailBlocks: [
        {
          heading: "What I Built",
          bulletItems: [
            "Python pipeline extracts 17-keypoint coordinates from exercise video frames via MoveNet Thunder; processes and labels pose samples into per-exercise CSVs.",
            "Trained a custom Keras neural network on the keypoint feature vectors to classify exercise forms with validation accuracy tracked across epochs.",
            "React frontend accesses the webcam, runs MoveNet in-browser for keypoint extraction, and sends pose vectors to the Python classifier for real-time form feedback.",
          ],
        },
      ],
    },
  ],

  /* ─────────────────────────────
     EXPERIENCE
  ───────────────────────────── */
  experience: [
    {
      title: "Project Management Intern",
      company: "MicDots",
      duration: "January 2026 – May 2026",
      description:
        "Built data-backed reporting infrastructure and served as the technical-to-business translation layer for technology pilot rollouts.",
      highlights: [
        "Built KPI tracking dashboards and reporting systems that consolidated scattered project metrics into a single source of truth used by both engineering and business stakeholders.",
        "Gathered requirements from non-technical stakeholders, scoped deliverables with engineering, and tracked open issues through resolution to keep product launches on schedule.",
      ],
      order: 0,
    },
    {
      title: "Assistant Systems Engineer",
      company: "Tata Consultancy Services",
      duration: "January 2024 – July 2024",
      description:
        "Shipped 10+ production integrations processing 5M+ records/day — connecting enterprise SaaS systems via REST APIs, triaging schema mismatches in real time, and publishing validated outputs to ML and reporting applications.",
      highlights: [
        "Reduced downstream data errors 30% by engineering reusable end-to-end integration pipelines with standardized transformation, cleansing, and validation recipes.",
        "Established REST API-based connections to 10+ enterprise source systems, triaging schema mismatches and data variances end-to-end to deliver application-ready data flows.",
        "Onboarded new source systems 35% faster using standardized transformation recipes with automated audit-matching and validation gates that caught schema gaps before reaching consumers.",
        "Surfaced front-line integration pain points to Engineering and Product, directly influencing two platform-level improvements that reduced team-wide manual triage time.",
      ],
      technologies: ["Python", "REST APIs", "Snowflake", "dbt", "PySpark", "Airflow", "Data Validation"],
      order: 1,
    },
    {
      title: "Data & Analytics Engineering Intern",
      company: "TCR Innovation",
      duration: "March 2022 – May 2023",
      description:
        "Designed analytics workflows across 1M+ records covering data cleansing, normalization, schema mapping, and NLP-based insight extraction — with results delivered to both technical and non-technical stakeholders.",
      highlights: [
        "Delivered clean, model-ready datasets across 1M+ records by executing analytics workflows covering data cleansing, normalization, schema mapping, and reconciliation.",
        "Applied NLP techniques (tokenization, embeddings, text classification) to extract structured insights from semi-structured sources, communicated directly to business stakeholders.",
        "Achieved 90%+ precision and recall on model outputs using validation pipelines with audit-matching metrics; prepared Excel-based reconciliation reports for stakeholder review.",
        "Developed dashboards that translated complex model outputs into actionable metrics, improving data quality visibility across technical and non-technical teams.",
      ],
      technologies: ["Python", "SQL", "NLP", "Pandas", "scikit-learn", "Data Validation", "Excel"],
      order: 2,
    },
  ],

  /* ─────────────────────────────
     SKILLS
  ───────────────────────────── */
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
      title: "Data Engineering & Cloud",
      skills: [
        "Apache Kafka",
        "PySpark (Spark 3.x)",
        "dbt Core",
        "Apache Airflow",
        "Snowflake",
        "Google BigQuery",
        "AWS S3 · Lambda · Glue · EC2",
        "Terraform (IaC)",
        "Kubernetes · Helm",
        "Great Expectations",
        "ETL / ELT Pipelines",
        "Data Lakehouse (3-zone)",
        "Hive-style Partitioning",
        "GitHub Actions CI/CD",
      ],
      order: 1,
    },
    {
      title: "Machine Learning & AI",
      skills: [
        "PyTorch",
        "TensorFlow / Keras",
        "Hugging Face Transformers",
        "scikit-learn",
        "NLP (tokenization, embeddings, classification)",
        "Computer Vision",
        "Pose Estimation (MoveNet / TFLite)",
        "Feature Engineering",
        "Hyperparameter Tuning",
        "Model Evaluation (Precision, Recall, F1)",
        "Hallucination Scoring",
        "A/B Testing",
      ],
      order: 2,
    },
    {
      title: "Languages & Frameworks",
      skills: [
        "Python",
        "TypeScript",
        "SQL",
        "Java",
        "FastAPI",
        "Flask",
        "React",
        "Next.js",
        "Streamlit",
      ],
      order: 3,
    },
    {
      title: "Databases & Storage",
      skills: [
        "PostgreSQL",
        "Google BigQuery",
        "Snowflake",
        "Redis",
        "ChromaDB",
        "Qdrant",
        "MySQL",
        "SQLite",
      ],
      order: 4,
    },
    {
      title: "DevOps & Software Engineering",
      skills: [
        "Docker",
        "Kubernetes",
        "REST API Design",
        "CI/CD (GitHub Actions)",
        "Prometheus · Grafana",
        "Unit & Integration Testing (pytest)",
        "API Documentation (Swagger / OpenAPI)",
        "Agile / Scrum",
        "Technical Documentation",
        "Debugging & Code Review",
      ],
      order: 5,
    },
  ],

  /* ─────────────────────────────
     EDUCATION
  ───────────────────────────── */
  education: [
    {
      institution: "University of Maryland, Baltimore County",
      degree: "Master of Science in Information Systems — GPA 3.97/4.0",
      duration: "Graduated May 2026",
      order: 0,
    },
    {
      institution: "University of Mumbai",
      degree: "Bachelor of Engineering in Electronics — GPA 3.42/4.0",
      duration: "Graduated May 2023",
      order: 1,
    },
  ],

  /* ─────────────────────────────
     CERTIFICATIONS
  ───────────────────────────── */
  certifications: [
    {
      title: "Python for Data Science and Machine Learning Bootcamp",
      issuer: "Udemy",
      date: "Jul 2024",
      credentialUrl: "https://www.udemy.com/certificate/UC-deeaf078-8542-4e80-9849-6af5a7c0a744/",
      order: 0,
    },
    {
      title: "SQL – MySQL for Data Analytics and Business Intelligence",
      issuer: "Udemy",
      date: "Jul 2024",
      credentialUrl: "https://www.udemy.com/certificate/UC-217d3e10-34d3-4be4-b642-e9af429701ee/",
      order: 1,
    },
    {
      title: "Engineer Data in Google Cloud",
      issuer: "Google Cloud",
      date: "Nov 2020",
      credentialUrl: "https://www.qwiklabs.com/public_profiles/dd18152a-e280-4d95-bf0c-c53ccd5f9e80/badges/555350",
      order: 2,
    },
    {
      title: "Insights from Data with BigQuery",
      issuer: "Google Cloud",
      date: "Nov 2020",
      credentialUrl: "https://www.qwiklabs.com/public_profiles/dd18152a-e280-4d95-bf0c-c53ccd5f9e80/badges/551795",
      order: 3,
    },
    {
      title: "Integrate with Machine Learning APIs",
      issuer: "Google Cloud",
      date: "Nov 2020",
      credentialUrl: "https://www.qwiklabs.com/public_profiles/dd18152a-e280-4d95-bf0c-c53ccd5f9e80/badges/555508",
      order: 4,
    },
    {
      title: "Introduction to Artificial Intelligence (AI)",
      issuer: "IBM",
      date: "Sep 2020",
      credentialUrl: "https://coursera.org/verify/FZ3NS47WGFPV",
      order: 5,
    },
  ],
};
