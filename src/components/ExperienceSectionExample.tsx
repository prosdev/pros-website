import ExperienceSection from "./ExperienceSection"

export default function ExperienceSectionExample() {
  const experiences = [
    {
      id: "lytics-2022",
      title: "Senior Software Engineer",
      company: "Lytics",
      dates: "Feb 2022 - Present",
      bullets: [
        "Lead Playwright E2E testing initiative across US and India teams",
        "Built Next.js dashboard powered by Firestore for test insights",
        "Managed weekly triage reducing GitHub issues backlog from 500+ to <10",
        "Led UI development for reverse ETL solution generating $700k+ upsells",
        "Spearheaded platform navigation restructuring for seamless UX"
      ]
    },
    {
      id: "previous-company",
      title: "Software Engineer",
      company: "Previous Company",
      dates: "Jan 2020 - Jan 2022",
      bullets: [
        "Developed and maintained React-based web applications",
        "Collaborated with cross-functional teams to deliver high-quality software",
        "Implemented automated testing strategies improving code coverage by 40%",
        "Mentored junior developers and conducted code reviews",
        "Optimized application performance reducing load times by 60%"
      ]
    },
    {
      id: "first-job",
      title: "Junior Developer",
      company: "First Company",
      dates: "Jun 2018 - Dec 2019",
      bullets: [
        "Built responsive web interfaces using modern JavaScript frameworks",
        "Participated in agile development processes and sprint planning",
        "Fixed bugs and implemented new features based on user feedback",
        "Worked with REST APIs and database integration",
        "Contributed to team documentation and knowledge sharing"
      ]
    }
  ]

  return (
    <ExperienceSection experiences={experiences} />
  )
} 