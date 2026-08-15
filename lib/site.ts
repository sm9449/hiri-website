export const siteName = "HIRI Creative Writing";
export const siteTagline = "Guided creative writing education for aspiring writers.";
export const siteDescription =
  "HIRI is a premium, SEO-friendly creative writing website focused on guided learning, human teaching, and deliberate practice.";

export const primaryNavigation = [
  { href: "/", label: "Home" },
  { href: "/course", label: "Course" },
  { href: "/about-shaanzae", label: "About Shaanzae" },
  { href: "/sample-lesson", label: "Sample Lesson" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
] as const;

export const footerNavigation = [
  ...primaryNavigation,
  { href: "/enrolment", label: "Enroll Now" },
  { href: "https://app.hiri.uk", label: "Continue Lessons" },
] as const;

export const teachingPillars = [
  {
    title: "Creative observation",
    description:
      "Learn to notice detail, shape sensory language, and turn ordinary moments into strong writing.",
  },
  {
    title: "Storytelling fundamentals",
    description:
      "Build confidence with character, conflict, voice, pacing, and the architecture of a satisfying story.",
  },
  {
    title: "Deliberate practice",
    description:
      "Write with purpose through structured exercises, short tasks, and clear guided feedback.",
  },
  {
    title: "Revision skills",
    description:
      "Develop the habit of reworking your writing so ideas become sharper, clearer, and more expressive.",
  },
] as const;

export const courseWeeks = [
  {
    week: "Week 1",
    title: "Stop overlooking the details that make writing vivid.",
    focus: "Creative observation and expression",
    description:
      "Train yourself to notice what others miss — then turn those observations into writing that feels specific, vivid and intentional.",
  },
  {
    week: "Week 2",
    title: "Find the voice that makes the writing yours.",
    focus: "Character, imagination and voice",
    description:
      "Develop stronger characters, expand your imagination and begin writing with greater individuality and confidence.",
  },
  {
    week: "Week 3",
    title: "Learn how to hold a reader’s attention.",
    focus: "Structure, conflict and pacing",
    description:
      "Discover how tension, scene structure and pacing work together to give writing momentum and keep a reader engaged.",
  },
  {
    week: "Week 4",
    title: "Turn good drafts into writing you are proud to show.",
    focus: "Revision, feedback and final shaping",
    description:
      "Learn how to recognise what is working, strengthen what is not, and deliberately shape a more polished final piece.",
  },
] as const;

export const humanGuidedPoints = [
  "Miss Shaanzae Shahid leads the learning journey and sets the creative direction.",
  "AI can support feedback prompts and practice, but it does not replace the teaching relationship.",
  "Human guidance keeps the course personal, responsive, and grounded in genuine educational care.",
] as const;

export const outcomes = [
  "Write with more clarity and confidence.",
  "Understand how ideas become stories.",
  "Develop a stronger sense of voice and style.",
  "Use revision as part of the creative process.",
  "Build a repeatable writing habit that supports progress.",
] as const;

export const faqItems = [
  {
    question: "Is HIRI an AI writing tool?",
    answer:
      "No. HIRI is a guided creative writing education program. AI may support practice and feedback, but the product is human-led learning.",
  },
  {
    question: "Who teaches the course?",
    answer:
      "Miss Shaanzae Shahid is the lead educator and central guide for the learning experience.",
  },
  {
    question: "What is the course length?",
    answer:
      "The current course format is a focused 4-week structure designed to build writing confidence and practice in a manageable sequence.",
  },
  {
    question: "Who is the course for?",
    answer:
      "It is designed for learners who want a clear, supportive path into creative writing and prefer structured teaching rather than a self-serve tool.",
  },
  {
    question: "Does the website include the student platform?",
    answer:
      "No. The marketing website is separate from the student app at app.hiri.uk and the backend at api.hiri.uk.",
  },
  {
    question: "How does enrolment work?",
    answer:
      "HIRI enrolment is currently handled on a guided basis. Families can request enrolment through the website, and programme details are shared directly before access is issued.",
  },
  {
    question: "Is HIRI open to everyone?",
    answer:
      "HIRI is designed for students who are ready to complete structured writing tasks and engage with feedback. Enrolment may depend on suitability, cohort timing, and available places.",
  },
] as const;

export const sampleLessonSteps = [
  {
    title: "Micro-teach",
    description:
      "A short focused explanation introduces one writing skill and shows why it matters in a story.",
  },
  {
    title: "Writing task",
    description:
      "A guided prompt helps the learner practise the skill immediately, using a short but purposeful exercise.",
  },
  {
    title: "Example feedback style",
    description:
      "The lesson closes with feedback shaped by clear, supportive teaching that points out what is working and what could be strengthened.",
  },
] as const;
