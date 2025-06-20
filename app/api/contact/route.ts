import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)


export async function POST(request: NextRequest) {
  try {
    const { name, email, company, phone, message, package: selectedPackage } = await request.json()

    // Validate required fields
    if (!name || !email || !company) {
      return NextResponse.json({ success: false, message: "Please fill in all required fields." }, { status: 400 })
    }

    // Send notification email to you
    const notificationEmail = await resend.emails.send({
      from: "OptiMeet Contact Form <noreply@covermygenetics.com>",
      to: ["info@covermygenetics.com"],
      subject: `🚀 New Lead: ${name} from ${company}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #0891b2 0%, #06b6d4 100%); padding: 30px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">New Lead from OptiMeet Website!</h1>
          </div>
          
          <div style="padding: 30px; background: #f8fafc; border-left: 4px solid #06b6d4;">
            <h2 style="color: #1e293b; margin-top: 0;">Contact Details</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; font-weight: bold; color: #475569;">Name:</td>
                <td style="padding: 10px 0; color: #1e293b;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-weight: bold; color: #475569;">Email:</td>
                <td style="padding: 10px 0; color: #1e293b;"><a href="mailto:${email}" style="color: #0891b2;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-weight: bold; color: #475569;">Company:</td>
                <td style="padding: 10px 0; color: #1e293b;">${company}</td>
              </tr>
              ${
                phone
                  ? `
              <tr>
                <td style="padding: 10px 0; font-weight: bold; color: #475569;">Phone:</td>
                <td style="padding: 10px 0; color: #1e293b;"><a href="tel:${phone}" style="color: #0891b2;">${phone}</a></td>
              </tr>
              `
                  : ""
              }
              ${
                selectedPackage
                  ? `
              <tr>
                <td style="padding: 10px 0; font-weight: bold; color: #475569;">Interested Package:</td>
                <td style="padding: 10px 0; color: #1e293b; text-transform: capitalize;">${selectedPackage.replace("-", " ")}</td>
              </tr>
              `
                  : ""
              }
            </table>
            
            ${
              message
                ? `
            <div style="margin-top: 20px;">
              <h3 style="color: #1e293b; margin-bottom: 10px;">Message:</h3>
              <div style="background: white; padding: 15px; border-radius: 8px; border-left: 3px solid #06b6d4;">
                ${message.replace(/\n/g, "<br>")}
              </div>
            </div>
            `
                : ""
            }
          </div>
          
          <div style="padding: 20px; text-align: center; background: #1e293b;">
            <p style="color: #94a3b8; margin: 0;">
              Respond quickly to convert this lead! 
              <a href="mailto:${email}" style="color: #06b6d4; text-decoration: none;">Reply to ${name}</a>
            </p>
          </div>
        </div>
      `,
    })

    // Send confirmation email to the prospect
    const confirmationEmail = await resend.emails.send({
      from: "Aric from OptiMeet <aric@covermygenetics.com>",
      to: [email],
      subject: "Thanks for your interest in OptiMeet Sales Engine!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #0891b2 0%, #06b6d4 100%); padding: 30px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">Thanks for reaching out, ${name}!</h1>
          </div>
          
          <div style="padding: 30px; background: #f8fafc;">
            <p style="color: #1e293b; font-size: 16px; line-height: 1.6;">
              Hi ${name},
            </p>
            
            <p style="color: #1e293b; font-size: 16px; line-height: 1.6;">
              Thank you for your interest in OptiMeet Sales Engine! I received your message and I'm excited to learn more about ${company} and how we can help you book more qualified meetings.
            </p>
            
            <div style="background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #06b6d4; margin: 20px 0;">
              <h3 style="color: #1e293b; margin-top: 0;">What happens next?</h3>
              <ul style="color: #475569; line-height: 1.6;">
                <li>I'll personally review your information and business needs</li>
                <li>I'll reach out within 24 hours to schedule a brief discovery call</li>
                <li>We'll discuss your current sales challenges and goals</li>
                <li>I'll show you exactly how we can help ${company} book 3-10+ qualified meetings per month</li>
              </ul>
            </div>
            
            <p style="color: #1e293b; font-size: 16px; line-height: 1.6;">
              In the meantime, feel free to <a href="https://calendly.com/aric-weinberg-1/1-hour-meeting" style="color: #0891b2;">book a time directly on my calendar</a> if you'd prefer to skip the back-and-forth.
            </p>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="https://calendly.com/aric-weinberg-1/1-hour-meeting" 
                 style="background: #06b6d4; color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: bold; display: inline-block;">
                Book a Demo Call Now
              </a>
            </div>
            
            <p style="color: #1e293b; font-size: 16px; line-height: 1.6;">
              Looking forward to speaking with you soon!
            </p>
            
            <p style="color: #1e293b; font-size: 16px; line-height: 1.6;">
              Best regards,<br>
              <strong>Aric Weinberg</strong><br>
              Founder, OptiMeet Sales Engine<br>
              <a href="tel:+13104290828" style="color: #0891b2;">(310) 429-0828</a>
            </p>
          </div>
          
          <div style="padding: 20px; text-align: center; background: #1e293b;">
            <p style="color: #94a3b8; margin: 0; font-size: 14px;">
              OptiMeet Sales Engine | Los Angeles, CA<br>
              <a href="https://optimeetse.com" style="color: #06b6d4;">optimeetse.com</a>
            </p>
          </div>
        </div>
      `,
    })

    console.log("Emails sent successfully:", { notificationEmail, confirmationEmail })

    return NextResponse.json({
      success: true,
      message: "Thank you! We'll be in touch within 24 hours.",
      redirectUrl: "/thank-you",
    })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try calling us at (310) 429-0828." },
      { status: 500 },
    )
  }
}
