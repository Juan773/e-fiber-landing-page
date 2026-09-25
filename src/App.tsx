import { useEffect } from "react";
import Benefits from "./components/Benefits";
import Coverage from "./components/Coverage";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Plans from "./components/Plans";
import Referral from "./components/Referral";
import Uses from "./components/Uses";
import WhatsAppButton from "./components/WhatsAppButton";
import WhyFiber from "./components/WhyFiber";

/** Aparición suave de tarjetas al entrar en pantalla. */
function useReveal() {
  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>(".reveal");
    if (!("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

export default function App() {
  useReveal();
  return (
    <>
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <Header />
      <main id="contenido">
        <Hero />
        <Plans />
        <Benefits />
        <Referral />
        <WhyFiber />
        <Coverage />
        <Uses />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
