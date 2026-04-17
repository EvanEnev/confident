import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import Beans from "@/components/Beans";
import Location from "@/components/Location";
import OrderCTA from "@/components/OrderCTA";
import Footer from "@/components/Footer";

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
