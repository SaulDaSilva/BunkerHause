import { TRUST_ITEMS } from "@/lib/data";
import { Sparkles, Moon, MapPin, Shield, Tag } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const iconMap: Record<string, React.ReactNode> = {
  Sparkles: <Sparkles size={22} />,
  Moon: <Moon size={22} />,
  MapPin: <MapPin size={22} />,
  Shield: <Shield size={22} />,
  Tag: <Tag size={22} />,
};

const TrustBar = () => (
  <section className="section-container -mt-12 relative z-20">
    <ScrollReveal>
      <div className="bg-card rounded-2xl shadow-lg border border-border/50 p-6 sm:p-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {TRUST_ITEMS.map((item) => (
            <div key={item.label} className="flex flex-col items-center text-center gap-2">
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                {iconMap[item.icon]}
              </div>
              <span className="text-sm font-medium text-foreground">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  </section>
);

export default TrustBar;
