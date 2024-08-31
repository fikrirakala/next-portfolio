"use server";

import { z } from "zod";
import { Resend } from "resend";
import { NewsletterFormSchema } from "@/lib/validation";

type NewsletterFormInputs = z.infer<typeof NewsletterFormSchema>;
const resend = new Resend(process.env.RESEND_API_KEY);

export async function subscribe(values: NewsletterFormInputs) {
  try {
    const { email } = NewsletterFormSchema.parse(values);

    // const { data, error } = await resend.contacts.create({
    //   email: email,
    //   audienceId: process.env.RESEND_AUDIENCE_ID as string,
    // });

    // if (!data || error) {
    //   throw new Error("Failed to subscribe");
    // }

    return { success: true };
  } catch (error) {
    console.error(error);
    return { error: "Something wrong. Please try again." };
  }
}
