import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const { testEmail } = await request.json()

    if (!testEmail) {
      return NextResponse.json({ success: false, message: "Please provide a test email address." }, { status: 400 })
    }

    // Send test email
    const testEmailResult = await resend.emails.send({
      from: "OptiMeet Test <noreply@covermygenetics.com>",
      to: [testEmail],
      subject: "🧪 OptiMeet Email Test - Success!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #0891b2 0%, #06b6d4 100%); padding: 30px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">✅ Email Integration Working!</h1>
          </div>
          
          <div style="padding: 30px; background: #f8fafc;">
            <h2 style="color: #1e293b; margin-top: 0;">Test Results</h2>
            <div style="background: #10b981; color: white; padding: 15px; border-radius: 8px; margin: 20px 0;">
              <p style="margin: 0; font-weight: bold;">✅ SUCCESS: Your email integration is working perfectly!</p>
            </div>
            
            <h3 style="color: #1e293b;">What this means:</h3>
            <ul style="color: #475569; line-height: 1.6;">
              <li>✅ Resend API is connected and working</li>
              <li>✅ Emails are being sent from covermygenetics.com</li>
              <li>✅ HTML formatting is rendering correctly</li>
              <li>✅ Contact form submissions will now work</li>
            </ul>
            
            <div style="background: #06b6d4; color: white; padding: 15px; border-radius: 8px; margin: 20px 0; text-align: center;">
              <p style="margin: 0; font-weight: bold;">Your OptiMeet website is ready to capture leads!</p>
            </div>
            
            <h3 style="color: #1e293b;">Next Steps:</h3>
            <ol style="color: #475569; line-height: 1.6;">
              <li>Test the contact form on your website</li>
              <li>Check that you receive notification emails at info@covermygenetics.com</li>
              <li>Verify prospects receive confirmation emails</li>
              <li>Set up Google Analytics for tracking</li>
            </ol>
          </div>
          
          <div style="padding: 20px; text-align: center; background: #1e293b;">
            <p style="color: #94a3b8; margin: 0; font-size: 14px;">
              OptiMeet Sales Engine | Test Email System<br>
              <span style="color: #10b981;">Status: ✅ OPERATIONAL</span>
            </p>
          </div>
        </div>
      `,
    })

    // Also send notification to your business email
    const notificationEmail = await resend.emails.send({
      from: "OptiMeet Test <noreply@covermygenetics.com>",
      to: ["info@covermygenetics.com"],
      subject: "📧 Email Test Completed Successfully",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #0891b2 0%, #06b6d4 100%); padding: 30px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">Email Test Completed</h1>
          </div>
          
          <div style="padding: 30px; background: #f8fafc;">
            <h2 style="color: #1e293b; margin-top: 0;">Test Summary</h2>
            <p style="color: #475569;">A test email was successfully sent to: <strong>${testEmail}</strong></p>
            
            <div style="background: #10b981; color: white; padding: 15px; border-radius: 8px; margin: 20px 0;">
              <p style="margin: 0; font-weight: bold;">✅ Email system is working correctly!</p>
            </div>
            
            <p style="color: #475569;">
              Your OptiMeet website is now ready to:
            </p>
            <ul style="color: #475569;">
              <li>Capture leads through the contact form</li>
              <li>Send you notifications at info@covermygenetics.com</li>
              <li>Send confirmation emails to prospects</li>
            </ul>
          </div>
        </div>
      `,
    })

    console.log("Test emails sent successfully:", { testEmailResult, notificationEmail })

    return NextResponse.json({
      success: true,
      message: "Test emails sent successfully! Check both email addresses.",
    })
  } catch (error) {
    console.error("Test email error:", error)
    return NextResponse.json(
      { success: false, message: "Email test failed. Please check your Resend API key and domain setup." },
      { status: 500 },
    )
  }
}
