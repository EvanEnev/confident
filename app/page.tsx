import Nav from "@/src/components/Nav";
import Hero from "@/src/components/Hero";
import Menu from "@/src/components/Menu";
import Location from "@/src/components/Location";
import OrderCTA from "@/src/components/OrderCTA";
import Footer from "@/src/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Menu />
        <Location />
        <OrderCTA />
      </main>
      <Footer />
    </>
  );
}
