import { Users, FileText, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function PartnerProgramSection() {
  const partnerModels = [
    {
      icon: Users,
      title: "Whitelabel",
      description: "Complete white-label solution with your branding and custom domain integration",
    },
  ]

  return (
    <section className="py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Users className="w-4 h-4" />
            Whitelabel Program
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            White label model to fit your business
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Complete white-label AI solution with your branding, custom domain integration, and comprehensive developer
            documentation for seamless onboarding.
          </p>
        </div>

        {/* Partner Models Grid */}
        <div className="flex justify-center mb-16">
          <div className="bg-background rounded-2xl p-8 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg group max-w-md">
            <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors mx-auto">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground text-xl mb-4 text-center">Complete Whitelabel Solution</h3>
            <p className="text-muted-foreground leading-relaxed text-center">
              Fully branded AI assistant that integrates seamlessly with your platform. Your customers see your brand,
              your domain, your experience.
            </p>
          </div>
        </div>

        {/* Developer Documentation Section */}
        <div className="bg-muted/30 rounded-3xl p-8 md:p-12 mb-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <FileText className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Developer documentation for easy onboarding
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              Comprehensive API documentation, SDKs, and integration guides to get your team up and running quickly.
              Full technical support throughout the integration process.
            </p>

            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="bg-background rounded-xl p-6 border border-border">
                <h4 className="font-semibold text-foreground mb-2">API Documentation</h4>
                <p className="text-muted-foreground text-sm">Complete REST API reference with examples</p>
              </div>
              <div className="bg-background rounded-xl p-6 border border-border">
                <h4 className="font-semibold text-foreground mb-2">SDK Libraries</h4>
                <p className="text-muted-foreground text-sm">Ready-to-use libraries for popular platforms</p>
              </div>
              <div className="bg-background rounded-xl p-6 border border-border">
                <h4 className="font-semibold text-foreground mb-2">Integration Support</h4>
                <p className="text-muted-foreground text-sm">Dedicated technical support team</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-3xl p-8 md:p-12 border border-primary/20">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Ready to explore partnership?</h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              Be our first platform partner and help shape the future of property management AI integration.
            </p>

            <Button size="lg" className="gap-2 text-lg px-8 py-6">
              Schedule Technical Discussion
              <ArrowRight className="w-5 h-5" />
            </Button>

            <p className="text-muted-foreground text-sm mt-4">
              Explore co-development opportunity • No commitment required
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
