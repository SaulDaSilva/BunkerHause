import { FAQ_ITEMS } from "@/lib/data";
import ScrollReveal from "./ScrollReveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => (
  <section className="section-padding bg-secondary/30">
    <div className="section-container max-w-3xl">
      <ScrollReveal>
        <div className="text-center mb-12">
          <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3">Preguntas frecuentes</p>
          <h2 className="heading-section text-foreground">Todo lo que necesitas saber</h2>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <Accordion type="single" collapsible className="space-y-3">
          {FAQ_ITEMS.map((item, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-card border border-border/50 rounded-xl px-6 overflow-hidden"
            >
              <AccordionTrigger className="text-sm sm:text-base font-medium text-foreground hover:no-underline py-5 text-left">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground pb-5 leading-relaxed">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </ScrollReveal>
    </div>
  </section>
);

export default FAQ;
