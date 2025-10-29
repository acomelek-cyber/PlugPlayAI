import { HeroSection } from "@/components/hero-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { FeaturesSection } from "@/components/features-section"
import { DemoSection } from "@/components/demo-section"
import { ValueChainSection } from "@/components/value-chain-section"
import { PartnershipSection } from "@/components/partnership-section"
import { PartnerProgramSection } from "@/components/partner-program-section"
import { FaqSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"

function FirstPartnerSection() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-gradient-to-br from-amber-50 via-background to-amber-50/30 dark:from-amber-950/20 dark:via-background dark:to-amber-950/10">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-700 dark:text-amber-400 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-amber-500/20">
          <span className="text-sm">🤝</span>
          Partnership Opportunity
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
          Looking for First Platform Partner
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed mb-8">
          Pre-revenue stage. Seeking HOA management software platform willing to co-develop first integration.
        </p>
        <div className="bg-background rounded-2xl p-8 border border-border shadow-lg">
          <div className="space-y-4 text-left">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-muted-foreground">Work directly with our technical team to shape the integration</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-muted-foreground">Influence product roadmap and feature development</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-muted-foreground">Favorable partnership terms for early adopters</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-muted-foreground">
                Collaborative approach to building the future of property management AI
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <main>
      <HeroSection />
      <HowItWorksSection />
      <FeaturesSection />
      <DemoSection />
      <ValueChainSection />
      <PartnershipSection />
      <PartnerProgramSection />
      <FaqSection />
      <FirstPartnerSection />
      <ContactSection />
    </main>
  )
}
