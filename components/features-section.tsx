export function FeaturesSection() {
  const features = [
    {
      icon: "💬",
      title: "AI-driven voice & chat",
      description:
        "Natural language processing enables residents to get instant answers through voice commands or chat interface.",
    },
    {
      icon: "🔧",
      title: "Automated request processing",
      description: "Streamline work orders and maintenance tickets with intelligent routing.",
    },
    {
      icon: "📊",
      title: "Advanced analytics and insights",
      description:
        "Comprehensive reporting and data visualization to help you make informed property management decisions.",
    },
    {
      icon: "🎨",
      title: "Whitelabel and custom branding",
      description:
        "Seamlessly integrate with your existing brand identity and customize the experience for your residents.",
    },
    {
      icon: "🔌",
      title: "Easy platform integration",
      description: "Connect with your existing property management software through simple APIs and webhooks.",
    },
  ]

  return (
    <section className="py-24 px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Everything you need to transform resident experience
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Powerful AI features designed specifically for property management platforms and their residents.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            return (
              <div key={index} className="group">
                <div className="bg-background rounded-xl p-8 h-full border border-border hover:border-primary/20 transition-all duration-300 hover:shadow-lg">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                    <span className="text-2xl">{feature.icon}</span>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-foreground mb-4 text-balance leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-pretty">{feature.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
