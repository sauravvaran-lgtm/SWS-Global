import { siteConfig } from "@/lib/site";

export type ContactFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  company: string;
  inquiry: string;
};

export type ContactFormErrors = Partial<Record<keyof ContactFormData, string>>;

export const emptyContactForm: ContactFormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  country: "",
  company: "",
  inquiry: "",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^\+?[0-9\s().-]{7,20}$/;

export function validateContactForm(data: ContactFormData): ContactFormErrors {
  const errors: ContactFormErrors = {};
  const value = (key: keyof ContactFormData) => data[key].trim();

  if (!value("firstName")) errors.firstName = "Please enter your first name.";
  if (!value("lastName")) errors.lastName = "Please enter your last name.";

  if (!value("email")) errors.email = "Please enter your email address.";
  else if (!EMAIL_RE.test(value("email"))) errors.email = "Please enter a valid email address.";

  const digits = value("phone").replace(/\D/g, "");
  if (!value("phone")) errors.phone = "Please enter your phone number.";
  else if (!PHONE_RE.test(value("phone")) || digits.length < 7 || digits.length > 15)
    errors.phone = "Please enter a valid phone number.";

  if (!value("country")) errors.country = "Please select your country.";
  if (!value("company")) errors.company = "Please enter your company name.";

  if (!value("inquiry")) errors.inquiry = "Please tell us about your inquiry.";
  else if (value("inquiry").length < 10)
    errors.inquiry = "Please add a little more detail (at least 10 characters).";

  return errors;
}

/**
 * Sends the contact form by email through Web3Forms (free plan: 250 submissions a month).
 * Inquiries go to the inbox the access key was created for, and "Reply" goes to the visitor.
 * Throws if the key is missing or the message could not be sent, so the form can show an error.
 */
export async function submitContactForm(data: ContactFormData): Promise<void> {
  if (!siteConfig.web3formsAccessKey) {
    throw new Error("Contact form is not connected: set NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY.");
  }

  const name = `${data.firstName} ${data.lastName}`;
  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      access_key: siteConfig.web3formsAccessKey,
      subject: `New website inquiry from ${name} (${data.company})`,
      from_name: `${siteConfig.name} Website`,
      replyto: data.email,
      Name: name,
      Email: data.email,
      Phone: data.phone,
      Country: data.country,
      Company: data.company,
      Inquiry: data.inquiry,
    }),
    signal: AbortSignal.timeout(20000),
  });

  const result: { success?: boolean; message?: string } | null = await res.json().catch(() => null);
  if (!res.ok || !result?.success) {
    throw new Error(result?.message || `Failed to send message (HTTP ${res.status})`);
  }
}
