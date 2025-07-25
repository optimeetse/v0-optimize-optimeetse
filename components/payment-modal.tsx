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
      name: "Starter Package",
      price: "$2,500",
      features: [
        "3-5 warmed email inboxes",
        "500-1,000 emails/day capacity",
        "Campaign setup & management",
        "Weekly performance reports",
        "Dedicated account manager",
        "Hot lead delivery system",
      ],
      description:
        "Perfect for businesses getting started with systematic cold email outreach. Includes everything except lead generation services.",
      leadGen: false,
    },
    growth: {
      name: "Growth Package",
      price: "$5,000",
      features: [
        "8-12 warmed email inboxes",
        "1,500-2,500 emails/day capacity",
        "Advanced campaign optimization",
        "Bi-weekly strategy calls",
        "Priority support",
        "Hot lead delivery system",
        "Lead generation included",
      ],
      description:
        "Best value for scaling businesses. Includes comprehensive lead generation services and premium support.",
      leadGen: true,
    },
    scale: {
      name: "Scale Package",
      price: "$10,000",
      features: [
        "20+ warmed email inboxes",
        "3,000+ emails/day capacity",
        "White-glove campaign management",
        "Weekly strategy & optimization",
        "Dedicated success manager",
        "Hot lead delivery system",
        "Premium lead generation",
      ],
      description:
        "Enterprise-grade cold email outreach for maximum scale. Includes premium lead generation and white-glove service.",
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
                <span className="font-semibold">Lead Generation Included</span>
              </div>
              <p className="text-green-700 mt-1">
                We'll research and identify your ideal prospects, so you don't have to worry about finding leads.
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
            Book Strategy Call (Recommended)
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
          We recommend booking a strategy call first to ensure the best fit for your business needs and goals.
        </p>
      </div>
    </div>
  )
}
