import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { workExperience, type Experience } from "@/data/experience"

interface ExperienceSectionProps {
  className?: string
  experiences?: Experience[]
}

export default function ExperienceSection({ 
  className, 
  experiences = workExperience 
}: ExperienceSectionProps) {
  return (
    <section className={cn("py-16 md:py-24", className)}>
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
          {experiences.map((experience) => (
            <Card 
              key={experience.id}
              className="border border-border/50 hover:border-border transition-colors duration-200 hover:shadow-md"
            >
              <CardHeader className="pb-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <CardTitle className="text-xl md:text-2xl font-semibold text-foreground">
                      {experience.title}
                    </CardTitle>
                    <p className="text-lg font-medium text-primary mt-1">
                      {experience.company}
                    </p>
                  </div>
                  <div className="text-sm text-muted-foreground font-medium bg-muted/50 px-3 py-1 rounded-full self-start sm:self-auto">
                    {experience.dates}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
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
  )
} 