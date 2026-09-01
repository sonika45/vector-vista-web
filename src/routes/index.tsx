import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { CareerFocus } from "@/components/career-focus";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { Education } from "@/components/education";
import { Experience } from "@/components/experience";
import { GithubSection } from "@/components/github-section";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { CustomCursor } from "@/components/custom-cursor";
import { LoadingScreen } from "@/components/loading-screen";
import { profile } from "@/lib/portfolio-data";

const title = "Sonika Khatri | AI/ML Engineer & Full-Stack Developer";
const description =
  "Sonika Khatri is an aspiring AI/ML Engineer and Full-Stack Developer passionate about machine learning, intelligent applications, modern web development, and UI/UX design.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: profile.name,
          jobTitle: profile.title,
          email: `mailto:${profile.email}`,
          description,
          sameAs: [profile.github, profile.linkedin],
          alumniOf: {
            "@type": "CollegeOrUniversity",
            name: "Bhairahawa Multiple Campus",
          },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <LoadingScreen />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <CareerFocus />
        <Skills />
        <Projects />
        <Education />
        <Experience />
        <GithubSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
