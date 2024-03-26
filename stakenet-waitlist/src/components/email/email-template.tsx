import * as React from "react";

interface EmailTemplateProps {
  position: number;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  position,
}) => (
  <div className="bg-[#060606] w-full flex flex-col items-center">
    {/* <div className=" relative w-[152px] h-[42px]">
      <Image
        className=" object-contain"
        fill
        src="/images/logo.png"
        alt="Stakenet logo"
      />
    </div> */}
    <div className="bg-[#242525] rounded-2xl px-4 py-4">
      <h1 className="text-white">Welcome!</h1>

      <p className="text-white">
        Thank you for joining the waitlist of Stakenet. Hold on to your seats
        while we bring online betting magic to you.
      </p>
    </div>
    <h1 className="text-white">
      You&apos;re{" "}
      <span className="bg-gradient-to-r from-[#E0FF5F] to-[#AECE2A] bg-clip-text text-transparent">
        #{position.toString()}
      </span>
    </h1>

    <p className="text-white mt-8 mb-4">
      Invite your friends and move up the line
    </p>

    <div className="z-[1] pl-2.5 pr-[3.5px] flex flex-row justify-center items-center h-14 bg-[#242525] border border-white/20 w-full md:w-[500px] rounded-xl">
      <p className="text-lg text-white underline underline-offset-4">
        https://stakenet.co/#join
      </p>
    </div>

    <p className="text-white mt-4">
      Copy and share this link with your friends
    </p>
  </div>
);
