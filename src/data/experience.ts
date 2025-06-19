export interface Experience {
  id: string;
  title: string;
  company: string;
  dates: string;
  bullets: string[];
}

// Update this array with your actual work experience from your resume
export const workExperience: Experience[] = [
  {
    id: "lytics-2022",
    title: "Senior Software Engineer",
    company: "Lytics",
    dates: "Feb 2022 - Present",
    bullets: [
      "Drive Playwright end-to-end testing initiative across U.S. and India engineering teams to improve platform reliability and reduce UI regressions. Define and enforce coding and testing best practices to ensure consistency, scalability, and maintainability across regions. Built a NextJS dashboard powered by Firestore to provide insights on E2E test runs.",
      "Manage weekly triage to prioritize and resolve customer-facing GitHub issues, reducing backlog from 500+ to fewer than 10 open issues requiring developer attention and minimizing delays in user feedback resolution.",
      "Led UI development and implementation of Cloud Connect, a reverse ETL solution that enhanced customer segmentation and generated over $700k in upsells and renewals for key enterprise clients.",
      "Spearheaded restructuring of platform navigation, unifying multiple products into a seamless user experience.",
    ],
  },
  {
    id: "lytics-2017",
    title: "Software Engineer",
    company: "Lytics",
    dates: "June 2017 - Jan 2022",
    bullets: [
      "Collaborated with Product and Data Science teams to deliver Audience Discovery Report, Content Recommendations, and improved customer data insights.",
      "Streamlined new engineer onboarding through active mentorship, enabling core product contributions within 15 days and halving average onboarding time.",
      "Provided technical and career mentorship to junior engineers via structured pair programming, onboarding support, and goal-setting conversations.",
    ],
  },
  {
    id: "healthsparq-2016",
    title: "UI Developer",
    company: "Healthsparq",
    dates: "Sept 2016 - May 2017",
    bullets: [
      "Migrated legacy Cost Services code from monolithic architecture to a Java microservice, while delivering continuous feature enhancements for the Cost Experience on HealthSparq One's EmberJS platform.",
    ],
  },
  {
    id: "nike-2015",
    title: "Software Engineer in Test",
    company: "Nike",
    dates: "May 2015 - June 2016",
    bullets: [
      "Developed and maintained automation scripts (Selenium, Nightwatch) for Nike Events Tool app.",
      "Built internal tools and dashboards to monitor end-to-end test suite health and improve team workflow efficiency.",
    ],
  },
];
