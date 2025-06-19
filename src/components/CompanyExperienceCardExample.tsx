import CompanyExperienceCard from "./CompanyExperienceCard"

export default function CompanyExperienceCardExample() {
  const lyticsRoles = [
    {
      title: "Senior Software Engineer",
      dates: "Feb 2022 – Jan 2025 (Remote)",
      bullets: [
        "Drove the Playwright end-to-end testing initiative across US and India teams to enhance platform reliability and reduce regressions. Built a Next.js + Firestore dashboard for visualizing test performance and coverage.",
        "Managed weekly triage of customer-facing GitHub issues, reducing the backlog from 500+ to fewer than 10 open tickets, significantly improving customer responsiveness.",
        "Led UI development of Cloud Connect, a reverse ETL product that drove $700k+ in upsell revenue from enterprise customers.",
        "Spearheaded a full overhaul of platform navigation to unify fragmented products into a seamless user experience."
      ]
    },
    {
      title: "Software Engineer",
      dates: "June 2017 – Jan 2022",
      bullets: [
        "Collaborated closely with Product and Data Science to deliver the Audience Discovery Report and Content Recommendations, improving actionable insights for customers.",
        "Streamlined onboarding by mentoring new engineers, enabling core product contributions within their first 15 days and cutting average ramp-up time in half.",
        "Provided both technical and career mentorship to junior engineers through structured pairing, onboarding support, and regular goal-setting sessions."
      ]
    }
  ]

  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Company Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Career progression and growth within organizations
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <CompanyExperienceCard
            company="Lytics"
            location="Portland, OR"
            duration="7 yrs 7 mos"
            roles={lyticsRoles}
          />
        </div>
      </div>
    </div>
  )
} 