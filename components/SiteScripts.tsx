"use client";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function SiteScripts() {
  const pathname = usePathname();
  const obsRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Footer year
    const yearEl = document.getElementById("year");
    if (yearEl) {
      yearEl.textContent = String(new Date().getFullYear());
    }

    // Navbar shadow on scroll
    const nav = document.getElementById("nav");
    const onScroll = () => {
      if (!nav) return;
      if (window.scrollY > 10) nav.classList.add("shadow");
      else nav.classList.remove("shadow");
    };
    window.addEventListener("scroll", onScroll);

    // Dark mode toggle
    const toggleBtn = document.getElementById("toggleTheme");
    const root = document.documentElement;
    const applyTheme = (isDark: boolean) => {
      root.classList.toggle("dark", isDark);
      if (toggleBtn) toggleBtn.textContent = isDark ? "Light" : "Dark";
      localStorage.setItem("theme", isDark ? "dark" : "light");
    };
    (function initTheme() {
      const pref = localStorage.getItem("theme") || "system";
      const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      applyTheme(pref === "dark" || (pref === "system" && systemDark));
    })();
    const toggleHandler = () => applyTheme(!root.classList.contains("dark"));
    toggleBtn?.addEventListener("click", toggleHandler);

    // Reveal on scroll
    // Create shared IntersectionObserver for reveal elements
    if (!obsRef.current) {
      obsRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) e.target.classList.add("show");
          });
        },
        { threshold: 0.15 }
      );
    }
    // Initial observe on first mount
    document.querySelectorAll<HTMLElement>(".reveal").forEach((el) => obsRef.current?.observe(el));

    // Mobile menu toggle
    const menuBtn = document.getElementById("menuBtn");
    const mobileMenu = document.getElementById("mobileMenu");
    const menuToggleHandler = () => {
      if (!mobileMenu || !menuBtn) return;
      // Toggle hidden class
      mobileMenu.classList.toggle("hidden");
      const isOpen = !mobileMenu.classList.contains("hidden");
      menuBtn.setAttribute("aria-expanded", String(isOpen));
    };
    menuBtn?.addEventListener("click", menuToggleHandler);
    // Close on link click
    const mobileLinks = mobileMenu?.querySelectorAll<HTMLAnchorElement>("a");
    const closeMenu = () => {
      if (!mobileMenu || !menuBtn) return;
      mobileMenu.classList.add("hidden");
      menuBtn.setAttribute("aria-expanded", "false");
    };
    mobileLinks?.forEach((a) => a.addEventListener("click", closeMenu));
    // Close on Escape
    const escHandler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    document.addEventListener("keydown", escHandler);

    return () => {
      window.removeEventListener("scroll", onScroll);
      toggleBtn?.removeEventListener("click", toggleHandler);
      obsRef.current?.disconnect();
      // Cleanup mobile menu handlers
      menuBtn?.removeEventListener("click", menuToggleHandler);
      mobileLinks?.forEach((a) => a.removeEventListener("click", closeMenu));
      document.removeEventListener("keydown", escHandler);
    };
  }, []);

  // Re-observe reveal elements on route change
  useEffect(() => {
    const obs = obsRef.current;
    if (!obs) return;
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    // reset and observe new elements
    els.forEach((el) => {
      el.classList.remove("show");
      obs.observe(el);
    });
    return () => {
      els.forEach((el) => obs.unobserve(el));
    };
  }, [pathname]);

  return null;
}