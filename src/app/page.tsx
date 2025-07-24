import AboutSection from "@/components/About/AboutSection";
import BookSection from "@/components/Book/BookSection";
import Destinantions from "@/components/Destinantion/Destinantions";
import FAQ from "@/components/FAQ/FAQ";
import FeatureSection from "@/components/Feature/FeatureSection";
import Hero from "@/components/Hero/Hero";
import Offer from "@/components/Offer";
import PopularSection from "@/components/Popular/PopularSection";
import { aboutHomeData } from "@/data/AboutData";


export default function Home() {
  
  return (
    <div className="font-geist-sans">
      <main className="">
        <Hero />
        <Destinantions />
        <AboutSection data={aboutHomeData} width={400} height={600}/>
        <Offer />
        <FeatureSection />
        <BookSection />
        <PopularSection />
        <FAQ />
      </main>
    </div>
  );
}
