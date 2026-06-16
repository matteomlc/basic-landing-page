import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Award, GraduationCap, Mic } from "lucide-react";

const educationItems = [
  {
    icon: GraduationCap,
    degree: "Laurea Triennale in Informatica",
    institution: "Università degli Studi di Torino",
    period: "Conseguita",
    description:
      "Algoritmi, ingegneria del software, basi di dati, sistemi operativi. Periodo di studio all'estero in Erasmus.",
  },
  {
    icon: Award,
    degree: "Prompt Design in Vertex AI",
    institution: "Google — Skill Badge",
    period: "Ottobre 2025",
    description:
      "Certificazione Google sull'uso di Vertex AI: progettazione di prompt efficaci, integrazione con applicazioni reali e best practice per LLM in produzione.",
  },
  {
    icon: Mic,
    degree: "PS1 — Public Speaking",
    institution: "Percorso formativo",
    period: "2025",
    description:
      "Corso di public speaking: gestione del pubblico, struttura del messaggio, comunicazione efficace in contesti tecnici e divulgativi.",
  },
];

export function Education() {
  return (
    <section id="education" className="py-24 md:py-32">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            Formazione
          </h2>
          <Separator className="mx-auto mt-6 w-16" />
          <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
            Studi, certificazioni e percorsi formativi che continuano a
            costruire le competenze su cui lavoro ogni giorno.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {educationItems.map((item) => (
            <Card
              key={item.degree}
              className="transition-shadow hover:shadow-lg"
            >
              <CardContent className="p-6 md:p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{item.degree}</h3>
                <p className="mt-1 text-sm font-medium text-primary">
                  {item.institution}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {item.period}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
