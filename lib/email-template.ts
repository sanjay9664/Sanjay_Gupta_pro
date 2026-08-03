export function generateFormattedMessage(data: {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  projectType?: string;
  budget?: string;
  timeline?: string;
  description: string;
}): string {
  const formattedDate = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "full",
    timeStyle: "medium",
  });

  const lines = [
    `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
    `🚀 SANJAY WEB AGENCY - NEW CLIENT INQUIRY`,
    `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
    ``,
    `👤 CLIENT DETAILS:`,
    `• Name: ${data.name}`,
    `• Email: ${data.email}`,
    data.phone ? `• Phone: ${data.phone}` : null,
    data.company ? `• Company / Org: ${data.company}` : null,
    ``,
    `📋 PROJECT SPECIFICATIONS:`,
    `• Category: ${data.projectType || "Custom Website"}`,
    data.budget ? `• Estimated Budget: ${data.budget}` : null,
    data.timeline ? `• Target Timeline: ${data.timeline}` : null,
    `• Submitted At: ${formattedDate}`,
    ``,
    `💬 PROJECT REQUIREMENTS / MESSAGE:`,
    `"${data.description}"`,
    ``,
    `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
    `✉️ Click 'Reply' in Gmail to contact ${data.name} (${data.email}) directly.`,
    `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
  ].filter((line) => line !== null);

  return lines.join("\n");
}
