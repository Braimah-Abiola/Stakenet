"use client";

import axios from "axios";
import { ArrowRight } from "lucide-react";
import * as z from "zod";
import Beams from "../ui/beam";
import HeroInteraction from "../ui/hero-interaction";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { CustomInput } from "../ui/custom-input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { useToast } from "../ui/use-toast";
import HeroInteractionMobile from "../ui/hero-interaction-mobile";

const formSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Please enter your email." })
    .email("This is not a valid email."),
});

const Hero = () => {
  const [submitted, setSubmitted] = useState(false);
  const [position, setPosition] = useState(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });
  const isLoading = form.formState.isSubmitting;

  const { toast } = useToast();
  const router = useRouter();

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await axios.post("/api/waitlist", values);
      const { position } = response.data;
      setPosition(position);

      setSubmitted(true);

      toast({
        description:
          "You have successfully joined the waitlist, you'll receive an email soon. Cheers!",
        duration: 5000,
      });

      form.reset();
      router.refresh();
      router.push("/");
    } catch (error) {
      toast({
        variant: "destructive",
        description: "Something went wrong.",
        duration: 3000,
      });
    }
  };

  const handleCopyToClipboard = () => {
    const textToCopy = "https://stakenet.co/#join";
    navigator.clipboard.writeText(textToCopy).then(() => {
      toast({
        description: "URL copied to clipboard",
      });
    });
  };

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-fit flex flex-col items-center justify-center mb-32">
        {submitted ? (
          <div className="flex flex-col px-3 md:px-0 items-center">
            <h1 className=" font-semibold text-5xl md:text-6xl text-white text-center">
              Awesome! <br />
              You&apos;re{" "}
              <span className="bg-gradient-to-r from-[#E0FF5F] to-[#AECE2A] bg-clip-text text-transparent">
                #{position}
              </span>{" "}
              on the <br />
              StakeNet waitlist.
            </h1>
            <p className=" text-white/70 mt-2 text-center text-lg md:text-lg">
              Invite your friends to move up in line and get priority access on
              launch day.
            </p>
            <div className="mt-5" />
            <div className="z-[1] pl-2.5 pr-[3.5px] flex flex-row justify-between items-center h-12 bg-[#0E0E0E] border border-white/20 w-full md:w-[500px] rounded-xl">
              <p className="text-lg text-white">https://stakenet.co/#join</p>
              <div
                onClick={handleCopyToClipboard}
                className=" px-3 py-2 bg-transparent hover:bg-[#232323] rounded-[10px] flex flex-col items-center justify-center cursor-pointer"
              >
                <p className=" text-[#AECE2A] text-lg">Copy Link</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center text-center md:text-start px-3 md:px-0">
            <h1 className=" md:hidden font-semibold text-5xl md:text-6xl text-white">
              Join our waitlist to{" "}
              <span className="bg-gradient-to-r from-[#E0FF5F] to-[#AECE2A] bg-clip-text text-transparent">
                level up
              </span>{" "}
              online betting
            </h1>
            <h1 className="hidden md:block font-semibold text-5xl md:text-6xl text-white">
              Join our waitlist to
            </h1>
            <h1 className="hidden md:block font-semibold text-5xl md:text-6xl text-white">
              <span className="bg-gradient-to-r from-[#E0FF5F] to-[#AECE2A] bg-clip-text text-transparent">
                level up
              </span>{" "}
              online betting
            </h1>
            <p className=" text-white/70 mt-2 text-center text-lg px-10 md:px-0 md:text-lg">
              Stakenet is currently invite-only. Sign up to get early access!
            </p>

            <div className="mt-5" />
            <div className=" w-full z-[1]">
              <Form {...form}>
                <form
                  className="items-center flex flex-col gap-7 w-full"
                  onSubmit={form.handleSubmit(onSubmit)}
                >
                  <FormField
                    name="email"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem className="w-full px-4 md:mx-0 md:w-fit">
                        <FormControl>
                          <CustomInput
                            className=" w-full md:w-[500px]"
                            disabled={isLoading}
                            {...field}
                            id="email"
                            type="email"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="bg-[#E9FF8C] h-12 flex flex-col justify-end rounded-xl cursor-pointer hover:scale-105 transition-all ease-in-out duration-200">
                    <button
                      disabled={isLoading}
                      type="submit"
                      className="flex items-center justify-center shadow-[0_4px_14px_0_rgb(0,0,0,10%)] hover:shadow-[0_6px_20px_rgba(93,93,93,23%)] hover:bg-gradient-to-r px-4 h-[46px] bg-gradient-to-b from-[#E0FF5F] to-[#AECE2A] text-black rounded-xl font-medium text-lg transition-all duration-100 ease-in-out"
                    >
                      Join Waitlist <ArrowRight className="ml-4" />
                    </button>
                  </div>
                </form>
              </Form>
            </div>
          </div>
        )}

        <Beams />
      </div>
      <div className=" hidden lg:block w-full">
        <HeroInteraction />
      </div>

      <div className="lg:hidden w-full">
        <HeroInteractionMobile />
      </div>
    </div>
  );
};

export default Hero;
