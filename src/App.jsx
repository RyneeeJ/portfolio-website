import Header from "./components/Header";
import HeroSection from "./components/HeroSection";

export default function App() {
  return (
    <div>
      <Header />
      <main className="lg:px-12">
        <HeroSection />
      </main>
    </div>
  );
}
