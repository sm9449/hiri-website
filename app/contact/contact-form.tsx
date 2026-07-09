"use client";

import { useState, type FormEvent } from "react";

type ContactStatus =
  | { kind: "idle" }
  | { kind: "loading" }
  | { kind: "success"; message: string }
  | { kind: "error"; message: string };

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export function ContactForm() {
  const [status, setStatus] = useState<ContactStatus>({ kind: "idle" });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!API_BASE_URL) {
      setStatus({
        kind: "error",
        message:
          "Contact submission is not configured. Please set NEXT_PUBLIC_API_BASE_URL.",
      });
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const subject = String(formData.get("subject") || "").trim();
    const courseInterest = String(formData.get("course_interest") || "").trim();
    const message = String(formData.get("message") || "").trim();

    const composedMessage = [
      subject ? `Subject: ${subject}` : null,
      courseInterest ? `Course interest: ${courseInterest}` : null,
      message ? `Message: ${message}` : null,
    ]
      .filter(Boolean)
      .join("\n\n");

    setStatus({ kind: "loading" });

    try {
      const response = await fetch(`${API_BASE_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          subject,
          course_interest: courseInterest,
          message: composedMessage,
          source_page: "/contact",
          honeypot: "",
        }),
      });

      const data: unknown = await response.json().catch(() => null);
      const payload =
        data && typeof data === "object" ? (data as Record<string, unknown>) : null;

      if (!response.ok || payload?.ok === false) {
        const errorMessage =
          (payload?.error as string | undefined) ||
          "Your message could not be sent right now.";
        setStatus({ kind: "error", message: errorMessage });
        return;
      }

      form.reset();
      setStatus({
        kind: "success",
        message:
          (payload?.message as string | undefined) ||
          "Your message has been sent.",
      });
    } catch {
      setStatus({
        kind: "error",
        message: "Network error. Please try again in a moment.",
      });
    }
  }

  const isLoading = status.kind === "loading";

  return (
    <form className="contact-form" aria-label="Contact form" onSubmit={handleSubmit}>
      <div className="field-group">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Your name"
          required
          disabled={isLoading}
        />
      </div>

      <div className="field-group">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="you@example.com"
          required
          disabled={isLoading}
        />
      </div>

      <div className="field-group">
        <label htmlFor="subject">Subject</label>
        <input
          id="subject"
          name="subject"
          type="text"
          placeholder="What would you like to know?"
          required
          disabled={isLoading}
        />
      </div>

      <div className="field-group">
        <label htmlFor="course_interest">Course interest</label>
        <select
          id="course_interest"
          name="course_interest"
          defaultValue=""
          disabled={isLoading}
        >
          <option value="">Select an option</option>
          <option value="Creative writing course">Creative writing course</option>
          <option value="Enrolment">Enrolment</option>
          <option value="Sample lesson">Sample lesson</option>
          <option value="Pricing">Pricing</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div className="field-group">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Tell us what you would like to know about the course."
          rows={6}
          required
          disabled={isLoading}
        />
      </div>

      <button type="submit" className="button button-primary" disabled={isLoading}>
        {isLoading ? "Sending..." : "Send Message"}
      </button>

      {status.kind === "success" ? (
        <p className="form-status" role="status" aria-live="polite">
          {status.message}
        </p>
      ) : null}

      {status.kind === "error" ? (
        <p className="form-status form-status-error" role="alert">
          {status.message}
        </p>
      ) : null}
    </form>
  );
}
