import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, company, projectType, budget, timeline, description } = body;

    if (!name || !email || !description) {
      return NextResponse.json(
        { success: false, error: "Name, email, and project description are required." },
        { status: 400 }
      );
    }

    const recipientEmail = "guptaji30749@gmail.com";
    const formattedDate = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "full",
      timeStyle: "medium",
    });

    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; margin: 0; padding: 20px; color: #0f172a; }
            .container { max-width: 650px; margin: 0 auto; background: #ffffff; border-radius: 20px; overflow: hidden; box-shadow: 0 15px 30px rgba(0,0,0,0.08); border: 1px solid #e2e8f0; }
            .header { background: linear-gradient(135deg, #4f46e5 0%, #0284c7 100%); padding: 36px 28px; text-align: center; color: #ffffff; }
            .header h1 { margin: 0; font-size: 26px; font-weight: 800; letter-spacing: -0.5px; }
            .header p { margin: 6px 0 0 0; font-size: 13px; opacity: 0.95; text-transform: uppercase; letter-spacing: 1.5px; font-weight: 600; }
            .content { padding: 32px 28px; }
            .badge { display: inline-block; padding: 6px 14px; background: #e0e7ff; color: #4338ca; font-size: 12px; font-weight: 700; border-radius: 20px; margin-bottom: 24px; text-transform: uppercase; letter-spacing: 0.5px; }
            .info-table { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
            .info-table td { padding: 14px 16px; border-bottom: 1px solid #f1f5f9; font-size: 14px; }
            .info-table td.label { font-weight: 700; color: #64748b; width: 35%; background: #f8fafc; border-radius: 8px; }
            .info-table td.value { font-weight: 600; color: #0f172a; }
            .message-box { background: #f8fafc; border-left: 4px solid #4f46e5; padding: 20px 24px; border-radius: 12px; margin: 24px 0; border: 1px solid #e2e8f0; border-left-width: 5px; }
            .message-title { font-size: 12px; font-weight: 800; text-transform: uppercase; color: #475569; margin-bottom: 10px; letter-spacing: 0.5px; }
            .message-body { font-size: 15px; line-height: 1.6; color: #1e293b; white-space: pre-wrap; }
            .action-btn { display: inline-block; padding: 14px 28px; background: linear-gradient(135deg, #4f46e5 0%, #0284c7 100%); color: #ffffff !important; text-decoration: none; font-weight: 700; font-size: 14px; border-radius: 12px; margin-top: 10px; text-align: center; shadow: 0 4px 12px rgba(79,70,229,0.25); }
            .footer { background: #0f172a; padding: 24px; text-align: center; color: #94a3b8; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>SANJAY WEB AGENCY</h1>
              <p>New Client Project Inquiry</p>
            </div>
            <div class="content">
              <div class="badge">🚀 NEW INQUIRY RECEIVED</div>
              
              <table class="info-table">
                <tr>
                  <td class="label">Client Name</td>
                  <td class="value">${name}</td>
                </tr>
                <tr>
                  <td class="label">Email Address</td>
                  <td class="value"><a href="mailto:${email}" style="color: #4f46e5; text-decoration: none; font-weight: 700;">${email}</a></td>
                </tr>
                ${phone ? `
                <tr>
                  <td class="label">Phone Number</td>
                  <td class="value"><a href="tel:${phone}" style="color: #0284c7; text-decoration: none; font-weight: 700;">${phone}</a></td>
                </tr>` : ''}
                ${company ? `
                <tr>
                  <td class="label">Company / Org</td>
                  <td class="value">${company}</td>
                </tr>` : ''}
                ${projectType ? `
                <tr>
                  <td class="label">Project Type</td>
                  <td class="value">${projectType}</td>
                </tr>` : ''}
                ${budget ? `
                <tr>
                  <td class="label">Estimated Budget</td>
                  <td class="value" style="color: #059669; font-weight: 700;">${budget}</td>
                </tr>` : ''}
                ${timeline ? `
                <tr>
                  <td class="label">Timeline</td>
                  <td class="value">${timeline}</td>
                </tr>` : ''}
                <tr>
                  <td class="label">Submitted At</td>
                  <td class="value" style="font-size: 12px; color: #64748b;">${formattedDate}</td>
                </tr>
              </table>

              <div class="message-box">
                <div class="message-title">Project Requirements / Details</div>
                <div class="message-body">${description}</div>
              </div>

              <div style="text-align: center; margin-top: 24px;">
                <a href="mailto:${email}?subject=Re:%20Inquiry%20with%20Sanjay%20Web%20Agency" class="action-btn">
                  ✉️ Reply to ${name} (${email}) Directly
                </a>
              </div>
            </div>
            <div class="footer">
              This message was sent automatically from the <strong>Sanjay Web Agency</strong> website contact portal.
            </div>
          </div>
        </body>
      </html>
    `;

    // Configure Nodemailer transporter using environment variables or standard SMTP
    const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
    const smtpPort = Number(process.env.SMTP_PORT) || 587;
    const smtpUser = process.env.SMTP_USER || process.env.GMAIL_USER || "guptaji30749@gmail.com";
    const smtpPass = process.env.SMTP_PASS || process.env.GMAIL_APP_PASSWORD;

    if (smtpPass) {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      await transporter.sendMail({
        from: `"Sanjay Web Agency Portal" <${smtpUser}>`,
        to: recipientEmail,
        replyTo: email,
        subject: `🔥 New Project Inquiry from ${name} - ${projectType || 'Custom Project'}`,
        html: htmlContent,
      });

      return NextResponse.json({
        success: true,
        message: "Your inquiry has been sent to guptaji30749@gmail.com!",
      });
    } else {
      console.log("=========================================");
      console.log(`[INQUIRY RECEIVED FOR ${recipientEmail}]`);
      console.log(`From: ${name} (${email}) Phone: ${phone || 'N/A'}`);
      console.log(`Project: ${projectType || 'N/A'} | Budget: ${budget || 'N/A'}`);
      console.log(`Description: ${description}`);
      console.log("NOTE: To deliver emails directly to Gmail inbox, set GMAIL_APP_PASSWORD in .env.local");
      console.log("=========================================");

      return NextResponse.json({
        success: true,
        message: "Inquiry received! (Set GMAIL_APP_PASSWORD in .env.local or Vercel Environment Variables to receive emails directly in Gmail inbox).",
      });
    }
  } catch (error: any) {
    console.error("Error submitting contact inquiry:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to process contact inquiry." },
      { status: 500 }
    );
  }
}
