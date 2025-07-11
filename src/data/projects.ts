export interface Project {
  id: string;
  imageUrls?: string[];
  title: string;
  summary: string;
  tags: string[];
  link: string;
  comingSoon: boolean;
}

export const projects: Project[] = [
  {
    id: "playwright-dashboard",
    imageUrls: [
      "https://firebasestorage.googleapis.com/v0/b/devbypros.firebasestorage.app/o/portfolio%2Fkpi-dashboard.png?alt=media&token=0e526753-c958-4f6d-8e78-62e7ac4d4dc0",
      "https://firebasestorage.googleapis.com/v0/b/devbypros.firebasestorage.app/o/portfolio%2Fautomation-roadmap.png?alt=media&token=ac738f5a-b374-441a-ab5a-ba6c1db7340f",
      "https://firebasestorage.googleapis.com/v0/b/devbypros.firebasestorage.app/o/portfolio%2Flatest-cases.png?alt=media&token=44466992-fb39-463c-a109-7835f3ef33ae",
    ],
    title: "E2E Automation Dashboard",
    summary:
      "A real-time observability dashboard for critical user journeys, powered by Firestore and Playwright test analytics.",
    tags: [
      "Next.js",
      "Firestore",
      "Playwright",
      "CI/CD",
      "TailwindCSS",
      "Testing Strategy",
      "Engineering Observability",
    ],
    link: "/portfolio/playwright-dashboard",
    comingSoon: false,
  },
];
