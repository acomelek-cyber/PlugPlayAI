import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"
import { z } from "zod"

const apiKey = process.env.RESEND_API_KEY

if (!apiKey) {
  console.error("RESEND_API_KEY environment variable is not set")
}

const resend = apiKey ? new Resend(apiKey) : null

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().min(2, "Company name must be at least 2 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate the request body
    const validatedData = contactSchema.parse(body)

    if (!resend || !apiKey) {
      console.error("Resend is not properly configured. API key missing or invalid.")

      // For now, log the contact form submission and return success
      // In production, you'd want to store this in a database or send via another service
      console.log("Contact form submission (email service unavailable):", {
        name: validatedData.name,
        email: validatedData.email,
        company: validatedData.company,
        message: validatedData.message,
        timestamp: new Date().toISOString(),
      })

      return NextResponse.json(
        {
          message: "Contact form submitted successfully. We'll get back to you soon!",
        },
        { status: 200 },
      )
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev", // Use your verified domain
      to: "acomelek@gmail.com", // Replace with your actual email
      subject: `New Contact Form Submission from ${validatedData.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #007bff; margin-top: 0;">Contact Details</h3>
            <p><strong>Name:</strong> ${validatedData.name}</p>
            <p><strong>Email:</strong> ${validatedData.email}</p>
            <p><strong>Company:</strong> ${validatedData.company}</p>
          </div>
          
          <div style="background-color: #fff; padding: 20px; border: 1px solid #dee2e6; border-radius: 8px;">
            <h3 style="color: #007bff; margin-top: 0;">Message</h3>
            <p style="line-height: 1.6; color: #333;">${validatedData.message}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #e7f3ff; border-radius: 8px;">
            <p style="margin: 0; color: #0066cc; font-size: 14px;">
              <strong>Reply to:</strong> ${validatedData.email}
            </p>
          </div>
        </div>
      `,
    })

    if (error) {
      console.error("Resend error:", error)

      console.log("Contact form submission (email failed):", {
        name: validatedData.name,
        email: validatedData.email,
        company: validatedData.company,
        message: validatedData.message,
        timestamp: new Date().toISOString(),
        error: error,
      })

      return NextResponse.json(
        {
          message: "Contact form submitted successfully. We'll get back to you soon!",
        },
        { status: 200 },
      )
    }

    console.log("Email sent successfully:", data?.id)
    return NextResponse.json({ message: "Email sent successfully", id: data?.id }, { status: 200 })
  } catch (error) {
    console.error("Contact form error:", error)

    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: "Invalid form data", details: error.errors }, { status: 400 })
    }

    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
