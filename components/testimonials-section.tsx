import { Star } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "We reduced after-hours calls by 75%—and our managers can finally focus on community, not repetitive questions.",
      author: "Sarah Chen",
      title: "Regional Director",
      company: "Property Partners",
      rating: 5,
    },
    {
      quote:
        "The AI handles 90% of routine inquiries instantly. Our residents love the immediate responses, and our staff productivity has skyrocketed.",
      author: "Michael Rodriguez",
      title: "Operations Manager",
      company: "Premier Property Solutions",
      rating: 5,
    },
    {
      quote:
        "Implementation was seamless. Within days, we saw dramatic improvements in resident satisfaction and staff efficiency.",
      author: "Jennifer Walsh",
      title: "Community Director",
      company: "Residential Management Group",
      rating: 5,
    },
  ]

  return (
    <section className="py-24 px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Star className="w-4 h-4" />
            Client Success Stories
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Trusted by property management leaders
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            See how our AI platform transforms operations and delights residents across the industry.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-muted/30 rounded-2xl p-8 border border-border hover:shadow-lg transition-all duration-300"
            >
              {/* Rating Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-foreground text-lg leading-relaxed mb-6 font-medium">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="border-t border-border pt-6">
                <div className="font-semibold text-foreground">{testimonial.author}</div>
                <div className="text-muted-foreground text-sm">
                  {testimonial.title}, {testimonial.company}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
