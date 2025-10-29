import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-background flex flex-col">
      <nav className="flex items-center justify-between px-6 py-4 lg:px-12 apple-blur bg-background/80 border-b border-border/50">
        <div className="flex items-center space-x-3">
          <div className="text-2xl font-semibold text-foreground tracking-tight">Plug-PlayAI</div>
        </div>
        <div className="hidden md:flex items-center space-x-10">
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
            Platform
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
            Resources
          </a>
          <Button variant="outline" size="sm" className="font-medium bg-transparent">
            Sign In
          </Button>
        </div>
      </nav>

      <div className="flex-1 flex items-center justify-center px-6 lg:px-12 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-700 dark:text-amber-400 px-4 py-2 rounded-full text-sm font-medium mb-8 border border-amber-500/20">
            Pre-Revenue • Seeking First Platform Partner
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-8 text-balance leading-[0.9] tracking-tight">
            The easy, instant AI upgrade for property management platforms.
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-16 max-w-4xl mx-auto text-pretty leading-relaxed font-medium">
            Transform your platform with resident-facing automation, voice and chat AI, and actionable analytics—no code
            required.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-24">
            <Button
              size="lg"
              className="px-10 py-4 text-lg font-semibold rounded-full apple-shadow hover:apple-shadow-lg transition-all duration-300"
            >
              Schedule Technical Discussion
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-10 py-4 text-lg font-semibold rounded-full bg-transparent hover:bg-secondary/50 transition-all duration-300"
            >
              See How It Works
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
