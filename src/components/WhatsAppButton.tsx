import { MessageCircle } from "lucide-react";
import { WHATSAPP_BASE } from "@/lib/data";
import { motion } from "framer-motion";

const WhatsAppButton = () => (
  <>
    {/* Floating button (desktop) */}
    <motion.a
      href={WHATSAPP_BASE}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring" }}
      className="hidden lg:flex fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full whatsapp-gradient items-center justify-center shadow-lg hover:scale-110 transition-transform"
      aria-label="WhatsApp"
    >
      <MessageCircle size={26} className="text-accent-foreground" />
    </motion.a>

    {/* Sticky mobile CTA */}
    <div className="sticky-cta-mobile">
      <a
        href={WHATSAPP_BASE}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 w-full py-3 rounded-full whatsapp-gradient text-accent-foreground font-semibold text-sm shadow-md"
      >
        <MessageCircle size={18} />
        Reservar por WhatsApp
      </a>
    </div>
  </>
);

export default WhatsAppButton;
