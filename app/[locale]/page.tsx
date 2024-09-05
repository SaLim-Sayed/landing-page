import CallToActionWithVideo from "@/src/components/UI/CallToActionWithVideo";
import Features from "@/src/components/UI/Features";
import Pricing from "@/src/components/UI/Pricing";
import BasicStatistics from "@/src/components/UI/Statistics";
import Testimonials from "@/src/components/UI/Testimonials";
import Title from "@/src/components/UI/Title";
import Image from "next/image";

export default function Home() {
  return (
    <div className="  min-h-[100vh]">
      <Title />
      <CallToActionWithVideo />
      <Testimonials />
      <Pricing />
      <BasicStatistics />
      <Features/>
    </div>
  );
}
