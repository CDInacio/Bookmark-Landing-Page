// sm	640px	@media (min-width: 640px)
// md	768px	@media (min-width: 768px)
// lg	1024px	@media (min-width: 1024px)
// xl	1280px	@media (min-width: 1280px)
// 2xl	1536px	@media (min-width: 1536px)

import ContactUs from "@/components/Contact";
import Extensions from "@/components/Extensions";
import Faq from "@/components/FAQ";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Extensions />
      <Faq />
      <ContactUs />
    </main>
  );
}
