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
 * Sends the contact form.
 *
 * Email delivery is not connected yet. To go live, replace the body of this
 * function with a call to your email service or API, for example:
 *
 *   const res = await fetch("/api/contact", {
 *     method: "POST",
 *     headers: { "Content-Type": "application/json" },
 *     body: JSON.stringify(data),
 *   });
 *   if (!res.ok) throw new Error("Failed to send message");
 */
export async function submitContactForm(data: ContactFormData): Promise<void> {
  void data;
  await new Promise((resolve) => setTimeout(resolve, 1200));
}
