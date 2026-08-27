import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import GetStartedSection from "../components/GetStartedSection";
import Hero from "../components/Hero";
import IndustriesSection from "../components/IndustriesSection";
import MetricSection from "../components/MetricSection";
import Navbar from "../components/Navbar";
import PageTransition from "../components/PageTransition";
import ScrollButtons from "../components/ScrollButtons";
import ScrollToTop from "../components/ScrollToTop";
import Services from "../components/Services";
import TechnologyCloud from "../components/TechnologyCloud";
import TrustLogos from "../components/TrustLogos";
import WhyDideccan from "../components/WhyDideccan";
import AboutPanel from "../components/Navbar/AboutPanel";
import ServicesDropdown from "../components/Navbar/ServicesDropdown";
import BusinessGuider from "../Pages/BusinessGuider";
import FAQ from "../Pages/FAQ";
import HappyRide from "../Pages/HappyRide";
import Mobotos from "../Pages/Mobotos";
import MyFinaz from "../Pages/MyFinaz";
import PrivacyPolicy from "../Pages/PrivacyPolicy";
import Products from "../Pages/Products";
import StudentBook from "../Pages/StudentBook";
import TermsConditions from "../Pages/TermsConditions";
import TirumalaYatra from "../Pages/TirumalaYatra";

function HashScroll() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) return undefined;
    const id = hash.replace("#", "");
    const timer = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 160);
    return () => window.clearTimeout(timer);
  }, [hash, pathname]);

  return null;
}

function HomePage() {
  return (
    <main>
      <Hero />
      <MetricSection />
      <About />
      <Services />
      <IndustriesSection />
      <TechnologyCloud />
      <WhyDideccan />
      <TrustLogos />
      <GetStartedSection />
    </main>
  );
}

function Routers() {
  return (
    <Router>
      <ScrollToTop />
      <HashScroll />
      <Navbar />
      <div id="main-content">
        <PageTransition>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/contactus" element={<Contact />} />
            <Route path="/StudentBook" element={<StudentBook />} />
            <Route path="/HappyRide" element={<HappyRide />} />
            <Route path="/BusinessGuider" element={<BusinessGuider />} />
            <Route path="/TirumalaYatra" element={<TirumalaYatra />} />
            <Route path="/MyFinaz" element={<MyFinaz />} />
            <Route path="/Mobotos" element={<Mobotos />} />
            <Route path="/FAQ" element={<FAQ />} />
            <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
            <Route path="/TermsConditions" element={<TermsConditions />} />
            <Route path="/Services" element={<ServicesDropdown />} />
            <Route path="/About" element={<AboutPanel />} />
          </Routes>
        </PageTransition>
      </div>
      <Footer />
      <ScrollButtons />
    </Router>
  );
}

export default Routers;
