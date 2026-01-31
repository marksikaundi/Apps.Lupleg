import Link from 'next/link';

export default function Deeply() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-zinc-900 dark:text-zinc-100">
      {/* Decorative elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100 dark:bg-indigo-900/20 rounded-full blur-3xl opacity-20"></div>
      </div>

      <main className="relative z-10">
        {/* Navigation */}
        <nav className="border-b border-zinc-200/50 dark:border-zinc-800/50 backdrop-blur-sm bg-white/30 dark:bg-black/30">
          <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
            <Link href="/" className="text-xl font-bold text-blue-700 dark:text-white flex items-center gap-2">
              <span>🎯</span> Deeply
            </Link>
            <div className="flex gap-6 text-sm font-medium">
              <Link href="/legal/deeply/privacy" className="hover:text-blue-600 transition-colors">Privacy</Link>
              <Link href="/legal/deeply/terms" className="hover:text-blue-600 transition-colors">Terms</Link>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="max-w-5xl mx-auto px-6 py-20 text-center">
          <div className="mb-8 inline-block p-4 rounded-3xl bg-blue-50 dark:bg-blue-900/20 text-6xl">
            🎯
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Deeply
          </h1>
          <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Master your focus and reclaim your productivity. Deeply is designed to help you organize your life and stay in the flow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/25">
              Coming Soon
            </button>
            <Link href="/" className="px-8 py-4 rounded-xl border border-zinc-200 dark:border-zinc-800 font-bold hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all">
              Back to Apps
            </Link>
          </div>
        </section>

        {/* What is Deeply? */}
        <section className="max-w-5xl mx-auto px-6 py-20 border-t border-zinc-100 dark:border-zinc-900">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">What is Deeply?</h2>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-6">
                Deeply is more than just a task manager. It&apos;s a comprehensive productivity ecosystem built on the principles of deep work and focused attention.
              </p>
              <p className="text-lg text-zinc-600 dark:text-zinc-400">
                In a world full of distractions, Deeply provides the sanctuary you need to focus on what truly matters, helping you break down complex goals into manageable steps.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="h-40 rounded-2xl bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center text-3xl">🧘‍♂️</div>
              <div className="h-40 rounded-2xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-3xl">📅</div>
              <div className="h-40 rounded-2xl bg-indigo-50 dark:bg-indigo-900/20 flex items-center justify-center text-3xl">🚀</div>
              <div className="h-40 rounded-2xl bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center text-3xl">📊</div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="bg-zinc-50 dark:bg-zinc-900/50 py-24">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Powerful Features</h2>
              <p className="text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto">Everything you need to boost your productivity and stay organized in one place.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Smart Focus Timer",
                  description: "Built-in Pomodoro and deep work timers to keep you in the zone and prevent burnout.",
                  icon: "⏱️"
                },
                {
                  title: "Fluid Task Management",
                  description: "Organize tasks with nested lists, tags, and priorities that adapt to your workflow.",
                  icon: "📝"
                },
                {
                  title: "Progress Analytics",
                  description: "Visualize your productivity trends and see where your time is actually going.",
                  icon: "📈"
                },
                {
                  title: "Mindful Reminders",
                  description: "Gentle nudges that respect your focus time while ensuring nothing slips through.",
                  icon: "🔔"
                },
                {
                  title: "Cross-Platform Sync",
                  description: "Your data is always with you, seamlessly synced across all your devices.",
                  icon: "🔄"
                },
                {
                  title: "Dark Mode Ready",
                  description: "A beautiful, eye-friendly interface designed for both day and night sessions.",
                  icon: "🌙"
                }
              ].map((feature, idx) => (
                <div key={idx} className="p-8 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm hover:border-blue-500/50 transition-colors">
                  <div className="text-3xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Legal Footer Section */}
        <section className="max-w-5xl mx-auto px-6 py-20 text-center">
          <h2 className="text-2xl font-bold mb-8">Transparency & Legal</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <Link href="/legal/deeply/privacy" className="group">
              <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all w-48 text-center">
                <div className="text-2xl mb-2">🛡️</div>
                <div className="font-bold group-hover:text-blue-600">Privacy Policy</div>
              </div>
            </Link>
            <Link href="/legal/deeply/terms" className="group">
              <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all w-48 text-center">
                <div className="text-2xl mb-2">📄</div>
                <div className="font-bold group-hover:text-blue-600">Terms of Service</div>
              </div>
            </Link>
            <Link href="/legal/deeply/request" className="group">
              <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all w-48 text-center">
                <div className="text-2xl mb-2">📧</div>
                <div className="font-bold group-hover:text-blue-600">Data Request</div>
              </div>
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-200 dark:border-zinc-800 py-12 bg-zinc-50 dark:bg-zinc-950">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            © {new Date().getFullYear()} Lupleg Studios. Deeply is a registered trademark.
          </p>
        </div>
      </footer>
    </div>
  );
}