import { NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/mail";

type ContactEmailResult = {
  success: boolean;
  code?: string;
  message?: string;
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Using the centralized logic in mail.js
    const result = (await sendContactEmail(body)) as ContactEmailResult;

    if (result.success) {
      return NextResponse.json({ success: true, message: "Message sent successfully!" });
    } else {
      return NextResponse.json(
        { success: false, code: result.code, message: result.message },
        { status: result.code === "EMAIL_NOT_CONFIGURED" ? 503 : 400 },
      );
    }
  } catch (error) {
    console.error("Contact API Error:", error);
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 });
  }
}
