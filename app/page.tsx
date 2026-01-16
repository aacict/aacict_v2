import Intro from "./components/portfolio/intro-component";
import Projects from "./components/portfolio/projects-component";
import Skills from "./components/portfolio/skills-component";

export default function Home() {
  return (<main className="flex flex-col min-h-screen items-center justify-center">
    <Intro />
    <Skills />
    <Projects />
  </main>
  );
}
