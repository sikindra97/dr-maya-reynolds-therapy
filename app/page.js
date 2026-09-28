import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Services from "@/components/Services";
import Approach from "@/components/Approach";
import Therapist from "@/components/Therapist";
import Office from "@/components/Office";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <Intro />

        <Services />

        <Approach />

        <Therapist />

        <Office />

        <FAQ />

        <CTA />
      </main>

      <Footer />
    </>
  );
}