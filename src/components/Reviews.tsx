import { REVIEWS, HIGHLIGHT_CHIPS } from "@/lib/data";
import { Star, Quote } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const Reviews = () => (
  <section id="resenas" className="section-padding bg-secondary/30">
    <div className="section-container">
      <ScrollReveal>
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3">Lo que dicen nuestros huéspedes</p>
          <h2 className="heading-section text-foreground mb-4">Reseñas reales de Google</h2>
          <p className="body-large text-muted-foreground max-w-2xl mx-auto">
            No lo decimos nosotros, lo dicen quienes se han hospedado.
          </p>
        </div>
      </ScrollReveal>

      {/* Highlight chips */}
      <ScrollReveal>
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          <span className="text-sm text-muted-foreground font-medium mr-2">Lo que más mencionan:</span>
          {HIGHLIGHT_CHIPS.map((chip) => (
            <span key={chip} className="trust-chip">{chip}</span>
          ))}
        </div>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-6">
        {REVIEWS.map((review, i) => (
          <ScrollReveal key={review.name} delay={i * 0.1}>
            <div className="review-card h-full flex flex-col">
              {/* Header */}
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/15 text-primary flex items-center justify-center font-semibold text-sm flex-shrink-0">
                  {review.name[0]}
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">{review.name}</p>
                  {review.badge && (
                    <span className="text-xs text-primary font-medium">{review.badge}</span>
                  )}
                  <p className="text-xs text-muted-foreground mt-0.5">{review.stayInfo}</p>
                </div>
              </div>

              {/* Stars */}
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: review.rating }).map((_, j) => (
                  <Star key={j} size={14} className="fill-accent text-accent" />
                ))}
              </div>

              {/* Quote */}
              <div className="flex-1 relative">
                <Quote size={20} className="text-primary/15 absolute -top-1 -left-1" />
                <p className="text-sm text-muted-foreground leading-relaxed pl-5">
                  {review.snippet}
                </p>
              </div>

              {/* Highlight tags */}
              <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-border/50">
                {review.highlights.map((h) => (
                  <span key={h} className="px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                    {h}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default Reviews;
