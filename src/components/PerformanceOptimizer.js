// components/PerformanceOptimizer.js
import { useEffect } from "react";

const PerformanceOptimizer = () => {
  useEffect(() => {
    // Preload critical resources
    const preloadAssets = () => {
      // Preload hero images if any
      const links = [
        { href: "/hero-image.jpg", as: "image" },
        { href: "/profile.jpg", as: "image" },
      ];

      links.forEach((asset) => {
        const link = document.createElement("link");
        link.rel = "preload";
        link.href = asset.href;
        link.as = asset.as;
        document.head.appendChild(link);
      });
    };

    // Load non-critical CSS after page load
    const loadDeferredStyles = () => {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "/deferred-styles.css";
      link.media = "print";
      link.onload = () => {
        link.media = "all";
      };
      document.head.appendChild(link);
    };

    // IntersectionObserver for lazy loading
    const initLazyLoad = () => {
      if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              img.src = img.dataset.src;
              observer.unobserve(img);
            }
          });
        });

        document.querySelectorAll("[data-src]").forEach((img) => {
          observer.observe(img);
        });
      }
    };

    preloadAssets();
    window.addEventListener("load", () => {
      loadDeferredStyles();
      initLazyLoad();
    });

    return () => {
      window.removeEventListener("load", loadDeferredStyles);
    };
  }, []);

  return null;
};

export default PerformanceOptimizer;
