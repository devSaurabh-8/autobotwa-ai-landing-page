import { PricingCard } from "@/components/pricing-card"

export function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$29",
      description: "Perfect for individuals",
      features: ["Up to 100 automations/month", "Basic AI insights", "Email support", "5GB storage"],
      cta: "Get Started",
      highlighted: false,
    },
    {
      name: "Professional",
      price: "$99",
      description: "Best for growing teams",
      features: [
        "Unlimited automations",
        "Advanced AI analytics",
        "Priority support",
        "500GB storage",
        "Team collaboration tools",
      ],
      cta: "Start Free Trial",
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations",
      features: [
        "Everything in Professional",
        "Dedicated account manager",
        "Custom integrations",
        "Unlimited storage",
        "SSO & advanced security",
      ],
      cta: "Contact Sales",
      highlighted: false,
    },
  ]

  return (
    <section id="pricing" className="py-20 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, transparent pricing</h2>
          <p className="text-muted-foreground text-lg">
            Choose the plan that works for you. All plans include a 14-day free trial.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan) => (
            <PricingCard key={plan.name} {...plan} />
          ))}
        </div>
      </div>
    </section>
  )
}
