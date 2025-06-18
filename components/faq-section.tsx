"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "How do you ensure high-quality meetings?",
    answer:
      "We use data-driven targeting and pre-qualify prospects before booking meetings. Our team researches each prospect to ensure they match your ideal customer profile and have genuine interest in your solution.",
  },
  {
    question: "Will this interfere with my current email deliverability?",
    answer:
      "No. We use optimized sending strategies to maintain high deliverability and avoid spam filters. Our approach protects your domain reputation while maximizing outreach effectiveness.",
  },
  {
    question: "Can I customize my outreach?",
    answer:
      "Yes. We align messaging with your brand and goals while maintaining efficiency. You'll review and approve all scripts before we launch campaigns, ensuring they sound authentic to your voice.",
  },
  {
    question: "What do I need to get started?",
    answer:
      "You'll need LinkedIn Sales Navigator access, email credentials, your Calendly link, target customer details, and approval of our suggested messaging scripts. We handle the rest.",
  },
  {
    question: "How quickly can we get started?",
    answer:
      "Most clients are up and running within 3-5 business days after providing the necessary access and approvals. We handle all the technical setup and integration work.",
  },
  {
    question: "What if I'm not satisfied with the results?",
    answer:
      "We work closely with you to optimize campaigns for better results. Our team continuously A/B tests messaging and targeting to improve performance throughout our partnership.",
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">Get answers to common questions about our service</p>
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
