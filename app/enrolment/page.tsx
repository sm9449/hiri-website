import type { Metadata } from "next";
import { Container, SectionHeading } from "@/components/ui";
import { EnrolmentForm } from "./enrolment-form";

export const metadata: Metadata = {
  title: "Request Enrolment",
  description:
    "Request enrolment for HIRI's guided 4-week creative writing programme. Programme details are shared privately after suitability and cohort space are reviewed.",
  alternates: {
    canonical: "/enrolment",
  },
};

export default function EnrolmentPage() {
  return (
    <div className="page">
      <Container>
        <section className="enrolment-hero">
          <SectionHeading
            eyebrow="Enrolment"
            title="Request Enrolment"
            description="HIRI is a guided 4-week creative writing programme with structured lessons, writing tasks, feedback, and progression support."
            as="h1"
          />

          <div className="enrolment-summary">
            <article className="feature-strip">
              <h3>What happens next</h3>
              <ol className="enrolment-steps">
                <li>Submit an enrolment request</li>
                <li>We review the student&apos;s suitability and available cohort space</li>
                <li>Programme details are shared privately</li>
                <li>Student access is created</li>
                <li>The student begins the 4-week course</li>
              </ol>
            </article>
          </div>
        </section>

        <section className="section">
          <article className="feature-strip enrolment-form-shell">
            <h3>Request details</h3>
            <p className="page-lead">
              Share the information below and we will respond with the next
              steps. Programme details are shared privately after the request
              is reviewed.
            </p>
            <EnrolmentForm />
          </article>
        </section>
      </Container>
    </div>
  );
}
