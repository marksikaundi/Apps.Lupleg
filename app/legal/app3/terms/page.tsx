import Link from "next/link";

export default function App3TermsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <header className="border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-3xl mx-auto px-6 py-8">
          <Link
            href="/"
            className="text-blue-600 dark:text-blue-400 hover:underline text-sm mb-4 inline-block"
          >
            ← Back to Home
          </Link>
          <h1 className="text-3xl font-bold text-black dark:text-white">
            App 3 - Terms of Service
          </h1>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-12">
        <div className="text-zinc-700 dark:text-zinc-300">
          <p className="text-center text-zinc-500 dark:text-zinc-400">
            Terms of Service for App 3 coming soon.
          </p>
        </div>
      </main>
    </div>
  );
}
