import Hero from "@/components/Hero";
import WelcomeZentry from "@/components/WelcomeZentry";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Hero />
      <WelcomeZentry />
      <section className="h-[430px] w-screen"></section>
      <section className="h-screen w-screen bg-red-400"></section>
      <section className="h-screen w-screen bg-green-300"></section>
    </main>
  );
}
