interface TermBarProps {
  path: string;
}

export function TermBar({ path }: TermBarProps) {
  return (
    <div className="term-bar" aria-hidden>
      <span className="term-dots">
        <span className="term-dot term-dot-red" />
        <span className="term-dot term-dot-amber" />
        <span className="term-dot term-dot-green" />
      </span>
      <span className="term-path">{path}</span>
    </div>
  );
}
