"use server";

import { z } from "zod";
import { Resend } from "resend";
import { NewsletterFormSchema } from "@/lib/validation";
// import ContactFormEmail from "@/emails/ContactFormEmail";

type NewsletterFormInputs = z.infer<typeof NewsletterFormSchema>;
const resend = new Resend(process.env.RESEND_API_KEY);

export async function subscribe(data: NewsletterFormInputs) {
  // try {
  //   const { email } = NewsletterFormSchema.parse(data);
  // } catch (error) {
  //   console.error(error);
  // }
}
