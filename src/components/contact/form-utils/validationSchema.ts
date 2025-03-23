
import { z } from "zod";

// Schema for form validation using zod
export const contactFormSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string()
    .min(1, { message: "Email is required" })
    .email({ message: "Please enter a valid email address" }),
  subject: z.string().min(1, { message: "Subject is required" }),
  message: z.string().min(1, { message: "Message is required" }),
  captcha: z.string()
    .min(1, { message: "Please complete the captcha" })
    .refine(val => val.toLowerCase() === "blue", {
      message: "Incorrect captcha answer"
    })
});

// Type derived from the schema for type-safety
export type ContactFormData = z.infer<typeof contactFormSchema>;
