"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "How do you ensure compliance with pharmaceutical industry regulations?",
    answer:
      "We follow all pharmaceutical industry guidelines for professional communications, including anti-kickback regulations and transparency requirements. Our messaging is designed to be informational and relationship-building focused, avoiding any promotional content that could violate compliance standards.",
  },
  {
    question: "What types of pharmaceutical and biotech contacts can you reach?",
    answer:
      "We target VP+ level executives in business development, licensing, partnerships, R&D, and commercial teams at pharmaceutical and biotech companies. Our database includes contacts at Big Pharma, mid-size pharma, and emerging biotech companies globally.",
  },
  {
    question: "How do you personalize outreach for life sciences companies?",
    answer:
      "Our team understands therapeutic areas, drug development stages, and partnership dynamics. We research each target company's pipeline, recent deals, and strategic focus areas to create highly relevant, personalized messaging that resonates with pharma executives.",
  },
  {
    question: "What's the typical response rate for pharma outreach?",
    answer:
      "Our life sciences campaigns typically achieve 12-18% response rates, significantly higher than generic outreach. This is due to our industry expertise, targeted messaging, and understanding of what motivates pharmaceutical decision makers.",
  },
  {
    question: "How quickly can we start reaching pharmaceutical companies?",
    answer:
      "Most life sciences clients are up and running within 5-7 business days. We need time to research your specific therapeutic areas, competitive landscape, and ideal pharma targets to ensure maximum relevance and compliance.",
  },
  {
    question: "Do you work with early-stage biotech companies?",
    answer:
      "Yes, we work with biotech companies at all stages - from pre-clinical startups seeking partnerships to commercial-stage companies looking to expand their pharma relationships. Our Biotech Starter package is designed specifically for early-stage companies.",
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Life Sciences Outreach FAQ</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Common questions about pharmaceutical and biotech outreach
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-slate-200 mb-4">
              <button
                className="w-full text-left p-6 flex justify-between items-center hover:bg-slate-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-slate-900 pr-4">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-slate-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-slate-500 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
