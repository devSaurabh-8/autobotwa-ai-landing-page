export function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: string
  title: string
  description: string
}) {
  return (
    <div className="group rounded-xl border border-border/50 bg-card p-8 hover:border-border/100 hover:shadow-lg transition duration-300">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
      <div className="mt-6 pt-6 border-t border-border/30 opacity-0 group-hover:opacity-100 transition">
        <a href="#" className="text-primary font-medium text-sm hover:underline">
          Learn more →
        </a>
      </div>
    </div>
  )
}
