"use client";

import { Card } from "@/components/ui/Card";

interface EmptyStateProps {
  reason: "missing-env" | "no-candidate";
}

export function EmptyState({ reason }: EmptyStateProps) {
  return (
    <div className="empty-state">
      <Card className="empty-state-card">
        {reason === "missing-env" ? (
          <>
            <h2>Sanity CMS Not Configured</h2>
            <p>
              Add your Sanity credentials to <code>.env.local</code> using the
              variables in <code>.env.example</code>, then create a featured
              candidate in Sanity Studio.
            </p>
          </>
        ) : (
          <>
            <h2>No Featured Candidate Found</h2>
            <p>
              Create a candidate document in Sanity Studio and mark it as
              featured to render the portfolio.
            </p>
          </>
        )}
      </Card>
    </div>
  );
}
