
"use client";

import { useState, type FormEvent } from "react";
import { SITE, waLink } from "@/lib/site";
import { WhatsAppIcon, PhoneIcon, CheckIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

type Fields = {
  name: string;
  phone: string;
  eventType: string;
  eventDate: string;
  eventLocation: string;
  requirements: string;
};

const EVENT_TYPES = [
  "Wedding / Sangeet",
  "Reception",
  "Engagement",
  "Birthday / Anniversary",
  "Corporate Event",
  "Club / Special Night",
  "Other Celebration",
];

const initial: Fields = {
  name: "",
  phone: "",
  eventType: "",
  eventDate: "",
  eventLocation: "",
  requirements: "",
};

function validate(f: Fields) {
  const errors: Partial<Record<keyof Fields, string>> = {};

  if (f.name.trim().length < 2) {
    errors.name = "Please enter your full name.";
  }

  const digits = f.phone.replace(/\D/g, "");
  if (digits.length < 10 || digits.length > 13) {
    errors.phone = "Enter a valid phone number (with country code, e.g. +91…).";
  }

  if (!f.eventType) {
    errors.eventType = "Please select your event type.";
  }

  if (!f.eventDate) {
    errors.eventDate = "Please choose your event date.";
  }

  if (f.eventLocation.trim().length < 2) {
    errors.eventLocation = "Please enter the event city or venue.";
  }

  return errors;
}

export function BookingForm() {
  const [fields, setFields] = useState<Fields>(initial);
  const [errors, setErrors] =
    useState<Partial<Record<keyof Fields, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const set =
    (key: keyof Fields) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >
    ) => {
      setFields((f) => ({ ...f, [key]: e.target.value }));
      setErrors((er) => ({ ...er, [key]: undefined }));
    };

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const errs = validate(fields);

    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }

    const message = [
      "Hello DJ Beard! I'd like to enquire about booking.",
      "",
      `Name: ${fields.name}`,
      `Phone: ${fields.phone}`,
      `Event: ${fields.eventType}`,
      `Date: ${fields.eventDate}`,
      `Location: ${fields.eventLocation}`,
      `Requirements: ${fields.requirements.trim() || "Not specified"}`,
    ].join("\n");

    const whatsappUrl = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;

    // Open WhatsApp directly from the submit interaction.
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        className="card-surface rounded-2xl p-8 text-center sm:p-12"
        role="status"
        aria-live="polite"
      >
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[var(--violet-brand)]/15">
          <CheckIcon className="h-6 w-6 text-[var(--violet-soft)]" />
        </span>

        <h3 className="mt-6 text-2xl font-light text-white">
          Your enquiry is ready!
        </h3>

        <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-zinc-400">
          Thank you, {fields.name.split(" ")[0]}. WhatsApp should have opened
          with your booking details. Please tap Send there to submit your
          enquiry to DJ Beard.
        </p>

        <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
              `Hello DJ Beard! Following up on my ${fields.eventType} enquiry for ${fields.eventDate}.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Open WhatsApp again
          </a>

          <a href={`tel:${SITE.phoneRaw}`} className="btn-outline">
            <PhoneIcon className="h-4 w-4" />
            Call {SITE.phoneDisplay}
          </a>
        </div>

        <button
          type="button"
          onClick={() => {
            setFields(initial);
            setErrors({});
            setSubmitted(false);
          }}
          className="mt-6 text-sm text-zinc-500 underline underline-offset-4 hover:text-white"
        >
          Submit another enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="card-surface rounded-2xl p-6 sm:p-10"
      aria-label="DJ booking enquiry form"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Your name" error={errors.name} htmlFor="bf-name">
          <input
            id="bf-name"
            type="text"
            autoComplete="name"
            className={cn("field", errors.name && "field-error")}
            placeholder="e.g. Rahul Sharma"
            value={fields.name}
            onChange={set("name")}
            aria-invalid={!!errors.name}
            required
          />
        </Field>

        <Field label="Phone number" error={errors.phone} htmlFor="bf-phone">
          <input
            id="bf-phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            className={cn("field", errors.phone && "field-error")}
            placeholder="+91 98XXX XXXXX"
            value={fields.phone}
            onChange={set("phone")}
            aria-invalid={!!errors.phone}
            required
          />
        </Field>

        <Field label="Event type" error={errors.eventType} htmlFor="bf-type">
          <select
            id="bf-type"
            className={cn(
              "field appearance-none",
              errors.eventType && "field-error"
            )}
            value={fields.eventType}
            onChange={set("eventType")}
            aria-invalid={!!errors.eventType}
            required
          >
            <option value="" disabled className="bg-[#101014]">
              Select event type
            </option>
            {EVENT_TYPES.map((t) => (
              <option key={t} value={t} className="bg-[#101014]">
                {t}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Event date" error={errors.eventDate} htmlFor="bf-date">
          <input
            id="bf-date"
            type="date"
            className={cn("field", errors.eventDate && "field-error")}
            value={fields.eventDate}
            min={new Date().toISOString().slice(0, 10)}
            onChange={set("eventDate")}
            aria-invalid={!!errors.eventDate}
            required
          />
        </Field>

        <Field
          label="Event location"
          error={errors.eventLocation}
          htmlFor="bf-location"
          className="sm:col-span-2"
        >
          <input
            id="bf-location"
            type="text"
            className={cn("field", errors.eventLocation && "field-error")}
            placeholder="Venue / city — e.g. Udai Kothi, Udaipur"
            value={fields.eventLocation}
            onChange={set("eventLocation")}
            aria-invalid={!!errors.eventLocation}
            required
          />
        </Field>

        <Field
          label="Additional requirements (optional)"
          htmlFor="bf-req"
          className="sm:col-span-2"
        >
          <textarea
            id="bf-req"
            rows={4}
            className="field resize-none"
            placeholder="Guest count, music preferences, sound & lighting needs, timings…"
            value={fields.requirements}
            onChange={set("requirements")}
          />
        </Field>
      </div>

      <div className="mt-8 flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
        <p className="max-w-sm text-[13px] leading-relaxed text-zinc-500">
          Your booking details will be prepared in WhatsApp. Please tap Send
          there to contact DJ Beard.
        </p>

        <button type="submit" className="btn-primary w-full sm:w-auto">
          Send Booking Enquiry
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  error,
  htmlFor,
  children,
  className = "",
}: {
  label: string;
  error?: string;
  htmlFor: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <label
        htmlFor={htmlFor}
        className="mb-2 block text-[12.5px] font-medium uppercase tracking-[0.14em] text-zinc-400"
      >
        {label}
      </label>

      {children}

      {error ? (
        <p role="alert" className="mt-2 text-[13px] text-red-400">
          {error}
        </p>
      ) : null}
    </div>
  );
}
