"use client";

import Beams from "../ui/beam";
import HeroInteraction from "../ui/hero-interaction";
import axios from "axios";
import { ArrowRight } from "lucide-react";
import * as z from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { useRouter } from "next/navigation";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { useToast } from "../ui/use-toast";
import { CustomInput } from "../ui/custom-input";
import { useState } from "react";

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

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-fit flex flex-col items-center justify-center mb-32">
        {submitted ? (
          <>
            <h1 className=" font-semibold text-6xl text-white text-center">
              Awesome! <br />
              You&apos;re #{position} on the <br />
              StakeNet waitlist.
            </h1>
            <p className=" text-white/70 mt-2 text-lg">
              Invite your friends to move up in line and get priority access on
              launch day.
            </p>
            <div className="mt-5" />
            <div className="z-[1] pl-2.5 pr-1 flex flex-row justify-between items-center h-12 bg-[#0E0E0E] border border-white/20 w-[500px] rounded-xl">
              <p className="text-base text-white">https://stakenet.co/#join</p>
              <div className=" px-3 py-2 bg-transparent hover:bg-[#232323] rounded-xl flex flex-col items-center justify-center cursor-pointer">
                <p className=" text-[#AECE2A] text-base">Copy Link</p>
              </div>
            </div>
          </>
        ) : (
          <>
            <h1 className=" font-semibold text-6xl text-white">
              Join our waitlist to
            </h1>
            <h1 className=" font-semibold text-6xl text-white">
              <span>level up</span> online betting
            </h1>
            <p className=" text-white/70 mt-2 text-lg">
              Stakenet is currently invite-only. Sign up to get early access!
            </p>

            <div className="mt-5" />
            <div className=" w-full z-[1]">
              <Form {...form}>
                <form
                  className="items-center flex flex-col gap-7"
                  onSubmit={form.handleSubmit(onSubmit)}
                >
                  <FormField
                    name="email"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <CustomInput
                            className="w-[500px]"
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
                      className="flex items-center justify-center shadow-[0_4px_14px_0_rgb(0,0,0,10%)] hover:shadow-[0_6px_20px_rgba(93,93,93,23%)] hover:bg-gradient-to-r px-4 h-[46px] bg-gradient-to-b from-[#E0FF5F] to-[#AECE2A] text-black rounded-xl font-medium text-base transition-all duration-100 ease-in-out"
                    >
                      Join Waitlist <ArrowRight className="ml-4" />
                    </button>
                  </div>
                </form>
              </Form>
            </div>
          </>
        )}

        <Beams />
      </div>
      <HeroInteraction />
    </div>
  );
};

export default Hero;
