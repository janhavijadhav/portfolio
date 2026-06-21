"use client";

import { NextStudio } from "next-sanity/studio";
import { createStudioConfig } from "@/sanity/studio.config";
import { isSanityConfigured } from "@/sanity/env";

function StudioSetupHelp() {
  return (
    <div className="empty-state">
      <div className="card empty-state-card">
        <h2>Sanity Studio — missing configuration</h2>
        <p>
          Create a <code>.env.local</code> file in the project root with your
          Sanity credentials:
        </p>
        <pre
          style={{
            textAlign: "left",
            background: "#f1f5f9",
            padding: "1rem",
            borderRadius: "8px",
            overflow: "auto",
            fontSize: "0.85rem",
          }}
        >
          {`NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01`}
        </pre>
        <p>
          Get your Project ID from{" "}
          <a
            href="https://www.sanity.io/manage"
            target="_blank"
            rel="noreferrer"
            style={{ color: "#2f66f3" }}
          >
            sanity.io/manage
          </a>{" "}
          → Project settings. Then restart <code>npm run dev</code>.
        </p>
      </div>
    </div>
  );
}

export default function StudioPage() {
  if (!isSanityConfigured) {
    return <StudioSetupHelp />;
  }

  return <NextStudio config={createStudioConfig()} />;
}
