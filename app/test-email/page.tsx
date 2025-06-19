"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, CheckCircle, AlertCircle, Loader2 } from "lucide-react"

export default function TestEmailPage() {
  const [testEmail, setTestEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null)

  const handleTest = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setResult(null)

    try {
      const response = await fetch("/api/test-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ testEmail }),
      })

      const data = await response.json()
      setResult(data)
    } catch (error) {
      setResult({
        success: false,
        message: "Failed to send test email. Please check your connection.",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-4">Email Integration Test</h1>
          <p className="text-lg text-slate-600">
            Test your OptiMeet email system to make sure everything is working correctly.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-cyan-500" />
              Test Email System
            </CardTitle>
            <CardDescription>
              Enter your email address to receive a test email and verify the integration is working.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleTest} className="space-y-4">
              <div>
                <label htmlFor="testEmail" className="block text-sm font-medium text-slate-700 mb-2">
                  Your Email Address
                </label>
                <Input
                  id="testEmail"
                  type="email"
                  required
                  value={testEmail}
                  onChange={(e) => setTestEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  className="w-full"
                />
              </div>

              <Button type="submit" disabled={isLoading} className="w-full bg-cyan-500 hover:bg-cyan-600">
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending Test Email...
                  </>
                ) : (
                  <>
                    <Mail className="mr-2 h-4 w-4" />
                    Send Test Email
                  </>
                )}
              </Button>
            </form>

            {result && (
              <div
                className={`mt-6 p-4 rounded-lg ${
                  result.success
                    ? "bg-green-50 text-green-800 border border-green-200"
                    : "bg-red-50 text-red-800 border border-red-200"
                }`}
              >
                <div className="flex items-center gap-2">
                  {result.success ? (
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  ) : (
                    <AlertCircle className="h-5 w-5 text-red-600" />
                  )}
                  <span className="font-medium">{result.success ? "Success!" : "Error"}</span>
                </div>
                <p className="mt-2">{result.message}</p>

                {result.success && (
                  <div className="mt-4 p-3 bg-white rounded border">
                    <h4 className="font-medium text-slate-900 mb-2">What to check:</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• Check your inbox for the test email</li>
                      <li>• Check info@covermygenetics.com for the notification</li>
                      <li>• Look in spam/junk folders if you don't see them</li>
                      <li>• Test the contact form on your main website</li>
                    </ul>
                  </div>
                )}
              </div>
            )}
          </CardContent>
        </Card>

        <div className="mt-8 text-center">
          <p className="text-sm text-slate-500">Having issues? Check your Resend API key and domain verification.</p>
        </div>
      </div>
    </div>
  )
}
