"use client";

import { AnimatePresence, motion } from "motion/react";
import { AlertCircle, ArrowRight, ChevronDown, Loader2, RotateCcw } from "lucide-react";
import { useId, useRef, useState, type ChangeEvent, type FormEvent, type ReactNode } from "react";
import {
  emptyContactForm,
  submitContactForm,
  validateContactForm,
  type ContactFormData,
  type ContactFormErrors,
} from "@/lib/contact";
import { contact } from "@/lib/content";
import { countries, popularCountries } from "@/lib/countries";
import { siteConfig } from "@/lib/site";

type Status = "idle" | "submitting" | "success" | "error";
type FieldName = keyof ContactFormData;

const fieldOrder: FieldName[] = ["firstName", "lastName", "email", "phone", "country", "company", "inquiry"];
const INQUIRY_MAX = 2000;

function Field({
  id,
  label,
  error,
  children,
  className = "",
}: {
  id: string;
  label: string;
  error?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-2 block text-sm font-semibold text-charcoal">
        {label} <span className="text-signal" aria-hidden>*</span>
      </label>
      {children}
      <AnimatePresence initial={false}>
        {error && (
          <motion.p
            id={`${id}-error`}
            initial={{ opacity: 0, y: -4, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -4, height: 0 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-1.5 overflow-hidden pt-2 text-[0.8rem] font-medium text-signal"
          >
            <AlertCircle aria-hidden className="size-3.5 shrink-0" />
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

export function ContactForm() {
  const uid = useId();
  const [data, setData] = useState<ContactFormData>(emptyContactForm);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<FieldName, boolean>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [sentName, setSentName] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  // Keep the card height steady when the form is swapped for the thank-you message.
  const [lockedHeight, setLockedHeight] = useState<number>();

  const id = (name: FieldName) => `${uid}-${name}`;
  const showError = (name: FieldName) => (submitted || touched[name] ? errors[name] : undefined);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const name = e.target.name as FieldName;
    const next = { ...data, [name]: e.target.value };
    setData(next);
    if (submitted || touched[name]) setErrors(validateContactForm(next));
    if (status === "error") setStatus("idle");
  };

  const onBlur = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const name = e.target.name as FieldName;
    if (!data[name].trim()) return; // don't nag about empty fields until submit
    setTouched((t) => ({ ...t, [name]: true }));
    setErrors(validateContactForm(data));
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "submitting") return;
    setSubmitted(true);
    const nextErrors = validateContactForm(data);
    setErrors(nextErrors);

    const firstInvalid = fieldOrder.find((f) => nextErrors[f]);
    if (firstInvalid) {
      formRef.current?.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }

    setStatus("submitting");
    try {
      await submitContactForm({
        ...data,
        firstName: data.firstName.trim(),
        lastName: data.lastName.trim(),
        email: data.email.trim(),
        phone: data.phone.trim(),
        company: data.company.trim(),
        inquiry: data.inquiry.trim(),
      });
      setSentName(data.firstName.trim());
      setLockedHeight(cardRef.current?.offsetHeight);
      setStatus("success");
      setData(emptyContactForm);
      setErrors({});
      setTouched({});
      setSubmitted(false);
    } catch {
      setStatus("error");
    }
  };

  const reset = () => {
    setLockedHeight(undefined);
    setStatus("idle");
  };

  const inputProps = (name: FieldName) => ({
    id: id(name),
    name,
    value: data[name],
    onChange,
    onBlur,
    required: true,
    "aria-invalid": showError(name) ? true : undefined,
    "aria-describedby": showError(name) ? `${id(name)}-error` : undefined,
    className: "field",
  });

  const errorCount = submitted ? Object.keys(errors).length : 0;

  return (
    <div
      ref={cardRef}
      style={{ minHeight: lockedHeight }}
      className="relative flex h-full flex-col overflow-hidden rounded-[2rem] bg-white p-6 shadow-[0_30px_80px_-40px_rgb(8_54_54/0.45)] ring-1 ring-ink/5 sm:p-10"
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-aqua-400 via-aqua-500 to-signal-soft" />

      <AnimatePresence mode="wait" initial={false}>
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="flex min-h-[28rem] flex-1 flex-col items-center justify-center text-center"
            role="status"
          >
            <span className="relative grid size-24 place-items-center rounded-full bg-aqua-50">
              <span className="absolute inset-0 animate-pulse-ring rounded-full bg-aqua-200" />
              <svg viewBox="0 0 52 52" className="relative size-14 text-aqua-600" aria-hidden>
                <motion.circle
                  cx="26"
                  cy="26"
                  r="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
                <motion.path
                  d="M15 27l7 7 15-16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.45, delay: 0.5, ease: "easeOut" }}
                />
              </svg>
            </span>
            <h3 className="mt-8 font-display text-2xl font-bold text-ink sm:text-3xl">
              Thank you{sentName ? `, ${sentName}` : ""}!
            </h3>
            <p className="mt-3 max-w-md leading-relaxed text-muted">
              Your inquiry has been received. Our team will get back to you shortly.
            </p>
            <button
              type="button"
              onClick={reset}
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-ink/15 px-5 py-2.5 text-sm font-semibold text-ink transition hover:border-aqua-500 hover:bg-aqua-50"
            >
              <RotateCcw aria-hidden className="size-4" /> Send another inquiry
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            ref={formRef}
            noValidate
            onSubmit={onSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            aria-labelledby={`${uid}-form-title`}
          >
            <h3 id={`${uid}-form-title`} className="font-display text-xl font-bold text-ink sm:text-2xl">
              Tell us about your requirement
            </h3>
            <p className="mt-2 text-sm text-muted">
              Fields marked <span className="text-signal">*</span> are required.
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <Field id={id("firstName")} label="First name" error={showError("firstName")}>
                <input type="text" autoComplete="given-name" placeholder="John" {...inputProps("firstName")} />
              </Field>
              <Field id={id("lastName")} label="Last name" error={showError("lastName")}>
                <input type="text" autoComplete="family-name" placeholder="Smith" {...inputProps("lastName")} />
              </Field>
              <Field id={id("email")} label="Email" error={showError("email")}>
                <input
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  placeholder="john@company.com"
                  {...inputProps("email")}
                />
              </Field>
              <Field id={id("phone")} label="Phone number" error={showError("phone")}>
                <input
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  placeholder="+1 555 000 0000"
                  {...inputProps("phone")}
                />
              </Field>
              <Field id={id("country")} label="Country" error={showError("country")}>
                <div className="relative">
                  <select
                    autoComplete="country-name"
                    {...inputProps("country")}
                    className={`field appearance-none pr-11 ${data.country ? "" : "text-[#9aa5a5]"}`}
                  >
                    <option value="" disabled>
                      Select your country
                    </option>
                    <optgroup label="Key markets">
                      {popularCountries.map((c) => (
                        <option key={`p-${c}`} value={c} className="text-ink">
                          {c}
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="All countries">
                      {countries.map((c) => (
                        <option key={c} value={c} className="text-ink">
                          {c}
                        </option>
                      ))}
                    </optgroup>
                  </select>
                  <ChevronDown
                    aria-hidden
                    className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-muted"
                  />
                </div>
              </Field>
              <Field id={id("company")} label="Company" error={showError("company")}>
                <input type="text" autoComplete="organization" placeholder="Company name" {...inputProps("company")} />
              </Field>
              <Field id={id("inquiry")} label="Inquiry" error={showError("inquiry")} className="sm:col-span-2">
                <textarea
                  rows={5}
                  maxLength={INQUIRY_MAX}
                  placeholder="How can we help you?"
                  {...inputProps("inquiry")}
                  className="field min-h-36 resize-y"
                />
                <span className="mt-1.5 block text-right text-xs tabular-nums text-subtle">
                  {data.inquiry.length}/{INQUIRY_MAX}
                </span>
              </Field>
            </div>

            <p className="sr-only" role="status" aria-live="polite">
              {errorCount > 0 ? `Please correct ${errorCount} highlighted field${errorCount > 1 ? "s" : ""}.` : ""}
            </p>

            <AnimatePresence>
              {status === "error" && (
                <motion.p
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  role="alert"
                  className="mt-6 flex items-start gap-2 rounded-xl bg-signal/5 px-4 py-3 text-sm font-medium text-signal"
                >
                  <AlertCircle aria-hidden className="mt-0.5 size-4 shrink-0" />
                  Something went wrong while sending your inquiry. Please try again
                  {siteConfig.email ? ` or email us at ${siteConfig.email}` : " in a moment"}.
                </motion.p>
              )}
            </AnimatePresence>

            <div className="mt-8 flex flex-col-reverse gap-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-sm text-xs leading-relaxed text-muted">
                {contact.privacyNote}
              </p>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="shine group inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-ink px-8 py-4 text-[0.95rem] font-semibold text-white shadow-[0_14px_34px_-14px_rgb(22_22_22/0.7)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-aqua-800 disabled:cursor-wait disabled:opacity-80 disabled:hover:translate-y-0"
              >
                <span className="relative z-[2]">{status === "submitting" ? "Sending…" : "Submit inquiry"}</span>
                {status === "submitting" ? (
                  <Loader2 aria-hidden className="relative z-[2] size-5 animate-spin" />
                ) : (
                  <ArrowRight
                    aria-hidden
                    className="relative z-[2] size-5 transition-transform duration-300 group-hover:translate-x-1"
                  />
                )}
              </button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
