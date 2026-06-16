import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "AI Engineer — Banca MPS",
    company: "IRISCUBE Reply",
    period: "Da luglio 2026",
    description:
      "Lavoro al 100% con l'IA per Banca Monte dei Paschi di Siena. Sviluppo di un plugin per il porting di un framework interno della banca su una nuova architettura basata su LLM.",
    tags: ["AI", "LLM", "Plugin", "Banking"],
  },
  {
    role: "Java Software Engineer — Intesa Sanpaolo",
    company: "IRISCUBE Reply",
    period: "Gennaio 2026 – Giugno 2026",
    description:
      "Progetto sul rilascio di linee di credito: analisi delle user story e sviluppo backend in Java/Spring, integrazione con PostgreSQL e gestione del flusso in metodologia Scrum.",
    tags: ["Java", "Spring", "SQL", "PostgreSQL", "Jira", "Scrum"],
  },
  {
    role: "Java Software Engineer — Assicura & Spring AI",
    company: "IRISCUBE Reply",
    period: "Marzo 2025 – Gennaio 2026",
    description:
      "Sviluppo e supporto sul progetto Assicura (Java/Spring, MongoDB, PostgreSQL, Docker). In parallelo, agente conversazionale Spring AI che legge polizze in PDF e risponde in modo contestualizzato via RAG.",
    tags: ["Java", "Spring", "Spring AI", "RAG", "MongoDB", "PostgreSQL", "Docker"],
  },
  {
    role: "System Administrator",
    company: "Internet Service Provider — Torino",
    period: "Settembre 2018 – Settembre 2021",
    description:
      "Consolidamento e mantenimento dell'infrastruttura ICT (VMware, Hyper-V), servizi hosting e help desk su sistemi Windows/macOS, email, cloud, FTP, VirtualHost.",
    tags: ["VMware", "Hyper-V", "Windows", "macOS", "Hosting", "Help desk"],
  },
  {
    role: "Programmer",
    company: "Freelance",
    period: "Aprile 2017 – Settembre 2018",
    description:
      "Sviluppo end-to-end di applicazioni mobile in Xamarin/C# e applicazioni web in Angular e Node.js, sia frontend che backend.",
    tags: ["Xamarin", "C#", "Angular", "Node.js"],
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
