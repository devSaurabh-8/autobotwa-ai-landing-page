export function TestimonialCard({
  name,
  role,
  image,
  quote,
}: {
  name: string
  role: string
  image: string
  quote: string
}) {
  return (
    <div className="rounded-xl border border-border/50 bg-card p-8">
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="text-yellow-400">
            ★
          </span>
        ))}
      </div>

      <p className="text-foreground mb-6 leading-relaxed">"{quote}"</p>

      <div className="flex items-center gap-3">
        <img src={image || "/placeholder.svg"} alt={name} className="w-12 h-12 rounded-full object-cover" />
        <div>
          <p className="font-semibold text-sm">{name}</p>
          <p className="text-muted-foreground text-sm">{role}</p>
        </div>
      </div>
    </div>
  )
}
