import HeroSection from "./HeroSection"

export default function HeroSectionExample() {
  const handleViewResume = () => {
    // Handle resume view action
    console.log("View Resume clicked")
    // You could open a PDF, navigate to a resume page, etc.
  }

  const handleGetInTouch = () => {
    // Handle contact action
    console.log("Get in Touch clicked")
    // You could open a contact form, navigate to contact page, etc.
  }

  return (
    <HeroSection
      profileImageUrl="/profile-photo.jpg" // Optional: Add your profile photo
      onViewResume={handleViewResume}
      onGetInTouch={handleGetInTouch}
    />
  )
} 