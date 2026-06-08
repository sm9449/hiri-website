import type { Metadata } from "next";
import { Container, SectionHeading, Tag } from "@/components/ui";
import { humanGuidedPoints } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Shaanzae",
  description:
    "Learn about Miss Shaanzae Shahid, the lead educator shaping the HIRI creative writing experience.",
  alternates: {
    canonical: "/about-shaanzae",
  },
};

export default function AboutShaanzaePage() {
  return (
    <div className="page">
      <Container>
        <section>
          <SectionHeading
            eyebrow="About Shaanzae"
            title="Human teaching remains central"
            description="Miss Shaanzae Shahid leads the educational experience and sets the tone for thoughtful creative writing practice."
            as="h1"
          />
          <div className="tag-row" style={{ marginBottom: "1.25rem" }}>
            <Tag>Lead educator</Tag>
            <Tag>Creative guidance</Tag>
            <Tag>Human first</Tag>
          </div>
          <p className="page-lead">
            HIRI is built around the idea that writing improves best when
            learners are guided by a real teacher who can shape feedback,
            encourage discipline, and understand where each learner is on the
            journey.
          </p>
        </section>

        <section className="section">
          <div className="split-panel">
            <article className="feature-strip">
              <h3>Her role in HIRI</h3>
              <ul className="list">
                <li>Designs the learning direction for the course.</li>
                <li>Provides the teaching voice behind the educational experience.</li>
                <li>Helps maintain clarity, tone, and pedagogical consistency.</li>
                <li>Ensures the course stays focused on real learning.</li>
              </ul>
            </article>

            <article className="feature-strip">
              <h3>Why this matters</h3>
              <ul className="list">
                {humanGuidedPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section className="section">
          <article className="card">
            <h3>How AI fits in</h3>
            <p>
              AI may support prompts, practice, or feedback scaffolding, but it
              stays in a supporting role. The educational relationship, the
              teaching judgement, and the course design are human-led.
            </p>
          </article>
        </section>
      </Container>
    </div>
  );
}
