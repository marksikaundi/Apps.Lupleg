interface App {
  id: string;
  name: string;
  description: string;
  category: string;
  icon: string;
  links: {
    terms: string;
    privacy: string;
  };
}

const apps: App[] = [
  {
    id: "deeply",
    name: "Deeply",
    description:
      "A powerful productivity app that helps you stay focused and organize your tasks efficiently.",
    category: "Productivity",
    icon: "🎯",
    links: {
      terms: "/legal/deeply/terms",
      privacy: "/legal/deeply/privacy",
    },
  },
  {
    id: "app2",
    name: "App 2",
    description:
      "A feature-rich application designed to simplify your daily workflow.",
    category: "Utilities",
    icon: "⚙️",
    links: {
      terms: "/legal/app2/terms",
      privacy: "/legal/app2/privacy",
    },
  },
  {
    id: "app3",
    name: "App 3",
    description:
      "Enhance your experience with innovative tools and seamless integration.",
    category: "Tools",
    icon: "🛠️",
    links: {
      terms: "/legal/app3/terms",
      privacy: "/legal/app3/privacy",
    },
  },
  {
    id: "app4",
    name: "App 4",
    description:
      "Your go-to solution for productivity and personal organization.",
    category: "Productivity",
    icon: "✨",
    links: {
      terms: "/legal/app4/terms",
      privacy: "/legal/app4/privacy",
    },
  },
];

const getCategoryColor = (category: string): string => {
  const colors: Record<string, string> = {
    Productivity:
      "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
    Utilities:
      "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
    Tools:
      "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300",
  };
  return (
    colors[category] ||
    "bg-zinc-100 text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300"
  );
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 via-white to-zinc-50 dark:from-zinc-950 dark:via-black dark:to-zinc-950">
      {/* Decorative elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 dark:bg-purple-900/20 rounded-full blur-3xl opacity-20"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 border-b border-zinc-200/50 dark:border-zinc-800/50 backdrop-blur-sm bg-white/30 dark:bg-black/30">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="space-y-4">
            <div className="inline-block">
              <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Lupleg Apps
              </h1>
            </div>
            <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl">
              Discover our collection of innovative mobile and web applications
              designed to enhance your productivity and simplify your daily
              tasks.
            </p>
          </div>
        </div>
      </header>

      {/* Apps Grid */}
      <main className="relative z-10 max-w-5xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {apps.map((app) => (
            <div
              key={app.id}
              className="group relative overflow-hidden rounded-2xl border border-zinc-200/50 dark:border-zinc-800/50 bg-white/60 dark:bg-zinc-900/40 backdrop-blur-sm p-8 hover:bg-white dark:hover:bg-zinc-900/60 transition-all duration-300 hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-xl dark:hover:shadow-2xl dark:hover:shadow-black/50"
            >
              {/* Gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative z-20">
                {/* Icon and Category */}
                <div className="flex justify-between items-start mb-4">
                  <div className="text-4xl">{app.icon}</div>
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full ${getCategoryColor(app.category)}`}
                  >
                    {app.category}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-2xl font-bold text-black dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {app.name}
                </h2>

                {/* Description */}
                <p className="text-zinc-600 dark:text-zinc-400 text-base leading-relaxed mb-8">
                  {app.description}
                </p>

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={app.links.terms}
                    className="inline-flex items-center px-4 py-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-sm font-medium hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200"
                  >
                    Terms
                  </a>
                  <a
                    href={app.links.privacy}
                    className="inline-flex items-center px-4 py-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-sm font-medium hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200"
                  >
                    Privacy
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-zinc-200/50 dark:border-zinc-800/50 backdrop-blur-sm bg-white/30 dark:bg-black/30 mt-20">
        <div className="max-w-5xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-600 dark:text-zinc-400">
            <p>
              &copy; {new Date().getFullYear()} Lupleg Apps. All rights
              reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="hover:text-zinc-900 dark:hover:text-white transition-colors"
              >
                About
              </a>
              <a
                href="#"
                className="hover:text-zinc-900 dark:hover:text-white transition-colors"
              >
                Contact
              </a>
              <a
                href="#"
                className="hover:text-zinc-900 dark:hover:text-white transition-colors"
              >
                Support
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
