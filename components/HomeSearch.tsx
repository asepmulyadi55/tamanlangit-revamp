"use client";
import { useEffect } from "react";

export default function HomeSearch() {
  useEffect(() => {
    const form = document.getElementById("searchForm") as HTMLFormElement | null;
    if (!form) return;
    const err = document.getElementById("searchError") as HTMLElement | null;
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const ci = (document.getElementById("checkIn") as HTMLInputElement)?.value;
      const co = (document.getElementById("checkOut") as HTMLInputElement)?.value;
      const g = (document.getElementById("guests") as HTMLInputElement)?.value || "1";
      if (!ci || !co) {
        if (err) err.textContent = "Tanggal wajib diisi.";
        return;
      }
      if (new Date(co) < new Date(ci)) {
        if (err) err.textContent = "Check-out harus setelah check-in.";
        return;
      }
      const q = new URLSearchParams({ checkIn: ci, checkOut: co, guests: g }).toString();
      window.location.href = `/paket-wisata?${q}`;
    });
  }, []);
  return null;
}