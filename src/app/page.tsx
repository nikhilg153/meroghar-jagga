import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="my-4">
      <Header />
      <Navbar />
      <HeroSection />
    </div>
  );
}
