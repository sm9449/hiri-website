import type { Metadata } from "next";
import { Container, SectionHeading } from "@/components/ui";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Use the HIRI contact page to send a message about the course, lesson structure, or enrolment next steps.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="page">
      <Container>
        <section>
          <SectionHeading
            eyebrow="Contact"
            title="Get in touch"
            description="Send a message about the course, curriculum, or enrolment next steps."
            as="h1"
          />
        </section>

        <section className="section">
          <ContactForm />
        </section>
      </Container>
    </div>
  );
}
