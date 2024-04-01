import CustomerReviews from "@/templates/CustomerReviews";
import Hero from "@/templates/Hero";
import Services from "@/templates/Services";
import SpecialOffer from "@/templates/SpecialOffer";
import Subscribe from "@/templates/Subscribe";
import SuperQuality from "@/templates/SuperQuality";
import PopularProducts from "@/templates/PopularProducts";
import Footer from "@/layouts/Footer";

const Home = () => (
  <main className="reletive">
     <section className="xl:padding-l wide:padding-r padding-b">
      <Hero />
    </section> 
    <section className="padding">
      <PopularProducts />
    </section>

    <section className="padding">
      <SuperQuality />
    </section>
    <section className="padding">
      <Services />
    </section>
    <section className="padding">
      <SpecialOffer />
    </section>
    <section className="padding bg-pale-blue">
      <CustomerReviews />
    </section>
   
    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe />
    </section>
    <section className="padding bg-black padding-x padding-t pb-8">
      <Footer />
    </section>

  </main>
);

export default Home;
