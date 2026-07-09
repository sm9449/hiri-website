import type { Metadata } from "next";
import { ButtonLink, CalloutCard, Container, SectionHeading, Tag } from "@/components/ui";
import { courseWeeks, humanGuidedPoints, outcomes, teachingPillars } from "@/lib/site";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Discover HIRI, a guided creative writing course that blends human teaching, deliberate practice, and clear story-building structure.",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <div className="page">
      <section className="hero">
        <Container>
          <div className="hero-grid">
            <div className="hero-copy">
              <Tag>Guided creative writing. Not an AI writing tool.</Tag>
              <h1>HIRI helps writers think, write, and revise with confidence.</h1>
              <p className="hero-lead">
                HIRI is a premium creative writing education program built to
                teach imagination, storytelling, and deliberate practice in a
                clear and trustworthy way. Miss Shaanzae Shahid remains central
                to the learning experience.
              </p>
              <div className="hero-actions">
                <ButtonLink href="/course">View Course</ButtonLink>
                <ButtonLink href="https://app.hiri.uk/enroll" variant="secondary">
                  Enroll Now
                </ButtonLink>
              </div>
            </div>

            <aside className="hero-panel" aria-label="Summary panel">
              <div className="panel-note">
                <p className="panel-label">What HIRI is</p>
                <p>
                  A guided 4-week creative writing course focused on practice,
                  feedback, and confidence.
                </p>
              </div>
              <div className="panel-note">
                <p className="panel-label">What HIRI is not</p>
                <p>
                  It is not a self-serve AI writing app and it is not a student
                  dashboard. The marketing site stays separate from app.hiri.uk.
                </p>
              </div>
              <div className="tag-row">
                <Tag>Human-led</Tag>
                <Tag>SEO-friendly</Tag>
                <Tag>Static export ready</Tag>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <SectionHeading
            eyebrow="What HIRI teaches"
            title="A focused foundation for creative writing"
            description="The course is designed to help learners move from ideas to structured writing without losing imagination or individuality."
          />
          <div className="grid-4">
            {teachingPillars.map((pillar) => (
              <article className="card" key={pillar.title}>
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <SectionHeading
            eyebrow="How the course works"
            title="A clear 4-week learning path"
            description="The course is intentionally compact so each week can focus on one meaningful part of the writing process."
          />
          <div className="timeline">
            {courseWeeks.map((item) => (
              <article className="timeline-item" key={item.week}>
                <div>
                  <p className="timeline-week">{item.week}</p>
                </div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <div className="split-panel">
            <CalloutCard
              title="Why human-guided learning matters"
              description="Teaching is more than content delivery. It is shaping attention, encouraging practice, and responding to the learner with care."
            >
              <ul className="list">
                {humanGuidedPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </CalloutCard>

            <CalloutCard
              title="What the learner gets"
              description="HIRI is designed to build writing habits that are repeatable, understandable, and grounded in real instruction."
            >
              <ul className="list">
                {outcomes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </CalloutCard>
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <div className="cta-band">
            <div className="section-heading" style={{ marginBottom: 0 }}>
              <p className="eyebrow">Next step</p>
              <h2>See the course structure, sample lesson, and enrolment details.</h2>
              <p>
                The website is built to inform prospective students clearly and
                move them toward enrolment without exaggeration or clutter.
              </p>
            </div>
            <div className="hero-actions" style={{ marginTop: "1.5rem" }}>
              <ButtonLink href="https://app.hiri.uk/enroll" variant="secondary">
                Enroll Now
              </ButtonLink>
              <ButtonLink href="/sample-lesson" variant="ghost">
                Explore Curriculum
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
