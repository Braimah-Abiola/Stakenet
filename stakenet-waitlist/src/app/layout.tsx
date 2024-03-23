import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stakenet - Join Waitlist",
  description:
    "Stakenet is a betting social network app. Join the waitlist now to be the first to know when we launch",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen antialiased overflow-x-hidden bg-[#060606]",
          dmSans.className
        )}
      >
        {children}
      </body>
    </html>
  );
}
