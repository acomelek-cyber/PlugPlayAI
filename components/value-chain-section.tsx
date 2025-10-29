"use client"

export function ValueChainSection() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-gradient-to-br from-muted/5 via-background to-muted/5">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span className="text-sm">🔗</span>
            Value Chain
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            How Plug-PlayAI Creates Value for Software Providers and Their Customers
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            A seamless partnership flow that delivers AI automation benefits across the entire value chain
          </p>
        </div>

        {/* Value Flow Diagram */}
        <div className="mb-16">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
            {/* HOA Software Provider */}
            <div className="flex flex-col items-center text-center max-w-xs">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">HOA Software Provider</h3>
              <p className="text-sm text-muted-foreground">Our Partners</p>
            </div>

            {/* Arrow */}
            <div className="flex items-center">
              <div className="hidden lg:block w-12 h-0.5 bg-primary/30"></div>
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mx-2">
                <svg
                  className="w-4 h-4 text-primary rotate-90 lg:rotate-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <div className="hidden lg:block w-12 h-0.5 bg-primary/30"></div>
            </div>

            {/* HOA Management Company */}
            <div className="flex flex-col items-center text-center max-w-xs">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">HOA Management Company</h3>
              <p className="text-sm text-muted-foreground">Your Customers</p>
            </div>

            {/* Arrow */}
            <div className="flex items-center">
              <div className="hidden lg:block w-12 h-0.5 bg-primary/30"></div>
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mx-2">
                <svg
                  className="w-4 h-4 text-primary rotate-90 lg:rotate-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <div className="hidden lg:block w-12 h-0.5 bg-primary/30"></div>
            </div>

            {/* Community Residents */}
            <div className="flex flex-col items-center text-center max-w-xs">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Community Residents</h3>
              <p className="text-sm text-muted-foreground">End Users</p>
            </div>
          </div>

          {/* Flow Labels */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-16 mt-8 text-sm text-muted-foreground">
            <div className="text-center">
              <p className="font-medium">Integrates Plug-PlayAI</p>
            </div>
            <div className="text-center">
              <p className="font-medium">Deploys AI chat/voice</p>
            </div>
            <div className="text-center">
              <p className="font-medium">Benefits from instant support</p>
            </div>
          </div>
        </div>

        {/* Value Propositions Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* For HOA Software Providers */}
          <div className="bg-background rounded-2xl p-8 border border-border hover:border-primary/20 transition-colors">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground">For HOA Software Providers</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">Instantly upgrade your platform with plug-and-play AI.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">
                  Explore new monetization opportunities and offer a competitive "AI tier" with minimal engineering
                  burden.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">
                  Retain, expand, and upsell clients demanding next-gen automation.
                </p>
              </div>
            </div>
          </div>

          {/* For HOA Management Companies */}
          <div className="bg-background rounded-2xl p-8 border border-border hover:border-primary/20 transition-colors">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground">For HOA Management Companies</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">Automate 24/7 resident communication and support.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">
                  Reduce staff workload, improve operational efficiency, and increase board satisfaction.
                </p>
              </div>
            </div>
          </div>

          {/* For Residents */}
          <div className="bg-background rounded-2xl p-8 border border-border hover:border-primary/20 transition-colors">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground">For Residents</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">Enjoy instant answers and modern support experiences.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">Fewer complaints, better experience, and real-time service.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Message */}
        <div className="bg-primary/5 rounded-2xl p-8 border border-primary/20 text-center">
          <p className="text-lg md:text-xl text-foreground leading-relaxed text-balance">
            "Plug-PlayAI empowers software providers to deliver game-changing AI automation to their HOA management
            clients—while retaining full control and brand ownership."
          </p>
        </div>
      </div>
    </section>
  )
}
