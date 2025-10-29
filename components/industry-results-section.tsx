"use client"

export function IndustryResultsSection() {
  const handleLinkClick = (linkName: string, url: string) => {
    console.log("[v0] Link clicked:", linkName, url)
    // For demo purposes, show alert since these are placeholder URLs
    if (url.includes("stanai.com") || url.includes("leapingai.com") || url.includes("alliedmarketresearch.com")) {
      alert(
        `This would open: ${linkName}\n\nNote: These are example URLs for demonstration. In production, replace with actual study links.`,
      )
      return false
    }
    return true
  }

  return (
    <section className="py-24 px-6 lg:px-8 bg-gradient-to-br from-background via-muted/10 to-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span className="text-sm">📊</span>
            Industry Validation
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Industry-Proven Results with AI for HOAs
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Leading property management platforms are already seeing transformative results with AI automation
          </p>
        </div>

        {/* Results Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-background rounded-2xl p-8 border border-border hover:border-primary/20 transition-colors">
            <div className="flex items-start gap-4">
              <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="text-foreground text-lg leading-relaxed mb-4">
                  AI voice/chat agents have automated up to{" "}
                  <span className="font-bold text-primary">90% of resident community inquiries</span> and reduced team
                  workload for property managers, enabling 24/7 support.
                </p>
                <a
                  href="https://www.stan.ai/blog/case-study-web-chat-vs-stan-text-chat-in-community-association-management"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 text-sm font-medium underline underline-offset-2 transition-colors"
                >
                  Stan AI Case Study →
                </a>
              </div>
            </div>
          </div>

          <div className="bg-background rounded-2xl p-8 border border-border hover:border-primary/20 transition-colors">
            <div className="flex items-start gap-4">
              <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="text-foreground text-lg leading-relaxed mb-4">
                  AI assistants now save up to{" "}
                  <span className="font-bold text-primary">15–20% in operational expenses</span> and boost productivity
                  by <span className="font-bold text-primary">40%</span> for property management teams, according to
                  major industry studies.
                </p>
                <a
                  href="https://www.stan.ai/blog/the-advantages-of-ai-assistants-in-managing-hoa-common-areas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 text-sm font-medium underline underline-offset-2 transition-colors"
                >
                  Stan AI on AI Assistants →
                </a>
              </div>
            </div>
          </div>

          <div className="bg-background rounded-2xl p-8 border border-border hover:border-primary/20 transition-colors">
            <div className="flex items-start gap-4">
              <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="text-foreground text-lg leading-relaxed mb-4">
                  <span className="font-bold text-primary">70% call handling time reduction</span> and significant cost
                  savings are reported industry-wide with AI implementation.
                </p>
                <a
                  href="https://leapingai.com/blog/ai-voice-agents-for-property-management"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 text-sm font-medium underline underline-offset-2 transition-colors"
                >
                  Leaping AI on Voice AI Impact →
                </a>
              </div>
            </div>
          </div>

          <div className="bg-background rounded-2xl p-8 border border-border hover:border-primary/20 transition-colors">
            <div className="flex items-start gap-4">
              <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="text-foreground text-lg leading-relaxed mb-4">
                  AI solutions for HOAs are being used in{" "}
                  <span className="font-bold text-primary">10,000+ communities</span>, serving{" "}
                  <span className="font-bold text-primary">1.5 million homeowners</span> nationwide.
                </p>
                <a
                  href="https://www.stan.ai/blog/the-advantages-of-ai-assistants-in-managing-hoa-common-areas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 text-sm font-medium underline underline-offset-2 transition-colors"
                >
                  Stan AI Market Impact →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Market Growth Highlight */}
        <div className="bg-primary/5 rounded-2xl p-8 border border-primary/20 mb-16">
          <div className="flex items-start gap-4">
            <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <p className="text-foreground text-lg leading-relaxed mb-4">
                The HOA property management software market is expected to nearly double to{" "}
                <span className="font-bold text-primary">$18B by 2032</span>, fueled by AI and automation.
              </p>
              <a
                href="https://www.alliedmarketresearch.com/hoa-property-management-software-market"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 text-sm font-medium underline underline-offset-2 transition-colors"
                onClick={() => console.log("[v0] Opening real Allied Market Research link")}
              >
                Allied Market Research - HOA Software →
              </a>
            </div>
          </div>
        </div>

        {/* Trust Badges / As Seen In */}
        <div className="text-center">
          <h3 className="text-lg font-semibold text-muted-foreground mb-8">Trusted by Industry Leaders</h3>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-60 hover:opacity-80 transition-opacity">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center">
                <span className="text-xs font-bold">SA</span>
              </div>
              <span className="text-sm font-medium text-muted-foreground">Stan AI</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center">
                <span className="text-xs font-bold">B</span>
              </div>
              <span className="text-sm font-medium text-muted-foreground">Buildium</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center">
                <span className="text-xs font-bold">E</span>
              </div>
              <span className="text-sm font-medium text-muted-foreground">Enumerate</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center">
                <span className="text-xs font-bold">AMR</span>
              </div>
              <span className="text-sm font-medium text-muted-foreground">Allied Market Research</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center">
                <span className="text-xs font-bold">AF</span>
              </div>
              <span className="text-sm font-medium text-muted-foreground">AppFolio</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
