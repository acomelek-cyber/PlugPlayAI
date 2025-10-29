export function IntegrationsSection() {
  const platforms = [
    {
      name: "AppFolio",
      logo: "/appfolio-property-management-logo.jpg",
    },
    {
      name: "Buildium",
      logo: "/buildium-property-management-logo.jpg",
    },
    {
      name: "Yardi",
      logo: "/yardi-property-management-logo.jpg",
    },
    {
      name: "ONR",
      logo: "/onr-property-management-logo.jpg",
    },
  ]

  return (
    <section className="py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Works seamlessly with leading platforms
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Integrate with AppFolio, Buildium, Yardi, ONR, and more property management platforms in less than a day.
          </p>
        </div>

        {/* Platform Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          {platforms.map((platform, index) => (
            <div
              key={index}
              className="group flex items-center justify-center p-6 rounded-xl bg-background border border-border hover:border-primary/20 transition-all duration-300 hover:shadow-lg w-full h-24"
            >
              <img
                src={platform.logo || "/placeholder.svg"}
                alt={`${platform.name} logo`}
                className="max-h-12 max-w-full object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300 filter grayscale group-hover:grayscale-0"
              />
            </div>
          ))}
        </div>

        {/* Additional Text */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground text-lg">
            Don't see your platform? <span className="text-primary font-medium">Contact us</span> about custom
            integrations.
          </p>
        </div>
      </div>
    </section>
  )
}
