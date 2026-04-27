import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Featured from "@/components/Featured";
import About from "@/components/About";
import Services from "@/components/Services";
import Promo from "@/components/Promo";
import Legal from "@/components/Legal";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Featured />
      <About />
      <Services />
      <Promo />
      <Legal />
      <ContactForm />
      <Footer />
    </main>
  );
};

export default Index;