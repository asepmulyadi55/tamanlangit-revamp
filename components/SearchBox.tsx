"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBox() {
  const router = useRouter();
  const [checkIn, setCheckIn] = useState<string>("");
  const [checkOut, setCheckOut] = useState<string>("");
  const [guests, setGuests] = useState<number>(1);
  const [error, setError] = useState<string>("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!checkIn || !checkOut) {
      setError("Tanggal wajib diisi");
      return;
    }
    const inDate = new Date(checkIn);
    const outDate = new Date(checkOut);
    if (outDate < inDate) {
      setError("Check-out harus lebih lambat atau sama dengan Check-in");
      return;
    }
    if (guests < 1) {
      setGuests(1);
    }
    const params = new URLSearchParams({ checkIn, checkOut, guests: String(Math.max(1, guests)) });
    router.push(`/paket-wisata?${params.toString()}`);
  };

  return (
    <form onSubmit={onSubmit} id="search" aria-label="Pencarian" className="card-base">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="checkIn" style={{ color: "var(--foreground)" }}>Check-in</label>
          <input id="checkIn" type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} className="w-full rounded-xl border px-3 py-2" style={{ background: "var(--background)", color: "var(--foreground)" }} />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="checkOut" style={{ color: "var(--foreground)" }}>Check-out</label>
          <input id="checkOut" type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} className="w-full rounded-xl border px-3 py-2" style={{ background: "var(--background)", color: "var(--foreground)" }} />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="guests" style={{ color: "var(--foreground)" }}>Guests</label>
          <input id="guests" type="number" min={1} value={guests} onChange={(e) => setGuests(Number(e.target.value))} className="w-full rounded-xl border px-3 py-2" style={{ background: "var(--background)", color: "var(--foreground)" }} />
        </div>
        <div className="flex items-end">
          <button type="submit" className="btn-brand w-full h-11">Search</button>
        </div>
      </div>
      {error && <p role="alert" className="mt-3 text-red-600">{error}</p>}
    </form>
  );
}