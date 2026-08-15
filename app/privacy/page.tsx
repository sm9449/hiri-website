import type { Metadata } from "next";
import { Container, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Hiri handles personal information across its online education service.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return <div className="page legal-page"><Container>
    <SectionHeading eyebrow="Privacy" title="Privacy Policy" description="How Hiri handles personal information across its online education service." as="h1" />
    <div className="legal-content">
      <p>Hiri is an online education platform offering structured creative English learning, guided practice, personalised feedback, and AI-assisted Coach and Mentor support.</p>
      <h2>Information We Collect</h2>
      <p>Depending on how you use Hiri, we may collect your name, email address, account and login information, enrolment information, lesson progress, scores, student writing and submissions, reflections, Coach and Mentor interactions, and feedback records.</p>
      <p>We may also receive technical information such as browser and device information, IP address and server logs. Where sign-in through a third party is enabled, we may receive information provided through that authentication service.</p>
      <h2>How We Use Information</h2>
      <p>Information may be used to create and manage accounts, provide course access, save lesson progress, evaluate writing exercises, generate personalised feedback, provide Coach and Mentor guidance, communicate with students, maintain security and reliability, and improve Hiri’s educational service.</p>
      <h2>AI-Assisted Processing</h2>
      <p>Hiri uses AI-assisted systems to support parts of the educational experience. Student content may be processed to provide writing evaluation, personalised feedback, Coach guidance and Mentor guidance. AI-generated feedback is educational guidance and may not always interpret creative writing perfectly.</p>
      <h2>Service Providers</h2>
      <p>Hiri may use trusted service providers for functions such as hosting, authentication, email, infrastructure, AI processing and analytics where enabled.</p>
      <h2>Cookies and Similar Technologies</h2>
      <p>Hiri may use cookies or similar technologies for login, authentication, security, maintaining sessions, remembering necessary preferences and analytics where enabled. Hiri does not claim that optional analytics or advertising tracking is active unless described on the website.</p>
      <h2>Data Retention</h2>
      <p>Hiri retains information only for as long as reasonably necessary to provide the service, maintain student and course records, support security and platform operation, and meet legitimate legal or operational requirements.</p>
      <h2>Your Choices</h2>
      <p>You may use the <a href="/contact">Contact</a> page to request, where appropriate, access to your information, correction of inaccurate information or deletion of information.</p>
      <h2>Security</h2>
      <p>Hiri uses reasonable technical and organisational measures to protect personal information.</p>
      <h2>Changes to This Policy</h2>
      <p>This Privacy Policy may be updated as Hiri’s services develop. The latest version will appear on this website.</p>
      <p className="legal-updated">Last updated: August 2026</p>
    </div>
  </Container></div>;
}
