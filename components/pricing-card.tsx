export function PricingCard({
  name,
  price,
  description,
  features,
  cta,
  highlighted,
}: {
  name: string
  price: string
  description: string
  features: string[]
  cta: string
  highlighted: boolean
}) {
  return (
    <div
      className={`rounded-xl border p-8 transition ${
        highlighted
          ? "border-primary bg-primary/5 shadow-lg shadow-primary/10 md:scale-105"
          : "border-border/50 bg-card"
      }`}
    >
      <h3 className="text-2xl font-bold mb-2">{name}</h3>
      <p className="text-muted-foreground text-sm mb-6">{description}</p>

      <div className="mb-6">
        <span className="text-4xl font-bold">{price}</span>
        {price !== "Custom" && <span className="text-muted-foreground">/month</span>}
      </div>

      <button
        className={`w-full py-3 px-6 rounded-lg font-semibold mb-8 transition ${
          highlighted ? "bg-primary text-primary-foreground hover:opacity-90" : "border border-border hover:bg-muted"
        }`}
      >
        {cta}
      </button>

      <ul className="space-y-4">
        {features.map((feature) => (
          <li key={feature} className="flex gap-3 items-start">
            <span className="text-primary mt-1 text-lg">✓</span>
            <span className="text-foreground">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
