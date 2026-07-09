"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";

export function EnrolmentForm() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [submittedAt, setSubmittedAt] = useState<number | null>(null);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        window.clearTimeout(timerRef.current);
      }
    };
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // TODO: connect enrolment form to email/API handler
    formRef.current?.reset();
    setSubmittedAt(Date.now());

    if (timerRef.current) {
      window.clearTimeout(timerRef.current);
    }

    timerRef.current = window.setTimeout(() => {
      setSubmittedAt(null);
    }, 8000);
  }

  return (
    <form
      ref={formRef}
      className="contact-form enrolment-form"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="type" value="enrolment" />

      <div className="field-group">
        <label htmlFor="studentName">Student name</label>
        <input id="studentName" name="studentName" type="text" required />
      </div>

      <div className="field-group">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" required />
      </div>

      <div className="field-group">
        <label htmlFor="whatsappContact">WhatsApp Contact / Number</label>
        <input id="whatsappContact" name="whatsappContact" type="text" />
      </div>

      <div className="field-group">
        <label htmlFor="studentAgeYearGroup">Student age / year group</label>
        <input
          id="studentAgeYearGroup"
          name="studentAgeYearGroup"
          type="text"
          required
        />
      </div>

      <div className="field-group">
        <label htmlFor="writingGoal">Writing goal</label>
        <textarea id="writingGoal" name="writingGoal" required />
      </div>

      <div className="field-group">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Optional"
        />
      </div>

      <button type="submit" className="button button-primary">
        Enroll Now
      </button>

      {submittedAt ? (
        <p className="form-status" role="status" aria-live="polite">
          Thank you. Your enrolment request has been received. We will contact
          you with the next steps.
        </p>
      ) : null}
    </form>
  );
}
