import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { ProjectItem } from "@/types";
import { Button } from "@/components/ui/Button";
import { TagList } from "@/components/ui/TagChip";

interface ProjectDetailViewProps {
  project: ProjectItem;
}

export function ProjectDetailView({ project }: ProjectDetailViewProps) {
  return (
    <section className="section page-offset">
      <div className="container project-detail-layout">
        <div className="project-detail-header">
          <div className="card-actions" style={{ marginBottom: "1rem" }}>
            <Link href="/projects" className="button button-ghost">
              <ArrowLeft size={18} style={{ marginRight: "0.4rem" }} />
              Back to Projects
            </Link>
          </div>
          {project.category ? (
            <p className="eyebrow">{project.category}</p>
          ) : null}
          <h1>{project.title}</h1>
          {project.detailSummary ? (
            <p className="project-detail-summary">{project.detailSummary}</p>
          ) : null}
          <TagList items={project.technologies} />
          <div className="card-actions">
            {project.githubUrl ? (
              <Button href={project.githubUrl} variant="secondary" external>
                GitHub
              </Button>
            ) : null}
            {project.liveDemoUrl ? (
              <Button href={project.liveDemoUrl} variant="secondary" external>
                Live Demo
              </Button>
            ) : null}
          </div>
        </div>

        {project.detailBlocks?.map((block) => (
          <section key={block.heading} className="detail-block">
            <h3>{block.heading}</h3>
            {block.content ? <p>{block.content}</p> : null}
            {block.bulletItems?.length ? (
              <ul className="bullet-list">
                {block.bulletItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}
      </div>
    </section>
  );
}
