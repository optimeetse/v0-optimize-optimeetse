"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "What exactly do you deliver?",
    answer:
      "We run systematic cold email campaigns and deliver hot leads to you. These are prospects who have responded positively to our outreach and are interested in learning more. You'll need to follow up with calls to convert them into meetings and sales.",
  },
  {
    question: "Do I still need to make cold calls?",
    answer:
      "Yes. We generate interested prospects through cold email, but you'll still need to call these hot leads to book meetings and close deals. Think of us as your lead generation engine that feeds your sales team.",
  },
  {
    question: "How do you ensure high email deliverability?",
    answer:
      "We use advanced email warming, domain rotation, and deliverability optimization to maintain 99%+ inbox delivery rates. Our infrastructure is designed to avoid spam filters and protect your sender reputation.",
  },
  {
    question: "What's included in lead generation?",
    answer:
      "For Growth and Scale packages, we research and identify your ideal prospects using advanced targeting criteria. We build custom prospect lists based on your ideal customer profile, so you don't have to worry about finding leads.",
  },
  {
    question: "How quickly can we get started?",
    answer:
      "Most clients are up and running within 3-5 business days after providing the necessary access and approvals. We handle all the technical setup, email warming, and campaign creation.",
  },
  {
    question: "What if the leads don't convert?",
    answer:
      "Lead conversion depends on your follow-up and sales process. We focus on generating interested prospects through our email campaigns. We'll work with you to optimize messaging and targeting to improve lead quality over time.",
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
