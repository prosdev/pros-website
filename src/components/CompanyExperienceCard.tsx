"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { MapPin, Calendar } from "lucide-react";
import Image from "next/image";

interface JobRole {
  title: string;
  dates: string;
  bullets: string[];
}

interface CompanyExperienceCardProps {
  company: string;
  location: string;
  duration: string;
  roles: JobRole[];
  logo?: string;
  className?: string;
}

export default function CompanyExperienceCard({
  company,
  location,
  duration,
  roles,
  logo,
  className,
}: CompanyExperienceCardProps) {
  return (
    <Card
      className={cn(
        "border border-border/50 hover:border-border transition-colors duration-200 hover:shadow-md",
        className
      )}
    >
      <CardHeader className="pb-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div className="space-y-1">
            <div className="flex items-center gap-3">
              {logo && (
                <div className="relative w-8 h-8 flex-shrink-0 rounded-full overflow-hidden">
                  <Image
                    src={logo}
                    alt={`${company} logo`}
                    fill
                    className="object-contain"
                    sizes="32px"
                  />
                </div>
              )}
              <CardTitle className="text-xl md:text-2xl font-semibold text-foreground">
                {company}
              </CardTitle>
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span>{location}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{duration}</span>
              </div>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <div className="space-y-8">
          {roles.map((role, index) => (
            <div key={index} className="relative">
              {/* Role Header with bullet */}
              <div className="flex items-center gap-3 mb-4">
                <div className="relative flex-shrink-0 w-6 flex justify-center">
                  <span className="w-3 h-3 bg-primary rounded-full block" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div className="flex items-center gap-3">
                      <h3 className="text-lg md:text-xl font-semibold text-foreground">
                        {role.title}
                      </h3>
                    </div>
                    <div className="text-sm text-muted-foreground font-medium bg-muted/50 px-3 py-1 rounded-full self-start sm:self-auto">
                      {role.dates}
                    </div>
                  </div>
                </div>
              </div>

              {/* Role Bullets */}
              <ul className="space-y-3 mb-6 ml-6">
                {role.bullets.map((bullet, bulletIndex) => (
                  <li
                    key={bulletIndex}
                    className="flex items-start gap-3 text-muted-foreground leading-relaxed"
                  >
                    <div className="relative flex-shrink-0 w-6 flex justify-center">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2.5 block" />
                    </div>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Connecting line to next role (except for last role) */}
              {index < roles.length - 1 && (
                <div className="absolute left-3 top-12 bottom-0 w-px bg-primary/30" />
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
