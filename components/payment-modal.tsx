"use client"
import { Button } from "@/components/ui/button"
import { X, CreditCard, FileText, Calendar } from "lucide-react"

interface PaymentModalProps {
  isOpen: boolean
  onClose: () => void
  packageType: "core" | "growth"
}

export default function PaymentModal({ isOpen, onClose, packageType }: PaymentModalProps) {
  if (!isOpen) return null

  const packageDetails = {
    core: {
      name: "Core Package",
      price: "$5,000",
      features: ["1 email + LinkedIn inbox", "50-200 emails/day", "3-5 qualified meetings/month"],
    },
    growth: {
      name: "Growth Package",
      price: "$8,500",
      features: ["2 mailboxes", "400-800 emails/day", "6-10 qualified meetings/month"],
    },
  }

  const currentPackage = packageDetails[packageType]

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-md w-full p-6">
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
          <ul className="space-y-2">
            {currentPackage.features.map((feature, index) => (
              <li key={index} className="flex items-center text-slate-600">
                <div className="bg-cyan-500 rounded-full p-1 mr-3">
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
              window.open("mailto:info@optimeetse.com?subject=Invoice Request - " + currentPackage.name, "_blank")
            }
          >
            <FileText className="mr-2 h-4 w-4" />
            Request Invoice
          </Button>

          <Button
            variant="outline"
            className="w-full border-slate-300 text-slate-600 hover:bg-slate-50"
            onClick={() => window.open("https://buy.stripe.com/8x2eVd38K83w6zO2qybEA02", "_blank")}
          >
            <CreditCard className="mr-2 h-4 w-4" />
            Add Extra Inbox ($2,000/month)
          </Button>
        </div>

        <p className="text-sm text-slate-500 mt-4 text-center">
          We recommend booking a demo first to ensure the best fit for your business needs.
        </p>
      </div>
    </div>
  )
}
