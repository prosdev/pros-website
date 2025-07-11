import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  CloudIcon,
  PaletteIcon,
  Users,
  Code2Icon,
  TestTubeDiagonalIcon,
  WrenchIcon,
  SquareLibraryIcon,
  PlaneIcon,
  HeartHandshakeIcon,
  RocketIcon,
} from "lucide-react";

interface AboutSectionProps {
  className?: string;
}

export default function AboutSection({ className }: AboutSectionProps) {
  const skillCategories = [
    {
      name: "Languages",
      icon: Code2Icon,
      skills: ["TypeScript", "JavaScript"],
    },
    {
      name: "Frontend",
      icon: PaletteIcon,
      skills: ["HTML", "CSS", "Material UI", "Shadcn UI", "TailwindCSS"],
    },
    {
      name: "Frameworks",
      icon: SquareLibraryIcon,
      skills: ["React", "Ember", "NodeJS", "NextJS"],
    },
    {
      name: "Testing",
      icon: TestTubeDiagonalIcon,
      skills: ["Vitest", "Jest", "Playwright", "Selenium"],
    },
    {
      name: "Cloud",
      icon: CloudIcon,
      skills: ["AWS", "GCP", "Vercel", "Contentstack"],
    },
    {
      name: "Tools",
      icon: WrenchIcon,
      skills: ["Git", "GitHub", "Jira", "Docker", "Minikube", "Cursor"],
    },
    {
      name: "Practices",
      icon: Users,
      skills: ["Agile", "CI/CD"],
    },
  ];



  return (
    <section className={cn("py-16 md:py-24", className)}>
      <div className="container mx-auto px-4">
        <Card className="border-0 shadow-none bg-transparent">
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-3xl md:text-4xl font-bold">
              About Me
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            {/* Text Content */}
            <div className="max-w-4xl mx-auto space-y-6 text-lg leading-relaxed">
              <div className="flex items-start gap-4">
                <RocketIcon className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">
                  Hi, I&apos;m Pros! I&apos;m a Senior Software Engineer with
                  9+ years of experience, most recently helping scale Lytics—a
                  marketing tech startup—by shipping customer-facing features
                  quickly without compromising on code quality or user
                  experience. I specialize in designing and building scalable,
                  user-focused frontend applications using React and
                  TypeScript, with a deep commitment to quality through
                  automation and comprehensive E2E testing strategies.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <HeartHandshakeIcon className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">
                  Beyond code, I&apos;m passionate about mentorship and
                  collaboration. I&apos;ve supported new engineers through
                  onboarding and pair programming, and worked closely with
                  Product and Data Science partners to align technical
                  execution with business goals. I believe great software
                  comes from combining technical excellence with shared
                  understanding.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <PlaneIcon className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">
                  When I&apos;m not coding, you&apos;ll find me traveling and
                  discovering new foods. I spent three years teaching English
                  in South Korea after college and developed a love for
                  backpacking through Southeast Asia. Those experiences taught
                  me adaptability, cultural empathy, and how to thrive in new
                  environments—skills that continue to shape my approach to
                  engineering today.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <p className="text-muted-foreground pl-10">
                  Thanks for stopping by—feel free to explore my work and
                  reach out!
                </p>
              </div>
            </div>

            {/* Skills Section */}
            <div className="max-w-6xl mx-auto pt-8">
              <h3 className="text-xl font-semibold text-center mb-8">
                Technical Skills
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skillCategories.map((category) => {
                  const IconComponent = category.icon;
                  return (
                    <div key={category.name} className="space-y-3">
                      <div className="flex items-center gap-2 text-lg font-semibold">
                        <IconComponent className="w-5 h-5 text-primary" />
                        <h4>{category.name}</h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill) => (
                          <motion.div
                            key={skill}
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                            className="inline-block"
                          >
                            <Badge
                              variant="secondary"
                              className="text-sm px-3 py-1 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors cursor-pointer"
                            >
                              {skill}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
