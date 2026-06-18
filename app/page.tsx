// import HeroSection from "@/components/section/HeroSection";
import CoffeeSection from "@/components/section/CoffeeSection";
import StorySection from "@/components/section/StorySection";
import ChocoSection from "@/components/section/ChocoSection";
// import JournalSection from "@/components/section/JournalSection";
import MapSection from "@/components/section/MapSection";
import CtaSection from "@/components/section/CallToActionSection";
import NewHeroSection from "@/components/section/NewHeroSection";
import AboutSection from "@/components/section/AboutSection";



export default function Home() {
  return (
    <>
    <NewHeroSection/>
    <AboutSection/>
    
    <CoffeeSection/>
    <StorySection/>
    <ChocoSection/>
    <MapSection/>
    {/* <JournalSection /> */}
    <CtaSection/>
    </>
  );
}
