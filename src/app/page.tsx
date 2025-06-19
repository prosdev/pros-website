"use client"

import { useState, useEffect } from "react"
import Layout from "@/components/Layout"
import HeroSection from "@/components/HeroSection"
import AboutSection from "@/components/AboutSection"
import CompanyExperienceCard from "@/components/CompanyExperienceCard"
import ContactSection from "@/components/ContactSection"
import LoadingOverlay from "@/components/LoadingOverlay"
import Image from "next/image"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate initial page loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  const handleViewResume = () => {
    // Create a link element to trigger download
    const link = document.createElement('a')
    link.href = '/SENG_SoftwareEngineer.pdf'
    link.download = 'SENG_SoftwareEngineer.pdf'
    link.target = '_blank'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleGetInTouch = () => {
    // Smooth scroll to contact section
    const contactSection = document.querySelector('#contact')
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  const lyticsRoles = [
    {
      title: "Senior Software Engineer",
      dates: "Feb 2022 - Present",
      bullets: [
        "Drive Playwright end-to-end testing initiative across U.S. and India engineering teams to improve platform reliability and reduce UI regressions. Define and enforce coding and testing best practices to ensure consistency, scalability, and maintainability across regions. Built a NextJS dashboard powered by Firestore to provide insights on E2E test runs.",
        "Manage weekly triage to prioritize and resolve customer-facing GitHub issues, reducing backlog from 500+ to fewer than 10 open issues requiring developer attention and minimizing delays in user feedback resolution.",
        "Led UI development and implementation of Cloud Connect, a reverse ETL solution that enhanced customer segmentation and generated over $700k in upsells and renewals for key enterprise clients.",
        "Spearheaded restructuring of platform navigation, unifying multiple products into a seamless user experience."
      ]
    },
    {
      title: "Software Engineer",
      dates: "June 2017 - Jan 2022",
      bullets: [
        "Collaborated with Product and Data Science teams to deliver Audience Discovery Report, Content Recommendations, and improved customer data insights.",
        "Streamlined new engineer onboarding through active mentorship, enabling core product contributions within 15 days and halving average onboarding time.",
        "Provided technical and career mentorship to junior engineers via structured pair programming, onboarding support, and goal-setting conversations."
      ]
    }
  ]

  const otherExperiences = [
    {
      id: "healthsparq-2016",
      title: "UI Developer",
      company: "Healthsparq",
      dates: "Sept 2016 - May 2017",
      bullets: [
        "Migrated legacy Cost Services code from monolithic architecture to a Java microservice, while delivering continuous feature enhancements for the Cost Experience on HealthSparq One's EmberJS platform."
      ]
    },
    {
      id: "nike-2015",
      title: "Software Engineer in Test",
      company: "Nike",
      dates: "May 2015 - June 2016",
      bullets: [
        "Developed and maintained automation scripts (Selenium, Nightwatch) for Nike Events Tool app.",
        "Built internal tools and dashboards to monitor end-to-end test suite health and improve team workflow efficiency."
      ]
    }
  ]

  return (
    <>
      <LoadingOverlay 
        isLoading={isLoading}
        duration={2500}
        onComplete={() => console.log("Page loaded successfully!")}
      />
      
      <Layout>
        {/* Hero Section */}
        <section id="home">
          <HeroSection 
            profileImageUrl="/profile.png"
            onViewResume={handleViewResume}
            onGetInTouch={handleGetInTouch}
          />
        </section>

        {/* About Section */}
        <section id="about">
          <AboutSection />
        </section>

        {/* Work Experience Section */}
        <section id="work" className="">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Work Experience
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                My professional journey in software engineering and team leadership
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {/* Lytics Company Experience Card */}
              <CompanyExperienceCard
                company="Lytics"
                location="Portland, OR"
                duration="7 yrs 7 mos"
                roles={lyticsRoles}
                logo="/lytics-logo.jpg"
              />

              {/* Other experiences using regular cards */}
              {otherExperiences.map((experience) => (
                <div key={experience.id} className="border border-border/50 rounded-lg p-6 hover:border-border transition-colors duration-200 hover:shadow-md">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                    <div className="flex items-center gap-3">
                      {experience.company === "Healthsparq" && (
                        <div className="relative w-8 h-8 flex-shrink-0 rounded-full overflow-hidden">
                          <Image
                            src="/healthsparq-logo.png"
                            alt="Healthsparq logo"
                            fill
                            className="object-contain"
                            sizes="32px"
                          />
                        </div>
                      )}
                      {experience.company === "Nike" && (
                        <div className="relative w-8 h-8 flex-shrink-0 rounded-full overflow-hidden">
                          <Image
                            src="/nike-logo.png"
                            alt="Nike logo"
                            fill
                            className="object-contain"
                            sizes="32px"
                          />
                        </div>
                      )}
                      <div>
                        <h3 className="text-xl md:text-2xl font-semibold text-foreground">
                          {experience.title}
                        </h3>
                        <p className="text-lg font-medium text-primary mt-1">
                          {experience.company}
                        </p>
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground font-medium bg-muted/50 px-3 py-1 rounded-full self-start sm:self-auto">
                      {experience.dates}
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {experience.bullets.map((bullet, index) => (
                      <li 
                        key={index}
                        className="flex items-start gap-3 text-muted-foreground leading-relaxed"
                      >
                        <span className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-2.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section - Placeholder */}
        <section id="projects" className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Projects
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Coming soon - showcasing my latest projects and contributions
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact">
          <ContactSection />
        </section>
      </Layout>
    </>
  )
}
