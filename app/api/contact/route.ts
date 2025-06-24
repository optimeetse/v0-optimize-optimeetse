import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, company, phone, package: selectedPackage, message } = body

    // Send notification email to you
    await resend.emails.send({
      from: "OptiMeet Contact Form <noreply@covermygenetics.com>",
      to: ["info@covermygenetics.com"],
      subject: `New Contact Form Submission - ${selectedPackage || "No Package Selected"}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Interested Package:</strong> ${selectedPackage || "Not specified"}</p>
        <p><strong>Message:</strong></p>
        <p>${message || "No message provided"}</p>
        
        <hr>
        <p><em>Submitted from OptiMeet contact form</em></p>
      `,
    })

    // Send confirmation email to the user
    await resend.emails.send({
      from: "OptiMeet Team <noreply@covermygenetics.com>",
      to: [email],
      subject: "Thanks for contacting OptiMeet - We'll be in touch soon!",
      html: `
        <h2>Thanks for reaching out, ${name}!</h2>
        <p>We've received your inquiry about our ${selectedPackage || "services"} and will be in touch within 24 hours.</p>
        
        <p>In the meantime, feel free to:</p>
        <ul>
          <li>Call us directly at <strong>(310) 429-0828</strong></li>
          <li>Reply to this email with any additional questions</li>
        </ul>
        
        <p>Here's a summary of what you submitted:</p>
        <ul>
          <li><strong>Company:</strong> ${company}</li>
          <li><strong>Package Interest:</strong> ${selectedPackage || "Not specified"}</li>
          <li><strong>Phone:</strong> ${phone || "Not provided"}</li>
        </ul>
        
        <p>Best regards,<br>
        The OptiMeet Team</p>
        
        <hr>
        <p><em>This is an automated confirmation. Please don't reply to this email.</em></p>
      `,
    })

    return NextResponse.json({ success: true, message: "Form submitted successfully!" })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ success: false, message: "Failed to send message. Please try again." }, { status: 500 })
  }
}
