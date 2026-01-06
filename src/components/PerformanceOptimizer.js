import { useEffect } from "react";

const PerformanceOptimizer = () => {
  useEffect(() => {
    const preloadAssets = () => {
      if (typeof window === "undefined" || !document) return;

      const links = [
        {
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css",
          as: "style",
        },
      ];

      links.forEach((asset) => {
        if (!document.querySelector(`link[href="${asset.href}"]`)) {
          const link = document.createElement("link");
          link.rel = "preload";
          link.href = asset.href;
          link.as = asset.as;
          link.crossOrigin = "anonymous";
          document.head.appendChild(link);
        }
      });
    };

    const preconnectToDomains = () => {
      if (typeof window === "undefined" || !document) return;

      const domains = [
        "https://fonts.googleapis.com",
        "https://fonts.gstatic.com",
        "https://cdnjs.cloudflare.com",
      ];

      domains.forEach((domain) => {
        if (!document.querySelector(`link[href="${domain}"]`)) {
          const link = document.createElement("link");
          link.rel = "preconnect";
          link.href = domain;
          link.crossOrigin = "anonymous";
          document.head.appendChild(link);
        }
      });
    };

    const initLazyLoad = () => {
      if ("IntersectionObserver" in window && "requestIdleCallback" in window) {
        requestIdleCallback(() => {
          const observer = new IntersectionObserver(
            (entries, obs) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  const img = entry.target;
                  const src = img.dataset.src;

                  if (src) {
                    img.src = src;
                    img.removeAttribute("data-src");

                    if (img.dataset.srcset) {
                      img.srcset = img.dataset.srcset;
                      img.removeAttribute("data-srcset");
                    }
                  }

                  obs.unobserve(img);
                }
              });
            },
            {
              rootMargin: "200px",
              threshold: 0.01,
            }
          );

          document.querySelectorAll("[data-src]").forEach((img) => {
            observer.observe(img);
          });
        });
      }
    };

    const optimizeForMobile = () => {
      if (typeof window === "undefined") return;

      const isMobile =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        );

      if (isMobile) {
        if (window.requestIdleCallback) {
          window.requestIdleCallback(() => {
            const style = document.createElement("style");
            style.textContent = `
              img, video, iframe {
                max-width: 100%;
                height: auto;
              }
              
              * {
                -webkit-tap-highlight-color: transparent;
              }
              
              input, textarea, button {
                font-size: 16px !important;
              }
            `;
            document.head.appendChild(style);
          });
        }
      }
    };

    const preventLayoutShift = () => {
      if (typeof window === "undefined" || !document) return;

      const style = document.createElement("style");
      style.textContent = `
        [data-src] {
          background: #1e293b;
        }
        
        .hero, .about, .projects, .contact {
          content-visibility: auto;
        }
        
        @media (max-width: 768px) {
          * {
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
          
          html {
            -webkit-text-size-adjust: 100%;
          }
          
          .container {
            padding-left: 15px;
            padding-right: 15px;
          }
        }
      `;
      document.head.appendChild(style);
    };

    const optimizeScrolling = () => {
      if (typeof window === "undefined") return;

      let ticking = false;
      const handleScroll = () => {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            const elements = document.querySelectorAll(".animate-on-scroll");
            const scrollY = window.scrollY;

            elements.forEach((el) => {
              const rect = el.getBoundingClientRect();
              if (rect.top < window.innerHeight * 0.75) {
                el.style.opacity = "1";
                el.style.transform = "translateY(0)";
              }
            });

            ticking = false;
          });
          ticking = true;
        }
      };

      window.addEventListener("scroll", handleScroll, { passive: true });
    };

    const cleanup = () => {
      if (typeof window === "undefined") return;
      window.removeEventListener("scroll", handleScroll);
    };

    preloadAssets();
    preconnectToDomains();
    preventLayoutShift();
    optimizeForMobile();
    optimizeScrolling();

    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", initLazyLoad);
    } else {
      initLazyLoad();
    }

    return cleanup;
  }, []);

  return null;
};

export default PerformanceOptimizer;
