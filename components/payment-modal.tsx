"use client"
import { Button } from "@/components/ui/button"
import { X, CreditCard, FileText, Calendar, Target } from "lucide-react"

interface PaymentModalProps {
  isOpen: boolean
  onClose: () => void
  packageType: "starter" | "growth" | "scale"
}

export default function PaymentModal({ isOpen, onClose, packageType }: PaymentModalProps) {
  if (!isOpen) return null

  const packageDetails = {
    starter: {
      name: "Biotech Starter Package",
      price: "$3,500",
      features: [
        "3-5 warmed email inboxes",
        "500-1,000 emails/day to pharma targets",
        "Life sciences messaging expertise",
        "Weekly pharma meeting reports",
        "Dedicated life sciences account manager",
        "Compliance-aware outreach",
      ],
      description:
        "Perfect for early-stage biotech companies getting started with pharmaceutical outreach. Includes industry expertise and compliance guidance.",
      leadGen: false,
    },
    growth: {
      name: "Pharma Growth Package",
      price: "$7,500",
      features: [
        "8-12 warmed email inboxes",
        "1,500-2,500 emails/day to pharma/biotech",
        "Advanced pharma targeting & personalization",
        "Bi-weekly strategy calls with life sciences expert",
        "Priority support & optimization",
        "Regulatory compliance guidance",
        "Pharma database & lead generation included",
      ],
      description:
        "Best for scaling life sciences companies. Includes comprehensive pharma database access and premium industry expertise.",
      leadGen: true,
    },
    scale: {
      name: "Enterprise Pharma Package",
      price: "$15,000",
      features: [
        "20+ warmed email inboxes",
        "3,000+ emails/day to global pharma",
        "White-glove life sciences campaign management",
        "Weekly strategy & pharma market insights",
        "Dedicated life sciences success manager",
        "Global pharma compliance expertise",
        "Premium pharma database & intelligence",
      ],
      description:
        "Enterprise-grade pharmaceutical outreach for maximum scale. Includes global pharma intelligence and white-glove service.",
      leadGen: true,
    },
  }

  const currentPackage = packageDetails[packageType]

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-slate-900">Get Started with {currentPackage.name}</h3>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600">
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="mb-6">
          <div className="text-3xl font-bold text-slate-900 mb-2">
            {currentPackage.price}
            <span className="text-lg text-slate-600">/month</span>
          </div>

          <p className="text-sm text-slate-600 mb-4">{currentPackage.description}</p>

          {currentPackage.leadGen && (
            <div className="bg-green-50 p-3 rounded-lg mb-4 text-sm">
              <div className="flex items-center text-green-800">
                <Target className="h-4 w-4 mr-2" />
                <span className="font-semibold">Pharma Database Access Included</span>
              </div>
              <p className="text-green-700 mt-1">
                We'll research and identify your ideal pharmaceutical and biotech prospects, so you don't have to worry
                about finding the right contacts.
              </p>
            </div>
          )}

          <ul className="space-y-2">
            {currentPackage.features.map((feature, index) => (
              <li key={index} className="flex items-start text-slate-600">
                <div
                  className={`${
                    packageType === "starter"
                      ? "bg-orange-500"
                      : packageType === "scale"
                        ? "bg-yellow-500"
                        : "bg-cyan-500"
                  } rounded-full p-1 mr-3 mt-0.5 flex-shrink-0`}
                >
                  <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-3">
          <Button
            className={`w-full ${
              packageType === "starter"
                ? "bg-orange-500 hover:bg-orange-600"
                : packageType === "scale"
                  ? "bg-yellow-500 hover:bg-yellow-600 text-slate-900"
                  : "bg-cyan-500 hover:bg-cyan-600"
            } text-white`}
            onClick={() => window.open("https://calendly.com/aric-weinberg-1/1-hour-meeting", "_blank")}
          >
            <Calendar className="mr-2 h-4 w-4" />
            Book Pharma Strategy Call (Recommended)
          </Button>

          <Button
            variant="outline"
            className={`w-full ${
              packageType === "starter"
                ? "border-orange-500 text-orange-600 hover:bg-orange-50"
                : packageType === "scale"
                  ? "border-yellow-500 text-yellow-600 hover:bg-yellow-50"
                  : "border-cyan-500 text-cyan-600 hover:bg-cyan-50"
            } bg-transparent`}
            onClick={() =>
              window.open(
                packageType === "starter"
                  ? "https://buy.stripe.com/28E3cv5gS1F8f6k2qybEA00"
                  : packageType === "growth"
                    ? "https://buy.stripe.com/5kQ3cv6kW97A4rGghobEA01"
                    : "https://buy.stripe.com/aFaaEXdNo0B48HWc18bEA03",
                "_blank",
              )
            }
          >
            <CreditCard className="mr-2 h-4 w-4" />
            Pay Now with Stripe
          </Button>

          <Button
            variant="outline"
            className="w-full bg-transparent"
            onClick={() =>
              window.open("mailto:info@optimeetse.com?subject=Invoice Request - " + currentPackage.name, "_blank")
            }
          >
            <FileText className="mr-2 h-4 w-4" />
            Request Invoice
          </Button>
        </div>

        <p className="text-sm text-slate-500 mt-4 text-center">
          We recommend booking a pharma strategy call first to ensure the best fit for your life sciences outreach
          needs.
        </p>
      </div>
    </div>
  )
}
