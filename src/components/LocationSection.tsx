import { NEARBY_PLACES, WHATSAPP_BASE } from "@/lib/data";
import { Trees, ShoppingBag, Coffee, Bus, Mountain, Navigation } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const iconMap: Record<string, React.ReactNode> = {
  Trees: <Trees size={18} />,
  ShoppingBag: <ShoppingBag size={18} />,
  Coffee: <Coffee size={18} />,
  Bus: <Bus size={18} />,
  Mountain: <Mountain size={18} />,
};

const LocationSection = () => (
  <section id="ubicacion" className="section-padding">
    <div className="section-container">
      <ScrollReveal>
        <div className="mb-12 text-center sm:mb-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
            Donde estamos
          </p>
          <h2 className="mb-4 heading-section text-foreground">
            A pasos del Parque La Carolina
          </h2>
          <p className="body-large mx-auto max-w-2xl text-muted-foreground">
            En una de las zonas mas tranquilas y mejor conectadas de Quito.
            Todo lo que necesitas, a minutos de distancia.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid items-start gap-8 lg:grid-cols-2">
        <ScrollReveal>
          <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-card shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.796422506609!2d-78.49346179999999!3d-0.1898287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59b8f0d84515b%3A0x9ad47f6a47b42d65!2sBunker%20Hause!5e0!3m2!1ses!2sec!4v1772303102948!5m2!1ses!2sec"
              title="Mapa de Bunker Hause"
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="space-y-3">
            <h3 className="mb-5 font-display text-xl font-semibold text-foreground">
              Puntos de interes cercanos
            </h3>
            {NEARBY_PLACES.map((place) => (
              <div
                key={place.name}
                className="flex items-center gap-4 rounded-xl border border-border/50 bg-card p-4 transition-colors hover:border-primary/30"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  {iconMap[place.icon]}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">
                    {place.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {place.distance}
                  </p>
                </div>
              </div>
            ))}

            <a
              href={`${WHATSAPP_BASE}?text=${encodeURIComponent("Hola. Me pueden indicar como llegar a BunkerHause?")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
            >
              <Navigation size={16} />
              Como llegar
            </a>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default LocationSection;
