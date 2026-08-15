import type { Metadata } from "next";
import { ButtonLink, Container, SectionHeading } from "@/components/ui";
import { faqItems } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Find answers about HIRI’s Creative English course, Shaanzae’s teaching, personalised feedback, Mentor guidance and enrolment.",
  alternates: {
    canonical: "/faq",
  },
};

export default function FaqPage() {
  return (
    <div className="page">
      <Container>
        <section>
          <SectionHeading
            eyebrow="FAQ"
            title="Questions before you begin?"
            description="Everything you need to know about how HIRI works, who it is for, and what makes its approach to Creative English different."
            as="h1"
          />
        </section>

        <section className="section faq-list">
          {faqItems.map((item) => (
            <article className="faq-item" key={item.question}>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </section>

        <section className="section">
          <div className="cta-band">
            <p className="eyebrow">Still deciding?</p>
            <h2>See how the course works — then decide if HIRI is right for you.</h2>
            <p>Explore the four-week course structure or experience the Sample Lesson before you enrol.</p>
            <div className="hero-actions">
              <ButtonLink href="/course">View Course</ButtonLink>
              <ButtonLink href="/sample-lesson" variant="ghost">View Sample Lesson</ButtonLink>
              <ButtonLink href="https://app.hiri.uk/enroll" variant="secondary">Enroll Now</ButtonLink>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
}
