"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  imageUrls?: string[];
  title: string;
  summary: string;
  tags: string[];
  link: string;
  comingSoon?: boolean;
}

export default function ProjectCard({
  imageUrls,
  title,
  summary,
  tags,
  link,
  comingSoon = false,
}: ProjectCardProps) {
  return (
    <Card className="group overflow-hidden border border-border/50 hover:border-border transition-all duration-200 hover:shadow-lg">
      {comingSoon ? (
        <div className="block">
          {/* Project Image */}
          <div className="relative aspect-video overflow-hidden">
            <Image
              src={imageUrls?.[0] || ""}
              alt={`${title} project screenshot`}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-background/80 flex items-center justify-center"></div>
          </div>

          <CardHeader className="py-2">
            <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-200">
              {title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">{summary}</p>
          </CardHeader>

          <CardContent className="pb-4">
            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="text-xs font-medium"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </CardContent>
        </div>
      ) : (
        <Link href={`/portfolio/${link.split("/").pop()}`} className="block">
          {/* Project Image */}
          <div className="relative aspect-video overflow-hidden">
            <Image
              src={imageUrls?.[0] || ""}
              alt={`${title} project screenshot`}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>

          <CardHeader className="pb-3">
            <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-200">
              {title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">{summary}</p>
          </CardHeader>

          <CardContent className="pb-4">
            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="text-xs font-medium"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Link>
      )}
    </Card>
  );
}
