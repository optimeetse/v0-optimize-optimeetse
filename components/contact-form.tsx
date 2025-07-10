"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ContactForm() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    package: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{ type: "success" | "error"; message: string } | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch(process.env.NEXT_PUBLIC_WEBHOOK_URL as string, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        // Track conversion event
        if (typeof window !== "undefined" && (window as any).gtag) {
          ;(window as any).gtag("event", "form_submit", {
            event_category: "engagement",
            event_label: "contact_form",
            value: 1,
          })
        }

        // Redirect to thank you page
        router.push("/thank-you")
      } else {
        setSubmitStatus({ type: "error", message: result.message })
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Something went wrong. Please try again or call us at (310) 429-0828.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
      <h3 className="text-2xl font-bold text-slate-900 mb-6">Get Started Today</h3>
      <p className="text-slate-600 mb-8">
        Fill out the form below and we'll be in touch within 24 hours to discuss your needs.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
              Full Name *
            </label>
            <Input
              id="name"
              type="text"
              required
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              placeholder="John Smith"
              className="w-full !bg-white !text-black !border-slate-300 !placeholder-gray-500 focus-visible:ring-offset-0"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
              Email Address *
            </label>
            <Input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              placeholder="john@company.com"
              className="w-full !bg-white !text-black !border-slate-300 !placeholder-gray-500 focus-visible:ring-offset-0"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="company"
              className="block text-sm font-medium text-slate-700 mb-2"
            >
              Company Name *
            </label>
            <Input
              id="company"
              type="text"
              required
              value={formData.company}
              onChange={(e) => handleChange("company", e.target.value)}
              placeholder="Acme Corp"
              className="w-full !bg-white !text-black !border-slate-300 !placeholder-gray-500 focus-visible:ring-offset-0"
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-slate-700 mb-2"
            >
              Phone Number
            </label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              placeholder="(555) 123-4567"
              className="w-full !bg-white !text-black !border-slate-300 !placeholder-gray-500 focus-visible:ring-offset-0"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="package"
            className="block text-sm font-medium text-slate-700 mb-2"
          >
            Interested Package
          </label>
          <Select
            value={formData.package}
            onValueChange={(value) => handleChange("package", value)}
          >
            <SelectTrigger className="!bg-white !text-black !placeholder-gray-500 !border-slate-300 focus:ring-offset-0 focus-visible:ring-offset-0">
              <SelectValue placeholder="Select a package" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="diy">DIY Engine ($149/user/month)</SelectItem>
              <SelectItem value="core">Core Package ($5,000/month)</SelectItem>
              <SelectItem value="growth">
                Growth Package ($8,500/month)
              </SelectItem>
              <SelectItem value="custom">Custom Solution</SelectItem>
              <SelectItem value="not-sure">Not Sure Yet</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-slate-700 mb-2"
          >
            Tell us about your business
          </label>
          <Textarea
            id="message"
            rows={4}
            value={formData.message}
            onChange={(e) => handleChange("message", e.target.value)}
            placeholder="What's your current revenue? What challenges are you facing with lead generation? Any specific goals?"
            className="w-full !bg-white !border-slate-300 !placeholder-gray-500 !text-black focus-visible:ring-offset-0"
          />
        </div>

        {submitStatus && (
          <div
            className={`p-4 rounded-lg ${
              submitStatus.type === "success"
                ? "bg-green-50 text-green-800 border border-green-200"
                : "bg-red-50 text-red-800 border border-red-200"
            }`}
          >
            {submitStatus.message}
          </div>
        )}

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-3"
        >
          {isSubmitting ? "Sending..." : "Send Message & Get Started"}
        </Button>
      </form>

      <div className="mt-6 pt-6 border-t border-slate-200 text-center">
        <p className="text-sm text-slate-500 mb-3">
          Prefer to talk directly? Call us now:
        </p>
        <Button
          variant="outline"
          onClick={() => window.open("tel:+13104290828")}
          className="
            border-cyan-500 text-black bg-white    
            hover:bg-cyan-500 hover:text-white     
            hover:scale-105 transform              
            transition-all duration-200 ease-in-out
          "
        >
          📞 (310) 429-0828
        </Button>
      </div>
    </div>
  );
}
