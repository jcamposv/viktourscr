import { useState, useEffect } from "react";
import { navigation } from "../../data/site";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [open]);

  return (
    <>
      <button onClick={() => setOpen(!open)} className="lg:hidden flex items-center justify-center w-10 h-10" style={{ position: "relative", zIndex: 70 }} aria-label="Menu">
        <div className="flex flex-col gap-1.5">
          <span className={`block w-6 h-[1.5px] transition-all duration-300 ${open ? "rotate-45 translate-y-[7px] bg-[#0f2318]" : "bg-[#0f2318]"}`} />
          <span className={`block w-6 h-[1.5px] transition-all duration-300 ${open ? "opacity-0" : "bg-[#0f2318]"}`} />
          <span className={`block w-6 h-[1.5px] transition-all duration-300 ${open ? "-rotate-45 -translate-y-[7px] bg-[#0f2318]" : "bg-[#0f2318]"}`} />
        </div>
      </button>
      {open && (
        <div className="lg:hidden" style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, width: "100vw", height: "100vh", backgroundColor: "#fafdf6", zIndex: 60, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "1.5rem" }}>
          <a href="/" onClick={() => setOpen(false)} style={{ position: "absolute", top: "1rem", left: "1rem" }}>
            <img src="/logo.png" alt="Viktours" style={{ height: "48px" }} />
          </a>
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="text-2xl font-semibold text-[#0f2318] hover:text-[#0f3d2e] transition-colors" style={{ fontFamily: '"Fraunces", Georgia, serif' }}>{item.label}</a>
          ))}
          <button onClick={() => { setOpen(false); setTimeout(() => window.dispatchEvent(new CustomEvent("open-booking")), 150); }} className="mt-4 bg-[#0f3d2e] text-white font-semibold rounded-full px-8 py-3.5 text-sm hover:bg-[#08251b] transition-colors">
            Plan My Trip
          </button>
        </div>
      )}
    </>
  );
}
