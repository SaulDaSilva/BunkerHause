import { useState, FormEvent } from "react";
import { buildWhatsAppLink } from "@/lib/data";
import { MessageCircle, Send, CalendarDays, Users, User } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const ContactSection = () => {
  const [form, setForm] = useState({
    name: "",
    checkIn: "",
    checkOut: "",
    guests: "1",
    message: "",
  });
  const [contactForm, setContactForm] = useState({ name: "", email: "", message: "" });
  const [contactSent, setContactSent] = useState(false);

  const handleWhatsApp = (e: FormEvent) => {
    e.preventDefault();
    const url = buildWhatsAppLink(form.name, form.checkIn, form.checkOut, form.guests, form.message);
    window.open(url, "_blank");
  };

  const handleContact = (e: FormEvent) => {
    e.preventDefault();
    if (contactForm.name && contactForm.email && contactForm.message) {
      setContactSent(true);
      setTimeout(() => setContactSent(false), 3000);
    }
  };

  return (
    <section id="contacto" className="section-padding">
      <div className="section-container">
        <ScrollReveal>
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3">Reserva ahora</p>
            <h2 className="heading-section text-foreground mb-4">¿Listo para tu estadía?</h2>
            <p className="body-large text-muted-foreground max-w-2xl mx-auto">
              Escríbenos por WhatsApp y te respondemos en minutos. También puedes dejarnos un mensaje.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* WhatsApp booking form */}
          <ScrollReveal>
            <div className="bg-card rounded-2xl p-6 sm:p-8 border border-border/50 shadow-lg">
              <div className="flex items-center gap-2 mb-6">
                <MessageCircle size={20} className="text-whatsapp" />
                <h3 className="font-display text-xl font-semibold text-foreground">Reservar por WhatsApp</h3>
              </div>

              <form onSubmit={handleWhatsApp} className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 flex items-center gap-1.5">
                    <User size={14} className="text-muted-foreground" /> Nombre
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                    placeholder="Tu nombre"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 flex items-center gap-1.5">
                      <CalendarDays size={14} className="text-muted-foreground" /> Check-in
                    </label>
                    <input
                      type="date"
                      required
                      value={form.checkIn}
                      onChange={(e) => setForm({ ...form, checkIn: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 flex items-center gap-1.5">
                      <CalendarDays size={14} className="text-muted-foreground" /> Check-out
                    </label>
                    <input
                      type="date"
                      required
                      value={form.checkOut}
                      onChange={(e) => setForm({ ...form, checkOut: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 flex items-center gap-1.5">
                    <Users size={14} className="text-muted-foreground" /> Huéspedes
                  </label>
                  <select
                    value={form.guests}
                    onChange={(e) => setForm({ ...form, guests: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                  >
                    {[1, 2, 3, 4].map((n) => (
                      <option key={n} value={n}>{n} {n === 1 ? "huésped" : "huéspedes"}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5">Mensaje (opcional)</label>
                  <textarea
                    rows={2}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
                    placeholder="¿Alguna solicitud especial?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full whatsapp-gradient text-accent-foreground font-semibold text-sm hover:scale-[1.02] transition-transform shadow-md"
                >
                  <MessageCircle size={18} />
                  Enviar por WhatsApp
                </button>
              </form>
            </div>
          </ScrollReveal>

          {/* Contact form */}
          <ScrollReveal delay={0.15}>
            <div className="bg-card rounded-2xl p-6 sm:p-8 border border-border/50 shadow-lg">
              <div className="flex items-center gap-2 mb-6">
                <Send size={18} className="text-primary" />
                <h3 className="font-display text-xl font-semibold text-foreground">Envíanos un mensaje</h3>
              </div>

              <form onSubmit={handleContact} className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Nombre</label>
                  <input
                    type="text"
                    required
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Correo electrónico</label>
                  <input
                    type="email"
                    required
                    value={contactForm.email}
                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Mensaje</label>
                  <textarea
                    rows={4}
                    required
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:scale-[1.02] transition-transform"
                >
                  <Send size={16} />
                  {contactSent ? "¡Mensaje enviado!" : "Enviar mensaje"}
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
