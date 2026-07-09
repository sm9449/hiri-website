import type { Metadata } from "next";
import { ButtonLink, Container, SectionHeading } from "@/components/ui";
import { courseWeeks } from "@/lib/site";

export const metadata: Metadata = {
  title: "Course",
  description:
    "Explore the 4-week HIRI creative writing course structure, including observation, voice, story structure, and revision.",
  alternates: {
    canonical: "/course",
  },
};

export default function CoursePage() {
  return (
    <div className="page">
      <Container>
        <section>
          <SectionHeading
            eyebrow="Course"
            title="The 4-week course structure"
            description="Each week focuses on one stage of the writing process so learners can build skill with clarity and repetition."
            as="h1"
          />
          <p className="page-lead">
            HIRI keeps the course tightly structured. That makes the learning
            easier to follow, easier to trust, and easier to complete.
          </p>
        </section>

        <section className="section">
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
        </section>

        <section className="section">
          <div className="split-panel">
            <article className="feature-strip">
              <h3>What the course reinforces</h3>
              <ul className="list">
                <li>Creative observation becomes usable writing material.</li>
                <li>Voice develops through guided practice rather than guesswork.</li>
                <li>Conflict and pacing help ideas become stories with momentum.</li>
                <li>Revision becomes part of the creative process, not an afterthought.</li>
              </ul>
            </article>

            <article className="feature-strip">
              <h3>How the structure helps learners</h3>
              <ul className="list">
                <li>Each week has a clear purpose.</li>
                <li>Lessons can be explained and reviewed easily.</li>
                <li>The sequence supports confidence and steady improvement.</li>
                <li>The course stays focused on learning outcomes rather than software features.</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="section">
          <div className="cta-band">
            <p className="eyebrow">Ready to continue</p>
            <h2>Request enrolment next.</h2>
            <p>The course page explains the structure. The enrolment page explains how access is handled privately.</p>
            <div className="hero-actions">
              <ButtonLink href="https://app.hiri.uk/enroll" variant="secondary">
                Enroll Now
              </ButtonLink>
              <ButtonLink href="/sample-lesson" variant="ghost">
                View Sample Lesson
              </ButtonLink>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
}
