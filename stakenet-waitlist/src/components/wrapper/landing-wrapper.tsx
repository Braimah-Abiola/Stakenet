import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const LandingWrapper = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-screen-[1920px] px-2.5 md:px-40",
        className
      )}
    >
      {children}
    </div>
  );
};

export default LandingWrapper;
