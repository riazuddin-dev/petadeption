import Image from "next/image";
import HeroSection from "../components/Hero";
import FeaturedPets from "../components/FeaturedPets";

import ServicesSection from "../components/ServicesSection";
import WhyAdoptSection from "../components/WhyAdoptSection";
import ContactSection from "../components/ContactSection";
import AboutFaqSection from "../components/AboutFaqSection";


export default function Home() {
  return (
    <div>

 <HeroSection></HeroSection>
 <FeaturedPets></FeaturedPets>
 <ServicesSection></ServicesSection>
 <WhyAdoptSection></WhyAdoptSection>
 <AboutFaqSection></AboutFaqSection>
 <ContactSection></ContactSection>

 
 
    
    </div>
  );
}
