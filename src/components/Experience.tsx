import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Senior Developer",
    company: "Azienda Tech",
    period: "2022 – Presente",
    description:
      "Guido il team di sviluppo frontend nella creazione di applicazioni web enterprise. Responsabile dell'architettura tecnica e delle code review.",
    tags: ["React", "TypeScript", "Node.js"],
  },
  {
    role: "Full-Stack Developer",
    company: "Startup Innovativa",
    period: "2019 – 2022",
    description:
      "Sviluppo end-to-end di prodotti digitali, dalla progettazione del database alla UI. Gestione di progetti agile e collaborazione con team di design.",
    tags: ["Vue.js", "Python", "PostgreSQL"],
  },
  {
    role: "Junior Developer",
    company: "Web Agency",
    period: "2017 – 2019",
    description:
      "Realizzazione di siti web e applicazioni per clienti di diversi settori. Primo contatto con metodologie agili e sviluppo in team.",
    tags: ["JavaScript", "PHP", "WordPress"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="bg-muted/40 py-24 md:py-32">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            Esperienze
          </h2>
          <Separator className="mx-auto mt-6 w-16" />
          <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
            Il mio percorso professionale attraverso ruoli che mi hanno formato e
            sfide che mi hanno fatto crescere.
          </p>
        </div>

        <div className="mt-16 space-y-6">
          {experiences.map((exp) => (
            <Card
              key={exp.role + exp.company}
              className="overflow-hidden transition-shadow hover:shadow-lg"
            >
              <CardContent className="p-6 md:p-8">
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                      <Briefcase className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{exp.role}</h3>
                      <p className="text-muted-foreground">{exp.company}</p>
                    </div>
                  </div>
                  <span className="text-sm font-medium text-muted-foreground md:text-right">
                    {exp.period}
                  </span>
                </div>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  {exp.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
