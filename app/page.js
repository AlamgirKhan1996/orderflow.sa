import Navbar            from "@/components/Navbar";
import LoadingScreen     from "@/components/LoadingScreen";
import HeroSection       from "@/sections/HeroSection";
import OrderFlowSection  from "@/sections/OrderFlowSection";
import RestaurantSection from "@/sections/RestaurantSection";
import DeliverySection   from "@/sections/DeliverySection";
import CustomerSection   from "@/sections/CustomerSection";
import CTASection        from "@/sections/CTASection";
import Footer            from "@/components/Footer";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Navbar />
      <main>
        <HeroSection />
        <OrderFlowSection />
        <RestaurantSection />
        <DeliverySection />
        <CustomerSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
