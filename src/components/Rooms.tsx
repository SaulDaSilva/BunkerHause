import { useState } from "react";
import { ROOMS, Room, WHATSAPP_BASE } from "@/lib/data";
import { Wifi, Bed, Bath, Lamp, Monitor, Users, X, MessageCircle, Check } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { AnimatePresence, motion } from "framer-motion";

const Rooms = () => {
  const [selected, setSelected] = useState<Room | null>(null);

  return (
    <section id="habitaciones" className="section-padding bg-secondary/30">
      <div className="section-container">
        <ScrollReveal>
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3">Nuestros espacios</p>
            <h2 className="heading-section text-foreground mb-4">Habitaciones pensadas para ti</h2>
            <p className="body-large text-muted-foreground max-w-2xl mx-auto">
              Cada habitación está diseñada para brindarte tranquilidad, buena iluminación y una cama realmente cómoda.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ROOMS.map((room, i) => (
            <ScrollReveal key={room.id} delay={i * 0.1}>
              <div
                className="room-card cursor-pointer group"
                onClick={() => setSelected(room)}
              >
                {/* Image placeholder */}
                <div className={`aspect-[4/3] bg-gradient-to-br ${room.imageGradient} image-placeholder relative overflow-hidden`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Bed size={40} className="text-primary-foreground/40" />
                  </div>
                  <div className="absolute bottom-3 right-3 bg-background/90 backdrop-blur-sm rounded-full px-3 py-1.5 text-xs font-semibold text-foreground">
                    {room.capacity}
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {room.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {room.description}
                  </p>
                  <div className="flex items-baseline justify-between">
                    <div>
                      <span className="text-2xl font-bold text-foreground">${room.price}</span>
                      <span className="text-sm text-muted-foreground">/noche</span>
                    </div>
                    <span className="text-xs text-primary font-medium">Ver detalles →</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Room detail modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-foreground/50 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="bg-card rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal header image */}
              <div className={`aspect-video bg-gradient-to-br ${selected.imageGradient} image-placeholder rounded-t-2xl relative`}>
                <Bed size={56} className="text-primary-foreground/30" />
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-background transition"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="p-6 sm:p-8">
                <h3 className="font-display text-2xl font-semibold text-foreground mb-2">{selected.title}</h3>
                <p className="text-muted-foreground mb-6">{selected.description}</p>

                <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">Comodidades</h4>
                <ul className="space-y-2 mb-6">
                  {selected.amenities.map((a) => (
                    <li key={a} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check size={16} className="text-primary flex-shrink-0" />
                      {a}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div>
                    <span className="text-3xl font-bold text-foreground">${selected.price}</span>
                    <span className="text-muted-foreground">/noche</span>
                  </div>
                  <a
                    href={`${WHATSAPP_BASE}?text=${encodeURIComponent(`¡Hola! Me interesa la ${selected.title} en BunkerHause.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full whatsapp-gradient text-accent-foreground font-semibold text-sm hover:scale-105 transition-transform shadow-md"
                  >
                    <MessageCircle size={16} />
                    Reservar
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Rooms;
