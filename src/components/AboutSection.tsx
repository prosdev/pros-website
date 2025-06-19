import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface AboutSectionProps {
  className?: string
}

export default function AboutSection({ className }: AboutSectionProps) {
  const skills = [
    "TypeScript",
    "JavaScript", 
    "React",
    "Next.js",
    "Ember",
    "Node.js",
    "Playwright",
    "Vitest",
    "Jest",
    "AWS",
    "GCP",
    "Tailwind CSS"
  ]

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
                I'm a Senior Software Engineer with 9+ years of experience architecting 
                scalable, user-centered frontend applications and leading comprehensive 
                test automation frameworks.
              </p>
              <p className="text-muted-foreground">
                My expertise lies in React and TypeScript, complemented by deep knowledge 
                of end-to-end testing strategies that improve platform reliability.
              </p>
              <p className="text-muted-foreground">
                I excel at bridging technical execution with business goals through 
                cross-functional collaboration and mentorship, enabling globally distributed 
                teams to deliver consistent, high-quality software.
              </p>
            </div>

            {/* Skills Section */}
            <div className="max-w-4xl mx-auto">
              <h3 className="text-xl font-semibold text-center mb-6">
                Technical Skills
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {skills.map((skill) => (
                  <Badge 
                    key={skill}
                    variant="secondary"
                    className="text-sm px-4 py-2 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
} 