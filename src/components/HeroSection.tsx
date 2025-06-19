"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import Image from "next/image"

interface HeroSectionProps {
  className?: string
  profileImageUrl?: string
  onViewResume?: () => void
  onGetInTouch?: () => void
}

export default function HeroSection({
  className,
  profileImageUrl,
  onViewResume,
  onGetInTouch,
}: HeroSectionProps) {
  return (
    <section className={cn("py-16 md:py-24", className)}>
      <div className="container mx-auto px-4">
        <Card className="border-0 shadow-none bg-transparent">
          <CardContent className="p-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left side - Content */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                    Hi, I'm Pros —{" "}
                    <span className="text-primary">Senior Frontend Engineer</span>
                  </h1>
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                    Building scalable UI architectures and driving end-to-end quality 
                    for reliable, delightful user experiences.
                  </p>
                </div>
                
                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button 
                    size="lg" 
                    onClick={onViewResume}
                    className="text-base px-8 py-3"
                  >
                    View Resume
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    onClick={onGetInTouch}
                    className="text-base px-8 py-3"
                  >
                    Get in Touch
                  </Button>
                </div>
              </div>

              {/* Right side - Profile Image */}
              {profileImageUrl && (
                <div className="flex justify-center lg:justify-end">
                  <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                    <Image
                      src={profileImageUrl}
                      alt="Pros - Senior Frontend Engineer"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
} 