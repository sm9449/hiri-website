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
    question: "What makes HIRI different from a normal online writing course?",
    answer:
      "HIRI combines Shaanzae Shahid’s teaching with structured writing practice, personalised Coach feedback and a Mentor that follows your development across the course. Instead of treating each task as a one-off submission, HIRI builds a picture of how your writing is developing and uses that understanding to help guide what you should work on next.",
  },
  {
    question: "Who teaches the course?",
    answer:
      "HIRI is built around the teaching of Shaanzae Shahid — published author, Cambridge PGCert graduate and former Head of English. Each lesson begins with focused teaching from Shaanzae around a specific creative-writing skill before the student puts that skill into practice. The Coach and Mentor extend that teaching between lessons rather than replace it.",
  },
  {
    question: "How does the Coach work?",
    answer:
      "The Coach looks closely at the writing you actually submitted. It considers how effectively you applied the lesson, the choices you made, what is already working and what could become stronger. Its feedback is shaped by Shaanzae’s teaching methods, so the guidance remains connected to the skill you have just learned. The Coach is there to help you understand what to improve and why — not simply correct the piece for you.",
  },
  {
    question: "What does the Mentor do?",
    answer:
      "The Coach works with the writing in front of you. The Mentor looks across your development. As you progress through HIRI, the Mentor uses evidence from your lessons, feedback and reflection to recognise recurring strengths, habits and areas that deserve more attention. This means your work is not treated as if every lesson is the first time HIRI has seen you write.",
  },
  {
    question: "Does HIRI write for the student?",
    answer:
      "No. HIRI is designed to develop the student as a writer, not produce writing on their behalf. The student creates the ideas, makes the language choices and writes the response. The Coach and Mentor provide guidance that helps the student understand those choices and make stronger ones next time.",
  },
  {
    question: "Does HIRI remember my progress?",
    answer:
      "Yes, within the course learning experience. HIRI is designed to follow development across the four weeks rather than treat every submission independently. The Mentor can recognise patterns in previous work so that guidance becomes more relevant as the student progresses.",
  },
  {
    question: "What happens after I submit a writing task?",
    answer:
      "Your writing is evaluated against the objective of the lesson and the qualities the task is designed to develop. You receive personalised feedback showing what is working, what could become stronger and what to think about next. That feedback becomes part of the wider picture of your development across the course.",
  },
  {
    question: "Who is the course for?",
    answer:
      "HIRI is for students who want to become more thoughtful, capable and confident writers through structured Creative English practice. It is especially suited to learners who are willing to write, reflect on feedback and improve through repeated practice rather than simply watch lessons passively.",
  },
  {
    question: "How long is the course?",
    answer:
      "HIRI is a focused four-week course with 16 guided lessons. Each week develops a different part of the writing process, progressing from observation and expression through character, voice, structure and revision. The course is designed to create a clear progression rather than a loose collection of unrelated lessons.",
  },
  {
    question: "How much time should I expect to spend on HIRI?",
    answer:
      "HIRI is designed to fit into a manageable four-week learning rhythm. Each lesson combines focused teaching with a writing task and feedback, so the emphasis is on regular, purposeful practice rather than long study sessions.",
  },
  {
    question: "Is HIRI useful if I already write well?",
    answer:
      "Yes. HIRI is not only about fixing weak writing. Students who already write confidently can use the course to become more deliberate about voice, detail, emotional depth, structure, pacing and revision. The goal is to help students understand more clearly why their writing works and how to make strong choices consistently.",
  },
  {
    question: "How does enrolment work?",
    answer:
      "Submit your enrolment details through the website. We review the student’s suitability and available course space, then share programme details privately. Once access is created, the student can begin the four-week course.",
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
