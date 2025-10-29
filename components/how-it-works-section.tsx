export function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      icon: "⚙️",
      title: "Custom integration built within one week after API access provided",
      description:
        "Custom setup with your existing property management platform through our API or webhook integration.",
    },
    {
      number: "02",
      icon: "💬",
      title: "Residents interact by voice or chat—AI answers instantly",
      description:
        "Your residents get immediate support through natural voice commands or chat, powered by advanced AI.",
    },
    {
      number: "03",
      icon: "🔔",
      title: "Staff receive auto-notifications and actionable reports",
      description: "Property managers get real-time alerts and comprehensive analytics to make informed decisions.",
    },
  ]

  return (
    <section className="py-24 px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">How It Works</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Get up and running in three simple steps—no technical expertise required.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => {
            return (
              <div key={index} className="relative">
                {/* Step Number */}
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg mr-4">
                    {step.number}
                  </div>
                  <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center text-2xl">
                    {step.icon}
                  </div>
                </div>

                {/* Step Content */}
                <h3 className="text-xl font-semibold text-foreground mb-4 text-balance leading-tight">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-pretty">{step.description}</p>

                {/* Connector Line (hidden on mobile, shown on desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-full w-full h-px bg-border transform translate-x-6 translate-y-0" />
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
