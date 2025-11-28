import { TestimonialCard } from "@/components/testimonial-card"

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Product Manager at TechCorp",
      image: "/professional-woman-headshot.png",
      quote: "Productivity AI cut our meeting prep time in half. Game-changer for our workflows.",
    },
    {
      name: "Marcus Johnson",
      role: "CEO at StartupXYZ",
      image: "/professional-man-headshot.png",
      quote: "The AI insights helped us identify bottlenecks we never saw. Highly recommended.",
    },
    {
      name: "Emily Rodriguez",
      role: "Operations Lead at Design Co",
      image: "/professional-headshot-woman-with-smile.jpg",
      quote: "Our team productivity improved 40% within the first month. Incredible platform.",
    },
  ]

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Loved by teams worldwide</h2>
          <p className="text-muted-foreground text-lg">See what our users are saying</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}
