import { Rocket, Phone, Calculator, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export function PricingSection() {
  const pricingTiers = [
    {
      portfolioSize: "Up to 100 units",
      pricePerUnit: "$1.50",
      monthlyRange: "Up to $150/month",
      popular: false,
    },
    {
      portfolioSize: "101–500 units",
      pricePerUnit: "$1.10",
      monthlyRange: "$111–$550/month",
      popular: true,
    },
    {
      portfolioSize: "501–2,000 units",
      pricePerUnit: "$0.80",
      monthlyRange: "$401–$1,600/month",
      popular: false,
    },
    {
      portfolioSize: "2,001+ units",
      pricePerUnit: "$0.55",
      monthlyRange: "$1,100+/month",
      popular: false,
    },
  ]

  const benefits = [
    "24/7 AI voice and chat support",
    "White-label integration options",
    "Dedicated technical support",
    "Custom branding capabilities",
    "Multi-language support",
  ]

  return (
    <section className="py-24 px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Calculator className="w-4 h-4" />
            Transparent Pricing
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Simple per-unit pricing that scales with your portfolio
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Volume discounts automatically applied. No hidden fees, no setup costs for enterprise plans.
          </p>
        </div>

        <div className="max-w-6xl mx-auto mb-16">
          <div className="bg-background rounded-3xl p-8 md:p-12 border border-border shadow-lg">
            {/* Pricing Table Header */}
            <div className="text-center mb-10">
              <h3 className="text-2xl font-bold text-foreground mb-4">Monthly Pricing by Portfolio Size</h3>
              <p className="text-muted-foreground">
                Automatic volume discounts - the more units you manage, the less you pay per unit
              </p>
            </div>

            {/* Pricing Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              {pricingTiers.map((tier, index) => (
                <div
                  key={index}
                  className={`relative bg-muted/30 rounded-2xl p-6 border-2 transition-all hover:shadow-lg ${
                    tier.popular ? "border-primary bg-primary/5 scale-105" : "border-border hover:border-primary/50"
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="text-center">
                    <h4 className="font-semibold text-foreground mb-2 text-sm">{tier.portfolioSize}</h4>
                    <div className="mb-3">
                      <span className="text-3xl font-bold text-foreground">{tier.pricePerUnit}</span>
                      <span className="text-muted-foreground text-sm ml-1">/unit/month</span>
                    </div>
                    <p className="text-muted-foreground text-sm">{tier.monthlyRange}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-primary/10 border border-primary/20 rounded-2xl p-6 mb-8">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Calculator className="w-5 h-5 text-primary" />
                <span className="text-primary font-semibold">Example Calculations</span>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
                <div className="bg-background/50 rounded-lg p-4">
                  <p className="text-foreground font-medium text-sm mb-1">75-unit HOA</p>
                  <p className="text-primary font-bold text-lg">$112.50/month</p>
                  <p className="text-muted-foreground text-xs">(75 × $1.50)</p>
                </div>
                <div className="bg-background/50 rounded-lg p-4">
                  <p className="text-foreground font-medium text-sm mb-1">300-unit Community</p>
                  <p className="text-primary font-bold text-lg">$330/month</p>
                  <p className="text-muted-foreground text-xs">(300 × $1.10)</p>
                </div>
                <div className="bg-background/50 rounded-lg p-4">
                  <p className="text-foreground font-medium text-sm mb-1">1,200-unit Portfolio</p>
                  <p className="text-primary font-bold text-lg">$960/month</p>
                  <p className="text-muted-foreground text-xs">(1,200 × $0.80)</p>
                </div>
                <div className="bg-background/50 rounded-lg p-4">
                  <p className="text-foreground font-medium text-sm mb-1">3,500-unit Enterprise</p>
                  <p className="text-primary font-bold text-lg">$1,925/month</p>
                  <p className="text-muted-foreground text-xs">(3,500 × $0.55)</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <div>
                <h4 className="font-semibold text-foreground text-lg mb-4">What's Included</h4>
                <div className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-foreground text-lg mb-4">Enterprise Benefits</h4>
                <div className="bg-muted/50 rounded-xl p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Rocket className="w-5 h-5 text-primary" />
                    <span className="font-medium text-foreground">2,001+ Units</span>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Custom enterprise pricing</li>
                    <li>• Multi-year discounts available</li>
                    <li>• Setup fee waived</li>
                    <li>• Dedicated account manager</li>
                    <li>• Priority support & onboarding</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">Ready to get started?</h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                Get a personalized quote based on your portfolio size and integration needs.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gap-2">
                  <Phone className="w-5 h-5" />
                  Request Personalized Quote
                </Button>
                <Button variant="outline" size="lg" className="gap-2 bg-transparent">
                  <Rocket className="w-5 h-5" />
                  Start Free Trial
                </Button>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-border text-center">
              <p className="text-muted-foreground text-sm leading-relaxed">
                Custom enterprise pricing and multi-year discounts available. Setup fee waived for enterprise plans. All
                plans include dedicated support, custom branding options, and comprehensive onboarding.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
