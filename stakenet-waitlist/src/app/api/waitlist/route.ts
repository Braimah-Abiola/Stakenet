import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

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

    return NextResponse.json(user);
  } catch (error) {
    console.log("[COMPANION_POST]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
