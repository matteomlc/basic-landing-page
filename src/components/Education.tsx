import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { GraduationCap } from "lucide-react";

const educationItems = [
  {
    degree: "Laurea Magistrale in Informatica",
    institution: "Università degli Studi di Milano",
    period: "2015 – 2017",
    description:
      "Specializzazione in Ingegneria del Software e Sistemi Distribuiti. Tesi sull'ottimizzazione di architetture microservizi.",
  },
  {
    degree: "Laurea Triennale in Informatica",
    institution: "Università degli Studi di Milano",
    period: "2012 – 2015",
    description:
      "Solide basi in algoritmi, strutture dati, programmazione e reti. Progetto finale su applicazioni web real-time.",
  },
  {
    degree: "Diploma di Maturità Scientifica",
    institution: "Liceo Scientifico A. Volta",
    period: "2007 – 2012",
    description:
      "Formazione scientifica con approfondimento in matematica e fisica. Partecipazione a olimpiadi di informatica.",
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
            Il percorso accademico che ha costruito le fondamenta delle mie
            competenze.
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
                  <GraduationCap className="h-6 w-6 text-primary" />
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
