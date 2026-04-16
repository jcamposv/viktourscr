interface WhatsAppMessageOptions { number: string; name?: string; service?: string; date?: string; time?: string; customMessage?: string; }

export function buildWhatsAppURL(o: WhatsAppMessageOptions): string {
  if (o.customMessage) return `https://wa.me/${o.number}?text=${encodeURIComponent(o.customMessage)}`;
  const p = ["Hi Viktours! I'm interested in booking a trip with you."];
  if (o.name) p.push(`My name is ${o.name}.`);
  if (o.service) p.push(`I'm interested in: ${o.service}.`);
  if (o.date) p.push(`Preferred date: ${o.date}.`);
  if (o.time) p.push(`Preferred time: ${o.time}.`);
  p.push("Could you please provide availability and details? Thank you!");
  return `https://wa.me/${o.number}?text=${encodeURIComponent(p.join("\n"))}`;
}

export function openWhatsApp(o: WhatsAppMessageOptions): void { window.open(buildWhatsAppURL(o), "_blank", "noopener,noreferrer"); }
