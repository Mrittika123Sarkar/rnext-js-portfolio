import { profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-8">
      <div className="container-x flex flex-col items-center justify-between gap-4 text-sm text-[var(--muted)] sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="text-xs">Kolkata, India</p>
      </div>
    </footer>
  );
}
