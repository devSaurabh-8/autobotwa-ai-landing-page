import { FeatureCard } from "@/components/feature-card"

export function Features() {
  const features = [
    {
      icon: "⚡",
      title: "Intelligent Automation",
      description: "Automate repetitive tasks with AI. Save 10+ hours per week on routine work.",
    },
    {
      icon: "🤝",
      title: "Team Collaboration",
      description: "Real-time collaboration with AI-powered insights for better team decisions.",
    },
    {
      icon: "📊",
      title: "Smart Analytics",
      description: "Get actionable insights with AI analysis of your productivity patterns and trends.",
    },
  ]

  return (
    <section id="features" className="py-20 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful features, simplified</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need to work smarter, not harder. Built with teams in mind.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  )
}
