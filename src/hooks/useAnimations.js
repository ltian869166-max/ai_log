import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useAnimations() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      // Skip all animations when user prefers reduced motion
      requestAnimationFrame(() => ScrollTrigger.refresh());
      return;
    }

    const hero = document.querySelector("#hero");
    if (!hero) return;

    const heroMask = hero.querySelector(".hero-mask");
    const mainTitle = hero.querySelector(".hero-main-title");
    const stars = hero.querySelectorAll(".hero-star-icon");
    const subTitle = hero.querySelector(".hero-sub-title");
    const signature = hero.querySelector(".hero-signature");
    const taglines = hero.querySelector(".hero-taglines");
    const taglineP = taglines ? taglines.querySelectorAll("p") : [];

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    gsap.set(mainTitle, { scaleX: 1.4, scaleY: 0.25, opacity: 0, y: -40 });
    gsap.set(subTitle, { x: -120, opacity: 0 });
    gsap.set(signature, { opacity: 0, scale: 0.6, rotation: -8 });
    stars.forEach((s) => gsap.set(s, { opacity: 0, scale: 0.3 }));
    if (taglineP.length) gsap.set(taglineP, { opacity: 0, y: 24 });

    if (heroMask) {
      tl.to(heroMask, { y: "-100%", duration: 0.4, ease: "power4.inOut" }, 0);
    }

    tl.to(mainTitle, { scaleX: 1, scaleY: 1, opacity: 1, y: 0, duration: 0.6, ease: "power4.out" }, 0.15);
    tl.to(stars, { opacity: 1, scale: 1, duration: 0.35, stagger: 0.1, ease: "power3.out" }, 0.4);
    tl.to(subTitle, { x: 0, opacity: 1, duration: 0.5, ease: "power4.out" }, 0.55);
    tl.to(signature, { opacity: 0.8, scale: 1, rotation: -3, duration: 0.4, ease: "power3.out" }, 0.8);
    tl.to(taglineP, { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power3.out" }, 1.0);

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

    ScrollTrigger.batch("[data-animate-project]", {
      start: "top 82%",
      toggleActions: "play none none none",
      interval: 0.15,
      batchMax: 3,
      onEnter: (els) => {
        els.forEach((card) => {
          const img = card.querySelector("img");
          const body = card.querySelector(".project-card-body");
          gsap.set(img, { clipPath: "inset(0 0 0 100%)", scale: 1.1 });
          const ct = gsap.timeline();
          ct.to(img, { clipPath: "inset(0 0 0 0%)", scale: 1, duration: 1.0, ease: "power4.out" });
          if (body) ct.from(body.children, { y: 24, opacity: 0, duration: 0.5, stagger: 0.08, ease: "power3.out" }, 0.2);
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

    const skillsHeader = document.querySelector("#skills .skills-header");
    if (skillsHeader) {
      gsap.from(skillsHeader, {
        scrollTrigger: { trigger: skillsHeader, start: "top 85%", toggleActions: "play none none none" },
        y: 60, opacity: 0, duration: 1.0, ease: "power4.out",
      });
    }

    ScrollTrigger.batch(".skill-card", {
      start: "top 82%",
      toggleActions: "play none none none",
      interval: 0.1, batchMax: 4,
      onEnter: (els) => {
        gsap.from(els, { y: 50, opacity: 0, scale: 0.95, duration: 0.7, stagger: 0.08, ease: "power3.out" });
      },
    });

    const contactLeft = document.querySelector("#contact .contact-left");
    if (contactLeft) {
      gsap.from(contactLeft.children, {
        scrollTrigger: { trigger: contactLeft, start: "top 82%", toggleActions: "play none none none" },
        y: 50, opacity: 0, duration: 0.7, stagger: 0.12, ease: "power4.out",
      });
    }

    const glassCard = document.querySelector(".contact-glass-card");
    if (glassCard) {
      gsap.from(glassCard, {
        scrollTrigger: { trigger: glassCard, start: "top 78%", toggleActions: "play none none none" },
        x: 80, opacity: 0, duration: 0.6, ease: "power4.out",
      });
    }

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
      tl.kill();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);
}
