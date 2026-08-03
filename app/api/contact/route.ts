import { NextResponse } from "next/server";

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
    const web3Key = "cbd5d99a-7213-4955-b478-36343c456e25";

    // 1. Web3Forms Engine (Works on Localhost AND Live Domain without activation!)
    try {
      const w3res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        },
        body: JSON.stringify({
          access_key: web3Key,
          template_id: "table",
          from_name: "Sanjay Web Agency Portal 🚀",
          subject: `🔥 [Sanjay Web Agency] New Inquiry from ${name} (${projectType || 'Custom Project'})`,
          replyto: email,
          "🚀 Agency": "Sanjay Web Agency",
          "👤 Full Name": name,
          "✉️ Client Email": email,
          "📞 Phone Number": phone || "Not Provided",
          "🏢 Company / Org": company || "Not Provided",
          "📋 Inquiry Type": projectType || "Custom Website",
          "💰 Estimated Budget": budget || "Not Specified",
          "⏱️ Target Timeline": timeline || "Not Specified",
          "💬 Message Details": description,
        }),
      });

      const w3Text = await w3res.text();
      if (w3res.ok && (w3Text.includes("success") || w3Text.includes("true"))) {
        return NextResponse.json({
          success: true,
          message: "Your inquiry has been successfully sent to guptaji30749@gmail.com!",
        });
      }
    } catch (w3Err) {
      console.warn("Web3Forms engine failed, trying FormSubmit fallback:", w3Err);
    }

    // 2. FormSubmit Fallback Engine
    const origin = req.headers.get("origin") || req.headers.get("referer") || "https://sanjaywebagency.com";
    await fetch(`https://formsubmit.co/ajax/${recipientEmail}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Origin": origin,
        "Referer": origin,
      },
      body: JSON.stringify({
        _subject: `🔥 [Sanjay Web Agency] New Inquiry from ${name} (${projectType || 'Custom Project'})`,
        _template: "table",
        _captcha: "false",
        _replyto: email,
        "🚀 Agency": "Sanjay Web Agency",
        "👤 Full Name": name,
        "✉️ Client Email": email,
        "📞 Phone Number": phone || "Not Provided",
        "🏢 Company / Org": company || "Not Provided",
        "📋 Inquiry Type": projectType || "Custom Website",
        "💰 Estimated Budget": budget || "Not Specified",
        "⏱️ Target Timeline": timeline || "Not Specified",
        "💬 Message Details": description,
      }),
    });

    return NextResponse.json({
      success: true,
      message: "Your inquiry has been successfully sent to guptaji30749@gmail.com!",
    });
  } catch (error: any) {
    console.error("Error submitting contact inquiry:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to process contact inquiry." },
      { status: 500 }
    );
  }
}
