import type { Metadata } from "next";
import { Container, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms that apply when using Hiri’s online education service.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return <div className="page legal-page"><Container>
    <SectionHeading eyebrow="Terms" title="Terms of Service" description="The terms that apply when using Hiri’s online education service." as="h1" />
    <div className="legal-content">
      <h2>About Hiri</h2>
      <p>Hiri is an online education platform offering structured creative English learning, guided practice, personalised feedback, and AI-assisted Coach and Mentor support.</p>
      <h2>Using Hiri</h2>
      <p>Users should provide accurate account information, keep login credentials secure, use their own account and use Hiri for legitimate educational purposes.</p>
      <h2>Course Access</h2>
      <p>Hiri courses may include instructional videos, lesson exercises, student writing submissions, evaluation, personalised Coach feedback, reflections, Mentor guidance, course progression and certificates where applicable. Progression may depend on completion of required course activities.</p>
      <h2>Student Work</h2>
      <p>Students retain ownership of their original writing. By submitting work, students permit Hiri to store, process and analyse it as necessary to provide the educational service, including automated evaluation and AI-assisted Coach and Mentor functions.</p>
      <h2>Hiri Content</h2>
      <p>Hiri’s content, including lessons, videos, curriculum, exercises, course text, graphics, educational materials, software and feedback frameworks, may not be copied, redistributed, resold or commercially exploited without permission.</p>
      <h2>AI-Assisted Features</h2>
      <p>Hiri uses AI-assisted systems as part of the educational experience. AI may help analyse writing and generate feedback. AI-generated feedback is educational guidance and may occasionally misunderstand or imperfectly interpret creative writing. Students should apply their own judgement when using feedback.</p>
      <h2>Acceptable Use</h2>
      <p>Users must not share accounts, attempt unauthorised access, interfere with platform operation, scrape or systematically copy Hiri content, misuse Hiri systems, impersonate another student, redistribute course materials without permission or submit unlawful content.</p>
      <h2>Platform Availability</h2>
      <p>Hiri aims to provide reliable access but does not guarantee that the service will always be uninterrupted or error-free. Hiri may perform maintenance, fix technical issues, update features, improve the platform and update educational content where necessary.</p>
      <h2>Educational Nature</h2>
      <p>Scores, Coach feedback, Mentor guidance, lesson progression, course completion and certificates form part of Hiri’s own educational programme. A Hiri certificate is not described as a government, university or accredited qualification unless that accreditation is explicitly established.</p>
      <h2>Account Restrictions</h2>
      <p>Hiri may restrict or suspend access in cases of serious misuse, security concerns, unauthorised access or substantial breach of these Terms. Any restriction will be proportionate to the circumstances.</p>
      <h2>Liability</h2>
      <p>Hiri provides an educational service. Users remain responsible for how they use educational guidance and feedback. Hiri does not exclude responsibility where doing so would not be permitted by applicable law.</p>
      <h2>Changes to the Terms</h2>
      <p>These Terms may be updated as Hiri’s services evolve. The latest version will be published on this website.</p>
      <p className="legal-updated">Last updated: August 2026</p>
    </div>
  </Container></div>;
}
