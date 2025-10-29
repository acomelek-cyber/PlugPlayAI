"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export function DemoSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const demoSteps = [
    {
      title: "1. Resident Asks",
      description:
        'A resident of one of your management company customers asks a question—like "What is my trash day?"—using chat or voice. All interactions happen through your platform, under your brand.',
      image: "/demo-resident-trash-question.jpg",
    },
    {
      title: "2. Instant AI Answer",
      description:
        "Plug-PlayAI, integrated into your platform, provides a real-time, accurate answer—instantly—so the property staff (your customer's employees) don't have to get involved in most routine questions.",
      image: "/demo-ai-trash-response.jpg",
    },
    {
      title: "3. Staff Gets Actionable Notifications (If Needed)",
      description:
        "If a request or task needs attention, your platform immediately routes a notification or maintenance ticket to your customer's managers, reducing calls and emails.",
      image: "/demo-staff-when-needed.jpg",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % demoSteps.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + demoSteps.length) % demoSteps.length)
  }

  return (
    <section className="py-24 px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Play className="w-4 h-4" />
            Live Demo: Instant AI in Action
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            How Your Platform Empowers Management Companies with Instant AI Support
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Show your customers (HOA management companies) and their residents how powerful and easy resident support
            can be—with your platform as the engine. When you integrate Plug-PlayAI, your software delivers instant,
            automated answers to resident questions, freeing up your customer's staff and modernizing their service
            experience.
          </p>
        </div>

        {/* Demo Carousel */}
        <div className="relative max-w-3xl mx-auto">
          <div className="bg-background rounded-2xl border border-border shadow-2xl overflow-hidden">
            {/* Carousel Content */}
            <div className="relative h-64 md:h-80">
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-background to-muted/50">
                <img
                  src={
                    demoSteps[currentSlide].image ||
                    "/placeholder.svg?height=500&width=800&query=property management AI demo interface" ||
                    "/placeholder.svg" ||
                    "/placeholder.svg" ||
                    "/placeholder.svg" ||
                    "/placeholder.svg" ||
                    "/placeholder.svg" ||
                    "/placeholder.svg" ||
                    "/placeholder.svg"
                  }
                  alt={demoSteps[currentSlide].title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background border border-border rounded-full p-2 transition-all duration-200 hover:shadow-lg"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background border border-border rounded-full p-2 transition-all duration-200 hover:shadow-lg"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Step Information */}
            <div className="p-6 md:p-8">
              <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">{demoSteps[currentSlide].title}</h3>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  {demoSteps[currentSlide].description}
                </p>

                {/* Step Indicators */}
                <div className="flex justify-center gap-2 mb-8">
                  {demoSteps.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-200 ${
                        index === currentSlide
                          ? "bg-primary scale-125"
                          : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                      }`}
                    />
                  ))}
                </div>

                {/* CTA */}
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Schedule Technical Discussion
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12 max-w-4xl mx-auto">
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8">
            <p className="text-lg text-foreground font-medium leading-relaxed">
              With Plug-PlayAI, you give management company clients and their residents an effortless, modern support
              experience—transforming your platform into the go-to choice for forward-thinking property management
              leaders.
            </p>
          </div>
        </div>

        {/* Additional Benefits */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <span className="text-primary font-bold text-xl">24/7</span>
            </div>
            <h4 className="font-semibold text-foreground mb-2">Always Available</h4>
            <p className="text-muted-foreground text-sm">AI responds instantly, any time of day</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <span className="text-primary font-bold text-xl">90%</span>
            </div>
            <h4 className="font-semibold text-foreground mb-2">Accuracy Rate</h4>
            <p className="text-muted-foreground text-sm">Precise answers from your data</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <span className="text-primary font-bold text-xl">&lt;1s</span>
            </div>
            <h4 className="font-semibold text-foreground mb-2">Response Time</h4>
            <p className="text-muted-foreground text-sm">Lightning-fast AI responses</p>
          </div>
        </div>
      </div>
    </section>
  )
}
