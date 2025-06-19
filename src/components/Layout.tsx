import Navigation from "./Navigation"
import { cn } from "@/lib/utils"

interface LayoutProps {
  children: React.ReactNode
  className?: string
}

export default function Layout({ children, className }: LayoutProps) {
  return (
    <div className={cn("min-h-screen bg-background", className)}>
      <Navigation />
      <main className="pt-16">
        {children}
      </main>
    </div>
  )
} 