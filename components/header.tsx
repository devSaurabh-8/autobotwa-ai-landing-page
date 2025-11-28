export function Header() {
  return (
    <header className="border-b border-border/40 bg-background sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">✨</span>
          </div>
          <span className="font-bold text-xl hidden sm:inline">AutoBotwa AI</span>
        </div>

        <nav className="hidden md:flex gap-8">
          <a href="#features" className="text-muted-foreground hover:text-foreground transition">
            Features
          </a>
          <a href="#testimonials" className="text-muted-foreground hover:text-foreground transition">
            Testimonials
          </a>
          <a href="#pricing" className="text-muted-foreground hover:text-foreground transition">
            Pricing
          </a>
        </nav>

        <button className="px-6 py-2 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition font-medium">
          Sign In
        </button>
      </div>
    </header>
  )
}
