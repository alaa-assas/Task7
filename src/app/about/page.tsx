import AboutSection from "@/components/About/AboutSection";
import FAQ from "@/components/FAQ/FAQ";
import InfoSection from "@/components/Info/InfoSection";
import { Metadata } from 'next';
import { aboutData } from "@/data/AboutData";
import SubHero from "@/components/Hero/SubHero";

export const metadata: Metadata = {
  title: 'About',
  description: 'about tuscany company',
};

export default function About() {

  return (
    <div className="font-geist-sans">
      <main className="">
        <SubHero />
        <AboutSection data={aboutData} width={650} height={559}/>
        <InfoSection />
        <FAQ />
      </main>
    </div>
  );
}
