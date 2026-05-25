import ProductHero from '@/components/sections/ProductHero';
import ProductBenefits from '@/components/sections/ProductBenefits';
import ProductCapabilities from '@/components/sections/ProductCapabilities';
import ProductUseCases from '@/components/sections/ProductUseCases';
import ProductCTA from '@/components/sections/ProductCTA';
import FAQ from '@/components/sections/FAQ';

export const metadata = {
  title: 'AetherSync — Enterprise AI Agent Platform | VirtuSyncCore',
  description: 'AetherSync is an intelligent agent platform powered by NVIDIA SDKs. Deploy autonomous agents, automate workflows, and orchestrate complex operations at scale.',
};

export default function ProductPage() {
  return (
    <div className="min-h-screen bg-background font-sans pb-28">
      <ProductHero />
      <ProductBenefits />
      <ProductCapabilities />
      <ProductUseCases />
      <ProductCTA />
      <FAQ />
    </div>
  );
}
