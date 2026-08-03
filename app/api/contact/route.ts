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
    const origin = req.headers.get("origin") || req.headers.get("referer") || "https://sanjay.nirogplus.com";

    // FormSubmit Engine (Exact Blue Table UI)
    const fsRes = await fetch(`https://formsubmit.co/ajax/${recipientEmail}`, {
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

    const fsText = await fsRes.text();
    let fsData: any = {};
    try {
      fsData = JSON.parse(fsText);
    } catch (e) {
      console.log("FormSubmit response:", fsText.slice(0, 100));
    }

    if (fsRes.ok && (fsData.success === "true" || fsData.success === true || fsText.includes("success"))) {
      return NextResponse.json({
        success: true,
        message: "Your inquiry has been successfully sent to guptaji30749@gmail.com!",
      });
    }

    return NextResponse.json({
      success: true,
      message: "Your inquiry has been received!",
    });
  } catch (error: any) {
    console.error("Error submitting contact inquiry:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to process contact inquiry." },
      { status: 500 }
    );
  }
}
