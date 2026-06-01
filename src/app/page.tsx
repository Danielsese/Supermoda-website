import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/sections/hero";
import { Categories } from "@/components/sections/categories";
import { Catalogs } from "@/components/sections/catalogs";
import { HowItWorks } from "@/components/sections/how-it-works";
import { CalculatorSection } from "@/components/sections/calculator-section";
import { Testimonials } from "@/components/sections/testimonials";
import { RegisterForm } from "@/components/sections/register-form";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <>
      {/* Floating Header */}
      <Navbar />

      {/* Main Page Layout Flow */}
      <main className="flex-grow">
        
        {/* Asymmetric Hero */}
        <Hero />
        
        {/* Bento Products & Categories Overview */}
        <Categories />

        {/* Real Brand PDF Catalogs Download Grid */}
        <Catalogs />
        
        {/* Bento Benefits / Business Model */}
        <HowItWorks />
        
        {/* Interactive slide-to-earn calculator */}
        <CalculatorSection />
        
        {/* Testimonials Carousel */}
        <Testimonials />
        
        {/* Accessible Signup Lead Form */}
        <RegisterForm />
        
      </main>

      {/* Semantic Footnote */}
      <Footer />
    </>
  );
}
