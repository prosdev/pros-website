export interface Project {
  id: string;
  imageUrl: string;
  title: string;
  summary: string;
  tags: string[];
  link: string;
  comingSoon: boolean;
}

export const projects: Project[] = [
  {
    id: "playwright-dashboard",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/devbypros.firebasestorage.app/o/portfolio%2Fautomation-dashboard.png?alt=media&token=c14c9b93-434b-438a-8482-deedc9b3c41e",
    title: "E2E Automation Dashboard",
    summary:
      "A Next.js dashboard powered by Firestore to visualize E2E test runs and suite health.",
    tags: [
      "Next.js",
      "Firestore",
      "Playwright",
      "Testing",
      "Context API",
      "TailwindCSS",
      "shadcn/ui",
    ],
    link: "/portfolio/playwright-dashboard",
    comingSoon: true,
  },
];
