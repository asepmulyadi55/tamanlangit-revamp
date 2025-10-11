"use client";
import { useEffect } from "react";

export default function SiteScripts() {
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
    toggleBtn?.addEventListener("click", () => applyTheme(!root.classList.contains("dark")));

    // Reveal on scroll
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("show");
        });
      },
      { threshold: 0.15 }
    );
    document.querySelectorAll<HTMLElement>(".reveal").forEach((el) => obs.observe(el));

    return () => {
      window.removeEventListener("scroll", onScroll);
      toggleBtn?.removeEventListener("click", () => {});
      obs.disconnect();
    };
  }, []);

  return null;
}