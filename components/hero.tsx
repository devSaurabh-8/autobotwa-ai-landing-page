export function Hero() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-primary/5 to-transparent">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
          The future of productivity is here
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">
          AutoBotwa – Smart AI that simplifies your workflow
        </h1>

        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-balance leading-relaxed">
          Automate workflows, boost team collaboration, and focus on what matters. Built by teams who know productivity.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="px-8 py-3 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition font-semibold">
            Start Free Trial
          </button>
          <button className="px-8 py-3 rounded-full border border-border hover:bg-muted transition font-semibold">
            View Demo
          </button>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 blur-3xl -z-10"></div>
          <div className="rounded-xl border border-border/50 bg-card overflow-hidden">
            <img src="/modern-ai-productivity-dashboard-interface.jpg" alt="Dashboard preview" className="w-full" />
          </div>
        </div>
      </div>
    </section>
  )
}
