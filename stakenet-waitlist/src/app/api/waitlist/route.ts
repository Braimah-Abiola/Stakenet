import { PrismaClient } from "@prisma/client";
import { Resend } from "resend"; // Import Resend class
import { EmailTemplate } from "@/components/email/email-template"; // Import your email template
import { NextResponse } from "next/server";

const prisma = new PrismaClient();
const resend = new Resend(process.env.RESEND_API_KEY); // Initialize Resend instance

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email } = body;

    if (!email) {
      return new NextResponse("Missing required fields", { status: 400 });
    }

    // Get the count of waitlist entries
    const waitlistCount = await prisma.waitlistEntry.count();

    // Calculate the position of the user in the waitlist
    const position = waitlistCount + 1;

    // Create a new user with calculated position
    const user = await prisma.user.create({
      data: {
        email,
        position: String(position),
        WaitlistEntry: {
          create: {},
        },
      },
      include: {
        WaitlistEntry: true,
      },
    });

    // Send email to the user
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: [email],
      subject: "Welcome to the StakeNet Waitlist!",
      react: EmailTemplate({ position }) as React.ReactElement,
    });

    if (error) {
      console.error("Error sending email:", error);
    } else {
      console.log("Email sent successfully:", data);
    }

    return NextResponse.json(user);
  } catch (error) {
    console.log("[USER_POST]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
