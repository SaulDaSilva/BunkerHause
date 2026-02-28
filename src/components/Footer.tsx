import { NAV_LINKS, WHATSAPP_BASE } from "@/lib/data";
import { MessageCircle, MapPin, Heart } from "lucide-react";
import footerBackground from "@/statics/imgs/fondo.jpg";

const Footer = () => (
  <footer className="relative isolate overflow-hidden text-white">
    <img
      src={footerBackground}
      alt=""
      className="absolute inset-0 h-full w-full object-cover pointer-events-none select-none"
      aria-hidden="true"
    />
    <div
      className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/75"
      aria-hidden="true"
    />

    <div className="section-container relative z-10 py-12 sm:py-16">
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <span className="font-display text-2xl font-bold">
            Bunker<span className="text-accent">Hause</span>
          </span>
          <p className="mt-3 text-sm leading-relaxed text-white/75">
            Tu refugio de paz en Quito. Tranquilo, limpio y seguro a pasos del
            Parque La Carolina.
          </p>
          <div className="mt-4 flex items-center gap-2 text-sm text-white/65">
            <MapPin size={14} />
            <span>Quito, Ecuador</span>
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/85">
            Navegacion
          </h4>
          <ul className="space-y-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/85">
            Contacto
          </h4>
          <a
            href={WHATSAPP_BASE}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full whatsapp-gradient px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-transform hover:scale-105"
          >
            <MessageCircle size={16} />
            WhatsApp
          </a>
          <p className="mt-4 text-xs text-white/60">
            Respondemos en minutos. Escribenos cuando quieras.
          </p>
        </div>
      </div>

      <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/15 pt-6 sm:flex-row">
        <p className="text-xs text-white/50">
          (c) {new Date().getFullYear()} BunkerHause. Todos los derechos
          reservados.
        </p>
        <p className="flex items-center gap-1 text-xs text-white/50">
          Hecho con <Heart size={12} className="text-accent" /> en Quito
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
