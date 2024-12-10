import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import SkillsSection from "./components/SkillsSection";

export default function App() {
  return (
    <div>
      <Header />
      <main className="lg:px-12">
        <HeroSection />
        <SkillsSection />
      </main>
    </div>
  );
}
