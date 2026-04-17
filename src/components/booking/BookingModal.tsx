import { useState, useEffect } from "react";
import { openWhatsApp } from "../../lib/whatsapp";

interface Props { whatsappNumber: string; }
const SERVICES = ["Arenal Volcano · La Fortuna", "Monteverde Cloud Forest", "Manuel Antonio National Park", "Poás Volcano", "Tortuguero Canals", "Río Celeste", "Irazú Volcano", "Bajos del Toro Waterfalls", "Rent a Car", "Airport Transfer", "Family & Group Tour", "Custom Itinerary"];
const TIMES = ["07:00","08:00","09:00","10:00","11:00","13:00","14:00","15:00","16:00"];

export default function BookingModal({ whatsappNumber }: Props) {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [busy, setBusy] = useState(false);
  const [res, setRes] = useState<{ ok: boolean; msg: string } | null>(null);
  const [f, setF] = useState({ name: "", phone: "", service: "", date: "", time: "", notes: "" });
  const min = new Date(Date.now() + 864e5).toISOString().split("T")[0];

  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [open]);
  useEffect(() => { const h = () => setOpen(true); window.addEventListener("open-booking", h); return () => window.removeEventListener("open-booking", h); }, []);
  useEffect(() => { if (!open) return; const h = (e: KeyboardEvent) => { if (e.key === "Escape") cl(); }; window.addEventListener("keydown", h); return () => window.removeEventListener("keydown", h); }, [open]);

  const up = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => setF(p => ({ ...p, [e.target.name]: e.target.value }));
  const cl = () => { setOpen(false); setStep(1); setRes(null); setF({ name: "", phone: "", service: "", date: "", time: "", notes: "" }); };

  async function go() {
    setBusy(true); setRes(null);
    openWhatsApp({ number: whatsappNumber, name: f.name, service: f.service, date: f.date, time: f.time });
    setRes({ ok: true, msg: "WhatsApp opened. We'll respond shortly!" });
    setBusy(false);
  }

  const inp = "w-full rounded-xl border border-charcoal/10 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-[#0f3d2e] focus:ring-2 focus:ring-[#0f3d2e]/20";

  return (
    <>
      <button onClick={() => setOpen(true)} className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:scale-110 transition-transform md:h-16 md:w-16" aria-label="WhatsApp">
        <svg className="h-7 w-7 md:h-8 md:w-8" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-[#0f2318]/60 backdrop-blur-sm" onClick={cl} />
          <div className="relative z-10 mx-4 w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-3xl bg-white p-6 md:p-8 shadow-2xl">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-[#0f2318]" style={{ fontFamily: '"Fraunces", Georgia, serif' }}>Plan Your Trip</h2>
                <p className="mt-1 text-sm text-[#0f2318]/50">{step === 1 ? "Connect via WhatsApp" : step === 2 ? "Tell us about your trip" : "Pick a date & time"}</p>
              </div>
              <button onClick={cl} className="text-[#0f2318]/40 hover:text-[#0f2318]">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>

            {res && <div className={`mb-4 rounded-2xl p-4 text-sm ${res.ok ? "bg-[#0f3d2e]/10 text-[#0f3d2e]" : "bg-red-50 text-red-600"}`}>{res.msg}{res.ok && <button onClick={cl} className="block mt-2 underline">Close</button>}</div>}

            {!res && <>
              {step === 1 && <div className="flex flex-col gap-3">
                <button onClick={() => setStep(2)} className="flex items-center gap-4 rounded-2xl border border-charcoal/10 p-4 text-left hover:border-[#25D366] transition-all">
                  <div className="h-11 w-11 shrink-0 bg-[#25D366] rounded-full text-white flex items-center justify-center"><svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg></div>
                  <div><p className="font-semibold text-[#0f2318]">WhatsApp</p><p className="text-xs text-[#0f2318]/50">Instant response, we speak English & Spanish</p></div>
                </button>
              </div>}
              {step === 2 && <div className="flex flex-col gap-4">
                <input name="name" value={f.name} onChange={up} placeholder="Full name *" className={inp} />
                <input name="phone" type="tel" value={f.phone} onChange={up} placeholder="Phone (with country code) *" className={inp} />
                <select name="service" value={f.service} onChange={up} className={inp}><option value="">Select service *</option>{SERVICES.map(s => <option key={s}>{s}</option>)}</select>
                <div className="flex gap-3 pt-2"><button onClick={() => setStep(1)} className="rounded-xl border border-charcoal/10 px-5 py-3 text-sm text-[#0f2318]/50">Back</button><button onClick={() => setStep(3)} disabled={!(f.name && f.phone && f.service)} className="flex-1 rounded-xl bg-[#0f3d2e] text-white px-5 py-3 text-sm font-semibold hover:bg-[#08251b] disabled:opacity-40 transition-colors">Continue</button></div>
              </div>}
              {step === 3 && <div className="flex flex-col gap-4">
                <input name="date" type="date" min={min} value={f.date} onChange={up} className={inp} />
                <div className="grid grid-cols-3 gap-2">{TIMES.map(t => <button key={t} type="button" onClick={() => setF(p => ({ ...p, time: t }))} className={`rounded-lg border px-3 py-2 text-sm transition-all ${f.time === t ? "border-[#0f3d2e] bg-[#0f3d2e] text-white" : "border-charcoal/10 hover:border-[#0f3d2e]"}`}>{t}</button>)}</div>
                <textarea name="notes" value={f.notes} onChange={up} rows={2} placeholder="Number of people, special requests..." className={`${inp} resize-none`} />
                <div className="flex gap-3 pt-2"><button onClick={() => setStep(2)} className="rounded-xl border border-charcoal/10 px-5 py-3 text-sm text-[#0f2318]/50">Back</button><button onClick={go} disabled={!(f.date && f.time) || busy} className="flex-1 rounded-xl bg-[#0f3d2e] text-white px-5 py-3 text-sm font-semibold hover:bg-[#08251b] disabled:opacity-40 transition-colors">{busy ? "..." : "Send via WhatsApp"}</button></div>
              </div>}
            </>}
          </div>
        </div>
      )}
    </>
  );
}
