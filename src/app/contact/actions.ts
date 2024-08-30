"use server";

import { Resend } from "resend";
import { ContactFormInputs, ContactFormSchema } from "@/lib/validation";
import ContactFormEmail from "@/emails/ContactFormEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(values: ContactFormInputs) {
  try {
    const { name, email, message } = ContactFormSchema.parse(values);

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
    console.error(error);
    return { error: "Something wrong. Please try again." };
  }
}
