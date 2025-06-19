import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  CloudIcon,
  PaletteIcon,
  Users,
  Code2Icon,
  FileStackIcon,
  TestTubeDiagonalIcon,
  WrenchIcon,
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
      icon: FileStackIcon,
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
      skills: ["AWS", "GCP"],
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
            {/* Professional Summary */}
            <div className="max-w-4xl mx-auto space-y-6 text-lg leading-relaxed">
              <p className="text-muted-foreground">
                Hi, I'm Pros! I'm a Senior Software Engineer with 9+ years of
                experience designing and building scalable, user-focused
                frontend applications using React and TypeScript. I'm deeply
                committed to quality and automation, especially through
                comprehensive end-to-end testing strategies that ensure
                reliable, robust software.
              </p>
              <p className="text-muted-foreground">
                Throughout my career, I've had the privilege of mentoring
                engineers across distributed teams and collaborating closely
                with cross-functional partners to align technical solutions with
                business goals. I believe that great software comes from
                combining technical excellence with clear communication and
                shared understanding.
              </p>
              <p className="text-muted-foreground">
                When I'm not coding, you'll find me traveling and discovering
                new foods. After college, I spent about three years teaching
                English in South Korea, where I developed a love for backpacking
                through Southeast Asia during summers and winters. These
                experiences taught me the value of adaptability, cultural
                understanding, and embracing new challenges—skills that
                translate directly into my approach to software development.
              </p>
              <p className="text-muted-foreground">
                Feel free to explore my work and get in touch!
              </p>
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
                          <Badge
                            key={skill}
                            variant="secondary"
                            className="text-sm px-3 py-1 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors"
                          >
                            {skill}
                          </Badge>
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
