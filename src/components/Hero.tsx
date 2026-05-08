import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative flex min-h-[90vh] items-center justify-center py-20 md:py-32">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Benvenuto nel mio portfolio
          </p>
          <h1 className="text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl">
            Mario Rossi
          </h1>
          <p className="mt-6 text-xl leading-relaxed text-muted-foreground md:text-2xl">
            Sviluppatore &amp; Designer con passione per creare esperienze
            digitali che fanno la differenza.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <a href="#contact">
              <Button size="lg">Contattami</Button>
            </a>
            <a href="#about">
              <Button size="lg" variant="outline">Scopri di più</Button>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground transition-colors hover:text-foreground"
        aria-label="Scorri in basso"
      >
        <ArrowDown className="h-6 w-6" />
      </a>
    </section>
  );
}
