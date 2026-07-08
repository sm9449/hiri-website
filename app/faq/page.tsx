import type { Metadata } from "next";
import { Container, SectionHeading } from "@/components/ui";
import { faqItems } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Find answers about the HIRI creative writing course, its human-led teaching model, and the guided enrolment process.",
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
            title="Common questions"
            description="Answers are concise, supportable, and written for prospective students."
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
      </Container>
    </div>
  );
}
