import Image from "next/image";
import Banner from "@/components/Homepage/banner";
import About from "@/components/Homepage/about";
import Servicessection from "@/components/Homepage/servicesection";
import ProcessSection from "@/components/Homepage/ProcessSection";
import ComparisonSection from "@/components/Homepage/ComparisonSection";
import WhyChooseSection from "@/components/Homepage/WhyChooseSection";
import VehicleTypesSection from "@/components/Homepage/VehicleTypesSection";
import NationwideSection from "@/components/Homepage/NationwideSection";
import FaqSection from "@/components/Homepage/FaqSection";



export default function Home() {
  return (
   <>
   <Banner/>
   <About/>
   <Servicessection/>
   <ProcessSection/>
   <ComparisonSection/>
   <WhyChooseSection/>
   <VehicleTypesSection/>
   <NationwideSection/>
   <FaqSection/>
   </>
  );
}
