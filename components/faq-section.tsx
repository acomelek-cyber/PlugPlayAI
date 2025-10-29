"use client"

import { useState } from "react"
import { ChevronDown, HelpCircle } from "lucide-react"

export function FaqSection() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  const faqs = [
    {
      question: "Will your technology compete with our platform?",
      answer:
        'Not at all. Our technology is designed to enhance your platform—not replace it. Think of us as an "easy, instant AI upgrade" that makes your software smarter, hands-free, and more valuable for your clients.',
    },
    {
      question: "How does partnering with you add value for our platform?",
      answer:
        "Increase stickiness and retention: Your property management clients get more value and modern service features, so they're less likely to switch.\n\nDrive incremental revenue: Offer our AI as a paid upgrade, premium feature, or bundle—using revenue share, white label, or referral fees to grow new income.\n\nExpand features with zero dev work: Our prebuilt API/webhook lets you add voice/chat automation, advanced Q&A, and analytics instantly, saving months or years of engineering.",
    },
    {
      question: "What makes your solution uniquely valuable for software vendors?",
      answer:
        "Instantly deployable AI/voice features—no risky or expensive dev cycles.\n\nImmediate competitive advantage: Be first to market with advanced resident automation and support tools.\n\nMonetize new features: Grow platform revenue without needing to build, staff, or maintain AI modules yourself.",
    },
    {
      question: "How fast can we integrate?",
      answer:
        "Most platforms go live in under a week—just add our API or webhook. Our streamlined integration process includes dedicated onboarding support and comprehensive documentation to ensure smooth deployment.",
    },
    {
      question: "How secure is resident data?",
      answer:
        "SOC2-compliant, encrypted end-to-end. We maintain the highest security standards with regular audits, secure data transmission, and strict access controls to protect all resident information.",
    },
    {
      question: "What support do we get?",
      answer:
        "Dedicated onboarding, ongoing support, pilot reporting. Our partnership includes a dedicated account manager, 24/7 technical support, regular performance reports, and continuous optimization recommendations.",
    },
    {
      question: "What are your uptime guarantees and SLAs?",
      answer:
        "We maintain 99.9% uptime with comprehensive SLA coverage. Our infrastructure includes redundant systems, automatic failover, and real-time monitoring to ensure consistent service availability for your residents.",
    },
  ]

  return (
    <section className="py-24 px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <HelpCircle className="w-4 h-4" />
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            AI Partnerships for Property Management Software Vendors
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Get answers to common questions about data security, integration effort, support, pilot processes, and
            service level agreements.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-background rounded-2xl border border-border overflow-hidden">
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
              >
                <h3 className="font-semibold text-foreground text-lg pr-4">{faq.question}</h3>
                <ChevronDown
                  className={`w-5 h-5 text-muted-foreground transition-transform flex-shrink-0 ${
                    openItems.includes(index) ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openItems.includes(index) && (
                <div className="px-6 pb-6">
                  <div className="pt-4 border-t border-border">
                    <div className="text-muted-foreground leading-relaxed whitespace-pre-line">{faq.answer}</div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-background rounded-2xl p-8 border border-border">
            <h3 className="text-xl font-semibold text-foreground mb-4">Still have questions?</h3>
            <p className="text-muted-foreground mb-6">
              Our partnership team is ready to discuss your specific integration needs and answer any technical
              questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
                Schedule Technical Discussion
              </button>
              <button className="px-6 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-muted/50 transition-colors">
                View Documentation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
