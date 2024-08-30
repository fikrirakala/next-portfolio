"use server";

import { Resend } from "resend";
import { ContactFormInputs, ContactFormSchema } from "@/lib/validation";
import ContactFormEmail from "@/emails/ContactFormEmail";
import { text } from "stream/consumers";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(data: ContactFormInputs) {
  const result = ContactFormSchema.safeParse(data);

  if (result.error) {
    return { error: result.error.format() };
  }

  try {
    const { name, email, message } = result.data;
    const { data, error } = await resend.emails.send({
      from: `${name} <onboarding@resend.dev>`,
      to: ["fikrirakala@gmail.com"],
      replyTo: email,
      subject: "Contact form submission",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      react: ContactFormEmail({ name, email, message }),
    });

    if (!data || error) {
      throw new Error("Failed to send email");
    }

    return { success: true };
  } catch (error) {
    return { error };
  }
}
