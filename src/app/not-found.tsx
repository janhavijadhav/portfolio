import Link from "next/link";

export default function NotFound() {
  return (
    <div className="empty-state">
      <div className="card empty-state-card">
        <h2>Page Not Found</h2>
        <p>The page you are looking for does not exist.</p>
        <Link href="/" className="button button-primary">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
