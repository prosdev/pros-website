import { use } from "react";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProjectDetailPageProps {
  params: Promise<{
    projectId: string;
  }>;
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { projectId } = use(params);
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    notFound();
  }

  // Project-specific content
  const projectContent = {
    "playwright-dashboard": {
      overview: `Our E2E Test & User Journey Observability Dashboard was born from a common challenge: scattered test execution data and a lack of real-time visibility into overall application quality. Before this project, gaining insights into our test suite's health or user journey automation status was a time-consuming, manual effort, often buried in CI/CD logs. My objective was to build a centralized, real-time dashboard that provides comprehensive, actionable insights into our E2E test suite's performance and our critical user journey coverage.`,
      technologies: [
        "Next.js",
        "React",
        "Google Cloud Firestore",
        "Playwright",
        "Google Apps Script",
        "GitHub Actions",
        "TypeScript",
      ],
      role: "I led the end-to-end design and implementation of the data ingestion pipeline, optimized database schema, and developed key features for the dashboard frontend. This involved integrating diverse systems and ensuring data integrity from source to visualization.",
      features: [
        {
          title: "Real-time Test Health Monitoring",
          description:
            "The dashboard provides up-to-the-minute metrics for the current day's test suite performance. Prominently displayed KPIs include 'Test Failures Detected' (e.g., 5 Tests Failing Now) derived from the latest known status of each individual test scenario, and a real-time 'Daily Pass Rate' for the overall test suite runs. This immediate visibility empowers teams to detect and react to regressions much faster.",
        },
        {
          title: "Comprehensive User Journey Tracking",
          description:
            "We integrated high-level user journey definitions from collaborative Google Sheets. The dashboard tracks the automation coverage for critical business flows (e.g., a 'User Login' journey), aligning testing efforts directly with product goals.",
        },
        {
          title: "Granular Test Case Observability",
          description:
            "Users can drill down into specific test scenarios, grouped by features, to see detailed execution data. This includes individual test scenario results (pass/fail), precise durations, associated error messages, and links to CI build pipelines and test reports (acknowledging their temporary retention). This speeds up debugging significantly.",
        },
        {
          title: "Multi-layered Historical Data & Trend Analysis",
          description:
            "The system captures and organizes historical data across several Firestore collections. This enables detailed trend analysis on suite-level performance (tracking overall 'Last Suite Run Status', 'Total Suite Runs', and 'Average Duration' over time), flakiness detection (identifying 'Flaky Tests Detected' that passed on retry), and daily snapshots providing immutable records of daily suite performance.",
        },
        {
          title: "Secure & Scalable Data Architecture",
          description:
            "The solution leverages Google Cloud Firestore for its NoSQL flexibility and scalability, handling high volumes of test result data. Access to the dashboard and its underlying data is strictly controlled through Google authentication for internal users.",
        },
      ],
      technicalDetails: {
        dataPipeline:
          "The backbone of the dashboard is a robust, automated data pipeline that integrates user journey definitions from Google Sheets, test execution results from Playwright via GitHub Actions, and real-time aggregation through custom reporters.",
        dataModel:
          "We designed a multi-collection Firestore strategy to balance query efficiency, historical fidelity, and cost-effectiveness, including JourneyDefinitions, SuiteRunSummaries, LatestTestStatuses, IndividualTestRuns, DailyMetricsLive, and DailyMetricsHistory collections.",
        keyDecisions: [
          "Separate Definitions from Executions for semantic clarity and flexibility",
          "Hierarchical IDs for enhanced readability in lists",
          "Managing High-Volume Data with aggressive TTL policies",
          "Data Consistency through Firestore's transactional writes",
          "Naming Conventions for robust reporting",
        ],
      },
      impact:
        "This project significantly elevated our E2E testing visibility from scattered logs to a centralized, real-time platform. It streamlined debugging efforts by providing immediate access to critical context and specific reports. By offering data-driven insights into test health and user journey automation, the dashboard empowers proactive quality assurance and informs engineering decisions, ultimately contributing to shipping more confident, high-quality software.",
    },
  };

  const content = projectContent[project.id as keyof typeof projectContent];

  if (!content) {
    return <div>Project details not available</div>;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border/50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-4">
            <Link href="/#projects">
              <Button variant="ghost" size="sm" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Projects
              </Button>
            </Link>
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold">
                {project.title}
              </h1>
              <p className="text-muted-foreground mt-2">{project.summary}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Project Overview */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                {content.overview}
              </p>
            </section>

            {/* Key Features */}
            <section>
              <h2 className="text-2xl font-bold mb-6">
                Key Features & Value Proposition
              </h2>
              <div className="space-y-6">
                {content.features.map((feature, index) => (
                  <Card key={index} className="border border-border/50">
                    <CardHeader>
                      <CardTitle className="text-lg">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                      {project.imageUrls && project.imageUrls[index] && (
                        <div className="mt-4 relative aspect-video rounded-lg overflow-hidden border border-border/50">
                          <Image
                            src={project.imageUrls[index]}
                            alt={`${feature.title} screenshot`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 50vw"
                          />
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Technical Deep Dive */}
            <section>
              <h2 className="text-2xl font-bold mb-6">Technical Deep Dive</h2>
              <div className="space-y-6">
                <Card className="border border-border/50">
                  <CardHeader>
                    <CardTitle className="text-lg">
                      Automated Data Pipeline & Flow
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {content.technicalDetails.dataPipeline}
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      {content.technicalDetails.dataModel}
                    </p>
                  </CardContent>
                </Card>

                <Card className="border border-border/50">
                  <CardHeader>
                    <CardTitle className="text-lg">
                      Key Data Modeling Decisions & Trade-offs
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {content.technicalDetails.keyDecisions.map(
                        (decision, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-2 text-muted-foreground"
                          >
                            <span className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-2" />
                            <span>{decision}</span>
                          </li>
                        )
                      )}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Impact & Outcomes */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Impact & Outcomes</h2>
              <p className="text-muted-foreground leading-relaxed">
                {content.impact}
              </p>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Technologies */}
            <Card className="border border-border/50">
              <CardHeader>
                <CardTitle className="text-lg">Technologies Used</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {content.technologies.map((tech, index) => (
                    <Badge key={index} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Role */}
            <Card className="border border-border/50">
              <CardHeader>
                <CardTitle className="text-lg">Role & Contribution</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {content.role}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
