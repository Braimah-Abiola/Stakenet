"use client";

import axios from "axios";
import { ArrowRight } from "lucide-react";
import * as z from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { CustomInput } from "./custom-input";

import { useRouter } from "next/navigation";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./form";
import { useToast } from "./use-toast";

const formSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Please enter your email." })
    .email("This is not a valid email."),
});

const JoinForm = () => {
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
      await axios.post("/api/waitlist", values);

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
              <FormItem className="col-span-2 md:col-span-1">
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
  );
};

export default JoinForm;
