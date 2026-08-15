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
            eyebrow="Your 4-week writing journey"
            title="Four weeks to become a more deliberate, confident writer."
            description={<>You do not need months of theory to start seeing a difference in your writing.<br /><br />HIRI is designed as an intensive four-week progression — each week building a different part of your writing, so you can see and feel the difference as your work develops.</>}
            as="h1"
          />
          <p className="page-lead">
            <strong>16 guided lessons. Personalised feedback. A Coach and Mentor that follow your progress.</strong>
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
                  <p className="timeline-focus">{item.focus}</p>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="split-panel">
            <article className="feature-strip">
              <h3>What should feel different by Week 4</h3>
              <ul className="list">
                <li>You notice stronger ideas before you begin writing.</li>
                <li>Your descriptions become more deliberate and specific.</li>
                <li>Characters and scenes carry more emotional depth.</li>
                <li>You understand why a piece of writing works — not just whether it “sounds good.”</li>
                <li>Revision becomes a skill rather than a correction exercise.</li>
              </ul>
            </article>

            <article className="feature-strip">
              <h3>You are not working through it alone</h3>
              <p>Every lesson feeds into a learning journey built around your development.</p>
              <p>Your Coach responds to the writing in front of you.<br />Your Mentor looks across your progress.<br />And Shaanzae’s teaching provides the method behind both.</p>
              <p>The result is guidance that becomes more relevant as your writing develops.</p>
            </article>
          </div>
        </section>

        <p className="course-progression">16 lessons. 4 weeks. A clear progression from instinctive writing to writing with greater purpose, control and confidence.</p>

        <section className="section">
          <div className="cta-band">
            <p className="eyebrow">Ready to begin?</p>
            <h2>Your next four weeks could change how you write.</h2>
            <p>You can keep writing through trial and error — or spend four structured weeks learning what stronger writers actually do differently.</p>
            <p><strong>Start the course and build the habits, judgement and confidence to shape better writing for yourself.</strong></p>
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
