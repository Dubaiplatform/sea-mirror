// app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="max-w-xl text-center">
        <p className="text-xs tracking-[0.35em] uppercase text-white/60">
          Error 404
        </p>

        <h1 className="mt-4 text-4xl md:text-5xl font-light tracking-tight">
          Page not found
        </h1>

        <p className="mt-4 text-base md:text-lg text-white/70">
          The page you’re looking for doesn’t exist.
        </p>

        <div className="mt-8 flex items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center justify-center  bg-white text-black px-5 py-2.5 text-sm font-medium hover:bg-white/90 transition"
          >
            Back to Home
          </Link>
        </div>

        <div className="mt-12 h-px w-full bg-white/10" />

        <p className="mt-6 text-xs text-white/50">
          If you typed the URL manually, please check the spelling.
        </p>
      </div>
    </main>
  );
}
