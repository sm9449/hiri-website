import type { Metadata } from "next";
import { ButtonLink, Container, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "View the HIRI pricing placeholder, enrolment status, and launch messaging for the creative writing course.",
  alternates: {
    canonical: "/pricing",
  },
};

export default function PricingPage() {
  return (
    <div className="page">
      <Container>
        <section>
          <SectionHeading
            eyebrow="Pricing"
            title="Simple pricing information"
            description="The website shows a single course offer without payment logic or checkout flow."
            as="h1"
          />
        </section>

        <section className="section">
          <div className="pricing-panel">
            <p className="price-label">Course price</p>
            <div className="price-figure">
              <span className="price-value">Coming soon</span>
            </div>
            <p>Enrolment opening soon.</p>
            <p style={{ marginTop: "0.75rem" }}>
              This placeholder is intentionally simple until payment integration
              is configured. No payment logic is included on this website.
            </p>
            <div className="hero-actions" style={{ marginTop: "1.25rem" }}>
              <ButtonLink href="/contact">Contact</ButtonLink>
              <ButtonLink href="/course" variant="secondary">
                Explore Curriculum
              </ButtonLink>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
}
