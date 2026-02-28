import { motion } from "framer-motion";
import { MessageCircle, ChevronDown } from "lucide-react";
import { WHATSAPP_BASE } from "@/lib/data";
import heroBackground from "@/statics/imgs/header.jpg";

const Hero = () => (
  <section
    id="inicio"
    className="relative min-h-screen flex items-center justify-center overflow-hidden"
  >
    {/* Background */}
    <img
      src={heroBackground}
      alt=""
      className="absolute inset-0 h-full w-full object-cover object-center"
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-primary/60 to-black/70" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,214,102,0.18),transparent_35%),linear-gradient(180deg,rgba(0,0,0,0.15),rgba(0,0,0,0.45))]" />
    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djJoLTJ2LTJoMnptMC00aDJ2MmgtMmwtMnptLTQgOHYyaC0ydi0yaDJ6bTIwLTEydjJoLTJ2LTJoMnptLTQgMHYyaC0ydi0yaDJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20" />

    <div className="relative z-10 section-container text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <p className="text-primary-foreground/80 text-sm sm:text-base font-medium tracking-widest uppercase mb-4">
          Hospedaje boutique en Quito
        </p>
        <h1 className="heading-display text-primary-foreground text-4xl sm:text-5xl lg:text-7xl mb-6 text-balance">
          Tu refugio de paz
          <br />
          <span className="text-accent">junto a La Carolina</span>
        </h1>
        <p className="body-large text-primary-foreground/85 max-w-2xl mx-auto mb-10">
          Tranquilo, limpio, seguro. Un espacio donde descansar profundamente o trabajar con calma,
          a pasos del parque más emblemático de Quito.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        <a
          href={WHATSAPP_BASE}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full whatsapp-gradient text-accent-foreground font-semibold text-base transition-all hover:scale-105 shadow-lg"
        >
          <MessageCircle size={20} />
          Reservar por WhatsApp
        </a>
        <a
          href="#habitaciones"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-primary-foreground/30 text-primary-foreground font-semibold text-base hover:bg-primary-foreground/10 transition-all"
        >
          Ver habitaciones
        </a>
      </motion.div>
    </div>

    {/* Scroll indicator */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2"
    >
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronDown size={28} className="text-primary-foreground/50" />
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
