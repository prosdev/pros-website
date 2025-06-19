"use client"

import Layout from "@/components/Layout"
import HeroSection from "@/components/HeroSection"
import AboutSection from "@/components/AboutSection"
import ExperienceSection from "@/components/ExperienceSection"
import ContactSection from "@/components/ContactSection"

export default function Home() {
  const handleViewResume = () => {
    // Create a link element to trigger download
    const link = document.createElement('a')
    link.href = '/SENG_SoftwareEngineer.pdf'
    link.download = 'SENG_SoftwareEngineer.pdf'
    link.target = '_blank'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleGetInTouch = () => {
    // Smooth scroll to contact section
    const contactSection = document.querySelector('#contact')
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section id="home">
        <HeroSection 
          profileImageUrl="/profile.png"
          onViewResume={handleViewResume}
          onGetInTouch={handleGetInTouch}
        />
      </section>

      {/* About Section */}
      <section id="about">
        <AboutSection />
      </section>

      {/* Work Experience Section */}
      <section id="work">
        <ExperienceSection />
      </section>

      {/* Projects Section - Placeholder */}
      <section id="projects" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Coming soon - showcasing my latest projects and contributions
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <ContactSection />
      </section>
    </Layout>
  )
}
