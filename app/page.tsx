import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import HowItWorks from '@/components/sections/HowItWorks';
import Testimonials from '@/components/sections/Testimonials';
import Pricing from '@/components/sections/Pricing';
import FAQ from '@/components/sections/FAQ';
import Contact from '@/components/sections/Contact';

export const metadata = {
  title: 'Crivity Visual Design — AI Agent Infrastructure & Intelligent Workflow Automation',
  description: 'Deploy autonomous AI agents to automate workflows, coordinate systems, and optimize operations in real time.',
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans pb-28">
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Contact />
    </div>
  );
}
