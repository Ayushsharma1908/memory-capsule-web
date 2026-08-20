import Link from "next/link";
import { FileQuestion } from "lucide-react";

export default function DocsNotFound() {
  return (
    <div className="docs-notfound">
      <span className="docs-notfound-icon" aria-hidden="true">
        <FileQuestion size={40} strokeWidth={1.5} />
      </span>
      <h1 className="docs-notfound-title">Documentation page not found</h1>
      <p className="docs-notfound-body">
        The page you are looking for does not exist or may have been moved.
      </p>
      <Link href="/docs" className="docs-notfound-cta">
        Back to Documentation
      </Link>
    </div>
  );
}
