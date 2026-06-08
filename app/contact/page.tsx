import type { Metadata } from "next";
import { Container, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Use the HIRI contact page to view a simple contact form UI and launch messaging for future form integration.",
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
            description="The contact page is UI-only for now and does not submit anywhere."
            as="h1"
          />
        </section>

        <section className="section">
          <div className="contact-form" aria-label="Contact form">
            <div className="field-group">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" type="text" placeholder="Your name" />
            </div>
            <div className="field-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
              />
            </div>
            <div className="field-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell us what you would like to know about the course."
              />
            </div>
            <button type="button" className="button button-primary" disabled>
              Send Message
            </button>
            <p className="page-lead">Contact form integration coming soon</p>
          </div>
        </section>
      </Container>
    </div>
  );
}
