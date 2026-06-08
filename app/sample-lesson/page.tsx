import type { Metadata } from "next";
import { Container, SectionHeading } from "@/components/ui";
import { sampleLessonSteps } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sample Lesson",
  description:
    "Preview a sample HIRI lesson structure with micro-teach, writing task, and example feedback style.",
  alternates: {
    canonical: "/sample-lesson",
  },
};

export default function SampleLessonPage() {
  return (
    <div className="page">
      <Container>
        <section>
          <SectionHeading
            eyebrow="Sample lesson"
            title="A preview of how learning feels"
            description="This is an illustrative lesson structure only. It is not connected to the student app."
            as="h1"
          />
          <p className="page-lead">
            A strong sample lesson helps prospective students understand the
            rhythm of the course before they enrol.
          </p>
        </section>

        <section className="section">
          <div className="grid-3">
            {sampleLessonSteps.map((step) => (
              <article className="lesson-panel" key={step.title}>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <article className="feature-strip">
            <h3>Example feedback style</h3>
            <p style={{ marginTop: "0.8rem" }}>
              A feedback note might point out a vivid line, suggest a stronger
              transition, and identify where the story could become clearer or
              more focused. The goal is to guide improvement without flattening
              the learner’s voice.
            </p>
          </article>
        </section>
      </Container>
    </div>
  );
}
