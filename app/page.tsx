import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink, Container, SectionHeading, Tag } from "@/components/ui";

export const metadata: Metadata = {
  title: "Creative English with Shaanzae Shahid",
  description:
    "Become a stronger, more confident writer through HIRI's four-week Creative English course, taught by published author and educator Shaanzae Shahid.",
  alternates: { canonical: "/" },
};

const feedbackDimensions = ["Task completion", "Clarity", "Creativity", "Richness of detail", "Originality of imagery", "Emotional depth", "Voice maturity", "Sophistication of thought", "Cohesion", "Lesson-objective effectiveness"];
const outcomes = ["Write with greater specificity and detail", "Create stronger imagery", "Express emotion more effectively", "Develop convincing characters", "Use dialogue with purpose", "Build stronger scenes", "Choose stronger verbs", "Develop a more mature written voice", "Recognise weaknesses and revise deliberately", "Build confidence through practice"];
const mentorWeeks = [["WEEK 1", "What is beginning to emerge?", "An early, focused view of the student's writing."], ["WEEK 2", "What patterns are becoming visible?", "Strengths and weaknesses begin to become clearer."], ["WEEK 3", "What has improved — and what still needs attention?", "Guidance becomes increasingly informed by development."], ["WEEK 4", "What kind of writer are you becoming?", "A broader final review of progress across the course."]];

export default function HomePage() {
  return <div className="page home-page">
    <section className="hero"><Container><div className="hero-grid"><div className="hero-copy">
      <Tag>Creative English • 4-week online course</Tag>
      <h1>Become a stronger, more confident writer.</h1>
      <p className="hero-lead">Learn Creative English with published author and educator <strong>Shaanzae Shahid</strong> through a four-week course built around her teaching.<br /><br />Develop your writing through expert lessons, structured practice and personalised feedback, with an <strong>AI Coach and Mentor modelled on Shaanzae’s methods</strong> to understand your writing, remember your progress and help you improve week after week.</p>
      <div className="hero-actions"><ButtonLink href="/course">View Course</ButtonLink><ButtonLink href="https://app.hiri.uk/enroll" variant="secondary">Enroll Now</ButtonLink></div>
      <div className="credibility-strip" aria-label="Course credibility"><span>Cambridge PGCert</span><span>University of Glasgow MLitt</span><span>Head of English</span><span>Published Author</span><span>16 Guided Lessons</span></div>
    </div><aside className="hero-panel hero-authority"><p className="panel-label">The HIRI method</p><p className="authority-quote">Learn to think, shape and own your writing.</p><p>AI can already produce polished writing. HIRI teaches the abilities that matter beyond simply generating words: <strong>original thinking, judgement, voice and control.</strong><br /><br />Shaanzae’s teaching develops those abilities through guided practice, while your AI Coach and Mentor understand your writing, remember your progress and help you improve from one lesson to the next.</p><div className="tag-row"><Tag>Shaanzae-led</Tag><Tag>AI-supported</Tag><Tag>Your voice</Tag></div></aside></div></Container></section>

    <section className="section section-tint"><Container><SectionHeading title="Writing is more than producing words." description={<>AI can generate text. A writer still has to decide <strong>what to say, what to keep, what to change and what the reader should feel.</strong><br /><br />HIRI develops the thinking behind good writing — from imagination and original ideas to structure, voice, refinement and revision.</>} /></Container></section>

    <section className="section authority-section"><Container><SectionHeading eyebrow="Shaanzae's experience & credentials" title="Learn from someone who teaches writing — and writes." description="Shaanzae Shahid is a published author, university lecturer and Head of English whose career spans creative writing, English Literature, international qualifications and curriculum leadership. HIRI is built around her teaching — not around generic AI-generated content." />
      <div className="profile-composition">
        <figure className="profile-portrait">
          <Image src="/Shaanzae.jpeg" alt="Shaanzae Shahid" fill sizes="(max-width: 720px) 320px, 30vw" priority />
          <figcaption><strong>Shaanzae Shahid</strong><span>Published author · Educator · Head of English</span></figcaption>
        </figure>
        <div className="profile-card">
        <div className="profile-column">
          <p className="profile-label">Education</p>
          <div className="profile-item"><h3>PGCert: Teaching Creative Writing</h3><p>University of Cambridge</p></div>
          <div className="profile-item"><h3>MLitt Fantasy: English Literature</h3><p>University of Glasgow</p></div>
          <div className="profile-item"><h3>BA English</h3><p>University of London at LGS International Degree Programme</p></div>
        </div>
        <div className="profile-column">
          <p className="profile-label">Professional experience</p>
          <div className="profile-item"><h3>Head of Department: English</h3><p>Lahore Grammar School Defence</p></div>
          <div className="profile-item"><h3>IB DP English A: Language and Literature Instructor</h3><p>LGS Defence</p></div>
          <div className="profile-item"><h3>University of London Lecturer in English</h3><p>LGS International Degree Programme</p></div>
          <div className="profile-item"><h3>O Level &amp; A Level English Literature Instructor</h3><p>LGS Defence</p></div>
          <div className="profile-item"><h3>O Level English Language Instructor</h3><p>Taught creative writing to approximately 450 students</p></div>
        </div>
        <div className="profile-column">
          <p className="profile-label">Published work &amp; professional development</p>
          <div className="profile-subsection"><p className="profile-sub-label">Published work</p><p className="profile-list"><em>The Silver Cry</em> — novel<br /><em>Interference</em> — novel<br /><em>Refraction of Beauty</em> — novella<br /><em>The Magic Building</em> — short story</p></div>
          <div className="profile-subsection"><p className="profile-sub-label">Professional qualifications</p><p className="profile-list">IB DP English A: Language and Literature Workshop<br /><br />Cambridge IGCSE Literature in English Marking Workshop<br /><br />Cambridge International AS &amp; A Level Literature in English training</p></div>
        </div>
        <div className="profile-additional"><p className="profile-label">Additional experience</p><p>Guest judge for creative writing competitions; panellist at Kinnaird College and Khayaal Festival; literature-festival organising committee member; guest lecturer at Lahore School of Economics; workshop facilitator at Kinnaird College.</p></div>
        </div>
      </div>
      <div className="outcomes-strip"><p className="profile-label">Student outcomes</p><div className="proof-row"><span>IB students achieving Top in Pakistan</span><span>University of London Academic Achievement Awards and First Class Honours</span><span>A Level student securing a Punjab Distinction</span></div></div>
    </Container></section>

    <section className="section"><Container><SectionHeading eyebrow="Human + technology" title="Great teaching, amplified by intelligent technology." description="HIRI does not replace the teacher with AI. Shaanzae teaches the concepts, demonstrates the techniques and defines the learning journey. HIRI then helps each student apply those lessons through structured practice, feedback, reflection and personalised guidance." /><div className="grid-3"><article className="card"><p className="panel-label">Shaanzae teaches</p><h3>Expert instruction</h3><p>Demonstrations, examples and a carefully designed Creative English curriculum.</p></article><article className="card"><p className="panel-label">HIRI observes</p><h3>Useful evidence</h3><p>Each task is evaluated against the lesson objective and multiple dimensions of writing quality.</p></article><article className="card"><p className="panel-label">The student grows</p><h3>Visible progress</h3><p>Feedback, reflection and weekly Mentor guidance help students recognise strengths and correct weaknesses.</p></article></div></Container></section>

    <section className="section section-tint"><Container><SectionHeading eyebrow="Course experience" title="Not another collection of recorded lessons." description="Every HIRI lesson leads to action. Students watch, write, receive feedback, improve, reflect and progress through a structured four-week learning journey." /><div className="learning-flow">{["Watch", "Write", "Get Feedback", "Improve", "Reflect", "Meet Your Mentor"].map((step, i) => <div className="flow-step" key={step}><span>{String(i + 1).padStart(2, "0")}</span><strong>{step}</strong></div>)}</div></Container></section>

    <section className="section"><Container><div className="split-panel feature-split"><div><SectionHeading eyebrow="Intelligent feedback" title="Feedback that tells students what to do next." description="HIRI's Coach does more than produce a score. It evaluates the student's response against the lesson task, identifies what is working, highlights the most useful area for improvement and gives guidance connected to what Shaanzae has just taught." /><div className="tag-row">{feedbackDimensions.map((item) => <Tag key={item}>{item}</Tag>)}</div></div><article className="card feedback-card"><p className="panel-label">A more useful question</p><h3>What should I try next?</h3><p>Feedback is connected to the task, the lesson objective and the student's developing writing — so practice has direction.</p></article></div></Container></section>

    <section className="section section-dark"><Container><SectionHeading eyebrow="Weekly Mentor" title="A Mentor that follows the writer — not just the assignment." description="Individual exercises only show part of a student's development. At the end of each week, HIRI's Mentor looks across learning evidence, feedback and reflection to identify developing strengths, recurring difficulties and patterns of progress." /><div className="mentor-grid">{mentorWeeks.map(([week, title, text]) => <article key={week}><p className="mentor-week">{week}</p><h3>{title}</h3><p>{text}</p></article>)}</div></Container></section>

    <section className="section"><Container><div className="comparison"><div><SectionHeading eyebrow="Why HIRI" title="This isn't a chatbot with a course wrapped around it." description="General-purpose AI responds to individual prompts. HIRI operates inside a structured Creative English programme, where guidance is connected to the current lesson, learning objective and student journey." /></div><div className="compare-grid"><article><p className="panel-label">General AI</p><ul className="list"><li>One-off conversations</li><li>Generic writing advice</li><li>No structured progression</li><li>Student must know what to ask</li></ul></article><article className="compare-highlight"><p className="panel-label">HIRI</p><ul className="list"><li>Structured four-week curriculum</li><li>Guidance connected to each lesson</li><li>Purpose-built writing tasks</li><li>Feedback, reflection and Mentor progression</li><li>Shaanzae's teaching at the centre</li></ul></article></div></div></Container></section>

    <section className="section"><Container><SectionHeading eyebrow="Outcomes" title="Not just better pieces of writing. Better writers." description="The course is designed to help students become more deliberate, expressive and confident writers." /><div className="outcome-grid">{outcomes.map((item) => <div key={item}>✓ <span>{item}</span></div>)}</div></Container></section>

    <section className="section"><Container><div className="parent-panel"><div><SectionHeading eyebrow="For parents" title="A structured learning journey parents can trust." description="Students do not simply watch videos and click Next. Their journey includes teaching, writing tasks, submitted work, feedback, reflection and guided progression." /></div><div className="feature-indicators">{["4 Weeks", "16 Lessons", "Structured Writing Tasks", "Personalised Feedback", "Weekly Reflection", "Mentor Reviews", "Completion Journey"].map((item) => <strong key={item}>{item}</strong>)}</div></div></Container></section>

    <section className="section"><Container><div className="cta-band"><div className="section-heading" style={{ marginBottom: 0 }}><p className="eyebrow">Your next chapter</p><h2>Give your writing somewhere to go.</h2><p>Join Shaanzae Shahid for a four-week Creative English journey designed to help students notice more, imagine more, express more and write with greater confidence.</p></div><div className="hero-actions"><ButtonLink href="/course">View Course</ButtonLink><ButtonLink href="https://app.hiri.uk/enroll" variant="secondary">Enroll Now</ButtonLink></div></div></Container></section>
  </div>;
}
