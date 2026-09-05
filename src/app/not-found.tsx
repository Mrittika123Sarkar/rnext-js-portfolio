import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 px-6 text-center">
      <p className="font-mono text-sm text-[var(--accent)]">404</p>
      <h1 className="text-3xl font-semibold tracking-tight">
        This page doesn&apos;t exist.
      </h1>
      <p className="max-w-sm text-[var(--muted)]">
        The page you&apos;re looking for may have been moved or removed.
      </p>
      <Link
        href="/"
        className="mt-4 rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-medium text-[var(--accent-foreground)] hover:opacity-90 transition-opacity"
      >
        Back to home
      </Link>
    </div>
  );
}
