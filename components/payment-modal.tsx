"use client"
import { Button } from "@/components/ui/button"
import { X, CreditCard, FileText, Calendar, Users, User } from "lucide-react"

interface PaymentModalProps {
  isOpen: boolean
  onClose: () => void
  packageType: "diy" | "core" | "growth"
}

export default function PaymentModal({ isOpen, onClose, packageType }: PaymentModalProps) {
  if (!isOpen) return null

  const packageDetails = {
    diy: {
      name: "DIY Engine",
      price: "$149",
      features: ["Complete platform access", "Unlimited email sequences", "LinkedIn automation tools"],
      description:
        "Full outbound platform access — no onboarding, no managed services. You run the sequences; we provide the engine.",
    },
    core: {
      name: "Core Package",
      price: "$5,000",
      features: ["1 email + LinkedIn inbox", "50-200 emails/day", "3-5 qualified meetings/month"],
      description: "Fully managed campaigns with dedicated account management and strategic support.",
    },
    growth: {
      name: "Growth Package",
      price: "$8,500",
      features: ["2 mailboxes", "400-800 emails/day", "6-10 qualified meetings/month"],
      description: "Premium managed service for scaling businesses with priority support.",
    },
  }

  const currentPackage = packageDetails[packageType]

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-lg w-full p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-slate-900">Get Started with {currentPackage.name}</h3>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600">
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="mb-6">
          <div className="text-3xl font-bold text-slate-900 mb-2">
            {currentPackage.price}
            <span className="text-lg text-slate-600">{packageType === "diy" ? "/user/month" : "/month"}</span>
          </div>
          <p className="text-sm text-slate-600 mb-4">{currentPackage.description}</p>
          <ul className="space-y-2">
            {currentPackage.features.map((feature, index) => (
              <li key={index} className="flex items-center text-slate-600">
                <div className={`${packageType === "diy" ? "bg-orange-500" : "bg-cyan-500"} rounded-full p-1 mr-3`}>
                  <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-3">
          {packageType === "diy" ? (
            <>
              {/* Single User Option */}
              <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <User className="h-5 w-5 text-orange-600 mr-2" />
                    <span className="font-semibold text-slate-900">Individual Plan</span>
                  </div>
                  <span className="text-lg font-bold text-orange-600">$149/month</span>
                </div>
                <p className="text-sm text-slate-600 mb-3">Perfect for solo entrepreneurs or single users</p>
                <Button
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white"
                  onClick={() => window.open("https://buy.stripe.com/aFaaEXdNo0B48HWc18bEA03", "_blank")}
                >
                  <CreditCard className="mr-2 h-4 w-4" />
                  Subscribe - Individual Plan
                </Button>
              </div>

              {/* Volume Pricing Option */}
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-green-600 mr-2" />
                    <span className="font-semibold text-slate-900">Team Plan</span>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-green-600">Volume Discounts</div>
                    <div className="text-xs text-slate-500">3+ users: 10% off • 6+ users: 20% off</div>
                  </div>
                </div>
                <p className="text-sm text-slate-600 mb-3">Best for teams and agencies with multiple users</p>
                <Button
                  className="w-full bg-green-600 hover:bg-green-700 text-white"
                  onClick={() => window.open("https://buy.stripe.com/6oU8wPbFggA2aQ4e9gbEA04", "_blank")}
                >
                  <Users className="mr-2 h-4 w-4" />
                  Subscribe - Team Plan
                </Button>
              </div>

              {/* Demo Option */}
              <Button
                variant="outline"
                className="w-full border-orange-500 text-orange-600 hover:bg-orange-50"
                onClick={() => window.open("https://calendly.com/aric-weinberg-1/1-hour-meeting", "_blank")}
              >
                <Calendar className="mr-2 h-4 w-4" />
                Book Demo First
              </Button>

              {/* Custom Pricing */}
              <Button
                variant="outline"
                className="w-full border-slate-300 text-slate-600 hover:bg-slate-50"
                onClick={() =>
                  window.open("mailto:info@covermygenetics.com?subject=DIY Engine - Custom Pricing Inquiry", "_blank")
                }
              >
                <FileText className="mr-2 h-4 w-4" />
                Need 10+ Users? Get Custom Pricing
              </Button>
            </>
          ) : (
            <>
              <Button
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-white"
                onClick={() => window.open("https://calendly.com/aric-weinberg-1/1-hour-meeting", "_blank")}
              >
                <Calendar className="mr-2 h-4 w-4" />
                Book Demo First (Recommended)
              </Button>

              <Button
                variant="outline"
                className="w-full border-cyan-500 text-cyan-600 hover:bg-cyan-50"
                onClick={() =>
                  window.open(
                    packageType === "core"
                      ? "https://buy.stripe.com/28E3cv5gS1F8f6k2qybEA00"
                      : "https://buy.stripe.com/5kQ3cv6kW97A4rGghobEA01",
                    "_blank",
                  )
                }
              >
                <CreditCard className="mr-2 h-4 w-4" />
                Pay Now with Stripe
              </Button>

              <Button
                variant="outline"
                className="w-full"
                onClick={() =>
                  window.open(
                    "mailto:info@covermygenetics.com?subject=Invoice Request - " + currentPackage.name,
                    "_blank",
                  )
                }
              >
                <FileText className="mr-2 h-4 w-4" />
                Request Invoice
              </Button>
            </>
          )}
        </div>

        <p className="text-sm text-slate-500 mt-4 text-center">
          {packageType === "diy"
            ? "All plans include the same features. Volume discounts applied automatically at checkout."
            : "We recommend booking a demo first to ensure the best fit for your business needs."}
        </p>
      </div>
    </div>
  )
}
