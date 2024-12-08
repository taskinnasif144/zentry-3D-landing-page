import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Story from "@/components/Story";
import WelcomeZentry from "@/components/WelcomeZentry";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <WelcomeZentry />
      <section className="h-[430px] w-screen"></section>
      <Features />
      <Story />
      <Contact />
      <Footer />
    </main>
  );
}
