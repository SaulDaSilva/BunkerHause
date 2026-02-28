import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Rooms from "@/components/Rooms";
import LocationSection from "@/components/LocationSection";
import Reviews from "@/components/Reviews";
import ContactSection from "@/components/ContactSection";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Rooms />
        <LocationSection />
        <Reviews />
        <ContactSection />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Index;
