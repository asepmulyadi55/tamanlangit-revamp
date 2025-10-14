"use client";
import HomeSearch from "./HomeSearch";

export default function SearchPanel() {
  return (
    <>
      <form
        id="searchForm"
        aria-label="Pencarian ketersediaan camping"
        className="mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr_auto] gap-3 md:gap-4 items-end rounded-3xl border border-black/5 bg-white/95 dark:bg-slate-900/95 shadow-soft p-4"
      >
        {/* Check-in */}
        <div className="flex flex-col">
          <span className="mb-1 text-xs font-medium text-slate-600 dark:text-slate-300">Check-in</span>
          <div className="group relative flex items-center rounded-full ring-1 ring-black/10 bg-white dark:bg-slate-900 focus-within:ring-2 focus-within:ring-tlp-forest h-12 px-4">
            <input
              type="date"
              id="checkIn"
              required
              className="w-full bg-transparent outline-none appearance-none text-sm placeholder:text-slate-400"
            />
            <svg className="ml-3 h-5 w-5 text-slate-400 group-focus-within:text-tlp-forest" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" d="M8 2v3m8-3v3M4 9h16M5 6h14a1 1 0 011 1v12a1 1 0 01-1 1H5a1 1 0 01-1-1V7a1 1 0 011-1z" />
            </svg>
          </div>
        </div>

        {/* Check-out */}
        <div className="flex flex-col">
          <span className="mb-1 text-xs font-medium text-slate-600 dark:text-slate-300">Check-out</span>
          <div className="group relative flex items-center rounded-full ring-1 ring-black/10 bg-white dark:bg-slate-900 focus-within:ring-2 focus-within:ring-tlp-forest h-12 px-4">
            <input
              type="date"
              id="checkOut"
              required
              className="w-full bg-transparent outline-none appearance-none text-sm placeholder:text-slate-400"
            />
            <svg className="ml-3 h-5 w-5 text-slate-400 group-focus-within:text-tlp-forest" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" d="M8 2v3m8-3v3M4 9h16M5 6h14a1 1 0 011 1v12a1 1 0 01-1 1H5a1 1 0 01-1-1V7a1 1 0 011-1z" />
            </svg>
          </div>
        </div>

        {/* Guests */}
        <div className="flex flex-col">
          <span className="mb-1 text-xs font-medium text-slate-600 dark:text-slate-300">Guests</span>
          <div className="group relative flex items-center rounded-full ring-1 ring-black/10 bg-white dark:bg-slate-900 focus-within:ring-2 focus-within:ring-tlp-forest h-12 px-4">
            <input
              type="number"
              id="guests"
              min={1}
              defaultValue={2}
              required
              className="w-full bg-transparent outline-none text-sm"
            />
            <svg className="ml-3 h-5 w-5 text-slate-400 group-focus-within:text-tlp-forest" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" d="M16 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z" />
            </svg>
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="rounded-full bg-tlp-forest text-white font-medium hover:opacity-90 active:opacity-80 h-12 px-6"
        >
          Search
        </button>
      </form>
      <p id="searchError" role="alert" aria-live="polite" className="mt-2 text-sm text-red-200 md:text-red-300"></p>
      <HomeSearch />
    </>
  );
}