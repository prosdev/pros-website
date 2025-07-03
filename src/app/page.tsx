"use client";

import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CompanyExperienceCard from "@/components/CompanyExperienceCard";
import ContactSection from "@/components/ContactSection";
import LoadingOverlay from "@/components/LoadingOverlay";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { intervalToDuration } from "date-fns";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial page loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const handleViewResume = () => {
    // Create a link element to trigger download
    const link = document.createElement("a");
    link.href = "/SENG_SoftwareEngineer.pdf";
    link.download = "SENG_SoftwareEngineer.pdf";
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleGetInTouch = () => {
    // Smooth scroll to contact section
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const lyticsRoles = [
    {
      title: "Senior Software Engineer",
      dates: "Feb 2022 - Present",
      bullets: [
        "Led Playwright E2E testing initiative across global teams, improving platform reliability and reducing UI regressions",
        "Reduced the GitHub issue backlog from 500+ to fewer than 10 open issues requiring developer triage, streamlining customer feedback workflows and improving response time.",
        "Spearheaded platform navigation restructuring, unifying multiple products into seamless user experience",
      ],
    },
    {
      title: "Software Engineer",
      dates: "June 2017 - Jan 2022",
      bullets: [
        "Delivered the UI for Audience Discovery and Content Affinity features with cross-functional teams, helping customers unlock actionable segmentation insights and improve content targeting effectiveness",
        "Streamlined engineer onboarding, enabling core product contributions within a week",
        "Provided technical mentorship to junior engineers through pair programming and goal-setting",
      ],
    },
  ];

  const otherExperiences = [
    {
      id: "healthsparq-2016",
      title: "UI Developer",
      company: "Healthsparq",
      dates: "Sept 2016 - May 2017",
      bullets: [
        "Migrated legacy Cost Services from monolithic architecture to Java microservice",
        "Delivered continuous feature enhancements for HealthSparq One's EmberJS platform",
      ],
    },
    {
      id: "nike-2015",
      title: "Software Engineer in Test",
      company: "Nike",
      dates: "May 2015 - June 2016",
      bullets: [
        "Developed and maintained automation scripts (Selenium, Nightwatch) for Nike Events Tool app",
        "Built internal tools and dashboards to monitor end-to-end test suite health",
      ],
    },
  ];

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
            profileImageUrl="https://firebasestorage.googleapis.com/v0/b/devbypros.firebasestorage.app/o/portfolio%2Fprofile.png?alt=media&token=fe0f3bc7-2573-4039-8cfe-9bb472c1183c"
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
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
                My professional journey in software engineering and team
                leadership. Key highlights shown below - download my resume for
                more details.
              </p>
              <Button
                size="sm"
                onClick={handleViewResume}
                className="text-base px-8 py-3"
              >
                View Resume
              </Button>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {/* Lytics Company Experience Card */}
              <CompanyExperienceCard
                company="Lytics"
                location="Portland, OR"
                duration={(() => {
                  const duration = intervalToDuration({
                    start: new Date("2017-06-01"),
                    end: new Date(),
                  });
                  const years = duration.years || 0;
                  const months = duration.months || 0;
                  return `${years} years, ${months} months`;
                })()}
                roles={lyticsRoles}
                logo="/lytics-logo.jpg"
              />

              {/* Other experiences using shadcn/ui cards */}
              {otherExperiences.map((experience) => (
                <Card
                  key={experience.id}
                  className="border border-border/50 hover:border-border transition-colors duration-200 hover:shadow-md"
                >
                  <CardHeader className="pb-4">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
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
                          <CardTitle className="text-xl md:text-2xl font-semibold text-foreground">
                            {experience.title}
                          </CardTitle>
                          <p className="text-lg font-medium text-primary mt-1">
                            {experience.company}
                          </p>
                        </div>
                      </div>
                      <div className="text-sm text-muted-foreground font-medium bg-muted/50 px-3 py-1 rounded-full self-start sm:self-auto">
                        {experience.dates}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
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
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A showcase of my latest projects and technical contributions
              </p>
            </div>
            
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    imageUrl={project.imageUrl}
                    title={project.title}
                    summary={project.summary}
                    tags={project.tags}
                    link={project.link}
                    comingSoon={project.comingSoon}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact">
          <ContactSection />
        </section>
      </Layout>
    </>
  );
}
