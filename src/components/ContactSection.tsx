"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Mail, Linkedin, Github } from "lucide-react"

interface ContactSectionProps {
  className?: string
  email?: string
  linkedinUrl?: string
  githubUrl?: string
}

export default function ContactSection({
  className,
  email = "sengp551@gmail.com",
  linkedinUrl = "https://linkedin.com/in/prosseng",
  githubUrl = "https://github.com/prosdev"
}: ContactSectionProps) {
  const handleEmailClick = () => {
    window.open(`mailto:${email}`, '_blank')
  }

  const handleLinkedInClick = () => {
    window.open(linkedinUrl, '_blank', 'noopener,noreferrer')
  }

  const handleGithubClick = () => {
    window.open(githubUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <section className={cn("py-16 md:py-24", className)}>
      <div className="container mx-auto px-4">
        <Card className="border-0 shadow-none bg-transparent">
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-3xl md:text-4xl font-bold">
              Get In Touch
            </CardTitle>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
              I'm always open to discussing new opportunities, interesting projects, 
              or just having a chat about technology and software development.
            </p>
          </CardHeader>
          <CardContent>
            <div className="max-w-2xl mx-auto">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                {/* Email Button */}
                <Button
                  size="lg"
                  onClick={handleEmailClick}
                  className="flex items-center gap-2 px-6 py-3 text-base min-w-[200px] justify-center"
                  aria-label={`Send email to ${email}`}
                >
                  <Mail className="w-5 h-5" />
                  <span>Email Me</span>
                </Button>

                {/* LinkedIn Button */}
                <Button
                  size="lg"
                  variant="outline"
                  onClick={handleLinkedInClick}
                  className="flex items-center gap-2 px-6 py-3 text-base min-w-[200px] justify-center"
                  aria-label="Visit LinkedIn profile"
                >
                  <Linkedin className="w-5 h-5" />
                  <span>LinkedIn</span>
                </Button>

                {/* GitHub Button */}
                <Button
                  size="lg"
                  variant="outline"
                  onClick={handleGithubClick}
                  className="flex items-center gap-2 px-6 py-3 text-base min-w-[200px] justify-center"
                  aria-label="Visit GitHub profile"
                >
                  <Github className="w-5 h-5" />
                  <span>GitHub</span>
                </Button>
              </div>

              {/* Email Display */}
              <div className="text-center mt-8">
                <p className="text-sm text-muted-foreground mb-2">
                  Or reach out directly:
                </p>
                <a
                  href={`mailto:${email}`}
                  className="text-primary hover:text-primary/80 transition-colors font-medium text-lg"
                  aria-label={`Send email to ${email}`}
                >
                  {email}
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
} 