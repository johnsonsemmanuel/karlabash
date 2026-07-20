import Hero from "@/components/home/Hero";
import SocialProof from "@/components/home/SocialProof";
import Features from "@/components/home/Features";
import FeaturedSection from "@/components/home/FeaturedSection";
import CTASection from "@/components/home/CTASection";
import { books, events } from "@/data/mockData";

export function HomePage() {
  return (
    <div>
      <Hero />
      <SocialProof />
      <FeaturedSection books={books} events={events} />
      <Features />
      <CTASection />
    </div>
  );
}
