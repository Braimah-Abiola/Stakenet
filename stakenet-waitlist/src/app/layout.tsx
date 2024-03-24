import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";
import Footer from "@/components/sections/footer";
import { Navigation } from "@/components/sections/navbar";

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
          "min-h-screen antialiased select-none overflow-x-hidden bg-[#060606]",
          dmSans.className
        )}
      >
        <Navigation />

        <div className=" min-h-screen">{children}</div>
        <div className="h-[8rem]" />

        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
