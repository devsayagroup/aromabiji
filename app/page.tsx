import HeroSection from "@/components/section/HeroSection";
import ProductSection from "@/components/section/ProductSection";
import StorySection from "@/components/section/StorySection";
// import JournalSection from "@/components/section/JournalSection";
import MapSection from "@/components/section/MapSection";
import CtaSection from "@/components/section/CallToActionSection";

export default function Home() {
  return (
    <>
    <HeroSection/>
    {/* <AboutSection/> */}
    <ProductSection/>
    <StorySection/>
    <MapSection/>
    {/* <JournalSection /> */}
    <CtaSection/>
    </>
  );
}
