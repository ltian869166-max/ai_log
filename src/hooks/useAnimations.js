import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useAnimations() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    /* ===== Hero Entrance ===== */
    const hero = document.querySelector("#hero");
    if (hero) {
      const heroTitle = hero.querySelector(".hero-main-title");
      const heroSub = hero.querySelector(".hero-sub-title");
      const heroTaglines = hero.querySelector(".hero-taglines");
      const heroActions = hero.querySelector(".hero-actions");
      const heroScroll = hero.querySelector(".hero-scroll-hint");

      if (!prefersReducedMotion) {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        if (heroTitle) gsap.set(heroTitle, { y: 60, opacity: 0 });
        if (heroSub) gsap.set(heroSub, { x: -60, opacity: 0 });
        if (heroTaglines) gsap.set(heroTaglines, { y: 20, opacity: 0 });
        if (heroActions) gsap.set(heroActions, { y: 30, opacity: 0 });
        if (heroScroll) gsap.set(heroScroll, { opacity: 0 });

        if (heroTitle) tl.to(heroTitle, { y: 0, opacity: 1, duration: 0.8 }, 0.2);
        if (heroSub) tl.to(heroSub, { x: 0, opacity: 1, duration: 0.6 }, 0.5);
        if (heroTaglines) tl.to(heroTaglines, { y: 0, opacity: 1, duration: 0.5 }, 0.7);
        if (heroActions) tl.to(heroActions, { y: 0, opacity: 1, duration: 0.5 }, 0.9);
        if (heroScroll) tl.to(heroScroll, { opacity: 1, duration: 0.4 }, 1.2);
      } else {
        // Reduced motion: show everything immediately
        [heroTitle, heroSub, heroTaglines, heroActions, heroScroll].forEach(el => {
          if (el) gsap.set(el, { opacity: 1 });
        });
      }
    }

    if (prefersReducedMotion) {
      requestAnimationFrame(() => ScrollTrigger.refresh());
      return;
    }

    /* ===== About Section ===== */
    ScrollTrigger.batch("[data-animate-about]", {
      start: "top 82%",
      toggleActions: "play none none none",
      interval: 0.1,
      batchMax: 4,
      onEnter: (els) => {
        const t = els[0].dataset.animateAbout;
        if (t === "card") gsap.from(els, { x: -60, opacity: 0, duration: 0.9, stagger: 0.12, ease: "power4.out" });
        else if (t === "info") gsap.from(els, { y: 40, opacity: 0, duration: 0.7, stagger: 0.08, ease: "power3.out" });
        else if (t === "stat") gsap.from(els, { y: 30, opacity: 0, duration: 0.6, stagger: 0.1, ease: "power3.out" });
        else if (t === "tl") gsap.from(els, { y: 50, opacity: 0, duration: 0.8, stagger: 0.15, ease: "power4.out" });
      },
    });

    const aboutTitle = document.querySelector(".about-header");
    if (aboutTitle) {
      gsap.from(aboutTitle, {
        scrollTrigger: { trigger: aboutTitle, start: "top 85%", toggleActions: "play none none none" },
        y: 60, opacity: 0, duration: 1.0, ease: "power4.out",
      });
    }

    /* ===== Projects Section ===== */
    ScrollTrigger.batch("[data-animate-project]", {
      start: "top 82%",
      toggleActions: "play none none none",
      interval: 0.15,
      batchMax: 3,
      onEnter: (els) => {
        els.forEach((card) => {
          const img = card.querySelector("img");
          gsap.set(img, { clipPath: "inset(0 0 0 100%)", scale: 1.1 });
          gsap.to(img, { clipPath: "inset(0 0 0 0%)", scale: 1, duration: 1.0, ease: "power4.out" });
        });
      },
    });

    const projHeader = document.querySelector("#projects .projects-header");
    if (projHeader) {
      gsap.from(projHeader, {
        scrollTrigger: { trigger: projHeader, start: "top 85%", toggleActions: "play none none none" },
        y: 60, opacity: 0, duration: 1.0, ease: "power4.out",
      });
    }

    /* ===== Skills Section — scale + stagger (varied from other sections) ===== */
    const skillsHeader = document.querySelector("#skills .skills-header");
    if (skillsHeader) {
      gsap.from(skillsHeader, {
        scrollTrigger: { trigger: skillsHeader, start: "top 85%", toggleActions: "play none none none" },
        scale: 0.95, opacity: 0, duration: 0.8, ease: "power2.out",
      });
    }

    ScrollTrigger.batch(".skill-card", {
      start: "top 82%",
      toggleActions: "play none none none",
      interval: 0.1, batchMax: 4,
      onEnter: (els) => {
        gsap.from(els, { scale: 0.92, opacity: 0, duration: 0.6, stagger: 0.08, ease: "back.out(1.2)" });
      },
    });

    /* ===== Contact Section — glass card slides in from right ===== */
    const contactLeft = document.querySelector("#contact .contact-left");
    if (contactLeft) {
      gsap.from(contactLeft.children, {
        scrollTrigger: { trigger: contactLeft, start: "top 82%", toggleActions: "play none none none" },
        y: 40, opacity: 0, duration: 0.7, stagger: 0.12, ease: "power4.out",
      });
    }

    const glassCard = document.querySelector(".contact-glass-card");
    if (glassCard) {
      gsap.from(glassCard, {
        scrollTrigger: { trigger: glassCard, start: "top 78%", toggleActions: "play none none none" },
        x: 80, opacity: 0, duration: 0.6, ease: "power4.out",
      });
    }

    /* ===== Navbar scroll effect ===== */
    const navbar = document.querySelector(".navbar");
    if (navbar) {
      gsap.from(navbar, {
        scrollTrigger: { trigger: document.body, start: "top -80px" },
        backgroundColor: "rgba(0,0,0,0.6)",
        backdropFilter: "blur(16px)",
        duration: 0.3,
        ease: "power2.out",
      });
    }

    requestAnimationFrame(() => ScrollTrigger.refresh());

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);
}
