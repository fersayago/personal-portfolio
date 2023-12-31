"use server";

import React from "react";
import ContactFormEmail from "@/email/contact-form-email";
import { getErrorMessage, validateString } from "@/lib/utils";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const sender = formData.get("senderEmail");
  const message = formData.get("message");

  // validación del lado del servidor
  if (!validateString(sender, 500)) {
    return {
      error: "Invalid sender email",
    };
  }

  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: "Portfolio Contact Form <onboarding@resend.dev>",
      to: "sayago.fernando@gmail.com",
      subject: `${sender} sent you a message from your website`,
      reply_to: sender as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: sender as string,
      })
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  }
};
