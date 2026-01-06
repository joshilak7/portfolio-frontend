import React, { useState, useEffect, Suspense, lazy, useMemo } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/react";
import "./App.css";
import { Analytics } from "@vercel/analytics/react";

const Projects = lazy(() => import("./components/Projects"));

const preloadResources = () => {
  if (typeof window === "undefined") return;

  const link = document.createElement("link");
  link.rel = "preload";
  link.as = "style";
  link.href =
    "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css";
  link.crossOrigin = "anonymous";
  document.head.appendChild(link);

  const preconnectDomains = [
    "https://fonts.googleapis.com",
    "https://fonts.gstatic.com",
    "https://cdnjs.cloudflare.com",
  ];

  preconnectDomains.forEach((domain) => {
    const preconnect = document.createElement("link");
    preconnect.rel = "preconnect";
    preconnect.href = domain;
    preconnect.crossOrigin = "anonymous";
    document.head.appendChild(preconnect);
  });
};

function App() {
  const [loading, setLoading] = useState(true);

  const loadingDuration = useMemo(() => {
    const isSlowDevice =
      navigator.hardwareConcurrency < 4 || navigator.deviceMemory < 4;
    return isSlowDevice ? 500 : 300;
  }, []);

  useEffect(() => {
    preloadResources();

    const loadFontAwesome = () => {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href =
        "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css";
      link.crossOrigin = "anonymous";
      document.head.appendChild(link);
    };

    if ("requestIdleCallback" in window) {
      requestIdleCallback(loadFontAwesome);
    } else {
      setTimeout(loadFontAwesome, 0);
    }

    const timer = setTimeout(() => {
      setLoading(false);

      document.body.classList.add("app-loaded");
    }, loadingDuration);

    return () => clearTimeout(timer);
  }, [loadingDuration]);

  const LoadingFallback = useMemo(
    () => (
      <div className="loading-screen">
        <div className="loading-spinner"></div>
        <h3>Loading Portfolio...</h3>
      </div>
    ),
    []
  );

  if (loading) {
    return LoadingFallback;
  }

  return (
    <div className="App">
      <div className="animated-bg">
        <div className="bg-shape shape-1"></div>
        <div className="bg-shape shape-2"></div>
        <div className="bg-shape shape-3"></div>
        <div className="bg-shape shape-4"></div>
      </div>

      <Header />
      <Hero />
      <About />

      <Suspense
        fallback={<div className="section-loading">Loading projects...</div>}
      >
        <Projects />
      </Suspense>

      <Contact />
      <Footer />
      <SpeedInsights />
      <Analytics />
    </div>
  );
}

export default React.memo(App);
